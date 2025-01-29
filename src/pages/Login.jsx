import react from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="box">
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit"> Login </button>
      </form>
      <p>
        {" "}
        Don't have an account?{" "}
        <Link className="lin2" to="../pages/Sign">
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default Login;
