import type { Metadata } from 'next';
import '../assets/css/globals.css';
import { ThemeProvider } from '@/components/theme/theme-provider';

const SITE_TITLE = '네일라비아 | 천안 네일아트 예약 · 문의';
const SITE_DESCRIPTION =
  '천안 두정동 네일샵 네일라비아 | 첫방문 젤네일 20% 할인, 4인 동시시술 가능 | 네이버 예약 · 카카오톡 문의 | 영업시간 10:00-20:00';
const SITE_OG_DESCRIPTION =
  '천안 두정동 네일샵 네일라비아 | 첫방문 젤네일 20% 할인, 4인 동시시술 가능 | 네이버 예약 · 카카오톡 문의';
const SITE_IMAGE = '/rabia_2.jpeg';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    '네일라비아',
    '천안 네일아트',
    '천안 네일샵',
    '두정동 네일',
    '네일샵 예약',
    '젤네일 할인',
    '카카오톡 문의',
    '네이버 예약',
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    images: [SITE_IMAGE],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_OG_DESCRIPTION,
    images: [SITE_IMAGE],
  },
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
          <main className="mt-[64px] flex flex-1 flex-col mx-auto w-full max-w-[320px] p-4">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
