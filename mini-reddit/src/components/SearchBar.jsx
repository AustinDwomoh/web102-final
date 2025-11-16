import React from "react";

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search posts..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full md:w-72 bg-neutral-800 text-white px-3 py-2 rounded-lg 
                 border border-neutral-700 focus:border-cyan-400 outline-none 
                 transition"
    />
  );
}

export default SearchBar;
