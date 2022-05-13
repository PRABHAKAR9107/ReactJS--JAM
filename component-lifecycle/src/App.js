import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Header from "./components/Lifecycle";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import Show from "./components/Show";

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
          <Button />
          <h3>Updating Phase:- shouldComponentUpdate</h3>
          <Color />
          <Show />
          <h3>Updating Phase:- componentDidUpdate</h3>
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
