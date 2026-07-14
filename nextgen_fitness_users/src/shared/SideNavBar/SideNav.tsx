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
      {/* Brand */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          px: 2,
          py: 2.5,
          borderBottom: "1px solid",
          borderColor: "border",
        }}
      >
        <Image
          src={logo}
          alt="Armzstrong Logo"
          width={34}
          height={34}
          style={{ borderRadius: 8, objectFit: "contain" }}
        />
        <Box>
          <Typography sx={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.2 }}>
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
                fontWeight: 600,
                color: "text.secondary",
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
                      borderRadius: 2,
                      mb: 0.25,
                      py: 1,
                      color: active ? "primary.main" : "text.secondary",
                      "&:hover": { bgcolor: "surfaceHover" },
                      "&.Mui-selected": {
                        bgcolor: "accentSecondary",
                        "&:hover": { bgcolor: "accentSecondary" },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: "inherit" }}>
                      <link.icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={link.label}
                      slotProps={{ primary: { sx: { fontSize: 14, fontWeight: 500 } } }}
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
              sx={{ justifyContent: "flex-start", px: 1.5 }}
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
        },
      }}
    >
      {content}
    </Drawer>
  );
}