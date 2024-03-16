import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useconversation";
import { extractTime } from "../../utils/extractTime";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  console.log(message.newMessage?.message, "message");
  const { selectedConversation } = useConversation();
  const fromMe =
    message?.newMessage?.senderId || message?.senderId === authUser._id;
  console.log(fromMe, "from me");
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  console.log(message.newMessage?.senderId || message?.senderId, "senderId");
  console.log(extractTime(message.newMessage?.createdAt));
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? "bg-blue-500" : "";
  console.log(authUser._id, "authuser");
  const formatedTime = extractTime(
    message.newMessage?.createdAt || message.createdAt
  );

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleColor} pb-2`}>
        {message.message || message.newMessage?.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formatedTime ? formatedTime : newFormatedDate}
      </div>
    </div>
  );
}
