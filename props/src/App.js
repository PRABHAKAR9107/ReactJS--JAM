import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-link">
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Props in React</p>
      </header>

      <Parent>
        <h3>Hello Guys! We are children props</h3>

        <h4>
          children are a special prop that is used to pass the data from the
          parent component to the children component but this data must be
          enclosed within the parent’s opening and closing tag.
        </h4>
        <a href="https://reactjs.org/docs/composition-vs-inheritance.html">
          Learn more{" "}
        </a>
      </Parent>
    </div>
  );
}

export default App;
