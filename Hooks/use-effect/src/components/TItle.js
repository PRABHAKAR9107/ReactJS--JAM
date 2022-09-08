import React, { useState, useEffect } from "react";

function TItle() {
  const [count, setCount] = useState(0);

  const changeTitle = () => {
    setCount(count + 1);
  };

  // useEffect(() => {
  //   document.title = `Title : ${count}`;
  //   console.log("Mounting2");

  //   //   Runs only on the first render
  // }, []);

  useEffect(() => {
    document.title = `Title : ${count}`;
    console.log("Mounting");

    //Runs on every render
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h3> Title: useEffect</h3>
      <h3>
        Keep <span style={{ color: "rgb(209, 41, 41)" }}>eyes on browser</span>{" "}
        Tab{" "}
      </h3>
      <h3>
        Understand Mounting Phase ,See
        <span style={{ color: "rgb(209, 41, 41)" }}> Console </span>
        on your browser
      </h3>
      <h4>Change the value of Count : {count}</h4>
      <button onClick={changeTitle}>Change</button>
    </div>
  );
}

export default TItle;
