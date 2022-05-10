import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Header from "./Lifecycle";
import Clock from "./Clock";
function App() {
  return (
    <div>
      <center>
        <Header favcol="yellow" />
        <Clock />
        <Button />
      </center>
    </div>
  );
}

export default App;
