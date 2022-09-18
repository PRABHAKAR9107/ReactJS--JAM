import logo from "./logo.svg";
import "./App.css";
import Controlled from "./Controlled";
import Uncontrolled from "./Uncontrolled";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Forms</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Controlled />
      <Uncontrolled />
    </div>
  );
}

export default App;
