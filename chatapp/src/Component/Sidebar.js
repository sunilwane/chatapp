import React, { useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import { IconButton, Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ConvertionsItem from "./ConvertionsItem";
import { useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Sidebar() {
  const [lightTheme, setLightTheam] = useState(true);
  const [conversations, setConversation] = useState([
    {
      name: "test#1",
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
  const navigate = useNavigate();
  return (
    <div className="sidebararea-container">
      <div className={"Sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <IconButton>
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>

        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddAlt1Icon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>

          <IconButton
            onClick={() => {
              setLightTheam((prevvalue) => {
                return !prevvalue;
              });
            }}
          >
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
        </div>
      </div>
      <div c className={"search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
        <Input
          placeholder="Search"
          type=""
          className={"searchbox" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return (
            <ConvertionsItem props={conversation} key={conversation.name} />
          );
        })}
      </div>
    </div>
  );
}
