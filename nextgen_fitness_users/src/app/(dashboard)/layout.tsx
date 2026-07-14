"use client";

import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import Sidebar from "@/shared/SideNavBar/SideNav";
import {
  DRAWER_WIDTH_COLLAPSED,
  DRAWER_TRANSITION_MS,
} from "@/shared/SideNavBar/constants/constants.sideNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [showBurger, setShowBurger] = useState(true);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (mobileOpen) {
      // Hide immediately — no reason to delay this direction, it just
      // avoids the burger and the drawer's own close button overlapping.
      setShowBurger(false);
      return;
    }

    // Closing: wait for the drawer to finish sliding out before the
    // burger reappears, so it doesn't insta-spawn under the animation.
    const timeout = setTimeout(() => {
      setShowBurger(true);
    }, DRAWER_TRANSITION_MS);

    return () => clearTimeout(timeout);
  }, [mobileOpen]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {!isDesktop && (
        <IconButton
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: (theme) => theme.zIndex.drawer + 2,
            bgcolor: "background.paper",
            border: "1px solid",
            borderColor: "border",
            boxShadow: "0 4px 14px -4px rgba(0,0,0,0.15)",
            opacity: showBurger ? 1 : 0,
            pointerEvents: showBurger ? "auto" : "none",
            transition: `opacity ${DRAWER_TRANSITION_MS}ms ease`,
            "&:hover": {
              bgcolor: "surfaceHover",
            },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>
      )}

      <Sidebar isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${DRAWER_WIDTH_COLLAPSED}px)` },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}