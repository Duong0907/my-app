import { Logo } from './component/logo';
import { NavBarItem } from './component/navbar-item';
import { RightCTAGroup } from './component/right-cta-group';
import { ABOUT_URL, BLOG_URL, CONTACT_URL, ROOT_URL } from '@/utils/constant/url';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';

export function NavBar() {
  return (
    <nav className="nav-bar w-full flex flex-col items-center border-b border-border">
      <div className="nav-bar-wrapper flex flex-row w-full max-w-[1000px] justify-between items-center px-8">
        <Logo />

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavBarItem href={ROOT_URL} title="Home"></NavBarItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavBarItem href={ABOUT_URL} title="About"></NavBarItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavBarItem href={CONTACT_URL} title="Contact"></NavBarItem>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavBarItem href={BLOG_URL} title="Blog"></NavBarItem>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <RightCTAGroup isAuthenticated={true} />
      </div>
    </nav>
  );
}
