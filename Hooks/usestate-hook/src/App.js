import logo from "./logo.svg";
import "./App.css";

import Button from "./components/Button";

import ObjectuseState from "./components/ObjectuseState";

import Arrayusestate from "./components/Arrayusestate";
function App() {
  return (
    <>
      <div className="App">
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
