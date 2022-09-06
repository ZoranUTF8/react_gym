//?  Using the fetch api

export const exerciseApiUrl = "https://exercisedb.p.rapidapi.com/exercises";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const optionsYoutube = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "7e131168d4msh54ab90500b6f1bcp15726cjsnc6e46468f422",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchExerciseData = async (url, options) => {
  const response = await fetch(url, options);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    console.log(response);
    alert(
      "Greška pri dobijanju podataka o vežbi, molimo vas pokušajte kasnije."
    );
  }
};
