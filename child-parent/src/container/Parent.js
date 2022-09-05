import React, { Component, useState } from "react";
import Child from "./Child";
// export default class Parent extends Component {
//   state = { message: "" };

//   callbackFunction = (sendData) => {
//     this.setState({ message: sendData });
//   };
//   render() {
//     return (
//       <div>
//         <Child parentCallback={this.callbackFunction} />
//         <p> {this.state.message} </p>
//       </div>
//     );
//   }
// }

export default function Parent(props) {
  const [data, setData] = useState("hello Parent");

  const value = "I am coming from parent component";

  const callback = (childData) => {
    setData(childData);
  };
  console.log("app", props);
  return (
    <div>
      <h2>{props.value}</h2>
      <h2>{props.age}</h2>
      <h2>{props.person.subject}</h2>
      {data}
      <Child childToParent={callback} value={value} />
    </div>
  );
}
