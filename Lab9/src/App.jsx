import { useState } from "react";
import "./App.css";

function App() {
  const [posts] = useState([
    { id: 1, text: "First Post", author: "Alice" },
    { id: 2, text: "Second Post", author: "Bob" },
    { id: 3, text: "Third Post", author: "Charlie" },
  ]);

  return (
    <div className="app">
      <h2>Post Reader</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.text}</h3>
            <p>Author: {post.author}</p>
            <p>ID: {post.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
