import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:5000/api/users", {
          credentials: "include",
        });
        const data = await res.json();
        console.log(data, "dataaaaa");
        if (data.error) {
          toast.error(data.error);
        } else {
          // Use setConversations to replace the existing array with the new data
          setConversations((prevConversations) => [...prevConversations, data]);
          console.log(conversations, "convo");
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
}
