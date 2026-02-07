import type { Metadata } from 'next';
import LanguageProvider from '@/components/providers/LanguageProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'DateCraft - AI-Powered Date Idea Generator',
  description:
    'Generate creative and meaningful date ideas based on mood, budget, and available time.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
