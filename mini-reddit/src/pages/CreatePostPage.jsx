import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { api } from "../lib/supabase";

function CreatePostPage() {
  const navigate = useNavigate();

  const handleCreate = async (formData) => {
    await api.createPost(formData);
    navigate("/"); 
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-white mb-4">Create New Post</h1>
      <PostForm onSubmit={handleCreate} submitLabel="Create Post" />
    </div>
  );
}

export default CreatePostPage;
