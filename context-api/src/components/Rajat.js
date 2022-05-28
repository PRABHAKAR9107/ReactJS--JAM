import React, { Component } from "react";

import { Consumer } from "./Context";
export class Rajat extends Component {
  render() {
    return (
      <div>
        <h3>2nd Child component</h3>

        <Consumer>
          {({ data, handleChange }) => (
            <div>
              <h3> Data from Rahul component:-{data.roll}</h3>{" "}
              <button onClick={handleChange}>Click it</button>
            </div>
          )}
        </Consumer>

        {/* <mycontext.Consumer>
          {(data) => <h3> Data from Rahul component:-{data.roll}</h3>}
        </mycontext.Consumer> */}

        {/* Pass data from parent using props

        {this.props.value} */}
      </div>
    );
  }
}

export default Rajat;
