import React from "react";
import Sidebar from "./Sidebar";
import Welcome from "./Welcome";
import { Button, TextField } from "@mui/material";

export default function LoginComponenet() {
  return (
    <div className="logincomp">
      <div className="img-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1kkljo0yMuOPzYDhUHBBvZCIoJKA3nf7RA&usqp=CAU"
          alt="Logo"
          className="welcome-logo"
        />
        <p>Welcome to the chat app</p>
      </div>
      <div className="login-box">
        <p> Login to your Account</p>
        <TextField
          id="standard-basic"
          label="Enter user name"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          outoComplete="current-password"
        />
        <Button variant="contained" color="success">
          Login
        </Button>
      </div>
    </div>
  );
}
