import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return <h2>{this.props.dataFromParent}</h2>;
  }
}

// function Child(props) {
//   return <div>{props.dataParentToChild}</div>;
// }

// export default Child;
