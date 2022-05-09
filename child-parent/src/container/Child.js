import React, { Component } from "react";

class Child extends React.Component {
  sendData = (event) => {
    event.preventDefault();
    this.props.parentCallback("Hey Popsie, How’s it going?");
    console.log(event.target);
  };
  render() {
    //you can call function sendData whenever you'd like to send data from child component to Parent component.

    return (
      <div>
        <button onClick={this.sendData}>Click Me</button>
      </div>
    );
  }
}

export default Child;
