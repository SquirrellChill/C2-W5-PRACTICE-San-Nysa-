import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "Hello", isEdited: false },
    { id: 2, text: "Second Post", isEdited: false },
    { id: 3, text: "Third Post", isEdited: false }
  ]);

  // Toggle isEdited for the matching ID
  const markAsEdited = (id) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isEdited: !post.isEdited } : post
      )
    );
  };

  return (
    <div className="app">
      <h2>Post Editor</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.text}{" "}
            <button onClick={() => markAsEdited(post.id)}>
              {post.isEdited ? "Undo Edit" : "Mark as Edited"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
