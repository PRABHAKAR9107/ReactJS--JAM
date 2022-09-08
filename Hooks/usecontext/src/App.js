import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ChildA from "./ChildA";

export const myContext = React.createContext();
console.log("myContext:", myContext);

function App() {
  const person = { name: "prabhakar", age: 20 };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn about useContext Hook</p>
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
        <h2> useContext Hook</h2>
        <h3>
          <span style={{ color: "rgb(209, 41, 41)" }}>Context </span>provides a
          way to pass data or state through the component tree without having to
          pass props down manually through each nested component.
        </h3>
        <h3>
          Steps for creating <code>useContext()</code>Hook
        </h3>
        <div>
          <h2>
            {" "}
            <ol>
              <li>Create Context</li>
              <br />
              <li>Context Provider</li>
              <br />
              <li>
                use <code>const value = useContext(MyContext);</code>
              </li>
            </ol>
          </h2>
        </div>
      </div>
      <myContext.Provider value={person}>
        <ChildA />
      </myContext.Provider>
    </div>
  );
}

export default App;
