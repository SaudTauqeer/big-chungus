import { motion } from "framer-motion";
import React from "react";

function Chungus({ count }) {
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

export default Chungus;
