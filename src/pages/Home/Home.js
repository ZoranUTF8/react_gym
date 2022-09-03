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
          setFoundExercise={setFoundExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          setFoundExercise={setFoundExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
         />
      </Box>
    </>
  );
};

export default Home;
