"use client";

import Card from "./card";
import { reasons } from "@/helpers/reasons";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reason() {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variant = {
    hidden: { opacity: 0, y: -65, scale: 0 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: 0.4, duration: 0.7, type: "spring" },
      stiffness: 100,
    },
  };

  return (
    <section
      id="advantages"
      className="w-full h-fit flex flex-col gap-8 py-16 md:gap-12 md:py-24 bg-secondary"
    >
      <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
        Pourquoi nous choisir?
      </h3>

      <motion.div
        ref={ref}
        variants={variant}
        initial="hidden"
        animate={controls}
        className="w-full h-fit grid grid-cols-1 md:grid-cols-3 px-4 md:px-8 gap-4 md:gap-8"
      >
        {reasons.map((reason, index) => (
          <Card key={index} reason={reason} />
        ))}
      </motion.div>
    </section>
  );
}
