import logo from "./logo.svg";
import "./App.css";

import Button from "./components/Button";

import ObjectuseState from "./components/ObjectuseState";

import Arrayusestate from "./components/Arrayusestate";
function App() {
  return (
    <>
      <div className="App">
        <details>
          <summary>Rules of Hooks</summary>
          <ul>
            <li>Must be written inside function component</li>
            <li>Must be import in component</li>
            <li>Must be call at top level of component</li>
            <li>cannot be conditional</li>
          </ul>
        </details>
        <Button />
      </div>
      <hr />
      <div className="App">
        <ObjectuseState />
      </div>
      <hr />

      <div className="App">
        <Arrayusestate />
      </div>
    </>
  );
}

export default App;
