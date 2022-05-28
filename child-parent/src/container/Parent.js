import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
  state = { message: "" };

  callbackFunction = (sendData) => {
    this.setState({ message: sendData });
  };
  render() {
    return (
      <div>
        <Child parentCallback={this.callbackFunction} />
        <p> {this.state.message} </p>
      </div>
    );
  }
}
