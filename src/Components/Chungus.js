import { motion } from "framer-motion";
import React from "react";

function Chungus({ count, vw, vh }) {
  console.log("chungus");
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {Array(count)
        .fill()
        .map((e, i) => {
          return (
            <motion.img
              id="chungus"
              transition={{
                duration: 10,
                loop: Infinity,
                ease: "linear",
              }}
              drag
              animate={{
                x: vw - 200,
                y: vh - 200,
              }}
              key={i}
              style={{ display: "block" }}
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
