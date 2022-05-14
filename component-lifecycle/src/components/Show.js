import React, { Component } from "react";

export default class Show extends Component {
  constructor() {
    super();
    this.state = {
      email: "chgfh@gmail.com",
    };
    console.log("constructor:1");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method is called");
    return { newEmail: props.Email };
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
