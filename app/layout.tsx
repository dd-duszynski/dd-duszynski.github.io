import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/main.scss';
import '../styles/reset.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Damian Duszyński',
  description: 'Software Engineer portfolio and personal website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
