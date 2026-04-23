import { Geist_Mono, Inter } from 'next/font/google';

import { cn } from '@/lib/utils/tw-cn';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        'min-h-screen bg-background text-foreground antialiased',
        fontMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body>{children}</body>
    </html>
  );
}
