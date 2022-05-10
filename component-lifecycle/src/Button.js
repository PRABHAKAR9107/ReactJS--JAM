import React from "react";

// class Button extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { counter: 1 };
//   }
//   render() {
//     console.log("click");
//     return <button>{this.state.counter}</button>;
//   }
// }

//Hooks
function Button() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default Button;
