import 'react-notion-x/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

import { NotionPageRenderer } from '@/components/shared/notion-renderer';
import { getNotionPage } from '@/services/notion/page';
import { isEmpty } from 'lodash';
import { notFound } from 'next/navigation';

export default async function ArticlePage({ params }: { params: Promise<{ blockId: string }> }) {
  const { blockId } = await params;

  const recordMap = await getNotionPage(blockId);

  if (isEmpty(recordMap)) notFound();

  return <NotionPageRenderer recordMap={recordMap} />;
}
