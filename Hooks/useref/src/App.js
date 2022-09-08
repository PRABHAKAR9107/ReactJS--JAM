import logo from "./logo.svg";
import "./App.css";
import React, { useRef, useEffect, useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [name, setName] = useState("Prabhakar");
  console.log(name);

  const refEl = useRef(" ");

  const count = useRef(0);

  const inputEl = useRef(" ");

  console.log("inputEl:", inputEl, "Count", count, "refEl", refEl);

  useEffect(() => {
    count.current = count.current + 1;
  }, [inputValue]);

  const resetValue = () => {
    setName("");
    refEl.current.focus();
    console.log("refHook1");
    console.log("Reset value", name);
  };

  const handleInput = () => {
    refEl.current.style.color = "blue";
    refEl.current.value = "Type Name";
    console.log("refHook2");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn About useRef Hook</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h2>React useRef Hook</h2>
      <div>
        <h3>What, Where and How to use it?</h3>
        <ul>
          <li>The useRef Hook allows you to persist values between renders.</li>
          <br />
          <li>
            It can be used to store a mutable value that does not cause a
            re-render when updated. It can be used to access a DOM element
            directly.
          </li>
          <br />
          <li>
            useRef returns a mutable ref object whose .current property is
            initialized to the passed argument (initialValue). The returned
            object will persist for the full lifetime of the component.
          </li>
        </ul>

        <input
          type="text"
          ref={inputEl}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>

        <h3>Input field with ref element</h3>

        <input
          type="text"
          ref={refEl}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={resetValue}>Reset</button>
        <button onClick={handleInput}>Handle</button>
      </div>
    </div>
  );
}

export default App;
