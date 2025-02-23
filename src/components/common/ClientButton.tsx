'use client';
import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface ClientButtonProps {
  children: ReactNode;
  link: string;
}

export default function ClientButton({ children, link }: ClientButtonProps) {
  return (
    <Button
      className="w-full h-12 bg-rose-300 rounded-2xl hover:bg-rose-400"
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
    >
      {children}
    </Button>
  );
}
