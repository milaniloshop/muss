import { NextResponse } from 'next/server';
import { generateImage, listGeneratedImages } from '@/lib/nano-banana';
import type { GenerateImageRequest } from '@/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ images: listGeneratedImages() });
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as GenerateImageRequest;
    if (!body?.prompt || typeof body.prompt !== 'string' || body.prompt.trim().length < 8) {
      return NextResponse.json(
        { ok: false, error: 'Prompt must be at least 8 characters.' },
        { status: 400 },
      );
    }

    const result = await generateImage(body);
    return NextResponse.json(result, { status: result.ok ? 200 : 502 });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : 'Generation failed',
      },
      { status: 500 },
    );
  }
}
