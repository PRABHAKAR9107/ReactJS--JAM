import React from "react";
import logo from "../logo.svg";
function Header() {
  return (
    <>
      <header>
        <div className="app-haeder">
          <a href="/">
            <img src={logo} alt="logo" height="100" width="100" />
            <span>React</span>
          </a>

          <nav>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <ul s>
              <li>
                {" "}
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
