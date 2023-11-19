import React from "react";

import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("");
  };
  return (
    <Box sx={{ background: "#010812" }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={goHome}
      >
        <img src={logo} alt="logo" style={{ width: "40px", height: "40px" }} />
      </IconButton>
    </Box>
  );
};

export default Navbar;
