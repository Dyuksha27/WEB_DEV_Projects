import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <button className="btn1" type="button">
        <Link className="lin" to="../pages/Login">
          {" "}
          Login{" "}
        </Link>
      </button>
      <button className="btn2" type="button">
        <Link className="lin" to="../pages/Sign">
          Sign Up
        </Link>
      </button>
      <ul>
        <li className="lin1">
          {" "}
          <Link className="lin1" to="../pages/Rescue">
            Rescue{" "}
          </Link>{" "}
        </li>
        <li className="lin1">
          {" "}
          <Link className="lin1" to="../pages/Defence">
            Defence Techniques{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
