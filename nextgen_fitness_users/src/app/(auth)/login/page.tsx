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
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          bgcolor: "background.paper",
        }}
      >
        <Stack spacing={4}>
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "primary.main",
              }}
            >
              NextGen Fitness
            </Typography>

            <Typography
              variant="bodySmall"
              sx={{
                color: "text.secondary",
                mt: 1,
              }}
            >
              Fitness Tracking System
            </Typography>
          </Box>

          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h2">
              Welcome Back
            </Typography>

            <Typography
              variant="bodySmall"
              sx={{
                color: "text.secondary",
                mt: 1,
              }}
            >
              Sign in to continue.
            </Typography>
          </Box>

          {error && <Alert severity="error">{error}</Alert>}

          <Box component="form" onSubmit={handleLogin}>
            <Stack spacing={2.5}>
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
                  mt: 1,
                }}
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
            </Stack>
          </Box>

          <Typography
            variant="bodySmall"
            sx={{
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Don't have an account?{" "}
            <Link
              href="/signup"
              style={{
                color: "inherit",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
}