import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Purecomponent from "./Purecomponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
function tick() {
  const element = (
    <div className="my-8 text-3xl">
      <center>
        <h2>Hello, world!</h2>

        <h2>It is {new Date().toLocaleString("en-IN", options)}.</h2>
      </center>
    </div>
  );
  root.render(
    <div>
      <App />
      {element}
      <Purecomponent />
    </div>
  );
}

setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
