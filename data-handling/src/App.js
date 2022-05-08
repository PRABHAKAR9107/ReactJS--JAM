// import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Parent from "./components/Parent";
export default class App extends Component {
  render() {
    const message = "Welcome to React Tutorial";

    return (
      <div>
        <Greeting greeting={message} />
        <ul>
          <li>
            {" "}
            <Parent />
          </li>
        </ul>

        <a
          href="https://flatlogic.com/blog/what-is-the-difference-between-state-and-props-in-react/"
          target="_blank"
        >
          Read More About Props
        </a>
      </div>
    );
  }
}

class Greeting extends App {
  render() {
    return (
      <center>
        {/* Inline Styling in JS */}
        <h1 style={{ textDecoration: "underline" }}> {this.props.greeting}</h1>
      </center>
    );
  }
}
