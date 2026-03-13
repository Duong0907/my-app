'use client';

import classNames from 'classnames';
import { usePathname, useRouter } from 'next/navigation';
import { MouseEventHandler, useCallback, useMemo } from 'react';

export const NavBarItem = ({ title, url }: { title: string; url: string }) => {
  const router = useRouter();

  const pathname: string = usePathname();

  const handleClick: MouseEventHandler = useCallback(() => router.push(url), [router]);

  const isActive: Boolean = useMemo(() => pathname === url, [pathname, url]);

  return (
    <li
      className={classNames('uppercase p-[16px] hover:bg-[#1A1A1A] hover:text-[#fff] cursor-pointer select-none', {
        'text-[#3F51B5]': isActive,
      })}
      onClick={handleClick}
    >
      {title}
    </li>
  );
};
