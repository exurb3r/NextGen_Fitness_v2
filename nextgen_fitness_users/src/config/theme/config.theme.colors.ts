"use client";
import { createTheme } from "@mui/material/styles";

import { typography } from "./config.theme.typography";

/** Treat as prod build for theme (e.g. disable ripple in all environments). */
const isProdBuild = true;

// ============================================================================
// Custom Palette Additions
// ============================================================================
// MUI's built-in palette already covers: primary/secondary/success/warning/
// error/info (each with main/light/dark/contrastText), background
// (default/paper), text (primary/secondary/disabled), and divider.
// These are the only genuinely custom tokens from the spec.

declare module "@mui/material/styles" {
  interface Palette {
    accent: string;
    accentSecondary: string;
    surfaceHover: string;
    border: string;
    surfaceElevated: string;
  }
  interface PaletteOptions {
    accent?: string;
    accentSecondary?: string;
    surfaceHover?: string;
    border?: string;
    surfaceElevated?: string;
  }
}

// ============================================================================
// Light Theme
// ============================================================================

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED",
      dark: "#6D28D9", // hover state
      light: "#A78BFA",
      contrastText: "#FFFFFF",
    },
    accent: "#DDD6FE",
    accentSecondary: "#F3F0FF",
    background: {
      default: "#FAFAFC",
      paper: "#FFFFFF",
    },
    surfaceHover: "#F8F7FD",
    surfaceElevated: "#FFFFFF",
    border: "#E8E6F5",
    divider: "#ECEAF8",
    text: {
      primary: "#1E1B2E",
      secondary: "#6B6880",
      disabled: "#AAA7B8",
    },
    success: { main: "#22C55E" },
    warning: { main: "#F59E0B" },
    error: { main: "#EF4444" },
    info: { main: "#3B82F6" },
  },
  typography,
  shape: {
    borderRadius: 12, // soft, premium feel — generous rounding throughout
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiCheckbox: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiRadio: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: !isProdBuild,
        disableTouchRipple: !isProdBuild,
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px -4px rgb(124 58 237 / 0.08)",
          border: "1px solid #E8E6F5",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none", // avoid MUI's default elevation overlay tint
        },
      },
    },
  },
});

// ============================================================================
// Dark Theme
// ============================================================================
// Deep violet-gray instead of pure black — matches the "luxurious, not flat
// black" direction from the spec.

export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: {
      main: "#A78BFA",
      dark: "#8B5CF6", // hover state
      light: "#C4B5FD",
      contrastText: "#0F0B1A",
    },
    accent: "#7C3AED",
    accentSecondary: "#211A35",
    background: {
      default: "#0F0B1A",
      paper: "#171326",
    },
    surfaceHover: "#2A2142",
    surfaceElevated: "#211A35",
    border: "#34294E",
    divider: "#40335F",
    text: {
      primary: "#F8F7FF",
      secondary: "#C7C2D8",
      disabled: "#8A849E",
    },
    success: { main: "#4ADE80" },
    warning: { main: "#FBBF24" },
    error: { main: "#F87171" },
    info: { main: "#60A5FA" },
  },
  components: {
    ...theme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px -4px rgb(0 0 0 / 0.3)",
          border: "1px solid #34294E",
          backgroundColor: "#211A35", // surfaceElevated
        },
      },
    },
  },
});