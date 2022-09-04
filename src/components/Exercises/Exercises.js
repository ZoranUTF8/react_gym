import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { SingleExerciseCard } from "../index.js";
import {
  fetchExerciseData,
  options,
  exerciseApiUrl,
} from "../../utils/fetchExerciseData";

const Exercises = ({ setFoundExercises, bodyPart, foundExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = foundExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  //? When the body part changes get the new data
  useEffect(() => {
    const fetchExerciseDataFromTheBodyPartCard = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchExerciseData(exerciseApiUrl, options);
      } else {
        exerciseData = await fetchExerciseData(
          exerciseApiUrl + `/bodyPart/${bodyPart}`,
          options
        );
      }
      setFoundExercises(exerciseData);
    };
    fetchExerciseDataFromTheBodyPartCard();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} p="20px">
      <Typography textAlign={"center"} mb={"30px"} variant="h3">
        Vasi Rezultati
      </Typography>
      <Stack
        direction={"row"}
        flexWrap="wrap"
        justifyContent={"center"}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {currentExercises.map((exercise, index) => {
          return <SingleExerciseCard key={index} exercise={exercise} />;
        })}
      </Stack>
      {/* Pagination */}
      <Stack>
        {foundExercises.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            size="large"
            defaultPage={1}
            count={Math.ceil(foundExercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            showFirstButton
            showLastButton
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
