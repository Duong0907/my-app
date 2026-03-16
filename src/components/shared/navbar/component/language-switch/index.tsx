'use client';

import { Switch } from '@/components/ui/switch';
import { usePathname, useRouter } from '@/i18n/routing';
import { DEFAULT_LOCALE, LOCALE } from './constant';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useTransition } from 'react';

export function LanguageSwich() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChangeLocale = (value: Boolean) => {
    startTransition(() => {
      const nextLocale = value ? LOCALE.VI : LOCALE.EN;
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Switch
      checked={locale !== DEFAULT_LOCALE}
      onCheckedChange={handleChangeLocale}
      size="xl"
      iconOn={<Image src="/icons/vietnam.svg" width={24} height={24} alt="Vietnamese" />}
      iconOff={<Image src="/icons/england.svg" width={24} height={24} alt="England" />}
      className="data-checked:bg-chart-4"
      disabled={isPending}
    />
  );
}
