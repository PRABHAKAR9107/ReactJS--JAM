import React, { Component } from "react";
import Unmount from "./Unmount";
export class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: false,
    };
  }

  removeText = () => {
    this.setState({ display: true });
  };
  render() {
    return (
      <div>
        <button onClick={this.removeText}>ToRemove</button>
        {this.state.display === true ? "pk" : <Unmount />}
      </div>
    );
  }
}

export default Hello;
