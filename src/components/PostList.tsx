import Post from './Post'
import type { Post as PostType } from '../types/post'

type PostListProps = {
  posts: PostType[]
}

export default function PostList({ posts }: PostListProps) {
  return (
    <section className="post-list">
      <div className="post-list__header">
        <p className="post-list__label">Latest articles</p>
        <h2>Recent posts</h2>
      </div>

      <div className="post-list__grid">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
