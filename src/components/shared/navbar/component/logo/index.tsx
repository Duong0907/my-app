import Image from 'next/image';
import logoIcon from '/public/logo/logo.svg';
import { ROOT_URL } from '@/utils/constant/url';
import Link from 'next/link';
import { EventHandler, MouseEventHandler } from 'react';

type LogoProps = { onClick?: MouseEventHandler<HTMLDivElement> };

export function Logo({ onClick }: LogoProps) {
  return (
    <div className="logo-wrapper flex justify-center" onClick={onClick}>
      <Link href={ROOT_URL}>
        <Image src={logoIcon} alt="logo" />
      </Link>
    </div>
  );
}
