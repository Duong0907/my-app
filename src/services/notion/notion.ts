import { Client } from '@notionhq/client';

// Singleton pattern for notion client
const globalForNotion = globalThis as unknown as { notion: Client };

export const notion: Client =
  globalForNotion.notion ||
  new Client({
    auth: process.env.NOTION_TOKEN,
  });

// Hot reload in non-pro environment
if (process.env.NODE_ENV !== 'production') {
  globalForNotion.notion = notion;
}
