"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, url, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-4xl border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <a href={url} target='_blank' className="block">
          <div className="pt-4 pb-7 px-6 sm:px-14 sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[40%]">
            <h3 className="mb-1 text-2xl font-semibold">{title}</h3>
            <p className="mb-2 text-sm leading-relaxed text-gray-900 dark:text-white/70">{url}</p>
            <p className="mb-2 leading-relaxed text-gray-600 dark:text-white/70">{description}</p>
            <ul className="flex flex-wrap mt-4 gap-1 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <Image
            src={imageUrl}
            alt={`Screenshot of ${title}`}
            quality={95}
            className="block mx-auto mb-[-20%] sm:mb-0 sm:mx-0 sm:absolute top-8 sm:-right-40 w-[90%] sm:w-[57%] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-40"
          />
        </a>
      </section>
    </motion.div>
  );
}
