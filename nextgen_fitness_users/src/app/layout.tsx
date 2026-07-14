import type { Metadata, Viewport} from "next";
import { Providers } from "./providers";
import { Inter, Poppins } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import logo from "@/assets/icons/gymlogo.png"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextGen Fitness",
  description: "Gym Management System",
  icons: {
    icon: logo.src,
    apple: logo.src,
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
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>
        <AppRouterCacheProvider>        
          <Providers>
            {children}
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
