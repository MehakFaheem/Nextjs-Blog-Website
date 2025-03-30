import type { Metadata } from 'next'
import PostClient from './PostClient'

interface BlogPost {
  id: string
  title: string
  body: string
}

interface PageProps {
  params: { id: string }
  searchParams?: Record<string, string | string[]>
}

async function getPost(id: string): Promise<BlogPost | null> {
  const res = await fetch(`https://dummyjson.com/posts/${id}`)
  if (!res.ok) return null
  return res.json()
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPost(params.id)
  return {
    title: post?.title || 'Post not found',
  }
}

export default async function PostPage({ params }: PageProps) {
  const post = await getPost(params.id)

  if (!post) {
    return <div className="text-white p-4">Post not found</div>
  }

  return <PostClient post={post} />
}