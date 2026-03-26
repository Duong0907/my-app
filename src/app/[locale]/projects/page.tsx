import { ProjectList } from '@/components/shared/project-list';
import { SectionHeader } from '@/components/shared/section-header';
import { getAllProjects } from '@/services/notion/project';
import { getTranslations } from 'next-intl/server';

export default async function ProjectPage() {
  const t = await getTranslations('projects');

  const projects = await getAllProjects();

  return (
    <>
      <SectionHeader>{t('title')}</SectionHeader>
      <ProjectList projects={projects} />
    </>
  );
}
