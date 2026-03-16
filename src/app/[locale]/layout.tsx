import { NavBar } from '@/components/shared/navbar';
import type { Metadata } from 'next';
import './global.css';

import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Source_Serif_4, Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/shared/footer';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const sourceSerif4 = Source_Serif_4({
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Duong Phan',
  description: 'Created by Duong',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root-layout text-foreground source-serif-4-regular space-y-18 px-3">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en" className={cn('font-sans', geist.variable)}>
      <head>
        <link rel="icon" href="logo/small-logo.svg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>

      <body className={sourceSerif4.className}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Layout>{children}</Layout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
