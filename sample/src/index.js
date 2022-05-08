import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

const element1 = (
  <div>
    <h1>Hello World!</h1>
    <h2>Welcome to react</h2>
  </div>
); //element

//Functional Components

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// const greeting = <Welcome name="Prabhakar" />;
//Elements are the smallest block of react .They are immutable.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Welcome name="Prabhakar" />
    <div>{element1}</div>
    <p>hello,{element1}</p>
  </div>
);

//To render a React element, first pass the DOM element to ReactDOM.createRoot(), then pass the React element to root.render():

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
