import Link from 'next/link';
import IconGithub from '@/assets/icon/IconGithub';

export const Footer = () => {
  return (
    <footer className="my-4 flex flex-col items-center justify-center gap-4 text-center print:hidden">
      <div>
        © 2025. <span className="font-semibold">Hyunki</span> all rights
        reserved.
      </div>
    </footer>
  );
};
