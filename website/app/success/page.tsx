import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-xl px-5 pb-24 pt-36 text-center md:px-8">
      <h1 className="font-display text-4xl text-white">You&apos;re in.</h1>
      <p className="mt-4 text-silver/75">
        Payment confirmed. A receipt is on its way. Discreet packaging ships within 24 hours.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <ButtonLink href="/collection">Continue shopping</ButtonLink>
        <Link href="/" className="rounded-full border border-white/20 px-6 py-3 text-sm text-silver">
          Home
        </Link>
      </div>
    </div>
  );
}
