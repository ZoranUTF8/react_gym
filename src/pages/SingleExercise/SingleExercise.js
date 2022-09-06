import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {
  fetchExerciseData,
  options,
  optionsYoutube,
} from "../../utils/fetchExerciseData";
import { Details, ExerciseVideos, SimilarExercises } from "../../components";

const SingleExercise = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseYouTubeVideo, setExerciseYouTubeVideo] = useState([]);
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

    //? Get you tube video api data
    const specificExerciseDataYouTube = await fetchExerciseData(
      `${youtubeVideoExerciseDefaultApiUrl}/search?query=${specificExerciseData.name}`,
      optionsYoutube
    );

    //? Set the exercise details data
    setExerciseDetail(specificExerciseData);
    setExerciseYouTubeVideo(specificExerciseDataYouTube.contents);
  };

  useEffect(() => {
    fetchNewExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseYouTubeVideo={exerciseYouTubeVideo}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default SingleExercise;
