import React from "react";
import { Grid, Typography } from "@mui/material";
import Clipboard from "../components/Clipboard";
import UserList from "../components/UserList";

const RoomLobby = () => {
  return (
    <Grid
      display="flex"
      sx={{ backgroundColor: "rgb(13, 28, 45)" }}
      height="calc(100vh - 56px)"
      alignItems="center"
      justifyContent={"center"}
      direction={"column"}
    >
      <Typography color="white"> Room Lobby</Typography>
      <Typography color="white">
        {" "}
        Send your friends the following code
      </Typography>
      <Clipboard copyText={"ABCDE"} />
      <UserList users={users} />
    </Grid>
  );
};

export default RoomLobby;
