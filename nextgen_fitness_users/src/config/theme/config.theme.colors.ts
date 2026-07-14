"use client";
import { createTheme } from "@mui/material/styles";

import { typography } from "./config.theme.typography";

/** Treat as prod build for theme (e.g. disable ripple in all environments). */
const isProdBuild = true;

// ============================================================================
// Custom Palette Additions
// ============================================================================

declare module "@mui/material/styles" {
  interface Palette {
    accent: string;
    accentSecondary: string;
    accentTertiary: string;
    surfaceHover: string;
    surfaceElevated: string;
    surfaceSubtle: string;
    surfaceMuted: string;
    border: string;
    borderStrong: string;
    overlay: string;
    // Full purple scale — reach for this whenever accent/accentSecondary
    // aren't specific enough (e.g. "I want a mid-tone purple card bg")
    purple: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    gradient: {
      primary: string;
      subtle: string;
    };
  }
  interface PaletteOptions {
    accent?: string;
    accentSecondary?: string;
    accentTertiary?: string;
    surfaceHover?: string;
    surfaceElevated?: string;
    surfaceSubtle?: string;
    surfaceMuted?: string;
    border?: string;
    borderStrong?: string;
    overlay?: string;
    purple?: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
    gradient?: {
      primary: string;
      subtle: string;
    };
  }
}

// Shared purple scale — same hues, different lightness for light/dark modes
const purpleScaleLight = {
  50: "#FAF8FF",
  100: "#F3F0FF", // == accentSecondary
  200: "#DDD6FE", // == accent
  300: "#C4B5FD",
  400: "#A78BFA", // == primary.light
  500: "#7C3AED", // == primary.main
  600: "#6D28D9", // == primary.dark
  700: "#5B21B6",
  800: "#4C1D95",
  900: "#3B1370",
};

const purpleScaleDark = {
  50: "#3B1370",
  100: "#4C1D95",
  200: "#5B21B6",
  300: "#6D28D9",
  400: "#7C3AED",
  500: "#A78BFA", // == primary.main (dark mode)
  600: "#C4B5FD",
  700: "#DDD6FE",
  800: "#F3F0FF",
  900: "#FAF8FF",
};

// ============================================================================
// Light Theme
// ============================================================================

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7C3AED",
      dark: "#6D28D9",
      light: "#A78BFA",
      contrastText: "#FFFFFF",
    },
    accent: "#DDD6FE",
    accentSecondary: "#F3F0FF",
    accentTertiary: "#C4B5FD", // a third stop for things like badges/tags
    purple: purpleScaleLight,
    background: {
      default: "#FAFAFC",
      paper: "#FFFFFF",
    },
    surfaceHover: "#F8F7FD",
    surfaceElevated: "#FFFFFF",
    surfaceSubtle: "#FCFBFF",  // barely-there tint, good for zebra rows / nested panels
    surfaceMuted: "#EFEDF9",   // one step darker than accentSecondary, for disabled-ish blocks
    border: "#E8E6F5",
    borderStrong: "#D4CFEA",   // for inputs/dividers that need more contrast
    overlay: "rgba(30, 27, 46, 0.5)", // modal backdrops, image overlays
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
    gradient: {
      primary: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
      subtle: "linear-gradient(135deg, #F3F0FF 0%, #FAFAFC 100%)",
    },
  },
  typography,
  shape: {
    borderRadius: 12,
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
          backgroundImage: "none",
        },
      },
    },
    // ---- New: a few common components that tend to need extra color reach ----
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: "#F3F0FF",
          color: "#6D28D9",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D4CFEA",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#1E1B2E",
          fontSize: "0.75rem",
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontWeight: 600,
        },
      },
    },
  },
});

// ============================================================================
// Dark Theme
// ============================================================================

export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: {
      main: "#A78BFA",
      dark: "#8B5CF6",
      light: "#C4B5FD",
      contrastText: "#0F0B1A",
    },
    accent: "#7C3AED",
    accentSecondary: "#211A35",
    accentTertiary: "#34294E",
    purple: purpleScaleDark,
    background: {
      default: "#0F0B1A",
      paper: "#171326",
    },
    surfaceHover: "#2A2142",
    surfaceElevated: "#211A35",
    surfaceSubtle: "#1A1428",
    surfaceMuted: "#2A2142",
    border: "#34294E",
    borderStrong: "#40335F",
    overlay: "rgba(15, 11, 26, 0.7)",
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
    gradient: {
      primary: "linear-gradient(135deg, #A78BFA 0%, #7C3AED 100%)",
      subtle: "linear-gradient(135deg, #211A35 0%, #0F0B1A 100%)",
    },
  },
  components: {
    ...theme.components,
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px -4px rgb(0 0 0 / 0.3)",
          border: "1px solid #34294E",
          backgroundColor: "#211A35",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        colorPrimary: {
          backgroundColor: "#2A2142",
          color: "#C4B5FD",
        },
      },
    },
  },
});