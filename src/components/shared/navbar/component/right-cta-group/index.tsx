'use client';

import { LanguageSwich } from '../language-switch';
import { NavDialog } from '../nav-dialog';
import { ThemeSwitch } from '../theme-switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function RightCTAGroup() {
  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="h-8 flex items-center gap-2">
        <ThemeSwitch />
        <LanguageSwich />
      </div>

      <div className="md:hidden">
        <NavDialog />
      </div>

      <Avatar className="hidden md:block">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>Duong Phan</AvatarFallback>
      </Avatar>
    </div>
  );
}
