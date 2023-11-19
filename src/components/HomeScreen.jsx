import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";
import title from "../images/title.png";
const HomeScreen = () => {
  const navigate = useNavigate();
  const handleCreateRoom = () => {
    navigate("create-room");
  };
  return (
    <Stack
      display="flex"
      height="calc(100vh - 56px)"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <img src={title} alt="logo" style={{ width: "300px", height: "100px" }} />
      <Stack direction="row" marginTop="2rem" gap="1rem">
        <Button
          onClick={handleCreateRoom}
          sx={{ background: "rgb(144, 202, 249)" }}
        >
          Create A Room
        </Button>
        <Button sx={{ background: "rgb(206, 147, 216)" }}>Enter A Room</Button>
      </Stack>
    </Stack>
  );
};

export default HomeScreen;
