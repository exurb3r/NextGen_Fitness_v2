"use client";

import { useRouter } from "next/navigation"
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import illustration from "@/assets/backgrounds/404notFound.svg";

export default function NotFound() {
    const router = useRouter();
    return (
        <Box
        sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "100vh",
            px: { xs: 3, md: 8 },
            overflow: "hidden",
            background: (theme) => theme.palette.gradient.subtle,
        }}
        >
            <Box
            sx={{
                position: "absolute",
                right: { xs: -20, sm: -10, md: 0 },
                bottom: { xs: -20, sm: -10, md: 0 },
                transform: "none",
                width: { xs: "75%", sm: "60%", md: "42%" },
                maxWidth: 480,
                opacity: { xs: 0.9, md: 1 },
                zIndex: 0,
                pointerEvents: "none",
            }}
            >
            <Image
                src={illustration}
                alt=""
                style={{ width: "100%", height: "auto" }}
                priority
            />
            </Box>
            <Box
                sx={{
                position: "relative",
                zIndex: 1,
                textAlign: { xs: "center", md: "left" },
                maxWidth: 480,
                pb: { xs: "45vw", md: 0 },
                }}
            >
                <Typography
                sx={{
                    fontSize: { xs: "4rem", md: "6rem" },
                    fontWeight: 800,
                    lineHeight: 1,
                    background: (theme) => theme.palette.gradient.primary,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
                >
                404
                </Typography>
                <Typography variant="h2" sx={{ mt: 2, mb: 1, fontWeight: 700 }}>
                Page not found
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 4 }}>
                The page you're looking for doesn't exist or may have been moved.
                </Typography>
                <Button 
                onClick ={() => router.back()}
                variant="outlined">
                Return to previous page
                </Button>
            </Box>
        </Box>
    );
}