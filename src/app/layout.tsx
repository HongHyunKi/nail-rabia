import type { Metadata } from 'next';
import '../assets/css/globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';

export const metadata: Metadata = {
  title: {
    template: '%s | My App',
    default: 'My Project',
  },
  description: 'the best project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="h-full scroll-my-20 scroll-smooth"
      suppressHydrationWarning
    >
      <body className="font-pretendard flex min-h-screen flex-col">
        <ThemeProvider>
          {/*<Header />*/}
          <main className="mt-[64px] flex flex-1 flex-col mx-auto w-full max-w-[320px] p-4">
            {children}
          </main>
          {/*<Footer />*/}
        </ThemeProvider>
      </body>
    </html>
  );
}
