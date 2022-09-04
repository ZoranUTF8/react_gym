import { useState, useEffect } from "react";
import { Box, Link, Stack, TextField, Typography, Button } from "@mui/material";
import {
  exerciseApiUrl,
  options,
  fetchExerciseData,
} from "../../utils/fetchExerciseData";
import HorizontalScrollbar from "../HorizontalScrollbar/HorizontalScrollbar";

const SearchExercises = ({ setFoundExercises, bodyPart, setBodyPart }) => {
  const [searchValue, setSearchValue] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (searchValue) {
      const data = await fetchExerciseData(exerciseApiUrl, options);

      const searchedExerciseData = data.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(searchValue) ||
          exercise.target.toLowerCase().includes(searchValue) ||
          exercise.equipment.toLowerCase().includes(searchValue) ||
          exercise.bodyPart.toLowerCase().includes(searchValue)
      );

      setFoundExercises(searchedExerciseData);
    } else {
      alert("Provjerite svoj unos.");
    }
  };

  const fetchBodyPartsData = async () => {
    const bodyPartsData = await fetchExerciseData(
      exerciseApiUrl + "/bodyPartList",
      options
    );

    setBodyParts(["all", ...bodyPartsData]);
  };

  useEffect(() => {
    fetchBodyPartsData();
  }, []);

  return (
    <Stack alignItems={"center"} justifyContent={"center"} p="20px" mt={"60px"}>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign={"center"}
      >
        Fenomenalne vježbe koje bi trebao znati
      </Typography>
      <Box>
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              outline: "none",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value.toLowerCase());
          }}
          placeholder="Pretraga vježbi"
          type="text"
        />
        <Button
          variant={"contained"}
          className="search-btn"
          sx={{
            width: { lg: "175px", xs: "100px" },
            fontSize: { lg: "20px", xs: "14px" },
            alignSelf: "center",
            height: "56px",
          }}
          onClick={handleSearch}
        >
          Traži
        </Button>
      </Box>
      <Box mt={3} sx={{ width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          bodyPartData={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
