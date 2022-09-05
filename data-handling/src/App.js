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

        <h3>
          StrictMode is a tool for highlighting potential problems in an
          application. Like Fragment, StrictMode does not render any visible UI.
          It activates additional checks and warnings for its descendants.
        </h3>

        <h3>
          Note: Strict mode checks are run in development mode only; they do not
          impact the production build.
        </h3>

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
