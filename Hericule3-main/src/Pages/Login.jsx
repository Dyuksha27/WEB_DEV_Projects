import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="box">
      <form>
        <input type="email" placeholder="Email ID" />
        <input type="password" placeholder="Password" />
        <button type="submit"> Login </button>
      </form>
      <p className="acc">
        {" "}
        Don't have an account?{" "}
        <Link className="lin2" to="../Pages/Signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
