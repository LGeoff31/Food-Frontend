import React from "react";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";


const CreateRoom = () => {
  const [message, setMessage] = useState("");
  const [messageRecieved, setMessageRecieved] = useState("");
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const goLobby = () => {
    navigate("/lobby");
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      setMessageRecieved(data.message);
      alert(data.message);
    });
  }, [socket]); //run every time function is emmitted

  return (
    <>
      <Grid
        sx={{ backgroundColor: "rgb(13, 28, 45)" }}
        display="flex"
        height="calc(100vh - 56px)"
        alignItems="center"
        justifyContent={"center"}
        direction={"column"}
      >
        <Typography color="white" variant="h3">
          Create A room
        </Typography>
        <TextField
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <Typography marginBottom="2rem" color="white">
          This will be displayed to others in the room
        </Typography>
        <Button variant="contained" onClick={goLobby}>
          Create
        </Button>
      </Grid>
      <TextField
        placeholder="room number"
        onChange={(event) => setRoom(event.target.value)}
      />
      <Button onClick={joinRoom}>Join Room</Button>

      <input
        placeholder="Message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message:</h1>
      {messageRecieved}
    </>
  );
};

export default CreateRoom;
