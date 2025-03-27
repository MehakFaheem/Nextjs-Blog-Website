import type { Metadata } from 'next'
import PostClient from './PostClient'

interface BlogPost {
  id: string
  title: string
  body: string
}

interface Props {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getPost(id: string): Promise<BlogPost | null> {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.id)
  return {
    title: post?.title || 'Post not found',
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost(params.id)

  if (!post) {
    return <div className="text-white p-4">Post not found</div>
  }

  return <PostClient params={params} blogPost={post} />
}