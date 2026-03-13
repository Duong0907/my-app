'use client';

import Image from 'next/image';
import shoppingCartIcon from '../../../../../../public/icons/shopping-cart.svg';
import userIcon from '../../../../../../public/icons/user.svg';
import moonIcon from '../../../../../../public/icons/moon.svg';
import shoppingCartIconWhite from '../../../../../../public/icons/shopping-cart-white.svg';
import userIconWhite from '../../../../../../public/icons/user-white.svg';
import moonIconWhite from '../../../../../../public/icons/moon-white.svg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { MouseEventHandler, useMemo, useState } from 'react';

type RightCTAGroupProps = {
  isAuthenticated: Boolean;
};

type ActionIconProps = {
  icon: StaticImport;
  iconContrast: StaticImport;
  altText: string;
  onClick?: MouseEventHandler;
};

const AccountButtonGroup = () => {
  return 'acocunt button';
};

const ActionIcon = ({ icon, iconContrast, altText, onClick }: ActionIconProps) => {
  const [isHover, setIsHover] = useState<Boolean>(false);

  const actionIcon = useMemo(() => (isHover ? iconContrast : icon), [isHover, iconContrast, icon]);

  return (
    <div
      className="cursor-pointer hover:bg-[#1A1A1A] rounded-full p-[8px] w-[32px] h-[32px]"
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <Image src={actionIcon} alt={altText} />
    </div>
  );
};

export const RightCTAGroup = ({ isAuthenticated = false }: RightCTAGroupProps) => {
  if (!isAuthenticated) {
    return <AccountButtonGroup />;
  }

  return (
    <div className="flex flex-row gap-[8px]">
      <ActionIcon icon={shoppingCartIcon} iconContrast={shoppingCartIconWhite} altText="shopping-cart" />
      <ActionIcon icon={userIcon} iconContrast={userIconWhite} altText="user" />
      <ActionIcon icon={moonIcon} iconContrast={moonIconWhite} altText="user" />
    </div>
  );
};
