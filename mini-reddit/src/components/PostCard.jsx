import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="block border border-neutral-800 rounded-xl p-4 
                 bg-neutral-900 hover:bg-neutral-800 transition"
    >
      {/* Post Title */}
      <h2 className="text-xl font-bold text-white mb-2">
        {post.title}
      </h2>

      <div className="text-sm text-gray-400 flex gap-4">
        <span>{new Date(post.created_at).toLocaleString()}</span>
        <span>⬆ {post.upvotes}</span>
      </div>

    </Link>
  );
}

export default PostCard;
