import Image from 'next/image';
import logoIcon from '/public/logo/logo.svg';
import { ROOT_URL } from '@/utils/constant/url';

export const Logo = () => {
  return (
    <div className="logo-wrapper">
      <a href={ROOT_URL}>
        <Image src={logoIcon} alt="logo" />
      </a>
    </div>
  );
};
