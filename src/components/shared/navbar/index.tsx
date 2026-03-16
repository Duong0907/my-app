import { ABOUT_URL, BLOG_URL, PROJECTS_URL, ROOT_URL } from '@/lib/url';
import { Logo } from './component/logo';
import { NavBarItem } from './component/navbar-item';
import { RightCTAGroup } from './component/right-cta-group';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { map } from 'lodash';
import { useTranslations } from 'next-intl';

export function NavBar() {
  const t = useTranslations('navbar');

  const navConfig = [
    { title: t('home'), url: ROOT_URL },
    { title: t('projects'), url: PROJECTS_URL },
    { title: t('aboutMe'), url: ABOUT_URL },
    { title: t('blog'), url: BLOG_URL },
  ];

  return (
    <nav className="nav-bar w-full flex flex-col items-center border-b border-border">
      <div className="nav-bar-wrapper flex flex-row w-full max-w-[1000px] justify-between items-center px-8 min-h-[57px]">
        <Logo />

        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {map(navConfig, (config, index) => (
                <NavigationMenuItem key={index}>
                  <NavBarItem href={config.url} title={config.title}></NavBarItem>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <RightCTAGroup />
      </div>
    </nav>
  );
}
