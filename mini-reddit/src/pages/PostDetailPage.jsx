import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import CommentList from "../components/CommentList";
import { api } from "../lib/supabase"; // ← USE YOUR REAL API

function PostDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");

  // Load post + comments
  useEffect(() => {
    async function load() {
      const postData = await api.fetchPostById(id);
      const commentData = await api.fetchComments(id);

      setPost(postData);
      setComments(commentData);
      setLoading(false);
    }
    load();
  }, [id]);

  // Upvote Handler
  const handleUpvote = async () => {
    await api.upvotePost(id);
    const updated = await api.fetchPostById(id);
    setPost(updated);
  };

  // Add Comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    await api.addComment(id, commentText);
    setCommentText("");

    const commentData = await api.fetchComments(id);
    setComments(commentData);
  };

  // Delete Post
  const handleDelete = async () => {
    await api.deletePost(id);
    navigate("/");
  };

  if (loading) {
    return <p className="text-gray-400 text-center mt-10">Loading...</p>;
  }

  if (!post) {
    return <p className="text-red-500 text-center mt-10">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-6 px-4">
      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-2">{post.title}</h1>

      {/* Meta */}
      <p className="text-gray-400 text-sm mb-4">
        {new Date(post.created_at).toLocaleString()} • {post.upvotes} upvotes
      </p>

      {/* Image */}
      {post.image_url && (
        <img
          src={post.image_url}
          className="rounded-lg border border-neutral-800 mb-4 w-full max-h-[450px] object-cover"
        />
      )}

      {/* Content */}
      {post.content && (
        <p className="text-gray-200 text-lg mb-6 whitespace-pre-wrap">{post.content}</p>
      )}

      {/* Buttons */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleUpvote}
          className="px-4 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400"
        >
          ⬆ Upvote
        </button>

        <Link
          to={`/edit/${post.id}`}
          className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-500"
        >
          Delete
        </button>
      </div>

      {/* Comments */}
      <h2 className="text-2xl font-bold text-white mb-2">Comments</h2>
      <CommentList comments={comments} />

      {/* Add Comment */}
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write a comment..."
          className="w-full bg-neutral-800 text-white px-3 py-2 rounded-lg border border-neutral-700 h-24 resize-none"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
}

export default PostDetailPage;
