import React from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchInput() {
  return (
    <div>
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered rounded-full"
        ></input>
        <button type="submit" className="btn btn-circle bg-sky-500 text0-white">
          <FaSearch className="w-6 outline-none h-5" />
        </button>
      </form>
    </div>
  );
}
