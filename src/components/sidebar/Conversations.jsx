import React from "react";
import Conversation from "./Conversation";

export default function Conversations() {
  return (
    <div>
      <div className="py-2 flex flex-col overflow-auto ">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </div>
  );
}
