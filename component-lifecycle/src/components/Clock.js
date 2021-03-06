import React, { Component } from "react";

//
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  //invoked immediately after a component is mounted.
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("Component Mount : After rendering the page");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);

    console.log(" Component Removed");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;
