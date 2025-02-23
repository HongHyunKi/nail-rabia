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
      className="w-full h-12 bg-amber-400 rounded-2xl hover:bg-amber-500"
      onClick={() => window.open(link, '_blank', 'noopener,noreferrer')}
    >
      {children}
    </Button>
  );
}
