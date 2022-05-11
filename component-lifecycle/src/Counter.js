import React, { Component } from "react";

//componentDidUpdate method is called after component is updated the DOM
export class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(prevState);
    if (prevProps.number !== this.props.number) {
      console.log("Component updated");
    }
  }
  render() {
    console.log("initial render");
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

export default Counter;
