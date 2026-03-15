'use client';

import { NavDialog } from '../nav-dialog';
import { ThemeSwitch } from '../theme-switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RightCTAGroup() {
  return (
    <div className="flex flex-row gap-6 items-center">
      <div className="md:hidden">
        <NavDialog />
      </div>
      <div className="h-8 flex items-center">
        <ThemeSwitch />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>Duong Phan</AvatarFallback>
      </Avatar>
    </div>
  );
}
