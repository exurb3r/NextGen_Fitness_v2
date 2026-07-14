import type { Metadata, Viewport} from "next";
import { Providers } from "../providers";
import { Inter, Poppins } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { GymLogo } from "@/shared/MainIcon/MainIcon";
import logo from "@/assets/icons/gymlogo.png"
import "../globals.css";

import {
  Box,
  Container,
  Typography,
} from "@mui/material";


import { ThemeToggle } from "@/shared/Buttons/ThemeToggle";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen Fitness WebApp",
  description: "Gym Management System",
  icons: {
    icon: logo.src,
  },
};

export const viewport: Viewport = {
  themeColor: "#d97706",
  width: "device-width",
  initialScale: 1,
};


const bodyFont = Inter({ variable: "--font-body", subsets: ["latin"] });
const displayFont = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box className={`${bodyFont.variable} ${displayFont.variable}`}>
      <Box>
        <Providers>
          <Box
            component="header"
            sx={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              bgcolor: "primary.main",
              borderBottom: "1px solid",
              borderColor: "border",
              pt: "env(safe-area-inset-top)",
            }}
          >
            <Container maxWidth="lg">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: 64,
                }}
              >
                  <Box 
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                  >
                    <GymLogo
                      width={50}
                      height={50}
                    />
                    <Typography
                      variant="h3"
                      sx={{ color: "accent", letterSpacing: "-0.01em" }}
                    >
                      NextGen
                      <Box component="span" sx={{ color: "text.primary" }}>
                        Fitness
                      </Box>
                    </Typography>
                  </Box>
                <ThemeToggle />
              </Box>
            </Container>
          </Box>

          {children}
        </Providers>
      </Box>
    </Box>
  );
}
