import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand">
          <div className="brand-mark">DI</div>

          <div>
            <h1 className="brand-name">Dev Insights</h1>
            <p className="brand-tagline">
              Ideas, lessons and experiences from developers.
            </p>
          </div>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#new-post" className="new-post-link">
            New Post
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;