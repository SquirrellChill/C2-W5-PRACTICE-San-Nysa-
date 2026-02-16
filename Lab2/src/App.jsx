import React from "react";
import "./App.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="navbar">
        <h2>My React App</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        <div className="card">{children}</div>
      </main>

      <footer className="footer">
        <p>2026 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h1>Welcome to the App!</h1>
      <p>Main content.</p>
    </Layout>
  );
}

export default App;
