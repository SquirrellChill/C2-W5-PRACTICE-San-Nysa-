import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const DeleteBtn = ({ id, onConfirm }) => {
  return (
    <button className="delete_btn" onClick={() => onConfirm(id)}>
      Delete
    </button>
  );
};

function App() {
  const [item, setItem] = useState([
    { id: 1, text: "First Item"},
    { id: 2, text: "Second Item"},
    { id: 3, text: "Third Item"}
  ]);

  const handleDelete = (id) => {
    setItem(item.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h2>Item List</h2>
      <ul>
        {item.map((item) => (
          <li key={item.id}>
            {item.text} <DeleteBtn id={ item.id} onConfirm={handleDelete}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;
