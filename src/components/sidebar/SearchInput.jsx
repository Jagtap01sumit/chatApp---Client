import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useconversation";
import useGetConversation from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
export default function SearchInput() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(conversations, "befor submit convoercation");
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    console.log("form submitted");
    console.log(conversations[0].fullName, "name");
    const conversation = conversations.find((c) => {
      console.log(c);
      return c.username?.toLowerCase().includes(search.toLowerCase());
    });
    console.log("search:", search);
    console.log("conversation:", conversation);
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No Such User Found");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text0-white">
          <FaSearch className="w-6 outline-none h-5" />
        </button>
      </form>
    </div>
  );
}
