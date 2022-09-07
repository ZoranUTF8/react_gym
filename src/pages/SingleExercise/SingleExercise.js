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
  const [similarMuscleTarget, setSimilarMuscleTarget] = useState([]);
  const [similarMuscleEquipment, setSimilarMuscleEquipment] = useState([]);
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

    //? Get similar body part target exercises
    const specificExerciseSimilarBodyPartTarget = await fetchExerciseData(
      `${defaultExerciseApiUrl}/exercises/target/${specificExerciseData.target}`,
      options
    );

    //? Get similar body part equpments exercises
    const specificExerciseSimilarBodyPartEquipment = await fetchExerciseData(
      `${defaultExerciseApiUrl}/exercises/equipment/${specificExerciseData.equipment}`,
      options
    );

    //? Set the exercise details data
    setExerciseDetail(specificExerciseData);
    setExerciseYouTubeVideo(specificExerciseDataYouTube.contents);
    setSimilarMuscleTarget(specificExerciseSimilarBodyPartTarget);
    setSimilarMuscleEquipment(specificExerciseSimilarBodyPartEquipment);
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
      <SimilarExercises
        similarMuscleTarget={similarMuscleTarget}
        similarMuscleEquipment={similarMuscleEquipment}
      />
    </Box>
  );
};

export default SingleExercise;
