'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface NavButtonProps {
  route: string;
  children: ReactNode;
  className?: string;
}

export default function NavButton({
  route,
  children,
  className,
}: NavButtonProps) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Button
      onClick={() => router.push(route)}
      variant='outlined'
      className={className}
      sx={{
        borderRadius: "25px",
        border: 'none',
        color: "accent",
        bgcolor: "theme.backgroundcolor.default",  
      }}
    >
      {children}
    </Button>
  );
}