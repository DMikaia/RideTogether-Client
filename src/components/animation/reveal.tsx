"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

export default function Reveal({ children }: Props) {
  return (
    <div
      style={{
        overflow: "hidden",
        width: "fit-content",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.65 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
