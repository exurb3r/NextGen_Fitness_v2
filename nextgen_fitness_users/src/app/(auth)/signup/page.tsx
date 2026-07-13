"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Alert,
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
} from "@mui/material";


export default function SignupPage() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{ color: "primary.main" }}
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
              Create your account
            </Typography>
          </Box>

          {error && <Alert severity="error">{error}</Alert>}

          <Stack spacing={2.5}>
            <TextField
              label="Username"
              fullWidth
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username: e.target.value,
                })
              }
            />

            <TextField
              label="Email"
              fullWidth
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <TextField
              label="Confirm Password"
              type="password"
              fullWidth
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({
                  ...form,
                  confirmPassword: e.target.value,
                })
              }
            />

            <Button
              variant="contained"
              size="large"
              disabled={loading}
              sx={{
                height: 48,
              }}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Stack>

          <Typography
            variant="bodySmall"
            sx={{
              textAlign: "center",
              color: "text.secondary",
            }}
          >
            Already have an account?{" "}
            <Link
              href="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 600,
              }}
            >
              Sign In
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
}