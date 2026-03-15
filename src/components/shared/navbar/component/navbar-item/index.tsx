'use client';

import { Typography } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function NavBarItem({ title, href }: { title: string; href: string }) {
  const pathname: string = usePathname();

  const isActive: Boolean = useMemo(() => pathname === href, [pathname, href]);

  return (
    <Link
      className={classNames(
        'group inline-block py-4 px-2 cursor-pointer select-none w-full text-center text-foreground border-b hover:border-foreground',
        {
          'border-b-chart-4!': isActive,
        },
      )}
      href={href}
    >
      <Typography
        variant="body"
        weight="regular"
        className={cn({
          'text-chart-4!': isActive,
        })}
      >
        {title}
      </Typography>
    </Link>
  );
}
