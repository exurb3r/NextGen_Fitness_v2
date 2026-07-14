"use client";

import Image from "next/image";
import { useColorMode } from "../../app/providers";
import logoLight from "../../../public/images/logos/blacklogo.png"; // light mode logo
import logoDark from "../../../public/images/logos/whitelogo.png";  // dark mode logo

interface GymLogoProps {
  width?: number;
  height?: number;
  alt?: string;
}

export function GymLogo({ width = 50, height = 50, alt = "Logo" }: GymLogoProps) {
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