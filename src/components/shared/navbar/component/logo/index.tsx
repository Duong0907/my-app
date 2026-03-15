import { Typography } from '@/components/ui/typography';
import { ROOT_URL } from '@/lib/url';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

type LogoProps = { onClick?: MouseEventHandler<HTMLDivElement> };

export function Logo({ onClick }: LogoProps) {
  return (
    <div className="logo-wrapper flex justify-center" onClick={onClick}>
      <Link href={ROOT_URL}>
        <Typography variant="h4" weight="bold">
          DUONG PHAN
        </Typography>
      </Link>
    </div>
  );
}
