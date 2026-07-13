"use client";

import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import { useColorMode } from "../../app/providers";

export function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      aria-label={
        mode === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
    >
      {mode === "light"
        ? <DarkModeIcon />
        : <LightModeIcon />}
    </IconButton>
  );
}