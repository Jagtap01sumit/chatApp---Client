/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

function useLogout() {
  const [loading, setLoading] = useState(false);
  const { authUser, setAuthUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("logout", data);
      if (data.error) {
        toast.error(data.message || data.error);
        throw new Error(data.error);
      } else {
        localStorage.removeItem("chat-user");
        toast.success("User Logged Out");
        setAuthUser(null);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
}

export default useLogout;
