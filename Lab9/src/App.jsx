import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([
    { id: 1, text: "First Item" },
    { id: 2, text: "Second Item" },
    { id: 3, text: "Third Item" }
  ]);

  // Remove item by ID using filter
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <h2>Item Deleter</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
