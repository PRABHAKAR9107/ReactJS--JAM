import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  //EventHandler binding

  //Use arrow function to solve this binding issue instead of generic function
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  decreaseCounter() {
    this.setState({ counter: 0 });
  }

  render() {
    console.log("click");

    return (
      <div>
        {" "}
        <p>you clicked {this.state.counter}</p>
        {/* Before ES6 you can bind the function */}
        {/* <button onClick={this.handleClick.bind(this)}>Button</button> */}
        {/* Use Arrow function to solve this issue */}
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            this.decreaseCounter();
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

//Hooks
// function Button() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
export default Button;
