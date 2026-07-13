"use client";

import { createContext, useContext, useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme, darkTheme } from "../config/theme/config.theme.colors";
import useThemeStore from "../store/theme/store.useTheme";

type ColorMode = "light" | "dark";

interface ColorModeContextValue {
  mode: ColorMode;
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | null>(null);

export function useColorMode() {
  const ctx = useContext(ColorModeContext);

  if (!ctx) {
    throw new Error("useColorMode must be used inside <Providers>");
  }

  return ctx;
}

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = useThemeStore((state) => state.mode);
  const toggleColorMode = useThemeStore(
    (state) => state.toggleTheme
  );

  const activeTheme = useMemo(
    () => (mode === "light" ? theme : darkTheme),
    [mode]
  );

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        toggleColorMode,
      }}
    >
      <ThemeProvider theme={activeTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}