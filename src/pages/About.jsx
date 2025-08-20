import React from "react";
import SectionHeading from "../components/SectionHeading.jsx";

export default function AboutTab() {
  const skills = {
    frontend: [
      "React (Vite, Router)",
      "Tailwind CSS",
      "Redux / State Management",
    ],
    backend: ["Node.js & Express", "REST APIs"],
    database: ["MongoDB & Mongoose"],
    devops: ["Vercel / Netlify Deployment"],
    testing: ["Testing (Jest + RTL)"],
    ai: [
      "Python (Basics)",
      "ML/NLP Fundamentals",
      "TensorFlow / PyTorch (academic)",
    ],
  };

  const services = [
    "Full-Stack Web Development (MERN)",
    "Responsive UI Development (React + Tailwind)",
    "Landing Pages & Single-Page Applications",
    "API Design & Integration (REST, MongoDB)",
    "Performance Optimization & Accessibility",
  ];

  return (
    <section className="space-y-10 pb-24 min-w-0">
      {/* ABOUT ME */}
      <SectionHeading>About Me</SectionHeading>

      <div className="grid lg:grid-cols-2 gap-10 min-w-0">
        {/* Bio */}
        <div className="space-y-4 min-w-0">
          <p className="text-black/70 dark:text-white/70 break-words">
            Hello! I’m Ajit Singh Yadav, a MERN developer who enjoys building
            clean, accessible UIs and production-ready APIs.
          </p>
          <p className="text-black/70 dark:text-white/70">
            I enjoy turning ideas into fast, reliable web experiences with
            React, Tailwind, Node, Express, and MongoDB.
          </p>
          <p className="text-black/70 dark:text-white/70">
            With a Master’s in Artificial Intelligence and a Bachelor’s in
            Computing, I bring strong expertise in ML, NLP, and deep learning.
            I’ve worked across startups and larger teams, thriving both as an
            independent contributor and as a collaborative team player.
          </p>
        </div>

        {/* Details */}
        <div>
          <dl className="space-y-6">
            {[
              ["Name", "Ajit Singh Yadav"],
              ["Location", "Lucan, Dublin"],
              ["Email", "yadav.ajitsingh87@gmail.com"],
              ["Phone", "+353 838 125 487"],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-3">
                <dt className="w-28 font-semibold text-black/80 dark:text-white">
                  {label}:
                </dt>
                <dd className="text-black/70 dark:text-white/70 break-words">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* CV Button */}
          <div className="mt-6">
            <a
              href="/Full_stack_developer_AJIT SINIGH YADAV_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border px-5 py-2.5 text-sm font-semibold
                         border-black text-black hover:bg-black hover:text-white
                         dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <SectionHeading>Services</SectionHeading>
      <ul className="space-y-3 min-w-0">
        {services.map((s) => (
          <li
            key={s}
            className="flex items-center gap-3 text-black/80 dark:text-white/80"
          >
            <span className="h-2 w-2 rounded-full border border-black/40 dark:border-white/40" />
            {s}
          </li>
        ))}
      </ul>

      {/* TECH STACK */}
      <SectionHeading>Tech Stack</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-6 min-w-0">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-base font-semibold capitalize">{category}</h3>
            {items.map((skill) => (
              <div key={skill} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{skill}</span>
                  <span className="text-xs text-black/60 dark:text-white/60">
                    —
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-black/10 dark:bg-white/10">
                  <div className="h-full w-1/2 rounded-full bg-black/60 dark:bg-white/60" />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
