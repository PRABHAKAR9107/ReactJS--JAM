import React, { Component } from "react";

// 2nd phase of lifecycle is Updating
export class Color extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favouriteCar: " ",
    };
  }
  shouldComponentUpdate() {
    console.log("Component should update");
    return false; //component is not rendering yet
    // return true;
  }
  favCar = () => {
    this.setState({ favouriteCar: "Tesla" });
  };

  render() {
    return (
      <div>
        <p> My favourite Car is {this.state.favouriteCar}</p>

        <button onClick={this.favCar}>Choice</button>
      </div>
    );
  }
}

export default Color;
