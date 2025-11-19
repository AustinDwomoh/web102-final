import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <Link
      to={`/posts/${post.id}`}
      className="block relative overflow-hidden rounded-xl 
                 bg-neutral-900 border border-neutral-800 
                 hover:border-marvel-red hover:shadow-[0_0_20px_rgba(237,29,36,0.35)] 
                 transition-all duration-300 p-5"
    >
      {/* LEFT RED ACCENT STRIP */}
      <div className="absolute left-0 top-0 h-full w-1 bg-marvel-red" />

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
        {post.title}
      </h2>

      {/* META */}
      <div className="text-sm text-gray-400 flex gap-6 mt-2">
        <span>{new Date(post.created_at).toLocaleString()}</span>
        <span className="text-marvel-red font-semibold">⬆ {post.upvotes}</span>
      </div>
    </Link>
  );
}

export default PostCard;
