import { NavBar } from '@/components/shared/navbar';
import type { Metadata } from 'next';
import './global.css';

import { Source_Serif_4, Geist } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import { Footer } from '@/components/shared/footer';

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
    <div className="root-layout text-foreground source-serif-4-regular space-y-18">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
