import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this component recieve 'user' prop and display detail
const AuthorInfo = ({user}) => {
  return(
    <div>
      {/* Display name dynamically */}
      <h2>{user.name}</h2>
      <p>Role: {user.role}</p>
    </div>
  );
};

// pass user to author info
const PostHeader = ({user}) => <AuthorInfo user={user} />; 

// pass user to postHeader
const PostItem = ({user}) => <PostHeader user={user} />; 
const FeedList = ({user}) => <PostItem user={user} />; 

// pass user to postItem
function App() {
  const [user] = useState({name: "Ronan", role:"Admin"});

  return (
    <FeedList user={user}/>
  )
}

export default App
