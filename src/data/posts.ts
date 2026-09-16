import type { Post } from '../types/post';

export const samplePosts: Post[] = [
  {
    id: 1,
    title: 'My First Steps with React and TypeScript',
    author: 'Erica Ishimwe',
    content:
      'Learning React with TypeScript helped me understand how components and types work together. I am building my skills one step at a time.',
    date: 'September 17, 2026',
    category: 'Learning',
    featured: true,
  },
  {
    id: 2,
    title: 'Why Reusable Components Matter',
    author: 'Erica Ishimwe',
    content:
      'Reusable components help keep a project organized. Instead of writing the same layout repeatedly, I can build it once and use it in different places.',
    date: 'September 16, 2026',
    category: 'React',
  },
  {
    id: 3,
    title: 'Learning Through Building Projects',
    author: 'Erica Ishimwe',
    content:
      'Working on small projects gives me a chance to practice what I learn, discover mistakes, and become more comfortable with development.',
    date: 'September 15, 2026',
    category: 'Student Life',
  },
];