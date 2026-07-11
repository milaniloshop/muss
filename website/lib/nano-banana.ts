import { createHash } from 'crypto';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import sharp from 'sharp';
import { GoogleGenAI } from '@google/genai';
import type {
  GenerateImageRequest,
  GenerateImageResponse,
  ImageAspectRatio,
  ImageSize,
} from '@/types';

const CACHE_DIR = path.join(process.cwd(), 'public', 'cache', 'generated');
const META_PATH = path.join(process.cwd(), 'data', 'generated-images.json');

const SIZE_MAP: Record<ImageSize, number> = {
  '512': 512,
  '1K': 1024,
  '2K': 2048,
  '4K': 4096,
};

type CacheMeta = Record<
  string,
  {
    url: string;
    prompt: string;
    size: ImageSize;
    aspectRatio: ImageAspectRatio;
    transparent: boolean;
    createdAt: string;
    productId?: string;
    slot?: string;
  }
>;

function ensureDirs() {
  if (!existsSync(CACHE_DIR)) mkdirSync(CACHE_DIR, { recursive: true });
  const dataDir = path.dirname(META_PATH);
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
  if (!existsSync(META_PATH)) writeFileSync(META_PATH, '{}', 'utf8');
}

function loadMeta(): CacheMeta {
  ensureDirs();
  try {
    return JSON.parse(readFileSync(META_PATH, 'utf8')) as CacheMeta;
  } catch {
    return {};
  }
}

function saveMeta(meta: CacheMeta) {
  ensureDirs();
  writeFileSync(META_PATH, JSON.stringify(meta, null, 2), 'utf8');
}

function cacheKey(input: GenerateImageRequest) {
  const payload = JSON.stringify({
    prompt: input.prompt.trim(),
    size: input.size ?? '1K',
    aspectRatio: input.aspectRatio ?? '3:4',
    transparent: Boolean(input.transparent),
    productId: input.productId ?? null,
    slot: input.slot ?? null,
  });
  return createHash('sha256').update(payload).digest('hex').slice(0, 24);
}

function getClient() {
  const apiKey = process.env.NANO_BANANA_API_KEY || process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(
      'Missing NANO_BANANA_API_KEY (or GEMINI_API_KEY). Add it to environment variables.',
    );
  }
  return new GoogleGenAI({ apiKey });
}

function buildPrompt(input: GenerateImageRequest) {
  const base = input.prompt.trim();
  const quality =
    'Premium luxury fitness brand photography, cinematic lighting, charcoal and silver palette, subtle blue rim light, high-end editorial, photorealistic, Apple/Nike/Tesla level production quality, men\'s compression apparel.';
  const transparent = input.transparent
    ? 'Isolate the product on a fully transparent background. Clean edges. No shadow floor. PNG-ready cutout.'
    : 'Lifestyle or studio composition with depth, soft reflections, and atmosphere.';
  return `${base}\n\n${quality}\n${transparent}`;
}

async function optimizeImage(
  buffer: Buffer,
  size: ImageSize,
  transparent: boolean,
): Promise<{ buffer: Buffer; mimeType: string; width: number; height: number }> {
  const maxEdge = SIZE_MAP[size] ?? 1024;
  const pipeline = sharp(buffer).rotate().resize({
    width: maxEdge,
    height: maxEdge,
    fit: 'inside',
    withoutEnlargement: true,
  });

  if (transparent) {
    const out = await pipeline.png({ compressionLevel: 9, quality: 90 }).toBuffer({
      resolveWithObject: true,
    });
    return {
      buffer: out.data,
      mimeType: 'image/png',
      width: out.info.width,
      height: out.info.height,
    };
  }

  const out = await pipeline.webp({ quality: 82, effort: 4 }).toBuffer({
    resolveWithObject: true,
  });
  return {
    buffer: out.data,
    mimeType: 'image/webp',
    width: out.info.width,
    height: out.info.height,
  };
}

/**
 * Nano Banana (Gemini native image generation) service.
 * Models: gemini-2.5-flash-image (Nano Banana) / gemini-3.1-flash-image (Nano Banana 2)
 */
export async function generateImage(
  input: GenerateImageRequest,
): Promise<GenerateImageResponse> {
  ensureDirs();
  const size = input.size ?? '1K';
  const aspectRatio = input.aspectRatio ?? '3:4';
  const transparent = Boolean(input.transparent);
  const key = cacheKey({ ...input, size, aspectRatio, transparent });
  const meta = loadMeta();

  if (!input.forceRegenerate && meta[key]) {
    const cachedPath = path.join(process.cwd(), 'public', meta[key].url.replace(/^\//, ''));
    if (existsSync(cachedPath)) {
      return {
        ok: true,
        url: meta[key].url,
        cached: true,
        mimeType: transparent ? 'image/png' : 'image/webp',
      };
    }
  }

  const model =
    process.env.NANO_BANANA_MODEL ||
    process.env.GEMINI_IMAGE_MODEL ||
    'gemini-2.5-flash-image';

  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model,
      contents: buildPrompt(input),
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
        imageConfig: {
          aspectRatio,
          imageSize: size === '512' ? '1K' : size,
        },
      },
    });

    const parts = response.candidates?.[0]?.content?.parts ?? [];
    let imageBytes: Buffer | null = null;
    let sourceMime = 'image/png';

    for (const part of parts) {
      if (part.inlineData?.data) {
        imageBytes = Buffer.from(part.inlineData.data, 'base64');
        sourceMime = part.inlineData.mimeType || 'image/png';
        break;
      }
    }

    if (!imageBytes) {
      const text = parts
        .map((p) => p.text)
        .filter(Boolean)
        .join(' ');
      return {
        ok: false,
        error: text || 'Nano Banana returned no image data. Check model access and prompt.',
      };
    }

    const optimized = await optimizeImage(imageBytes, size, transparent);
    const ext = transparent ? 'png' : 'webp';
    const filename = `${key}.${ext}`;
    const diskPath = path.join(CACHE_DIR, filename);
    writeFileSync(diskPath, optimized.buffer);

    const url = `/cache/generated/${filename}`;
    meta[key] = {
      url,
      prompt: input.prompt.trim(),
      size,
      aspectRatio,
      transparent,
      createdAt: new Date().toISOString(),
      productId: input.productId,
      slot: input.slot,
    };
    saveMeta(meta);

    return {
      ok: true,
      url,
      cached: false,
      mimeType: optimized.mimeType || sourceMime,
      width: optimized.width,
      height: optimized.height,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Image generation failed';
    return { ok: false, error: message };
  }
}

export function listGeneratedImages() {
  const meta = loadMeta();
  return Object.entries(meta)
    .map(([id, value]) => ({ id, ...value }))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export { PREMIUM_PROMPTS } from '@/lib/nano-banana-client';
