// Import required dependencies
import { TypographyVariantsOptions as MuiTypographyOptions } from "@mui/material/styles";
import React from "react";

// ============================================================================
// Type Declarations
// ============================================================================

// Extend MUI Typography variants with our simplified custom variants
declare module "@mui/material/styles" {
  interface TypographyVariants {
    display: React.CSSProperties;
    h1: React.CSSProperties;
    h2: React.CSSProperties;
    h3: React.CSSProperties;
    body: React.CSSProperties;
    bodySmall: React.CSSProperties;
    label: React.CSSProperties;
    caption: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display?: React.CSSProperties;
    h1?: React.CSSProperties;
    h2?: React.CSSProperties;
    h3?: React.CSSProperties;
    body?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    label?: React.CSSProperties;
    caption?: React.CSSProperties;
  }
}

// Configure which typography variants are available on <Typography variant="...">
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    // Enable our variants
    display: true;
    h1: true;
    h2: true;
    h3: true;
    body: true;
    bodySmall: true;
    label: true;
    caption: true;
    // Disable MUI defaults we're not using, so they can't be picked by mistake
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    overline: false;
  }
}

// ============================================================================
// Font Configuration (Using CSS Variables)
// ============================================================================

// These CSS variables should be defined in layout.tsx via your font loaders
// (next/font, @font-face, etc). Swap the two family names for whatever
// fonts you're actually using.
const font_vars = {
  display: "var(--font-display), sans-serif", // headings / display
  body: "var(--font-body), sans-serif",       // paragraphs, labels, captions
};

// ============================================================================
// Typography System Configuration
// ============================================================================

interface TypographyStyle {
  fontSize: string;
  lineHeight: string;
  fontWeight: 400 | 500 | 600 | 700;
  fontFamily: string;
  letterSpacing?: string;
}

// Every variant your app will actually use — 8 total, rem-based.
const variantStyles: Record<string, TypographyStyle> = {
  display: {
    fontSize: "2.5rem",   // 40px — hero headline, once per page
    lineHeight: "1.2",
    fontWeight: 700,
    fontFamily: font_vars.display,
    letterSpacing: "-0.02em",
  },
  h1: {
    fontSize: "2rem",     // 32px — page title
    lineHeight: "1.25",
    fontWeight: 700,
    fontFamily: font_vars.display,
    letterSpacing: "-0.01em",
  },
  h2: {
    fontSize: "1.5rem",   // 24px — section heading
    lineHeight: "1.3",
    fontWeight: 600,
    fontFamily: font_vars.display,
  },
  h3: {
    fontSize: "1.25rem",  // 20px — sub-heading, card title
    lineHeight: "1.4",
    fontWeight: 600,
    fontFamily: font_vars.display,
  },
  body: {
    fontSize: "1rem",     // 16px — default paragraph text
    lineHeight: "1.5",
    fontWeight: 400,
    fontFamily: font_vars.body,
  },
  bodySmall: {
    fontSize: "0.875rem", // 14px — secondary/supporting text
    lineHeight: "1.5",
    fontWeight: 400,
    fontFamily: font_vars.body,
  },
  label: {
    fontSize: "0.875rem", // 14px — buttons, form labels
    lineHeight: "1.2",
    fontWeight: 500,
    fontFamily: font_vars.body,
  },
  caption: {
    fontSize: "0.75rem",  // 12px — timestamps, helper text, legal
    lineHeight: "1.3",
    fontWeight: 400,
    fontFamily: font_vars.body,
  },
};

export const typography: MuiTypographyOptions = {
  fontFamily: font_vars.body,
  ...variantStyles,
} as MuiTypographyOptions;