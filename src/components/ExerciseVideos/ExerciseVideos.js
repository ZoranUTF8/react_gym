import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseYouTubeVideo, name }) => {
  console.log(exerciseYouTubeVideo);
  if (!exerciseYouTubeVideo.length) return <h1>Loading...</h1>;
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Gledajte video snimke{" "}
        <span style={{ color: "#ff2625", textTransform: "uppercase" }}>
          {name}
        </span>
        vježbe
      </Typography>
      <Stack
        justifyContent={"space-evenly"}
        flexWrap="wrap"
        alignItems={"center"}
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "30px" } }}
      >
        {exerciseYouTubeVideo?.slice(0, 6).map((item, index) => (
          <Box border={"1px solid gray"}>
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant="h5" color="#000">
                  {item.video.title}
                </Typography>
                <Typography variant="h6" color="#000">
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
