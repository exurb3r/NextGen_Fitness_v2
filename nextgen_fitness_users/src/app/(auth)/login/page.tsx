"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Alert,
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { LoginIllustration } from "@/components/illustrations/LoginIllustration";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    router.push("/home");

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        px: 2,
        py: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        {/* Top illustration — simplistic, sits above the card like a logo/hero
            image would on a mobile login screen. */}
        <Box sx={{ color: "primary.main", mb: 1.5 }}>
          <LoginIllustration width={148} />
        </Box>

        <Card
          elevation={0}
          sx={{
            width: "100%",
            p: { xs: 3, sm: 4 },
            borderRadius: 4,
            bgcolor: "background.paper",
          }}
        >
          <Stack spacing={3}>
            {/* Single header block: brand is now a small eyebrow label instead of
                a second heading, so "Welcome back" is the only thing that reads
                as a title. */}
            <Box sx={{ textAlign: "center" }}>

              <Typography variant="h2" sx={{ mt: 0.5, color: "primary.main",
                  fontWeight: 600,}}>
                Welcome back
              </Typography>

              <Typography variant="bodySmall" sx={{ color: "text.secondary", mt: 0.5 }}>
                Sign in to continue your training.
              </Typography>
            </Box>

            {error && <Alert severity="error">{error}</Alert>}

            <Box component="form" onSubmit={handleLogin}>
              <Stack spacing={2}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    height: 48,
                    mt: 0.5,
                    backgroundImage: (t) => t.palette.gradient.primary,
                    boxShadow: "none",
                    "&:hover": {
                      backgroundImage: (t) => t.palette.gradient.primary,
                      opacity: 0.92,
                      boxShadow: "none",
                    },
                  }}
                >
                  {loading ? "Signing In..." : "Sign In"}
                </Button>
              </Stack>
            </Box>

            <Typography variant="bodySmall" sx={{ textAlign: "center", color: "text.secondary" }}>
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                style={{ color: "inherit", fontWeight: 600, textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </Typography>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}