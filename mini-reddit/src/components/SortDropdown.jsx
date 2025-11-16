import React from "react";

function SortDropdown({ sortBy, onChange }) {
  return (
    <select
      value={sortBy}
      onChange={(e) => onChange(e.target.value)}
      className="bg-neutral-800 text-white px-3 py-2 rounded-lg 
                 border border-neutral-700 focus:border-cyan-400 outline-none
                 cursor-pointer"
    >
      <option value="time">Newest</option>
      <option value="upvotes">Most Upvoted</option>
    </select>
  );
}

export default SortDropdown;
