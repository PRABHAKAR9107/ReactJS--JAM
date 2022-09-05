import React, { Component, useState } from "react";

// class Child extends React.Component {
//   sendData = (event) => {
//     this.props.parentCallback("Hey Popsie, How’s it going?");
//     console.log(event.target);
//   };
//   render() {
//     //you can call function sendData whenever you'd like to send data from child component to Parent component.

//     return (
//       <div>
//         <button onClick={this.sendData}>Click Me</button>
//       </div>
//     );
//   }
// }

// export default Child;

function Child(props) {
  const data = "hello Child";
  console.log(props);
  return (
    <div>
      <h2>{props.value}</h2>
      <button
        onClick={() => {
          props.childToParent(data);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Child;
