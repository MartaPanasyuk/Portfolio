import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import clsx from 'clsx';

import FireFliesBackground from '../components/FireFliesBackground/FireFliesBackground';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background text-foreground')}>
        {children}
        <FireFliesBackground />
      </body>
    </html>
  );
}
