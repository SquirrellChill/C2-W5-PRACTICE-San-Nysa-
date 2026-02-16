import React, {useState} from "react";
import "./App.css";

const PostAction = ({ onLike, onShare}) => {
  return(
    <div className="actions">
      <button onClick={onLike}>Like</button>
      <button onClick={onShare}>Share</button>
      
    </div>

  );
}

function App(){
  const[likes, setLikes] = useState(0);
  const[shares, setShares] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }
  const handleShare = () => {
    setShares(shares + 1);
  }

  return(
    <div className= "app">
      <h2>Post Feed</h2>
      <p>Likes: {likes}</p>
      <p>Shares: {shares}</p>
      <PostAction onLike={handleLike} onShare={handleShare} />
    </div>
  );
}

export default App;