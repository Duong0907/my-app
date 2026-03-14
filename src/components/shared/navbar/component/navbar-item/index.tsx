'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export function NavBarItem({ title, href }: { title: string; href: string }) {
  const pathname: string = usePathname();

  const isActive: Boolean = useMemo(() => pathname === href, [pathname, href]);

  console.log(pathname, href, isActive);

  return (
    <Link
      className={classNames(
        'inline-block uppercase p-5 hover:bg-foreground hover:text-background cursor-pointer select-none w-full text-center',
        {
          'text-chart-4': isActive,
        },
      )}
      href={href}
    >
      {title}
    </Link>
  );
}
