'use client';

import { NavDialog } from '../nav-dialog';
import { ThemeSwitch } from '../theme-switch';

export function RightCTAGroup() {
  return (
    <div className="flex flex-row gap-6 items-center">
      <div className="md:hidden">
        <NavDialog />
      </div>
      <div className="h-8 flex items-center">
        <ThemeSwitch />
      </div>
    </div>
  );
}
