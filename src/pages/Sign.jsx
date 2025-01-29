import react from "react";

function Sign() {
  return (
    <div className="box">
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit"> Sign Up </button>
      </form>
    </div>
  );
}

export default Sign;
