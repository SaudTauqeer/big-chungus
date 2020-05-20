import React, { useState } from "react";
import { Frame, Scroll, useCycle, Stack } from "framer";
import "./index.css";
import { v4 } from "uuid";

function App() {
  const [count, setCount] = useState(1);
  function handleOnClick() {
    setCount((prev) => setCount(prev + 1));
  }

  function Chungus() {
    return (
      <>
        {Array(count)
          .fill()
          .map((e) => {
            return (
              <Frame
                center
                width="200px"
                height="200px"
                animate={{ x: "1000px", y: "100px" }}
                transition={{
                  duration: 2,
                  loop: Infinity,
                  ease: "linear",
                }}
              >
                <img
                  key={v4()}
                  style={{ display: "block" }}
                  onClick={handleOnClick}
                  width="200px"
                  height="200px"
                  src="chungus.jpg"
                />
              </Frame>
            );
          })}
      </>
    );
  }
  return <Chungus />;
}

export default App;
