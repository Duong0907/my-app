import { get, map } from 'lodash';
import { notion } from './notion';
import { Project } from '@/interfaces/project';
import { unstable_cache } from 'next/cache';
import { NOTION_CACHE_REVALIDATE_TIME } from '@/lib/constant';

const NOTION_DATASOURCE_ID = process.env.NOTION_DATASOURCE_ID || '';

const mapProjectEntity = (item: any): Project => {
  const props = get(item, 'properties', {});

  return {
    id: get(item, 'id'),
    name: get(props, 'Name.title[0].plain_text', 'Untitled Project'),
    status: get(props, 'Status.select.name', 'N/A'),
    technologies: get(props, 'Technologies.rich_text[0].plain_text', 'N/A'),
    features: get(props, 'Features.rich_text[0].plain_text', 'N/A'),
    imageUrl: get(props, 'Thumbnail.files[0].file.url'),
  };
};

const getProjectLists = (response: any): Project[] => {
  const results = get(response, 'results', []);

  return map(results, mapProjectEntity);
};

export const getAllProjects = unstable_cache(
  async (): Promise<Project[]> => {
    try {
      const response = await notion.dataSources.query({
        data_source_id: NOTION_DATASOURCE_ID,
        filter: {
          property: 'Status',
          select: { equals: 'Published' },
          type: 'select',
        },
      });

      return getProjectLists(response as any);
    } catch (error) {
      console.error('Error fetching projects from Notion:', error);

      return [];
    }
  },
  ['notion-get-all-projects'],
  {
    revalidate: NOTION_CACHE_REVALIDATE_TIME,
  },
);
