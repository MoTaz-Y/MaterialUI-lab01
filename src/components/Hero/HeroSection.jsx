import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import useTheme to utilize theme colors
import heroImage from "../../assets/hero.png"; // Use a different hero image

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // Make it full viewport height
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover", // Cover the entire section
        backgroundPosition: "center",
        position: "relative",
        textAlign: "center",
        color: theme.palette.common.white, // Use theme color for text
        padding: 3,
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for better text visibility
        },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: 2,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "3rem" },
          position: "relative", // Position relative to place it above the overlay
        }}
      >
        Unlock Your Potential with Expert Guidance
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 4,
          fontFamily: "'Roboto', sans-serif",
          fontWeight: 400,
          fontSize: { xs: "1rem", md: "1.25rem" },
          position: "relative",
        }}
      >
        Join our community and elevate your skills with tailored mentorship and
        projects.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: theme.palette.primary.main, // Use theme's primary color
          padding: "12px 24px",
          fontWeight: 600,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark, // Darker shade on hover
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        Start Your Journey
      </Button>
    </Box>
  );
}
