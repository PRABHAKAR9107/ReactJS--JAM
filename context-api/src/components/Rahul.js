import React, { Component } from "react";
import Rohan from "./Rohan";

import Rajat from "./Rajat";

// export const mycontext = React.createContext();
import { Provider } from "./Context";
export class Rahul extends Component {
  state = {
    name: "Prabhakar Kumar",
    roll: 35,
  };

  handleChangeContext = () => {
    this.setState({ roll: this.state.roll + 1 });
  };

  render() {
    const contextValue = {
      data: this.state,
      handleChange: this.handleChangeContext,
    };
    return (
      <div>
        <h1>Context-API</h1>

        {/* Pass data from parent component through Child component using Context-API */}

        <Provider value={contextValue}>
          <Rohan />
          <Rajat />
        </Provider>

        {/* <mycontext.Provider value={this.state}>
          <Rohan />
          <Rajat />
        </mycontext.Provider> */}
        {/* Pass data to child componets using props */}
        {/* <Rohan name={this.state.name} /> */}
      </div>
    );
  }
}

export default Rahul;
