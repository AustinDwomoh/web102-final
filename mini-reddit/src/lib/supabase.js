import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dhszhdlnhfmfmuzedlfu.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
export const api = {
  async fetchPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching posts:", error);
      return [];
    }

    return data;
  },

  async fetchPostById(id) {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching post:", error);
      return null;
    }

    return data;
  },

  async createPost(data) {
    const { data: newPost, error } = await supabase
      .from("posts")
      .insert([
        {
          title: data.title,
          content: data.content,
          image_url: data.image_url,
          upvotes: 0,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Error creating post:", error);
      return null;
    }

    return newPost;
  },

  async updatePost(id, data) {
    const { error } = await supabase
      .from("posts")
      .update(data)
      .eq("id", id);

    if (error) {
      console.error("Error updating post:", error);
    }
  },

  async deletePost(id) {
    const { error } = await supabase
      .from("posts")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting post:", error);
    }
  },

  async upvotePost(id) {
    const { data: post, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching post for upvote:", error);
      return;
    }

    const { error: updateError } = await supabase
      .from("posts")
      .update({ upvotes: post.upvotes + 1 })
      .eq("id", id);

    if (updateError) {
      console.error("Error upvoting post:", updateError);
    }
  },

  async fetchComments(postId) {
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("post_id", postId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching comments:", error);
      return [];
    }

    return data;
    },

  async addComment(postId, text) {
    const { data: newComment, error } = await supabase
      .from("comments")
      .insert([
        {
          post_id: postId,
          text: text,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();
  },
};

