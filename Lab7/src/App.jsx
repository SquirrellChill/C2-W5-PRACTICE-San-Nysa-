import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [posts, setPosts] = useState([
    { id: 1, text: "First Post"},
    { id: 2, text: "Second Post"}
  ]);

  const [editContent, setEditContent] = useState("");
  const [editId, setEditId] = useState(null);
  
  // start editing a post
  const startEdit = (id, text) => {
    setEditId(id);
    setEditContent(text);
  };

  // Save updated post 
  const handleUpdate = () => { 
    setPosts( posts.map((post) => post.id === editId ? { ...post, text: editContent } : post 
      ) 
    ); 
    setEditId(null); 
    setEditContent(""); }; 
    return ( 
      <div className="app"> 
        <h2>Post Editor</h2> 
          <ul> {posts.map((post) => ( 
              <li key={post.id}> 
                {editId === post.id ? ( 
                    <> 
                      <input type="text" value={editContent} onChange={(e) => setEditContent(e.target.value)} />
                      <button onClick={handleUpdate}>Save</button> </>
                  ) : (
                    <> {post.text} 
                    <button onClick={() => startEdit(post.id, post.text)}>Edit</button> 
                    </> 
                  )} 
              </li> 
            ))} 
          </ul>
      </div>
  );
};

export default App;
