import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import { SingleExercise, Home, Contact, RandomExercises } from "./pages";
import { Navbar, Footer } from "./components";

const App = () => (
  <Box>
    <Navbar />
    <Routes>
      <Route path="pocetna" element={<Home />} />
      <Route path="kontakt" element={<Contact />} />
      <Route path="vjezbe" element={<RandomExercises />} />
      <Route path="vjezbe/:id" element={<SingleExercise />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
    <Footer />
  </Box>
);

export default App;
