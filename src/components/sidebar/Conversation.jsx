// eslint-disable no-unused-vars;
import React from "react";
import useConversation from "../../zustand/useconversation.js";

export default function Conversation({ conversation, lastIdx }) {
  console.log(conversation, "convooooo");
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation?._id;
  console.log(selectedConversation);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded ${
          isSelected ? "bg-sky-500" : ""
        } p-2 py-1 cursor-pointer`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src={conversation?.profilePic}
              alt={`${conversation?.fullName}'s profile`}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-2 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">🤖</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
}
