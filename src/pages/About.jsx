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
    <section className="min-w-0 space-y-10 pb-24">
      {/* ABOUT ME */}
      <SectionHeading>About Me</SectionHeading>

      <div className="grid gap-10 min-w-0 lg:grid-cols-2">
        {/* Bio */}
        <div className="min-w-0 space-y-6 leading-relaxed">
          <p className="text-black/80 dark:text-white/80 break-words">
            Hello! I’m Ajit Singh Yadav, a MERN developer who enjoys building
            clean, accessible UIs and production-ready APIs.
          </p>
          <p className="text-black/80 dark:text-white/80 break-words">
            I enjoy turning ideas into fast, reliable web experiences with
            React, Tailwind, Node, Express, and MongoDB.
          </p>
          <p className="text-black/80 dark:text-white/80 break-words">
            With a Master’s in Artificial Intelligence and a Bachelor’s in
            Computing, I bring strong expertise in ML, NLP, and deep learning.
            I’ve worked across startups and larger teams, thriving both as an
            independent contributor and as a collaborative team player.
          </p>
        </div>

        {/* Details */}
        <div className="min-w-0">
          <dl className="grid min-w-0 grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {[
              ["Name", "Ajit Singh Yadav"],
              ["Location", "Lucan, Dublin"],
              [
                "Email",
                <a
                  key="email"
                  href="mailto:yadav.ajitsingh87@gmail.com"
                  className="underline decoration-transparent hover:decoration-current"
                >
                  yadav.ajitsingh87@gmail.com
                </a>,
              ],
              [
                "Phone",
                <a
                  key="phone"
                  href="tel:+353838125487"
                  className="underline decoration-transparent hover:decoration-current"
                >
                  +353 838 125 487
                </a>,
              ],
            ].map(([label, value]) => (
              <div key={label} className="min-w-0 flex items-start gap-3">
                <dt className="shrink-0 font-semibold text-black dark:text-white">
                  {label}:
                </dt>
                <dd className="min-w-0 flex-1 text-black/80 dark:text-white/80 break-words">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          {/* CV Button */}
          <div className="mt-6">
            <a
              href="/Full_stack_developer_AJIT%20SINIGH%20YADAV_CV.pdf"
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
      <ul className="min-w-0 space-y-3">
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
      <div className="min-w-0 grid gap-6 sm:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-3 min-w-0">
            <h3 className="text-base font-semibold capitalize">{category}</h3>
            {items.map((skill) => (
              <div key={skill} className="space-y-2 min-w-0">
                <div className="flex items-center justify-between min-w-0">
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
