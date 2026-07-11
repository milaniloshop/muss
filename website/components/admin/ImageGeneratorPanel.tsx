'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { PREMIUM_PROMPTS } from '@/lib/nano-banana-client';
import type { GenerateImageResponse, ImageAspectRatio, ImageSize } from '@/types';

const SIZES: ImageSize[] = ['512', '1K', '2K', '4K'];
const RATIOS: ImageAspectRatio[] = ['1:1', '3:4', '4:5', '16:9', '9:16'];

export function ImageGeneratorPanel() {
  const [prompt, setPrompt] = useState<string>(PREMIUM_PROMPTS.lifestyleHero);
  const [size, setSize] = useState<ImageSize>('1K');
  const [aspectRatio, setAspectRatio] = useState<ImageAspectRatio>('3:4');
  const [transparent, setTransparent] = useState(false);
  const [productId, setProductId] = useState('corefit-pro');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerateImageResponse | null>(null);
  const [history, setHistory] = useState<
    { url: string; prompt: string; cached?: boolean }[]
  >([]);

  const generate = async (forceRegenerate = false) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          size,
          aspectRatio,
          transparent,
          productId,
          forceRegenerate,
        }),
      });
      const data = (await res.json()) as GenerateImageResponse;
      setResult(data);
      if (data.ok && data.url) {
        setHistory((prev) => [{ url: data.url!, prompt, cached: data.cached }, ...prev].slice(0, 12));
      }
    } catch (err) {
      setResult({
        ok: false,
        error: err instanceof Error ? err.message : 'Request failed',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
        <div>
          <label className="text-xs uppercase tracking-[0.16em] text-silver/60">Prompt</label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={5}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-blue-glow/50"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {Object.entries(PREMIUM_PROMPTS).map(([key, value]) => (
            <button
              key={key}
              type="button"
              onClick={() => setPrompt(value)}
              className="rounded-full border border-white/12 px-3 py-1.5 text-xs text-silver hover:border-white/30 hover:text-white"
            >
              {key}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs uppercase tracking-[0.16em] text-silver/60">Size</label>
            <select
              value={size}
              onChange={(e) => setSize(e.target.value as ImageSize)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white"
            >
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.16em] text-silver/60">Aspect</label>
            <select
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value as ImageAspectRatio)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white"
            >
              {RATIOS.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-silver">
            <input
              type="checkbox"
              checked={transparent}
              onChange={(e) => setTransparent(e.target.checked)}
            />
            Transparent product cutout
          </label>
          <select
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            className="rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white"
          >
            <option value="corefit-essential">Essential</option>
            <option value="corefit-pro">Pro</option>
            <option value="corefit-elite">Elite</option>
            <option value="corefit-signature">Signature</option>
          </select>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button disabled={loading} onClick={() => generate(false)}>
            {loading ? 'Generating…' : 'Generate with Nano Banana'}
          </Button>
          <Button variant="outline" disabled={loading} onClick={() => generate(true)}>
            Force regenerate
          </Button>
        </div>

        {result && !result.ok && (
          <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {result.error}
          </p>
        )}
        {result?.ok && (
          <p className="text-sm text-silver/70">
            {result.cached ? 'Served from cache' : 'Newly generated'} · {result.mimeType}{' '}
            {result.width && result.height ? `· ${result.width}×${result.height}` : ''}
          </p>
        )}
      </div>

      <div className="space-y-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(45deg,#111_25%,transparent_25%),linear-gradient(-45deg,#111_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#111_75%),linear-gradient(-45deg,transparent_75%,#111_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0] bg-charcoal">
          {result?.ok && result.url ? (
            <Image src={result.url} alt="Generated" fill className="object-contain" sizes="400px" unoptimized />
          ) : (
            <div className="flex h-full items-center justify-center p-8 text-center text-sm text-silver/50">
              Generated lifestyle and product imagery appears here.
            </div>
          )}
        </div>
        {history.length > 0 && (
          <div className="grid grid-cols-4 gap-2">
            {history.map((item) => (
              <button
                key={item.url + item.prompt.slice(0, 12)}
                type="button"
                className="relative aspect-square overflow-hidden rounded-xl border border-white/10"
                onClick={() => setResult({ ok: true, url: item.url, cached: item.cached })}
              >
                <Image src={item.url} alt="" fill className="object-cover" sizes="80px" unoptimized />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
