import Header from './components/Header';
import PostList from './components/PostList';
import { samplePosts } from './data/posts';
import withLogger from './hoc/withLogger';
import './App.css';

const LoggedPostList = withLogger(PostList);

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

        <LoggedPostList posts={samplePosts} />
      </main>
    </>
  );
}

export default App;