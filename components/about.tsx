"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I help brands & businesses develop, test, deploy, and monitor web-based applications. My specialties include building interactive user interfaces and working hand in hand with designers to bring mockups and concept designs to life. Over the years I have done this in frameworks like Next.js, Gatsby.js, WordPress, and Shopify.
      </p>
      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I really <span className="underline">enjoy</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, TypeScript, Node.js, Prisma, and PostgreSQL
        </span>
        . I am also familiar with Gatsby.js, WordPress theme development, Shopify theme & app development. I am always looking to
        learn new technologies. 
        {/* I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, reading books, watching movies, and hiking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>.
      </p>
    </motion.section>
  );
}
