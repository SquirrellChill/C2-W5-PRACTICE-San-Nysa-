import React from "react";
import { STUDENTS_DATA } from "./data.js";
import StudentCard from "./components/StudentCard.jsx";
import "./App.css"

function App() {
  return (
    <div id="app">
      <h1>PNV Student Directory</h1>
      <div className="student-list">
        {STUDENTS_DATA.map((item) => (
          <StudentCard key={item.id} student={item} />
        ))}
      </div>
    </div>
  );
}

export default App;