import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

export default function Conversations() {
  const { loading, conversations } = useGetConversations();
  console.log(conversations[0], "mamamamaam");
  const conver = conversations[0];
  console.log(conver, "conver");
  return (
    <div className="py-2 flex flex-col overflow-auto ">
      {conver?.map((conv, idx) => (
        <>
          <Conversation
            key={conv._id}
            conversation={conv}
            lastIdx={conv.length - 1}
          />
          {/* //not innclude emojis */}
        </>
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
}
