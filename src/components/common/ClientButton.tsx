'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function ClientButton({ children, link }) {
  const router = useRouter();

  return (
    <Button
      className="w-full h-12 bg-amber-400 rounded-2xl"
      onClick={() => router.push(link)}
    >
      {children}
    </Button>
  );
}
