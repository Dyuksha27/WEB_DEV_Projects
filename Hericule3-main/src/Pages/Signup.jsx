import react from "react";

function Signup() {
  return (
    <div className="box">
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email ID" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder=" Confirm Password" />
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
}

export default Signup;
