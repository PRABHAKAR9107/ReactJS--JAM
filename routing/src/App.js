// import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import About from "./Pages/About";

import Users from "./Pages/Users";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Users" element={<Users />} />
          </Routes>
        </div>
      </BrowserRouter>
      <center>
        <h2>React Router</h2>
      </center>
      <p>
        Routing is a process in which a user is directed to different pages
        based on their action or request. ReactJS Router is mainly used for
        developing Single Page Web Applications. React Router is used to define
        multiple routes in the application.
      </p>
    </div>
  );
}

export default App;
