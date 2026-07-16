"use client";

import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import IosShareIcon from "@mui/icons-material/IosShare";
import DownloadIcon from "@mui/icons-material/Download";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

// iOS Safari doesn't type `MSStream` on window — this narrows without an `any` cast.
type WindowWithMSStream = Window & { MSStream?: unknown };

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    const ua = window.navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) && (window as WindowWithMSStream).MSStream == null);

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async (): Promise<void> => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  if (isInstalled || dismissed) {
    return null;
  }

  if (isIOS) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 1.5,
          borderRadius: 2.5,
          bgcolor: "accentSecondary",
          border: "1px solid",
          borderColor: "border",
        }}
      >
        <IosShareIcon fontSize="small" sx={{ color: "primary.main" }} />
        <Typography variant="bodySmall" sx={{ color: "text.secondary", flex: 1 }}>
          Tap <strong>Share</strong>, then <strong>Add to Home Screen</strong>
        </Typography>
        <IconButton size="small" onClick={() => setDismissed(true)} aria-label="Dismiss">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    );
  }

  if (!deferredPrompt) {
    return null;
  }

  return (
    <Button
      onClick={() => void handleInstallClick()}
      variant="contained"
      startIcon={<DownloadIcon />}
      sx={{
        backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
        color: "primary.contrastText",
        px: 3,
        py: 1,
        boxShadow: "none",
        "&:hover": {
          backgroundImage: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
          opacity: 0.92,
          boxShadow: "none",
        },
      }}
    >
      Install App
    </Button>
  );
}