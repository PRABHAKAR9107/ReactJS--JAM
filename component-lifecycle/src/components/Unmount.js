import React, { Component } from "react";

export class Unmount extends Component {
  componentWillUnmount() {
    alert(" Removed Component Successfully");
  }

  render() {
    return <div>Hello Prabhakar</div>;
  }
}

export default Unmount;
