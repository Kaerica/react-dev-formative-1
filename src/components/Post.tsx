import '../styles/Post.css'
import type { Post as PostType } from '../types/post'

type PostProps = {
  post: PostType
}

export default function Post({ post }: PostProps) {
  return (
    <article className="post-card">
      <div className="post-card__meta">
        <span className="post-card__category">{post.category}</span>
        <time className="post-card__date">{post.date}</time>
      </div>

      <h2 className="post-card__title">{post.title}</h2>
      <p className="post-card__author">By {post.author}</p>
      <p className="post-card__content">{post.content}</p>
    </article>
  )
}
