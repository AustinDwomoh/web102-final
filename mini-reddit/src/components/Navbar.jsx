import React from "react";
import { Link } from "react-router-dom";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import "@fontsource/bebas-neue"; // OPTIONAL – Marvel vibe

function Navbar({ onSearch }) {
  return (
    <nav className="w-full px-6 py-4 
                    bg-gradient-to-br from-neutral-900 to-neutral-950
                    shadow-[0_0_25px_rgba(255,0,0,0.25)]
                    border-b border-red-600/40 backdrop-blur-md">
      <div className="mx-auto flex items-center justify-between">

        {/* Left: Logo/Home */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-wide text-white 
                     hover:text-red-500 transition-all duration-300"
          style={{ fontFamily: "Bebas Neue" }}
        >
          GameFeed
        </Link>

        {/* Middle: Search Bar */}
        {onSearch && (
          <div className="relative">
            <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />

            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => onSearch(e.target.value)}
              className="bg-neutral-800 pl-10 pr-4 py-2 text-white rounded-full
                         border border-neutral-700 focus:outline-none 
                         focus:border-red-500 w-44 md:w-64 lg:w-80
                         transition-all duration-300"
            />
          </div>
        )}

        {/* Right: Create Button */}
        <Link
          to="/create"
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-red-600 text-white font-semibold
                     hover:bg-red-500 hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]
                     transition-all duration-300"
        >
          <PlusIcon className="h-5 w-5" />
          Create
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
