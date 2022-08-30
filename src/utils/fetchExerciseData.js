//?  Using the fetch api

export const exerciseApiUrl = "https://exercisedb.p.rapidapi.com/exercises";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchExerciseData = async (url, options) => {
  const response = await fetch(url, options);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    console.log(response);
    alert("Error getting exercise data, please try later.");
  }
};
