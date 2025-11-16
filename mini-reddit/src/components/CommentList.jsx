import React from "react";

function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return (
      <p className="text-gray-400 text-sm mt-4">
        No comments yet. Be the first to comment!
      </p>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="border border-neutral-800 bg-neutral-900 p-4 rounded-lg"
        >
          <p className="text-white">{comment.content}</p>

          <span className="text-xs text-gray-500 mt-2 block">
            {new Date(comment.created_at).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
