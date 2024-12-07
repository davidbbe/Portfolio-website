"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowDown } from "react-icons/bs";

export default function SectionDivider() {
  return (
    <motion.div
      className="flex justify-center mb-20 sm:my-24 text-4xl"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0, scale: 1.2 }}
      transition={{ delay: 0.125 }}
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: 10 }}
        transition={{ type: "spring", repeat: Infinity, repeatType: "mirror", ease: ["easeIn", "easeOut"], duration: 3.5, repeatDelay: -1.7, delay: 1 }}
      >
        <BsArrowDown  />
      </motion.div>
    </motion.div>
  );
}
