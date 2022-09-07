import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";
import { Loader } from "../../components";

const SimilarExercises = ({ similarMuscleTarget, similarMuscleEquipment }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Vježbe koje ciljaju istu grupu mišića.
      </Typography>
      <Stack>
        {similarMuscleTarget.length ? (
          <HorizontalScrollbar bodyPartData={similarMuscleTarget} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Vježbe koje koriste istu opremu.
      </Typography>
      <Stack>
        {similarMuscleEquipment.length ? (
          <HorizontalScrollbar bodyPartData={similarMuscleEquipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
