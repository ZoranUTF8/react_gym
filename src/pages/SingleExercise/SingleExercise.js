import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchExerciseData, options } from "../../utils/fetchExerciseData";
import { Details, ExerciseVideos, SimilarExercises } from "../../components";

const SingleExercise = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  let { id } = useParams();

  const fetchNewExerciseData = async () => {
    const defaultExerciseApiUrl = "https://exercisedb.p.rapidapi.com";
    const youtubeVideoExerciseDefaultApiUrl =
      "https://youtube-search-and-download.p.rapidapi.com";

    //? get specific exercise data
    const specificExerciseData = await fetchExerciseData(
      `${defaultExerciseApiUrl}/exercises/exercise/${id}`,
      options
    );
    //? Set the exercise details data
    setExerciseDetail(specificExerciseData);
  };

  useEffect(() => {
    fetchNewExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default SingleExercise;
