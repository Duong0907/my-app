import { ProjectList } from '@/components/shared/project-list';
import { SectionHeader } from '@/components/shared/section-header';
import { getAllProjects } from '@/services/notion/project';
import { getTranslations } from 'next-intl/server';

export default async function ProjectPage() {
  const t = await getTranslations('projects');

  const projects = await getAllProjects();

  return (
    <>
      <SectionHeader title={t('title')} description={t('description')}></SectionHeader>
      <ProjectList projects={projects} />
    </>
  );
}
