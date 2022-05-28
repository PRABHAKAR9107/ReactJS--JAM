import React, { Component } from "react";
import Rajat from "./Rajat";

import { Consumer } from "./Context";
export class Rohan extends Component {
  render() {
    return (
      <div>
        <h1>Child Component </h1>

        <Consumer>
          {({ data }) => <h3>Data from Rahul component :-{data.name}</h3>}
        </Consumer>

        {/* <mycontext.Consumer>
          {(data) => <h3>Data from Rahul component :-{data.name}</h3>}
        </mycontext.Consumer> */}

        {/* Pass Data to child component using context -api

        <Rajat value={this.props.name} /> */}
      </div>
    );
  }
}

export default Rohan;
