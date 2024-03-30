import { useEffect, useState } from "react";
import useConversation from "../zustand/useconversation";
import toast from "react-hot-toast";

function useGetMessage() {
  const [loading, setLoading] = useState();
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`, {
          credentials: "include",
        });
        const data = await res.json();
        console.log(res);
        console.log(data, "data");
        if (data.error) {
          throw new Error(data.error);
        }
        setMessages(data);
      } catch (error) {
        toast.error(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);
  return { messages, loading };
}

export default useGetMessage;
