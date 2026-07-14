"use client";

import Image from "next/image";
import { useColorMode } from "../../app/providers";
import logoLight from "@/assets/logos/blacklogo.png"; // light mode logo
import logoDark from "@/assets/logos/whitelogo.png";  // dark mode logo

interface GymLogoProps {
  width?: number;
  height?: number;
  alt?: string;
}

export function GymLogo({ width, height, alt = "Logo" }: GymLogoProps) {
  const { mode } = useColorMode();

  return (
    <Image
      src={mode === "light" ? logoLight : logoDark}
      alt={alt}
      width={width}
      height={height}
      priority
    />
  );
}