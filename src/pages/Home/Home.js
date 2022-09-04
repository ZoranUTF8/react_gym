import { Box, Link, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HeroBanner, SearchExercises, Exercises } from "../../components";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [foundExercises, setFoundExercises] = useState([]);

  return (
    <>
      <Box>
        <HeroBanner />
        <SearchExercises
          setFoundExercises={setFoundExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setFoundExercises={setFoundExercises}
          bodyPart={bodyPart}
          foundExercises={foundExercises}
        />
      </Box>
    </>
  );
};

export default Home;
