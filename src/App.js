import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo != "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <button className="add" type="submit">
            ADD
          </button>
        </form>

        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>
              <button className="edit">EDIT</button>
              <button className="remove" onClick={}>REMOVE</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
