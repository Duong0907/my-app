import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavBarItem } from '../navbar-item';
import { ABOUT_URL, BLOG_URL, CONTACT_URL, ROOT_URL } from '@/utils/constant/url';

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Logo } from '../logo';
import { useState } from 'react';

export function NavDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <Drawer direction="top" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Icon name="menu" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <Logo onClick={closeDrawer} />
          </DrawerTitle>
        </DrawerHeader>
        <NavigationMenu orientation="vertical" className="max-w-none">
          <NavigationMenuList aria-orientation="vertical" className="flex-col">
            <NavigationMenuItem onClick={closeDrawer}>
              <NavBarItem href={ROOT_URL} title="Home"></NavBarItem>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={closeDrawer}>
              <NavBarItem href={ABOUT_URL} title="About"></NavBarItem>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={closeDrawer}>
              <NavBarItem href={CONTACT_URL} title="Contact"></NavBarItem>
            </NavigationMenuItem>
            <NavigationMenuItem onClick={closeDrawer}>
              <NavBarItem href={BLOG_URL} title="Blog"></NavBarItem>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </DrawerContent>
    </Drawer>
  );
}
