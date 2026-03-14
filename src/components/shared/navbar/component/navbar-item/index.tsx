'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

export const NavBarItem = ({ title, href }: { title: string; href: string }) => {
  const pathname: string = usePathname();

  const isActive: Boolean = useMemo(() => pathname === href, [pathname, href]);

  return (
    <Link
      className={classNames('inline-block uppercase p-4 hover:bg-[#1A1A1A] hover:text-white cursor-pointer select-none', {
        'text-[#3F51B5]': isActive,
      })}
      href={href}
    >
      {title}
    </Link>
  );
};
