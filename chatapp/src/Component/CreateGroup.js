import { IconButton, Input } from "@mui/material";
import "./myStyles.css";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import React from "react";

export default function CreateGroup() {
  return (
    <div className="creatGroup-container">
      <input placeholder="Enter yout group name" className="searchbox" />
      <IconButton>
        <DownloadDoneIcon />
      </IconButton>
    </div>
  );
}
