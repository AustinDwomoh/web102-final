import React, { useState } from "react";

function PostForm({ initialData = {}, onSubmit, submitLabel = "Create Post" }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  const [imageUrl, setImageUrl] = useState(initialData.image_url || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const formData = {
      title,
      content,
      image_url: imageUrl,
    };

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 
                 p-6 rounded-xl space-y-4"
    >
      {/* Title */}
      <div>
        <label className="text-white font-semibold block mb-1">Title *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter your post title..."
          className="w-full bg-neutral-800 text-white px-3 py-2 rounded-lg 
                     border border-neutral-700 focus:border-cyan-400 outline-none"
          required
        />
      </div>

      {/* Content */}
      <div>
        <label className="text-white font-semibold block mb-1">Content (optional)</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
          className="w-full bg-neutral-800 text-white px-3 py-2 rounded-lg 
                     border border-neutral-700 focus:border-cyan-400 outline-none 
                     h-32 resize-none"
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="text-white font-semibold block mb-1">
          Image URL (optional)
        </label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="w-full bg-neutral-800 text-white px-3 py-2 rounded-lg 
                     border border-neutral-700 focus:border-cyan-400 outline-none"
        />
      </div>

      {/* Preview Image */}
      {imageUrl && (
        <div className="mt-2">
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full max-h-64 object-cover rounded-lg border border-neutral-700"
            onError={(e) => (e.target.style.display = "none")}
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-lg 
                   hover:bg-cyan-400 transition"
      >
        {submitLabel}
      </button>
    </form>
  );
}

export default PostForm;
