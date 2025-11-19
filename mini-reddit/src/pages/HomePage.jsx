import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import SortDropdown from "../components/SortDropdown";
import { api } from "../lib/supabase";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("time");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await api.fetchPosts();
      setPosts(data);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "time") {
      return new Date(b.created_at) - new Date(a.created_at);
    }
    if (sortBy === "upvotes") {
      return b.upvotes - a.upvotes;
    }
    return 0;
  });

  if (loading) {
    return (
      <p className="text-gray-400 text-center mt-10">Loading posts...</p>
    );
  }

  return (
    <div
      className="max-w-4xl mx-auto mt-6 px-4 
                 bg-neutral-900/40 backdrop-blur-md rounded-2xl 
                 border border-marvel-darkred/40 
                 shadow-[0_0_25px_rgba(237,29,36,0.25)] p-6"
    >
      {/* Search + Sort Controls */}
      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6
                   bg-neutral-800/60 p-4 rounded-xl 
                   border border-neutral-700 hover:border-marvel-red/40 transition-all"
      >
        <SearchBar onSearch={setSearchQuery} />
        <SortDropdown sortBy={sortBy} onChange={setSortBy} />
      </div>

      {/* Posts List */}
      <div
        className="space-y-4 relative before:absolute before:left-0 before:top-0
                   before:h-full before:w-1 before:bg-marvel-red/80 before:rounded-full pl-4"
      >
        {sorted.length > 0 ? (
          sorted.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="text-gray-400 mt-4 text-center">No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default HomePage;
