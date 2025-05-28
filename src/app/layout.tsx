import type { Metadata } from 'next';
import '../assets/css/globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';

export const metadata: Metadata = {
  title: '네일라비아 | 예약 · 문의 · 연락처 안내',
  description:
    '천안 네일라비아에서 간편하게 예약하고, 카카오톡으로 문의하거나 전화로 빠르게 상담받아보세요.',
  keywords: [
    '네일라비아',
    '천안 네일아트',
    '네일샵 예약',
    '카카오톡 문의',
    '네일샵 전화번호',
    '네이버 예약',
  ],
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
