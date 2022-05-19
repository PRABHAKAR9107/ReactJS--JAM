import React, { PureComponent } from "react";

export class Purecomponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: 10,
    };
  }

  changeNumber = () => {
    this.setState({
      data: 20,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        PureComponent {this.state.data}
        <div>
          <button onClick={this.changeNumber}>click me</button>
        </div>
      </div>
    );
  }
}

export default Purecomponent;
