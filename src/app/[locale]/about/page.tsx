import { SectionHeader } from '@/components/shared/section-header';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about-me');

  return (
    <>
      <SectionHeader>{t('title')}</SectionHeader>
    </>
  );
}
