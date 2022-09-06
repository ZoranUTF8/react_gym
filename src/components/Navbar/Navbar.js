import { useState } from "react";
import Logo from "../../images/Logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Stack, Link } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const Navbar = () => {
  const MobileUserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    width: " 100%",
    justifyContent: "space-between",
    alignItems: "center",
    //? If its small or biggert than small
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  }));

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      sx={{
        gap: { sm: "50px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link component={RouterLink} to="/" underline="hover">
        <FitnessCenterIcon fontSize="large" />
      </Link>
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 2,
          display: { sm: "none", md: "block" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Moja Teretana
      </Typography>

      <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px">
        <Link
          component={RouterLink}
          to="/"
          underline="hover"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Pocetna
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
