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
      <Stack>
        {Array(count)
          .fill()
          .map((e) => {
            return (
              <Frame
                width="200px"
                height="200px"
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
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
      </Stack>
    );
  }
  return <Chungus />;
}

export default App;
