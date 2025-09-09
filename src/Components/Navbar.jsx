import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <nav className="nav-menu">
        <img className="logo" src="/Images/logo.png" />
        <a href="../Pages/Home" className="nav-link">
          Home
        </a>
        <a href="../Pages/Ttd" className="nav-link">
          Things To Do
        </a>
        <a href="../Pages/Monuments" className="nav-link">
          Monuments
        </a>
        <a href="../Pages/Hotels" className="nav-link">
          Hotels
        </a>
        <button className="login-button">
          <Link className="loginb1" to="../Pages/Login">
            {" "}
            Login/Sign Up
          </Link>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
