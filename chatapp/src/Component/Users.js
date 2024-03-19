import "./myStyles.css";
import { IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

export default function Users() {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK1kkljo0yMuOPzYDhUHBBvZCIoJKA3nf7RA&usqp=CAU"
          style={{ width: "2rem", height: "2rem", marginLeft: "20px" }}
          alt=""
        />
        <p className="ug-title">Online User's</p>
      </div>
      <div className="search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Input placeholder="Search" className="searchbox" />
      </div>
      <div className="ug-list">
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
        <div className="list-item">
          <p className="con-icon">T</p>
          <p className="con-title">Test user</p>
        </div>
      </div>
    </div>
  );
}
