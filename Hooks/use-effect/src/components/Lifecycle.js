import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [topic, setTopic] = useState("Mounting");
  const [calculation, setCalculation] = useState(0);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    setCalculation(count1 * 2);

    console.log("Updating");

    //Updating phase based on count state
  }, [count1]);

  // <- add the count variable here

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 5000);

    return () => {
      clearTimeout(timer);
      console.log("unmounted"); //Runs
      // Removing component after1 sec
    };
  }, []);

  const changeTopic = () => {
    setTopic("Updating");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h3>useEffect in Functional component lifecycle</h3>
      <h3>
        I am in <span style={{ color: "rgb(209, 41, 41)" }}>{topic} </span>{" "}
        phase{" "}
      </h3>
      <button onClick={changeTopic}>Update Me!</button>
      <h3>
        {" "}
        I've rendered{" "}
        <span style={{ color: "rgb(209, 41, 41)" }}>{count} times!</span> I will
        be unmounted after 5 sec
      </h3>

      <p>updated Count: {count1}</p>
      <h3>
        Understand about updating Phase ,See
        <span style={{ color: "rgb(209, 41, 41)" }}> Console </span>
        on your browser
      </h3>
      <button onClick={() => setCount1((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
}

export default Lifecycle;
