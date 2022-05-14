import React from "react";

import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
