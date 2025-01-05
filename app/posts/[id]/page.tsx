import PostClient from './PostClient';

// Define the expected type for props
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const PostPage = async ({ params }: PageProps) => {
  // Await the params to ensure it's resolved
  const resolvedParams = await params;

  return <PostClient params={resolvedParams} />;
};

export default PostPage;
