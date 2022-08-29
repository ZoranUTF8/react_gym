import { Box, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { HeroBanner, SearchExercises, Exercises } from "../../components";

const Home = () => {
  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercises />
        <Exercises />
      </Box>
    </>
  );
};

export default Home;
