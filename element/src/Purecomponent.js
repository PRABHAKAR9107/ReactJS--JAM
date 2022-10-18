import React from "react";

class Purecomponentt extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // The value of Counter is updated to same value during continues interval

    setInterval(() => {
      this.setState({
        counter: 0,
      });
    }, 1000);
  }

  render() {
    // This function wont be re-rendered in case when the new state is same as previous
    console.log("rendering");
    return <b>Counter Value: {this.state.counter}</b>;
  }
}

export default Purecomponentt;
