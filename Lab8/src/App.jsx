import { useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, text: "First Post"},
    {id: 2, text: "Second Post"},
    {id: 3, text: "Third Post"}
  ]);

  //Delete Post by ID
  const handleDelete = (id) => {
    setPosts(posts.filter((posts) => posts.id !== id));
  };

  return (
    <div clasaName="app">
      <h2>Post Deleter</h2>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            {posts.text}
            <button onClick={() => handleDelete(posts.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;