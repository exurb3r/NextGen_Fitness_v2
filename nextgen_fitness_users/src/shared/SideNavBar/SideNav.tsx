"use client";

import { useState } from "react";
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
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import logo from "@/assets/icons/johnpork.jpg";
import {
  NAV_SECTIONS,
  DRAWER_WIDTH,
  DRAWER_WIDTH_COLLAPSED,
  DRAWER_TRANSITION_MS,
} from "./constants/constants.sideNav";

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
  const [expanded, setExpanded] = useState(false);

  const showLabels = isDesktop ? expanded : true;
  const currentWidth = isDesktop
    ? expanded
      ? DRAWER_WIDTH
      : DRAWER_WIDTH_COLLAPSED
    : DRAWER_WIDTH;

  const isLinkActive = (path: string) =>
    path === "/dashboard" ? pathname === path : pathname?.startsWith(path);

  const content = (
    <Box
      onMouseEnter={() => isDesktop && setExpanded(true)}
      onMouseLeave={() => isDesktop && setExpanded(false)}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        bgcolor: "background.paper",
        overflow: "hidden",
      }}
    >
      {/* Brand */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: showLabels ? 2 : 0,
          py: 2.5,
          justifyContent: showLabels ? "flex-start" : "center",
          background: (theme) => theme.palette.gradient.subtle,
          borderBottom: "1px solid",
          borderColor: "border",
          transition: `padding ${DRAWER_TRANSITION_MS}ms ease`,
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
          <Image
            src={logo}
            alt="Armzstrong Logo"
            width={32}
            height={32}
            style={{ borderRadius: 25, objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            opacity: showLabels ? 1 : 0,
            width: showLabels ? "auto" : 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            transition: `opacity ${DRAWER_TRANSITION_MS}ms ease`,
          }}
        >
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
            John Pork
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            johnporky@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Nav */}
      <Box
        sx={{
          flex: 1,
          overflowY: showLabels ? "auto" : "hidden",
          overflowX: "hidden",
          py: 1,
          direction: "rtl",
          "& > *": {
            direction: "ltr",
          },
          "&::-webkit-scrollbar": {
            width: 4,
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "purple.200",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "purple.300",
          },
          scrollbarWidth: "thin",
          scrollbarColor: (theme) =>
            `${theme.palette.purple[200]} transparent`,
        }}
      >
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
                whiteSpace: "nowrap",
                opacity: showLabels ? 1 : 0,
                transition: `opacity ${DRAWER_TRANSITION_MS}ms ease`,
              }}
            >
              {showLabels ? section.label : "•"}
            </Typography>
            <List disablePadding sx={{ px: 1.5 }}>
              {section.links.map((link) => {
                const active = isLinkActive(link.path);
                const item = (
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
                      minHeight: 44,
                      justifyContent: showLabels ? "flex-start" : "center",
                      color: active ? "primary.main" : "text.secondary",
                      transition: `background-color ${DRAWER_TRANSITION_MS}ms ease, color ${DRAWER_TRANSITION_MS}ms ease`,
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
                        minWidth: showLabels ? 36 : "auto",
                        color: active ? "primary.main" : "inherit",
                        justifyContent: "center",
                      }}
                    >
                      <link.icon fontSize="small" />
                    </ListItemIcon>
                    {showLabels && (
                      <ListItemText
                        primary={link.label}
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: 14,
                              fontWeight: active ? 600 : 500,
                              whiteSpace: "nowrap",
                            },
                          },
                        }}
                      />
                    )}
                  </ListItemButton>
                );

                return showLabels ? (
                  item
                ) : (
                  <Tooltip key={link.path} title={link.label} placement="right">
                    {item}
                  </Tooltip>
                );
              })}
            </List>
          </Box>
        ))}
      </Box>

      {/* Logout */}
      {onLogout && (
        <>
          <Divider sx={{ borderColor: "border" }} />
          <Box sx={{ p: 1.5 }}>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              startIcon={showLabels ? <LogoutOutlinedIcon /> : undefined}
              onClick={onLogout}
              sx={{
                justifyContent: showLabels ? "flex-start" : "center",
                px: 1.5,
                minWidth: 0,
                borderColor: "border",
                "&:hover": {
                  borderColor: "error.main",
                  bgcolor: "error.main",
                  color: "error.contrastText",
                },
              }}
            >
              {showLabels ? "Log Out" : <LogoutOutlinedIcon fontSize="small" />}
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
      ModalProps={{ keepMounted: true }}
      sx={{
        width: isDesktop ? DRAWER_WIDTH_COLLAPSED : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: currentWidth,
          boxSizing: "border-box",
          border: "none",
          borderRight: isDesktop ? "1px solid" : "none",
          borderColor: "border",
          boxShadow: isDesktop
            ? expanded
              ? "0 8px 30px -6px rgba(0,0,0,0.18)"
              : "none"
            : "0 0 24px rgba(0,0,0,0.12)",
          transition: `width ${DRAWER_TRANSITION_MS}ms ease, box-shadow ${DRAWER_TRANSITION_MS}ms ease`,
          zIndex: (theme) => theme.zIndex.drawer + (expanded ? 1 : 0),
        },
      }}
    >
      {content}
    </Drawer>
  );
}