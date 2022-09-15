import logo from "./logo.svg";
import "./App.css";
import ChildA from "./childA";
import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, "New Todo"]);
  }, [todos]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <ChildA todos={todos} addTodo={addTodo} />
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}

export default App;
