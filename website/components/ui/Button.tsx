'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { useRef, type MouseEvent, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: ButtonVariant;
  magnetic?: boolean;
  href?: never;
  children: ReactNode;
};

type AnchorProps = HTMLMotionProps<'a'> & {
  variant?: ButtonVariant;
  magnetic?: boolean;
  href: string;
  children: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-ember text-bone hover:bg-ember-deep focus-visible:ring-ember/50 shadow-[0_0_0_1px_rgba(224,69,26,0.35)]',
  secondary:
    'bg-white/8 text-bone backdrop-blur-md border border-bone/12 hover:bg-white/14 focus-visible:ring-bone/30',
  ghost: 'bg-transparent text-bone hover:bg-white/6 focus-visible:ring-bone/20',
  outline:
    'bg-transparent text-bone border border-bone/30 hover:border-ember hover:text-ember focus-visible:ring-ember/40 rounded-none',
};

function useMagnetic(enabled: boolean) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (e: MouseEvent) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate3d(${x * 0.22}px, ${y * 0.22}px, 0)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate3d(0,0,0)';
  };

  return { ref, onMove, onLeave };
}

export function Button({
  variant = 'primary',
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const { ref, onMove, onLeave } = useMagnetic(magnetic);
  return (
    <motion.button
      ref={ref as never}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-none px-7 py-3.5 text-sm font-medium tracking-[0.14em] uppercase transition-[background,border-color,box-shadow,transform,color] duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function ButtonLink({
  variant = 'primary',
  magnetic = false,
  className,
  children,
  href,
  ...props
}: AnchorProps) {
  const { ref, onMove, onLeave } = useMagnetic(magnetic);
  return (
    <motion.a
      ref={ref as never}
      href={href}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-none px-7 py-3.5 text-sm font-medium tracking-[0.14em] uppercase transition-[background,border-color,box-shadow,transform,color] duration-200 will-change-transform focus-visible:outline-none focus-visible:ring-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.a>
  );
}
