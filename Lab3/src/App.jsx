import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const PostImage = ({ url }) => {
  if (!url){
    return <div className="img-placeholder">No Image</div>;
  }
  return (
    <div className="img-wrapper">
      <img src={url} alt="Post visual" style={{ width: "300px", height: "auto" }} />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <h2>Post Feed</h2>
      <PostImage url="https://i.pinimg.com/736x/74/fa/b2/74fab2c0711f6a0802656e5337d4914e.jpg" />
      <PostImage url={null} />
    </div>
  );
};

export default App
