import React from "react";
import Show from "./Show";

//Mounting
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return (
      <div>
        <h1>User List</h1>
        <h3>Username: Prabhakar Kumar</h3>
        <button onClick={() => this.setState({ show: true })}>
          Fetch Users
        </button>
        {this.state.show ? <Show email="qwerty@gmail.com" /> : null}
      </div>
    );
  }
}
export default Header;
