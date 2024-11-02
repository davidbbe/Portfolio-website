import React from "react";
import { FaReact, FaWordpressSimple, FaShopify } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end Developer @ Maker Media",
    location: "Sebastopol/San Francisco, CA",
    description: "WordPress theme development and Shopify theme development for the following websites: makezine.com, makerfaire.com, makershed.com, make.co, and makercamp.com.",
    icon: React.createElement(FaWordpressSimple),
    date: "2013 - 2018",
  },
  {
    title: "Front-end Engineer @ Particle Inc.",
    location: "San Francisco, CA",
    description: "I work together with the marketing team to make sure all of their technicall needs are met. I work on the particle.io website in the Gatsby.js framework. I also work on store.particle.io with Shopify theme development and custom Shopify app development. I also work on spectra.particle.io, blog.particle.io, and changelog.particle.io building custom WordPress themes.",
    icon: React.createElement(FaReact),
    date: "2018 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description: "I build a full-stack web app once per year as a way to learn new technologies and also for fun. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, and PostgreSQL. I'm open to full-time opportunities. These project have included tvroulette.app & uwhmap.com.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Gatsby.js",
  "Node.js",
  "Tailwind",
  "Styled Components",
  "Shadcn",
  "Prisma",
  "React Query",
  "GraphQL",
  "PostgreSQL",
  "Framer Motion",
] as const;
