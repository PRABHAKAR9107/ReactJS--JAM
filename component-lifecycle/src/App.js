import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Header from "./Lifecycle";
import Clock from "./Clock";
import Counter from "./Counter";

import Color from "./Color";
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
          {/* <Clock /> */}
          <Button />
          <Color />

          <Counter number={this.state.counter} />
          <button onClick={this.increase}> Click Me</button>
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
