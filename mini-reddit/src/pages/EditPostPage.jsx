import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { api } from "../lib/supabase";
function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load post on mount
  useEffect(() => {
    async function load() {
      const data = await api.fetchPostById(id);
      setPost(data);
      setLoading(false);
    }
    load();
  }, [id]);

  const handleEdit = async (formData) => {
    await api.updatePost(id, formData);
    navigate(`/posts/${id}`);
  };

  if (loading) {
    return <p className="text-gray-400 mt-4">Loading post...</p>;
  }

  if (!post) {
    return <p className="text-red-500 mt-4">Post not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-white mb-4">Edit Post</h1>
      <PostForm
        initialData={post}
        onSubmit={handleEdit}
        submitLabel="Save Changes"
      />
    </div>
  );
}

export default EditPostPage;
