import { Footer } from '@/components/footer/footer';
import { Navbar } from '@/components/navbar/navbar';
import { Sidebar } from '@/components/sidebar/sidebar';
import { AppProvider } from '@/context/context';
import type { Metadata } from 'next';
import { Gloria_Hallelujah, Roboto_Mono } from 'next/font/google';
import '../styles/main.scss';
import '../styles/reset.scss';
import styles from './layout.module.scss';

const robotoMonoFont = Roboto_Mono({
  style: ['normal', 'italic'],
  weight: ['300', '500'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

const gloriaHallelujahFont = Gloria_Hallelujah({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-gloria-hallelujah',
});

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
    <html
      className={`${robotoMonoFont.variable} ${gloriaHallelujahFont.variable}`}
      lang='en'
    >
      <body>
        <AppProvider lang={'EN'}>
          <main className={styles.layout}>
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
            <div id='modal' />
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
