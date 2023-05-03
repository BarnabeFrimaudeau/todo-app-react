import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }

    document.getElementById("todoForm").reset();
    setTodo("");
  };

  const handleRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleEdit = (id) => {
    const text = document.getElementById(id);
    text.contentEditable = true;
    text.focus();

    text.onmouseleave = function () {
      text.contentEditable = false;
    };
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form id="todoForm" className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <button className="add" type="submit">
            ADD
          </button>
        </form>

        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText" id={t.id} key={t.id}>
                {t.todo}
              </span>
              <div>
                <button className="edit" onClick={() => handleEdit(t.id)}>
                  EDIT
                </button>
                <button className="remove" onClick={() => handleRemove(t.id)}>
                  REMOVE
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
