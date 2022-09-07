import React, { useState, useEffect } from "react";

export default function Button() {
  //   const name = useState("Hello World");
  //   const greeting = name[0];

  //   const newName = name[1];

  //Array destructuring

  const [name, newName] = useState("Hello Folks");
  const [count, newCount] = useState(0);
  const [count1, newCount1] = useState(5);
  const changeButton = () => {
    newName("Hello Prabhu");
  };

  const increment = () => {
    newCount((prevCount) => prevCount + 10);
  };

  const decrement = () => {
    // if (count1 == 0) {
    //   newCount1(0);
    // } else {
    //   newCount1(count1 - 1);
    // }

    newCount1(count1 === 0 ? 0 : count1 - 1);
  };

  //Always use arrow fn for useEffect
  useEffect(() => {
    console.log("Prabhakar Kumar");
  }, [count, count1]);

  return (
    <div>
      <center>
        <h2>useState-Hook</h2>
        <div> {name}</div>
        {/* <div> {greeting}</div> */}
        <button onClick={changeButton}>Click me</button>
        <div>
          <p>you clicked {count} by 10</p>
          <button onClick={increment}>Increment</button>
        </div>
        <div>
          <p>you clicked {count1}</p>
          <button onClick={decrement}>Decrement</button>
        </div>
      </center>
    </div>
  );
}
