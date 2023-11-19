import "./App.css";
import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateRoom from "./pages/CreateRoom";
import HomePage from "./pages/HomePage";
import RoomLobby from "./pages/RoomLobby";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-room" element={<CreateRoom />} />
          <Route path="/lobby" element={<RoomLobby />} />
        </Routes>
      </BrowserRouter>
      {/* // <div className="App">
    //   <HomePage />
    // </div> */}
    </>
  );
}

export default App;
