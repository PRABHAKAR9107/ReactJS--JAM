import React, { Component } from "react";
import Parent from "./container/Parent";
import Child1 from "./container/Child1";
export default class App extends Component {
  render() {
    return (
      <div>
        <center>Pass Data From Child to Parent using Callbacks</center>

        <Parent />
        <Child1 />
      </div>
    );
  }
}
