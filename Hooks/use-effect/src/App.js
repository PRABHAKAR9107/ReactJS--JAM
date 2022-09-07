import "./App.css";

import Header from "./components/Header";
import Title from "./components/TItle";

import Lifecycle from "./components/Lifecycle";
function App() {
  return (
    <>
      <Header />

      <div className="App-header">
        <h3>
          useEffect:-The useEffect Hook allows you to perform side effects in
          your components.
          <br />
          <br />
          Some examples of side effects are: fetching data, directly updating
          the DOM, and timers.
          <br />
          <br />
          <span className="special"> useEffect </span>
          accepts two arguments. The second argument is optional.
          <br />
          <span className="special">
            <code>useEffect(function, dependency)</code>
          </span>
        </h3>
      </div>
      <Title />
      <hr />

      <Lifecycle />
    </>
  );
}

export default App;
