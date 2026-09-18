
# Dev Insights — React Mini Blog

## Project Overview

Dev Insights is a simple mini blog built with React, TypeScript, and Vite. It presents developer-related articles about learning, reusable components, and building projects.

The project was created to practice building reusable React components, using TypeScript to describe data, styling components, and applying basic performance optimization and component lifecycle logging.

## Features

- A header displaying the Dev Insights name and a New Post link.
- A welcome section introducing the blog.
- A list of three sample blog posts.
- Post cards displaying a title, author, date, category, and content.
- A featured style for selected posts.
- A reusable Post component.
- A higher-order component (HOC) that logs component mounting and unmounting.
- Responsive post-card layout.
- React.memo to help avoid unnecessary Post component re-renders.
- Unique keys when rendering posts in a list.

## Technologies Used

- React — for building the user interface with reusable components.
- TypeScript — for defining the post data structure and component props.
- Vite — for the development server and production build.
- CSS — external stylesheets and a small inline style for styling the header, page, and post cards.

## Project Structure

```text
react-dev-formative-1/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Post.tsx
│   │   └── PostList.tsx
│   ├── data/
│   │   └── posts.ts
│   ├── hoc/
│   │   └── withLogger.tsx
│   ├── styles/
│   │   ├── Header.css
│   │   └── Post.css
│   ├── types/
│   │   └── post.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
├── package-lock.json
└── README.md
```

## Design and Implementation Choices

### 1. React functional components

I chose functional components because they make the interface easier to organize into small, reusable parts. They also work naturally with React hooks, which I use in the lifecycle-logging HOC.

The Header, Post, and PostList components each have a clear responsibility, making the code easier to understand and maintain.

For the **Post** component specifically, I chose a functional component over a class component. Post only receives props and renders markup, so it has no need for local state or lifecycle methods, and a class would add extra boilerplate (`this`, `render()`, a constructor). A functional component is shorter, easier to read, and can be wrapped with `React.memo` for optimization.

### 2. TypeScript for post data

I created a Post interface to define the structure of each blog post. It includes an ID, title, author, content, date, category, and an optional featured property.

I chose TypeScript because it helps me catch mistakes while writing code and makes it clearer what information each component expects. This is especially useful when passing post data between components.

### 3. Reusable Post and PostList components

I separated the individual Post card from PostList. PostList receives an array of posts and renders a Post component for each item.

I chose this approach to avoid repeating the same card markup. If I want to change the appearance of every post, I can update the reusable Post component in one place.

### 4. Separate sample data

I placed the sample posts in `src/data/posts.ts` instead of writing all the post objects directly inside App.

This keeps the sample content separate from the layout and makes it easier to update or add posts later.

### 5. CSS files and conditional styling

I used external CSS files to keep styling separate from the component logic. The post cards use a responsive grid, spacing, borders, and hover effects.

I also used conditional styling for featured posts. When a post has `featured: true`, it receives a featured class and label.

I also used a small inline style (`style={{ ... }}`) on featured posts to add a blue glow. Inline styles suit this because the value depends directly on the post's data. Together, external CSS and inline styles are the two styling methods used in this project.

Each post card shows a short preview of the content (the first 100 characters followed by "…") instead of the full text.

I chose this because the same component can display different visual states based on its data, without needing a separate component for featured posts.

### 6. React.memo and unique list keys

I wrapped the Post component with `memo` to help React skip re-rendering it when its props have not changed.

I also used each post's unique ID as its React key when rendering the list. This helps React identify list items consistently when the list changes.

These choices support efficient and predictable rendering. `memo` is an optimization, not a guarantee that a component will never re-render.

### 7. Higher-order component withLogger

I created a higher-order component called `withLogger` and used it to wrap PostList.

The HOC uses `useEffect` to log when the wrapped component mounts and when it unmounts.

I chose a HOC to practice a reusable way of adding behavior to a component without placing the logging code directly inside PostList.

## Getting Started

### Prerequisites

- Node.js
- npm
- A code editor such as Visual Studio Code

### Installation

Clone the repository:

```bash
git clone https://github.com/Kaerica/react-dev-formative-1.git
```

Move into the project directory:

```bash
cd react-dev-formative-1
```

Install the dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open the local URL printed in your terminal, usually:

```text
http://localhost:5173/
```

### Build for production

```bash
npm run build
```

This runs the TypeScript build check and creates the production build using Vite.

### Test the application

This project does not include an automated test suite yet. To check that it works:

1. Run `npm run build` to confirm the TypeScript code compiles without errors.
2. Run `npm run lint` to check the code with Oxlint.
3. Run `npm run dev`, open the local URL, and confirm the header, the welcome section, and the three post cards display correctly.
4. Open the browser console and confirm the `PostList mounted` message appears (from the `withLogger` HOC).

## Challenges and Learning

One challenge I encountered was working with the project in nested folders. At first, I was running the development server from the nested Vite starter instead of the project root containing my custom application.

I resolved this by moving to the correct project directory, installing the dependencies there, and running the development server again.

This helped me understand why it is important to check the current working directory before running project commands.

Through this project, I practiced connecting components through props, defining data with TypeScript, organizing CSS, applying conditional styles, and using React's memoization and effect hooks.

## Packages

**Dependencies**

- `react` — UI library
- `react-dom` — renders React components in the browser

**Dev dependencies**

- `vite` — development server and build tool
- `@vitejs/plugin-react` — React support for Vite
- `typescript` — static typing
- `@types/react`, `@types/react-dom`, `@types/node` — TypeScript type definitions
- `oxlint` — linter

No other external libraries are used. The full list of versions is recorded in `package.json` and `package-lock.json`.

## Future Improvements

Possible future improvements include:

- Making the New Post link open a working post creation form.
- Adding a way to save or manage posts.
- Connecting the blog to a backend or database.
- Adding automated tests for the components.

These are future ideas and are not described as currently implemented features.

## Author

Erica Ishimwe

## Repository

[Dev Insights — React Mini Blog](https://github.com/Kaerica/react-dev-formative-1)