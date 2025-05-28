import Image from 'next/image';
import { Instagram, Mail, Phone } from 'lucide-react';
import ClientButton from '@/components/common/ClientButton';

const PHONE_NUMBER = '01066712025';
const NAVER_RESERVATION = 'https://naver.me/G8s2RBNb';
const NAVER_MAP = 'https://map.naver.com/p/entry/place/1958470967';
const KAKAO_CHANNEL = 'http://pf.kakao.com/_Snvxls ';

export default async function Home() {
  const buttons = [
    { icon: <Phone size={16} color="#707070" />, href: `tel:${PHONE_NUMBER}` },
    { icon: <Mail size={16} color="#707070" />, href: `sms:${PHONE_NUMBER}` },
    {
      icon: <Instagram size={16} color="#707070" />,
      href: 'https://www.instagram.com/nail_rabia__',
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-center">
      <Image
        src="/rabia_1.jpg"
        width={90}
        height={90}
        style={{ borderRadius: '50%' }}
        alt="home"
      />

      <div className="flex flex-col items-center text-center gap-3">
        <p className="text-foreground">
          <strong>˚✧₊⁎ 𝑵𝒂𝒊𝒍𝑹𝒂𝒃𝒊𝒂 ⁎⁺˳✧༚</strong>
        </p>
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '-0.8px',
            fontWeight: '400',
          }}
        >
          ᰔ 첫방문 젤 20% 할인∙4인 동시시술 가능
        </p>
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '-0.8px',
            fontWeight: '400',
          }}
        >
          ᰔ 베이스 리페어 & 오버레이 서비스
        </p>
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '-0.8px',
            fontWeight: '400',
          }}
        >
          ᰔ 𝑜𝑝𝑒𝑛 10:00 𝑐𝑙𝑜𝑠𝑒 20:00
        </p>
        <p
          style={{
            fontSize: '13px',
            letterSpacing: '-0.8px',
            fontWeight: '400',
          }}
        >
          ᰔ 충남 천안시 서북구 두정동 1167
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

      <ClientButton link={NAVER_RESERVATION}>네이버 예약</ClientButton>
      <ClientButton link={KAKAO_CHANNEL}>카카오톡 문의</ClientButton>
      <ClientButton link={NAVER_MAP}>오시는 길</ClientButton>
    </div>
  );
}
