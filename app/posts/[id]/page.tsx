// app/posts/[id]/page.tsx
import PostClient from './PostClient';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  body: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

const fetchBlogPost = async (id: string): Promise<BlogPost | null> => {
  try {
    const response = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

const PostPage = async ({ params }: PageProps) => {
  const { id } = params;

  // Fetch the blog post data
  const blogPost = await fetchBlogPost(id);

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return <PostClient params={params} blogPost={blogPost} />;
};

export default PostPage;