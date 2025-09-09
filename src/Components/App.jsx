import { useState } from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Layout />
    </div>
  );
}

export default App;
