import Header from './components/Header';
import PostList from './components/PostList';
import { samplePosts } from './data/posts';
import './App.css';

function App() {
  return (
    <>
      <Header />

      <main className="page-container">
        <section className="welcome-section">
          <p className="welcome-label">THE DEVELOPER COMMUNITY</p>
          <h2>Welcome to Dev Insights</h2>
          <p>
            Developer stories, lessons and practical ideas.
          </p>
        </section>

        <PostList posts={samplePosts} />
      </main>
    </>
  );
}

export default App;