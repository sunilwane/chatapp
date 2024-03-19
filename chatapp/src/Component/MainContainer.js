import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import Workarea from "./Workarea";
import Chatarea from "./Chatarea";
import Welcome from "./Welcome";
import CreateGroup from "./CreateGroup";
import Users_groups from "./Users_groups";
import { Outlet } from "react-router-dom";

export default function MainContainer() {
  return (
    <div className="main-container">
      <Sidebar />

      {/* <Chatarea /> */}
      <Outlet />
      {/* <Workarea /> */}
      {/* <Chatarea /> */}
      {/* <Welcome /> */}
      {/* <CreateGroup />
      <Users_groups /> */}
    </div>
  );
}
