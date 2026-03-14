'use client';

import { Switch } from '@/components/ui/switch';
import { Icon } from '@/components/ui/icon';
import { NavDialog } from '../nav-dialog';

type RightCTAGroupProps = {
  isAuthenticated: Boolean;
};

const AccountButtonGroup = () => {
  return 'acocunt button';
};

export function RightCTAGroup({ isAuthenticated = false }: RightCTAGroupProps) {
  if (!isAuthenticated) {
    return <AccountButtonGroup />;
  }

  return (
    <div className="flex flex-row gap-6 items-center">
      <div className="md:hidden">
        <NavDialog />
      </div>
      <div className="h-8 flex items-center">
        <Switch
          size="xl"
          iconOn={<Icon size="sm" variant="filled" name="dark_mode" />}
          iconOff={<Icon size="sm" name="light_mode" />}
          className="data-checked:bg-chart-4"
        />
      </div>
    </div>
  );
}
