import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  useEffect(() => {
    window.addEventListener("click", () => {
      setCount((prev) => setCount(prev + 1));
    });
    return () => window.removeEventListener("click");
  }, []);

  const [count, setCount] = useState(1);

  function Chungus() {
    return (
      <>
        {Array(count)
          .fill()
          .map((e, i) => {
            return (
              <motion.img
                transition={{
                  duration: 2,
                  loop: Infinity,
                  ease: "linear",
                }}
                animate={{ x: "1000px", y: "1000px" }}
                key={i}
                style={{ display: "block" }}
                width="200px"
                height="200px"
                src="chungus.jpg"
              />
            );
          })}
      </>
    );
  }
  return <Chungus />;
}

export default App;
