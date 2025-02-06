import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from '@/components/navbar';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false
});

export const metadata: Metadata = {
  title: 'UI Components Hub',
  description: 'A modern collection of beautiful UI components',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}