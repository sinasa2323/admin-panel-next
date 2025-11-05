import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import AppShell from '@/ui/AppShell';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Car Admin Panel',
  description: 'Visual admin panel demo (Next.js + MUI)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
