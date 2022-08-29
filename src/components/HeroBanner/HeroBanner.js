import React from "react";
import { Box, Link, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../../images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
      p="20px"
      direction="row"
      justifyContent="space-around"
    >
      <Typography
        fontSize={"26px"}
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Znoj Osmjeh <br /> Ponoviti
      </Typography>
      <Typography fontSize={"22px"} lineHeight="35px" mb={3}>
        provjerite najucinkovitije vježbe
      </Typography>
      <Button
        variant="contained"
        color="primary"
        mb={3}
        sx={{ padding: "10px" }}
      >
        Istražite vježbe
      </Button>
      <Typography
        fontWeight="600"
        fontSize="200px"
        color="blue"
        sx={{
          position: "absolute",
          right: 20,
          bottom: -70,
          opacity: 0.1,
          display: { lg: "block", sm: "none" },
        }}
      >
        Vjezbe
      </Typography>
      <img
        src={HeroBannerImage}
        alt="banner image"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
