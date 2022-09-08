import logo from "./logo.svg";
import "./App.css";
import ChildA from "./ChildA";
function App() {
  const nameP = "Prabhakar";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Prop-drilling in React</p>
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
        <h2>What is Prop Drilling?</h2>
        <h3>
          Anyone who has worked in React would have faced this and if not then
          will face it definitely. Prop drilling is basically a situation when
          the same data is being sent at almost every level due to requirements
          in the final level. Here is a diagram to demonstrate it better. Data
          needed to be sent from Parent to ChildC. In this article different
          ways to do that are discussed.
        </h3>

        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20210618101141/Untitled.png"
          height="250"
          width="450"
          alt="img"
        />
      </div>
      <hr />
      <div>
        <h3>Data pass from parent</h3>
        <ChildA parent={nameP} />
      </div>
    </div>
  );
}

export default App;
