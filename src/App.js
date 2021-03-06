import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Chungus from "./Components/Chungus";
import "./index.css";

const noTrackClasses = ["no-event"];
const events = ["click", "resize"];

function App() {
  const [vw, setVw] = useState(document.documentElement.clientWidth);
  const [vh, setVh] = useState(document.documentElement.clientHeight);
  const [imageLoaded, setImageLoaded] = useState(false);

  function clickHandler(e) {
    const currentElClass = e.target.className;

    if (!noTrackClasses.includes(currentElClass)) {
      setCount((prev) => setCount(prev + 1));
    }
  }

  function resizeHandler() {
    setVw(document.documentElement.clientWidth);
    setVh(document.documentElement.clientHeight);
  }
  useEffect(() => {
    events.forEach((event) => {
      switch (event) {
        case "click":
          window.addEventListener(event, clickHandler);
          break;
        case "resize":
          window.addEventListener(event, resizeHandler);
          break;
        default:
          break;
      }
    });

    return () => {
      events.forEach((event) => window.removeEventListener(event));
    };
  }, []);

  const [count, setCount] = useState(1);

  return (
    <>
      <Chungus
        setImageLoaded={setImageLoaded}
        imageLoaded={imageLoaded}
        vh={vh}
        vw={vw}
        count={count}
      />
      {!imageLoaded ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
          }}
        >
          <p style={{ textAlign: "center" }}>Loading big chungus</p>
        </div>
      ) : null}
      <div style={{ position: "absolute", bottom: 0, zIndex: "999999" }}>
        <p
          className="no-event"
          style={{
            cursor: "pointer",
            fontWeight: "bold",
            letterSpacing: "3px",
            paddingLeft: "1rem",
          }}
        >
          Settings
        </p>
      </div>
    </>
  );
}

export default App;
