import { useState } from "react";
import useConversation from "../zustand/useconversation";
import toast from "react-hot-toast";
function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      console.log(selectedConversation);
      const res = await fetch(
        `http://localhost:5000/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ message }),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.error) {
        toast.error(data.error);
      } else {
        setMessages([...messages, data]);
      }
    } catch (error) {
      toast.error(error.messages);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
}

export default useSendMessage;
