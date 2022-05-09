import React, { Component } from "react";
import Child from "./Child";
export default class Parent extends Component {
  state = { message: "" };

  callbackFunction = (childData) => {
    this.setState({ message: childData });
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
