"use client";

import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Card,
} from "@mui/material";

import { ThemeToggle } from "../shared/Buttons/ThemeToggle";
import { useRouter } from 'next/navigation';

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import { GymLogo } from "@/shared/MainIcon/MainIcon";

import background from "../../public/images/backgrounds/gymbackground.png";
import NavButton from "../shared/Buttons/NavButton";

const FEATURES = [
  {
    icon: TrendingUpRoundedIcon,
    title: "Track every session",
    body: "Log workouts, monitor progress, and see your training history in one place — no spreadsheets, no guesswork.",
  },
  {
    icon: EmojiEventsRoundedIcon,
    title: "Level up as you train",
    body: "Streaks, badges, and milestones turn consistency into something you can actually see building up.",
  },
  {
    icon: GroupsRoundedIcon,
    title: "Train with your gym",
    body: "Compare progress with friends, join challenges, and stay part of what's happening on the floor.",
  },
];

const STEPS = [
  { n: "1", label: "Whitelist your account", body: "To whitelist your account, visit any Armstrong Gym and request account whitelisting." },
  { n: "2", label: "Sign up", body: "Create your member profile in under a minute using the whitelisted account you have provided." },
  { n: "3", label: "Set your goal", body: "Pick what you're training for — we'll track it." },
  { n: "4", label: "Show up", body: "Log sessions, build a streak, watch it add up." },
];


const STREAK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const STREAK_FILLED = 4;

export default function Home() {
  const router = useRouter();
  return (
    <Box
      sx={{
        minHeight: "100dvh",
        bgcolor: "background.default",
      }}
    >
      {/* ---------- Header ---------- */}
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

            <Box>
              <NavButton route="/login" className="!h-10 !px-6 !text-sm !shadow-none">
                Log in
              </NavButton>
              <ThemeToggle/>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ---------- Hero ---------- */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 5, md: 8 },
            pt: { xs: 6, md: 10 },
            pb: { xs: 8, md: 12 },
          }}
        >
          {/* Left: copy */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Chip
              label="Built for members and admins, together"
              sx={{
                bgcolor: "accentSecondary",
                color: "primary.dark",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: "0.8125rem",
                height: 30,
                mb: 3,
              }}
            />
            <br/>

            <Typography
              variant="display"
              sx={{
                color: "text.primary",
                fontSize: { xs: "2.5rem", md: "3.25rem" },
                lineHeight: { xs: 1.15, md: 1.1 },
              }}
            >
              Train harder.
              <br />
              Track everything.
              <br />
              <Box component="span" sx={{ color: "primary.main" }}>
                Level up together.
              </Box>
            </Typography>
            <br/>
            <Typography
              variant="body"
              sx={{ color: "text.secondary", maxWidth: 440, mt: 3, mb: 4 }}
            >
              NextGen Fitness brings your gym membership, training log, and
              community into one app — so showing up starts to feel like
              progress.
            </Typography>

            <Box sx={{ display: "flex", gap: 1.5, marginTop: "20px" }}>
              <Button
                variant="contained"
                size="large"
                disableElevation
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ height: 48, px: 3.5 }}
              >
                Get started
              </Button>
            </Box>

            {/* Signature: streak strip */}
            <Card
              elevation={0}
              sx={{
                p: 2.5,
                mt: 5,
                maxWidth: 420,
                bgcolor: "surfaceElevated",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  mb: 1.5,
                }}
              >
                <Typography variant="label" sx={{ color: "text.primary" }}>
                  This week
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "primary.main", fontWeight: 600 }}
                >
                  {STREAK_FILLED}-day streak
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1 }}>
                {STREAK_DAYS.map((day, i) => {
                  const filled = i < STREAK_FILLED;
                  return (
                    <Box
                      key={day + i}
                      sx={{
                        flex: 1,
                        aspectRatio: "1 / 1",
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: filled ? "primary.main" : "transparent",
                        border: filled ? "none" : "1.5px solid",
                        borderColor: "border",
                        opacity: 0,
                        animation: "streakIn 0.4s ease-out forwards",
                        animationDelay: `${i * 0.06}s`,
                        "@keyframes streakIn": {
                          from: { opacity: 0, transform: "scale(0.8)" },
                          to: { opacity: 1, transform: "scale(1)" },
                        },
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          color: filled ? "primary.contrastText" : "text.disabled",
                          fontWeight: 600,
                        }}
                      >
                        {day}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Card>
          </Box>

          {/* Right: photo */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: { xs: "4 / 3", md: "1 / 1" },
                borderRadius: 5,
                overflow: "hidden",
                boxShadow: "0 20px 48px -16px rgb(124 58 237 / 0.22)",
              }}
            >
              <Image
                src={background}
                alt="Members training at the gym"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(20,17,30,0) 55%, rgba(20,17,30,0.35) 100%)",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* ---------- How it works ---------- */}
      <Box sx={{ bgcolor: "accentSecondary", py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{ color: "text.primary", mb: { xs: 4, md: 5 } }}
          >
            How it works
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 4, md: 5 },
            }}
          >
            {STEPS.map((step) => (
              <Box key={step.n} sx={{ display: "flex", gap: 2 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    color: "primary.contrastText",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography variant="label" sx={{ color: "inherit" }}>
                    {step.n}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h3" sx={{ color: "text.primary" }}>
                    {step.label}
                  </Typography>
                  <Typography variant="bodySmall" sx={{ color: "text.secondary" }}>
                    {step.body}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ---------- Features ---------- */}
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 7, md: 9 } }}>
          <Typography
            variant="h2"
            sx={{ color: "text.primary", mb: { xs: 4, md: 5 } }}
          >
            Everything your training needs
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <Card key={title} elevation={0} sx={{ p: 3, height: "100%" }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 3,
                    bgcolor: "accent",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <Icon sx={{ color: "primary.dark", fontSize: 22 }} />
                </Box>
                <Typography variant="h3" sx={{ color: "text.primary", mb: 0.5 }}>
                  {title}
                </Typography>
                <Typography variant="bodySmall" sx={{ color: "text.secondary" }}>
                  {body}
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Container>

      {/* ---------- Final CTA ---------- */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)",
          py: { xs: 7, md: 9 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box>
              <Typography variant="h2" sx={{ color: "primary.contrastText", mb: 1 }}>
                Your first streak starts today
              </Typography>
              <Typography variant="body" sx={{ color: "#EDE7FE", maxWidth: 420 }}>
                Join NextGen Fitness and turn your training log into
                something worth checking every day.
              </Typography>
            </Box>
            <Button
              variant="contained"
              size="large"
              disableElevation
              onClick={() => router.push("/signup")}
              endIcon={<ArrowForwardRoundedIcon />}
              sx={{
                height: 48,
                px: 3.5,
                flexShrink: 0,
                bgcolor: "background.paper",
                color: "primary.main",
                "&:hover": { bgcolor: "accentSecondary" },
              }}
            >
              Create your account
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ---------- Footer ---------- */}
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: 1,
            py: 4,
            pb: "calc(env(safe-area-inset-bottom) + 24px)",
          }}
        >
          <Typography variant="caption" sx={{ color: "text.disabled" }}>
            NextGen Fitness — an undergraduate capstone project.
          </Typography>
          <Typography variant="caption" sx={{ color: "text.disabled" }}>
            © {new Date().getFullYear()} NextGen Fitness. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}