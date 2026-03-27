'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NotionRenderer } from 'react-notion-x';
import { useCurrentTheme } from '@/custom-hook/use-current-theme';

export function NotionPageRenderer({ recordMap, ...props }: any) {
  const { isDarkTheme } = useCurrentTheme();

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={isDarkTheme}
      {...props}
      components={{
        nextImage: Image,
        nextLink: Link,
      }}
    />
  );
}
