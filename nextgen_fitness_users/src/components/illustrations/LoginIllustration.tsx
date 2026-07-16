"use client";

import Box, { type BoxProps } from "@mui/material/Box";

import loginPicture from "@/assets/backgrounds/loginBig.svg";

export type LoginIllustrationProps = {
  width?: number | string;
} & Omit<BoxProps, "children">;


export function LoginIllustration({ width = 220, sx, ...boxProps }: LoginIllustrationProps) {
  return (
    <Box
      component="img"
      src={loginPicture.src}
      alt=""
      role="presentation"
      aria-hidden
      sx={{ width, height: "auto", display: "block", mx: "auto", ...sx }}
      {...boxProps}
    />
  );
}