import React, { useState, useEffect } from "react";
import Chungus from "./Components/Chungus";
import "./index.css";

function App() {
  useEffect(() => {
    window.addEventListener("click", () => {
      setCount(count + 1);
    });
    return () => window.removeEventListener("click");
  }, []);

  const [count, setCount] = useState(1);

  return <Chungus count={count} />;
}

export default App;
