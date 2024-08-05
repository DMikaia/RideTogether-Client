"use client";

import { Button } from "@/components/common/button";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function Offer() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    blobLeft: {
      hidden: { opacity: 0, x: "-100%" },
      visible: {
        opacity: 1,
        x: 0,
        transition: { delay: 0.3, duration: 0.6, type: "spring" },
        stiffness: 100,
      },
    },
    blobRight: {
      hidden: { opacity: 0, x: "225%", scale: 0 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { delay: 0.4, duration: 0.7, type: "spring" },
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="offer"
      ref={ref}
      className="relative px-4 md:px-48 w-full h-fit flex flex-col gap-8 py-16 md:gap-12 md:py-24 overflow-hidden"
    >
      <motion.svg
        variants={variants.blobLeft}
        initial="hidden"
        animate={controls}
        className="w-32 h-32 md:w-fit md:h-fit absolute -left-16 md:-left-32 bottom-0 z-0"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={256}
      >
        <path
          fill="#BAD9DE"
          className="opacity-50"
          d="M34.8,-59.8C46.1,-53.7,56.9,-46.4,63,-36.2C69.1,-26.1,70.5,-13,65.2,-3C59.9,6.9,48,13.9,40.2,21.2C32.4,28.4,28.8,36.1,22.8,47.3C16.8,58.4,8.4,73.2,-1.1,75C-10.5,76.8,-21.1,65.8,-32.9,58C-44.7,50.2,-57.8,45.6,-64.9,36.4C-72,27.3,-73.1,13.7,-66.9,3.6C-60.7,-6.5,-47.3,-13,-42,-25.2C-36.6,-37.3,-39.3,-55,-33.6,-64.3C-28,-73.7,-14,-74.6,-1.1,-72.6C11.7,-70.7,23.5,-65.8,34.8,-59.8Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      <motion.svg
        variants={variants.blobRight}
        initial="hidden"
        animate={controls}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={256}
        className="w-32 h-32 md:w-fit md:h-fit absolute -right-8 md:-right-16 top-2 z-0"
      >
        <path
          fill="#BAD9DE"
          className="opacity-50"
          d="M37,-58.7C49,-57.1,60.6,-49.4,69.7,-38.6C78.9,-27.8,85.7,-13.9,81.9,-2.2C78,9.5,63.6,18.9,56.2,32.8C48.8,46.7,48.4,65,40.2,74.5C32.1,84.1,16,84.9,2.9,79.8C-10.1,74.7,-20.3,63.7,-31.4,55.8C-42.6,48,-54.7,43.3,-65.3,34.5C-75.9,25.8,-84.9,12.9,-85.5,-0.3C-86.1,-13.5,-78.2,-27.1,-67.1,-34.9C-56,-42.8,-41.6,-44.9,-29.8,-46.7C-18.1,-48.5,-9.1,-49.8,1.7,-52.8C12.5,-55.8,25,-60.3,37,-58.7Z"
          transform="translate(100 100)"
        />
      </motion.svg>

      <div className="w-full text-center flex flex-col gap-4 z-10">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center">
          Vous avez une voiture ?
        </h1>

        <p className="text-muted-foreground">
          Faites des économies sur vos déplacements, publiez une annonce de
          covoiturage!
        </p>
      </div>

      <Link href={"/login"} className="self-center">
        <Button variant={"accent"} className="w-fit px-8">
          Proposer des places
        </Button>
      </Link>
    </section>
  );
}
