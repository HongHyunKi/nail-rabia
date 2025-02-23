import type { Metadata } from 'next';
import Image from 'next/image';
import { Phone, Mail, Instagram } from 'lucide-react';
import ClientButton from '@/components/common/ClientButton';

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  const buttons = [
    { icon: <Phone size={16} color="#707070" />, href: 'tel:+821066712025' },
    { icon: <Mail size={16} color="#707070" />, href: 'sms:+821012345678' },
    {
      icon: <Instagram size={16} color="#707070" />,
      href: 'https://instagram.com/example',
    },
  ];

  const handleLinkClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/about';
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src="/rabia_1.jpg"
        width={90}
        height={90}
        style={{ borderRadius: '50%' }}
        alt="home"
      />

      <div className="flex flex-col gap-1 items-center text-center gap-3">
        <p>
          <strong>네일라비아</strong>
        </p>
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '-0.8px',
            fontWeight: '400',
            color: '#27262A',
          }}
        >
          💅 첫방문 20% 할인∙4인 동시시술 가능∙주차가능
          <br />
          #두정동네일 #천안네일 #성정동네일
        </p>
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '-0.8px',
            fontWeight: '400',
            color: '#27262A',
          }}
        >
          ⏰ Open 10:00 ~ Close 20:00
          <br />
          📌충남 천안시 서북구 두정상가1길 6 1층 네일라비아
        </p>
      </div>

      <div className="flex gap-2">
        {buttons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            {btn.icon}
          </a>
        ))}
      </div>

      <ClientButton className="w-full h-12 bg-amber-400 rounded-2xl">
        네이버 예약
      </ClientButton>
      <ClientButton className="w-full h-12 bg-amber-400 rounded-2xl">
        카카오톡 문의
      </ClientButton>
      <ClientButton className="w-full h-12 bg-amber-400 rounded-2xl">
        오시는 길
      </ClientButton>
    </div>
  );
}
