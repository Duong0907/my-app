import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu';
import { NavBarItem } from '../navbar-item';
import { ABOUT_URL, BLOG_URL, ROOT_URL } from '@/lib/url';

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { Logo } from '../logo';
import { useState } from 'react';
import { navConfig } from '../../config';
import { map } from 'lodash';

export function NavDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <Drawer direction="top" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <Icon name="menu" className="text-foreground" />
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
            {map(navConfig, (config) => (
              <NavigationMenuItem onClick={closeDrawer}>
                <NavBarItem href={config.url} title={config.title}></NavBarItem>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </DrawerContent>
    </Drawer>
  );
}
