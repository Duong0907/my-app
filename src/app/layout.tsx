import { NavBar } from '@/components/shared/navbar';
import type { Metadata } from 'next';
import './global.css';

import { Source_Serif_4, Geist } from 'next/font/google';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const sourceSerif4 = Source_Serif_4({
  weight: '400',
});

export const metadata: Metadata = {
  title: "Duong' website",
  description: 'This page is created by Duong',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="root-layout text-[#1A1A1A] source-serif-4-regular">
      <NavBar />
      {children}
    </div>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="icon" href="logo/small-logo.svg" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={sourceSerif4.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
