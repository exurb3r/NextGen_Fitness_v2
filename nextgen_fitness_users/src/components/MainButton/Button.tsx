"use client"

import React, { Children } from 'react';
import {
  Button
} from "@mui/material";
import { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';

interface MyButtonProps {
  children: ReactNode;
}


function MyButton({
 children,
}:MyButtonProps) {
    const theme = useTheme()

  return (
    <Button sx={{
        background: "blue",
        color: "white"
    }}>
        {children}
    </Button>
  )
}

export default MyButton;