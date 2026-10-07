import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/siteData';

export default function CallButton({
  variant = 'large',
  className = '',
  label,
}: {
  variant?: 'large' | 'medium' | 'small' | 'sticky';
  className?: string;
  label?: string;
}) {
  const text = label || `Call ${BUSINESS.phone}`;
  const base =
    'inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-secondary-950 font-bold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0';

  const sizes = {
    large: 'px-8 py-4 text-lg',
    medium: 'px-6 py-3 text-base',
    small: 'px-4 py-2 text-sm',
    sticky:
      'fixed bottom-4 right-4 left-4 sm:left-auto sm:bottom-6 sm:right-6 px-6 py-4 text-lg z-50 shadow-2xl animate-pulse-yellow sm:w-auto',
  };

  return (
    <a
      href={`tel:${BUSINESS.phoneRaw}`}
      className={`${base} ${sizes[variant]} ${className}`}
      aria-label={`Call It's Lit Electrical ATL LLC at ${BUSINESS.phone}`}
    >
      <Phone className={variant === 'large' ? 'w-5 h-5' : 'w-4 h-4'} />
      {text}
    </a>
  );
}
