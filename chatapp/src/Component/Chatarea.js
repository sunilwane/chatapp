import React from "react";
import "./myStyles.css";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";

export default function Chatarea({ props }) {
  const [conversations, setConversation] = useState([
    {
      name: "bhau#1",
      lastMessage: "Last message #1",
      timeStap: "today",
    },
    {
      name: "test#2",
      lastMessage: "Last message #2",
      timeStap: "today",
    },
    {
      name: "sest#3",
      lastMessage: "Last message #3",
      timeStap: "today",
    },
  ]);
  const prop = conversations[0];
  return (
    <div className="chatarea-container">
      <div className="ch-header">
        <p className="con-icon">{prop.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{prop.name}</p>
          <p className="con-timeStamp">{prop.timeStap}</p>
        </div>

        <IconButton>
          <DeleteOutlineIcon />
        </IconButton>
      </div>
      <div className="ch-mcontainer">
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageOther />
        <MessageSelf />
      </div>
      <div className="ch-tiarea">
        <input placeholder="Type a Message" className="searchbox" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
}
