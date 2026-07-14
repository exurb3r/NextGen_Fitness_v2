"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import illustration from "@/assets/backgrounds/underConstruction.svg";

export default function UnderConstruction() {
  const router = useRouter();

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: (theme) => theme.palette.gradient.subtle,
      }}
    >
      {/* Center Background Illustration */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
          pointerEvents: "none",
          opacity: { xs: 0.55, md: 0.65 }
        }}
      >
        <Box
          sx={{
            width: {
              xs: "90%",
              sm: "75%",
              md: "55%",
              lg: "45%",
            },
            maxWidth: 700,
          }}
        >
          <Image
            src={illustration}
            alt=""
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          px: 3,
          maxWidth: 700,
        }}
      >
        <ConstructionRoundedIcon
          sx={{
            fontSize: 72,
            color: "primary.main",
            mb: 2,
          }}
        />

        <Typography
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "3.5rem",
              md: "4.5rem",
            },
            fontWeight: 800,
            lineHeight: 1.1,
            background: (theme) => theme.palette.gradient.primary,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Under Construction
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: 3,
            fontWeight: 600,
          }}
        >
          We're building something better.
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 2,
            mb: 5,
            maxWidth: 520,
            mx: "auto",
            fontSize: {
              xs: "0.95rem",
              md: "1.05rem",
            },
          }}
        >
          This page is currently being developed and will be available soon.
          Thank you for your patience while we put the finishing touches on it.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            onClick={() => router.back()}
          >
            Go Back
          </Button>

          <Button
            variant="outlined"
            onClick={() => router.push("/home")}
          >
            Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}