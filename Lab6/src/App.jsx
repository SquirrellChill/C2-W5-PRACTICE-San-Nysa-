import { useState } from 'react'
import './App.css'

function App() {

  // hold object 
  const [posts, setPosts] = useState([]);
  // store text type in input field
  const [newContent, setNewContent] = useState("");

  const handleAdd = () => {
    // update post with new object
    if ( newContent.trim() === "") return; // prevent empty post
    const newPost = {
      id: Date.now(),
      text: newContent
    };
    setPosts([...posts, newPost]);
    setNewContent("");
  };

  return (
    <div className ="app">
      <h2>Post Creator</h2>
      <input type="text" value={newContent} onChange={(e) => setNewContent(e.target.value)}
      placeholder ="Write something..."/>
      <button onClick={handleAdd}>Add Post</button>
      <ul>
        {posts.map((post) => (<li key={post.id}>{post.text}</li>))}
      </ul>
    </div>
  );
}

export default App
