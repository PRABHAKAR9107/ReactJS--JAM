import React, { Component } from "react";

export default class Show extends Component {
  constructor() {
    super();
    this.state = {
      email: "fbajfbjk@gmail.com ",
    };
    console.log("constructor:1");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method is called");
    return { email: props.email };
  }
  render() {
    console.log("render");
    return (
      <div>
        <h3>Email: {this.state.email}</h3>
      </div>
    );
  }
}
