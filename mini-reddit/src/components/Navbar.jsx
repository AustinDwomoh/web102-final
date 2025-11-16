import React from "react";
import { Link } from "react-router-dom";

function Navbar({ onSearch }) {
  return (
    <nav className="w-full px-6 py-4 bg-neutral-900 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto flex items-center justify-between">

        {/* Left: Logo/Home */}
        <Link to="/" className="text-xl font-bold text-white hover:text-cyan-400">
          GameFeed
        </Link>

        {/* Middle: Search Bar */}
        {onSearch && (
          <input
            type="text"
            placeholder="Search posts..."
            onChange={(e) => onSearch(e.target.value)}
            className="bg-neutral-800 text-white px-3 py-1.5 rounded-lg 
                       border border-neutral-700 focus:outline-none 
                       focus:border-cyan-400 w-48 md:w-72"
          />
        )}

        {/* Right: Create Button */}
        <Link
          to="/create"
          className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold
                     hover:bg-cyan-400 transition"
        >
          Create Post
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
