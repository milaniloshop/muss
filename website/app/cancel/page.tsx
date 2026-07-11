import { ButtonLink } from '@/components/ui/Button';

export default function CancelPage() {
  return (
    <div className="mx-auto max-w-xl px-5 pb-24 pt-36 text-center md:px-8">
      <h1 className="font-display text-4xl text-white">Checkout canceled</h1>
      <p className="mt-4 text-silver/75">No charge was made. Your bag is still waiting.</p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/collection">Return to collection</ButtonLink>
      </div>
    </div>
  );
}
