import { cn } from '@/lib/utils';

const ICON_NAMES = ['menu', 'bedtime', 'dark_mode', 'light_mode'] as const;

type IconProps = {
  name: (typeof ICON_NAMES)[number];
  variant?: 'default' | 'filled';
  className?: string;
  size?: 'default' | 'sm';
};

export function Icon({ name, size = 'default', variant = 'default', className }: IconProps) {
  return (
    <span
      className={cn('material-symbols-outlined', className, {
        'icon-filled': variant === 'filled',
        'text-sm!': size === 'sm',
      })}
    >
      {name}
    </span>
  );
}
