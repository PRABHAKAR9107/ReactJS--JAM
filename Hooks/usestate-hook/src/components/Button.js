import React, { useState, useEffect } from "react";

export default function Button() {
  //   const name = useState("Hello World");
  //   const greeting = name[0];

  //   const newName = name[1];

  //Array destructuring

  const [name, newName] = useState("Hello Folks");
  const [count, newCount] = useState(0);
  const [count1, newCount1] = useState(0);
  const changeButton = () => {
    newName("Hello Prabhu");
  };

  const increment = () => {
    newCount(count + 1);
  };

  const decrement = () => {
    newCount1(count1 - 1);
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
          <p>you clicked {count}</p>
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
