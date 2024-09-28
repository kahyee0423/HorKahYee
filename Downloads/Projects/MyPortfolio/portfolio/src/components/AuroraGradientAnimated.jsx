import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraGradientAnimated = () => {
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    // Animate the color changes in a loop
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="aurora-gradient" // Add this class
    >
      {/* Additional content can be added here */}
    </motion.section>
  );
}

export default AuroraGradientAnimated;
