import logo from "./logo.svg";
import "./App.css";
import React, { useState, useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(50);

  const multiply = () => {
    console.log("calling again");
    return add * 5;
  };

  //useMemo hook to memoization

  const multiplication = useMemo(multiply, [add]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learning useMemo</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <h2>
          Syntax:-{" "}
          <code style={{ color: "blue" }}>useMemo(callback,[dependency])</code>
        </h2>
        <h2>The React useMemo Hook returns a memoized value.</h2>
        <h2>The useMemo Hook only runs when one of its dependencies update.</h2>
      </div>
      <div>
        <h3>{add}</h3>
        <button
          onClick={() => {
            setAdd(add + 1);
          }}
        >
          Add me
        </button>
      </div>
      <div>
        <h3>{sub}</h3>
        <button
          onClick={() => {
            setSub(sub - 1);
          }}
        >
          Minus
        </button>
        <h2> Multipy Value :- {multiplication}</h2>
      </div>
    </div>
  );
}

export default App;
