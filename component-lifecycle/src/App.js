import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Lifecycle";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import Show from "./components/Show";

import Hello from "./components/Hello";

import Color from "./components/Color";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <div>
        <center>
          <Header favcol="yellow" />

          <h3>Unmounting: componentWillUnmount</h3>
          {/* <Clock /> */}
          <hr />
          <Button />
          <h3>Updating Phase:- shouldComponentUpdate</h3>
          <Color />
          <hr />
          <Show />
          <hr />
          <h3>Updating Phase:- componentDidUpdate</h3>
          <Counter number={this.state.counter} />
          <button onClick={this.increase}> Click Me</button>
          <hr />
          <h3>Unmounting:componentWillUnmount</h3>

          <Hello />
        </center>
      </div>
    );
  }
}

// import logo from "./logo.svg";
//
// function App() {
//   return (
//     <div>
//       <center>
//
//       </center>
//     </div>
//   );
// }

// export default App;
