import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chungus from "./Components/Chungus";
import "./index.css";

function App() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerWidth);
    });

    window.addEventListener("click", (e) => {
      if (e.target.id !== "dont-track-click") {
        setCount((prev) => setCount(prev + 1));
      }
    });
    return () => window.removeEventListener("click");
  }, []);

  const [count, setCount] = useState(1);

  return (
    <>
      <Chungus count={count} />
      <div style={{ position: "absolute", bottom: 0 }}>
        <p>test</p>
      </div>
    </>
  );
}

export default App;
