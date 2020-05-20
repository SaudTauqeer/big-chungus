import { motion } from "framer-motion";

import React, { useState } from "react";
//util
import { getRandomInt } from "../util/index";

function Chungus({ count, vw, vh, setImageLoaded, imageLoaded }) {
  console.log("chungus");
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Array(count)
        .fill()
        .map((e, i) => {
          return (
            <motion.img
              onLoad={() => setImageLoaded(true)}
              className="no-event"
              transition={{
                duration: 4,
                loop: Infinity,
                ease: "linear",
              }}
              drag
              animate={{
                x: getRandomInt(0, vw),
                y: getRandomInt(0, vh),
              }}
              key={i}
              style={imageLoaded ? { display: "block" } : { display: "none" }}
              width="200px"
              height="200px"
              src="chungus.jpg"
            />
          );
        })}
    </div>
  );
}

export default React.memo(Chungus);
