"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { GymLogo } from "@/shared/MainIcon/MainIcon";
// Adjust this import to wherever your logo actually lives.
import logo from "../../../public/images/logos/blacklogo.png";
import { NAV_SECTIONS, DRAWER_WIDTH } from "./constants/constants.sideNav";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout?: () => void;
}

export default function Sidebar({ isOpen, onClose, onLogout }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const isLinkActive = (path: string) =>
    path === "/dashboard" ? pathname === path : pathname?.startsWith(path);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "background.paper",
      }}
    >
      {/* Brand — now sitting on a soft purple gradient instead of flat white */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 2.5,
          background: (theme) => theme.palette.gradient.subtle,
          borderBottom: "1px solid",
          borderColor: "border",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 2.5,
            background: (theme) => theme.palette.gradient.primary,
            boxShadow: "0 4px 12px -2px rgb(124 58 237 / 0.35)",
            flexShrink: 0,
          }}
        >
        <GymLogo
          width={42}
          height={42}
        />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: 700,
              lineHeight: 1.2,
              background: (theme) => theme.palette.gradient.primary,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Armzstrong
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Fitness Tracker
          </Typography>
        </Box>
      </Box>

      {/* Nav */}
      <Box sx={{ flex: 1, overflowY: "auto", py: 1 }}>
        {NAV_SECTIONS.map((section) => (
          <Box key={section.label} sx={{ mb: 0.5 }}>
            <Typography
              variant="caption"
              sx={{
                display: "block",
                px: 2.5,
                pt: 2,
                pb: 0.75,
                letterSpacing: "1px",
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: "0.6875rem",
                color: "purple.400",
              }}
            >
              {section.label}
            </Typography>
            <List disablePadding sx={{ px: 1.5 }}>
              {section.links.map((link) => {
                const active = isLinkActive(link.path);
                return (
                  <ListItemButton
                    key={link.path}
                    selected={active}
                    onClick={() => {
                      router.push(link.path);
                      if (!isDesktop) onClose();
                    }}
                    sx={{
                      position: "relative",
                      borderRadius: 2,
                      mb: 0.25,
                      py: 1,
                      color: active ? "primary.main" : "text.secondary",
                      transition: "background-color 0.15s ease, color 0.15s ease",
                      "&:hover": {
                        bgcolor: "surfaceHover",
                        color: "primary.main",
                      },
                      "&.Mui-selected": {
                        bgcolor: "accentSecondary",
                        fontWeight: 600,
                        "&:hover": { bgcolor: "accentSecondary" },
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: -6,
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: 4,
                          height: 20,
                          borderRadius: 4,
                          background: (theme) => theme.palette.gradient.primary,
                        },
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 36,
                        color: active ? "primary.main" : "inherit",
                      }}
                    >
                      <link.icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={link.label}
                      slotProps={{
                        primary: {
                          sx: { fontSize: 14, fontWeight: active ? 600 : 500 },
                        },
                      }}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
        ))}
      </Box>

      {/* Logout — only rendered if the parent wires up onLogout */}
      {onLogout && (
        <>
          <Divider sx={{ borderColor: "border" }} />
          <Box sx={{ p: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              startIcon={<LogoutOutlinedIcon />}
              onClick={onLogout}
              sx={{
                justifyContent: "flex-start",
                px: 1.5,
                borderColor: "border",
                "&:hover": {
                  borderColor: "error.main",
                  bgcolor: "error.main",
                  color: "error.contrastText",
                },
              }}
            >
              Log Out
            </Button>
          </Box>
        </>
      )}
    </Box>
  );

  return (
    <Drawer
      variant={isDesktop ? "permanent" : "temporary"}
      open={isDesktop ? true : isOpen}
      onClose={onClose}
      ModalProps={{ keepMounted: true }} // better mobile open perf
      sx={{
        width: isDesktop ? DRAWER_WIDTH : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          border: "none",
          borderRight: isDesktop ? "1px solid" : "none",
          borderColor: "border",
          boxShadow: isDesktop ? "none" : "0 0 24px rgba(0,0,0,0.12)",
        },
      }}
    >
      {content}
    </Drawer>
  );
}