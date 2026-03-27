import { SectionHeader } from '@/components/shared/section-header';
import { useTranslations } from 'next-intl';

export default function BlogPage() {
  const t = useTranslations('blog');

  return (
    <>
      <SectionHeader title={t('title')} description={t('description')}></SectionHeader>
    </>
  );
}
