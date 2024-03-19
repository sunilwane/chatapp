import React from "react";
import "./myStyles.css";
export default function MessageOther() {
  var person = {
    name: "Stheruser",
    message: "this is the simple message",
    timeStap: "12pm",
  };

  return (
    <div className="other-message-container">
      <div className="conversation-container">
        <p className="con-icon">{person.name[0]}</p>
        <p className="con-title">{person.name}</p>
        <p className="con-lastMessage">{person.message}</p>
        <p className="self-timestamp"> 12.00Am</p>
      </div>
    </div>
  );
}
