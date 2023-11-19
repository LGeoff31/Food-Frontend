import React from "react";
import { Button, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import HomeScreen from "../components/HomeScreen";
const HomePage = () => {
  return (
    <Grid sx={{ backgroundColor: "rgb(13, 28, 45)" }} alignItems="center">
      <Navbar />
      <HomeScreen />
    </Grid>
  );
};

export default HomePage;
