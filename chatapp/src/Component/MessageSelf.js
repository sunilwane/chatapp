import React from "react";
import "./myStyles.css";
export default function MessageSelf() {
  var person = {
    name: "otheruser",
    message: "this is the simple message",
    timeStamp: "7.09 pm",
  };
  return (
    <div className="self-message-container">
      <div className="messagebox">
        <p>{person.message}</p>
        <p className="self-timestamp"> {person.timeStamp}</p>
      </div>
    </div>
  );
}
