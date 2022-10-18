import logo from "./logo.svg";
import "./App.css";
import UseReducer from "./UseReducer.js";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>UseReducer Hook</h2>
      </header>
      <UseReducer />
    </div>
  );
}

export default App;
