import React, { Component } from "react";
import Parent from "./container/Parent";
import Child1 from "./container/Child1";
export default class App extends Component {
  render() {
    const name = "Prabhakar";
    const age = 10;

    const person = { name: "ravish", subject: "English" };
    return (
      <div>
        <center>Pass Data From Child to Parent using Callbacks</center>

        <Parent value={name} age={age} person={person} />
        <Child1 />
      </div>
    );
  }
}
