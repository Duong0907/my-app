import Image from 'next/image';
import { Logo } from './component/logo';
import { NavBarItem } from './component/navbar-item';
import { RightCTAGroup } from './component/right-cta-group';
import { ABOUT_URL, BLOG_URL, CONTACT_URL, ROOT_URL } from '@/utils/constant/url';

import menuIcon from '../../../../public/icons/menu.svg';

export const NavBar = () => {
  return (
    <nav className="nav-bar w-full flex flex-col items-center border-b border-[#ccc] lg:bg-[#ccc]">
      <div className="nav-bar-wrapper flex flex-row w-full max-w-[1000px] justify-between items-center px-[32px] ">
        <Logo />

        <ul className="list-none flex flex-row">
          <NavBarItem title="Home" url={ROOT_URL} />
          <NavBarItem title="About" url={ABOUT_URL} />
          <NavBarItem title="Contact" url={CONTACT_URL} />
          <NavBarItem title="Blog" url={BLOG_URL} />
        </ul>

        <div className="xl:hidden">
          <Image src={menuIcon} alt="menu" />
        </div>

        <RightCTAGroup isAuthenticated={true} />
      </div>
    </nav>
  );
};
