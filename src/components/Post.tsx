import { memo } from 'react';
import '../styles/Post.css';
import type { Post as PostType } from '../types/post';

type PostProps = {
  post: PostType;
};

const PREVIEW_LENGTH = 100;

function getPreview(content: string): string {
  return content.length > PREVIEW_LENGTH
    ? `${content.slice(0, PREVIEW_LENGTH).trimEnd()}…`
    : content;
}

function Post({ post }: PostProps) {
  return (
    <article
      className={`post-card ${post.featured ? 'post-card--featured' : ''}`}
      style={
        post.featured
          ? { boxShadow: '0 8px 24px rgba(37, 99, 235, 0.18)' }
          : undefined
      }
    >
      <div className="post-card__meta">
        <span className="post-card__category">{post.category}</span>

        {post.featured && (
          <span className="post-card__featured">Featured</span>
        )}

        <time className="post-card__date">{post.date}</time>
      </div>

      <h2 className="post-card__title">{post.title}</h2>

      <p className="post-card__author">By {post.author}</p>

      <p className="post-card__content">{getPreview(post.content)}</p>

      <a className="post-card__read-more" href="#read-more">
        Read article <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

export default memo(Post);