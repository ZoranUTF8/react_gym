import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../../images/Logo.png";
import "./style.css";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "48px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="10px"
    >
      <Link to={"/"}>
        <img src={Logo} alt="logo" className="logoImg" />
      </Link>
      <Stack direction="row" className="main_links">
        <Link to={"/"} className="pocetna_link">
          Početna
        </Link>
        <a href="#vjezbe">Vjezbe</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
