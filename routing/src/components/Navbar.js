import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
