import React, { useState } from "react";

export default function Portfolio() {
  const [hovered, setHovered] = useState(null);

  const projects = [
    {
      title: "AI Notes App",
      desc: "MERN + OpenAI powered app for creating and managing AI-assisted notes.",
      link: "https://ai-notes-frontend-mu.vercel.app",
    },
    {
      title: "Authentication System",
      desc: "User registration and login with JWT, OTP verification, and secure password handling.",
      link: null,
    },
    {
      title: "E-commerce (MERN)",
      desc: "Full-stack shop with authentication, product catalog, cart, and orders.",
      link: null, // under construction
    },
  ];

  return (
    <section aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading" className="text-3xl font-bold">
        Featured Work
      </h2>

      <p className="text-black/70 dark:text-white/70 mb-10">
        A selection of web apps I’ve built with MERN and AI.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) =>
          p.link ? (
            // ✅ Active project
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-black/10 dark:border-white/10 
                         p-5 transition hover:border-black/40 dark:hover:border-white/40"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                {p.desc}
              </p>
              <span
                className="mt-4 inline-block text-sm font-medium underline decoration-transparent 
                           group-hover:decoration-current"
              >
                View →
              </span>
            </a>
          ) : (
            // 🚧 Disabled project with responsive badge placement
            <div
              key={p.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative block cursor-not-allowed rounded-2xl border
             border-dashed border-black/20 dark:border-white/20
             p-5 opacity-70 transition
             hover:animate-[shake_0.4s_ease-in-out]
             md:pb-9`}
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                {p.desc}
              </p>

              <span
                className={`
      mt-3 block text-xs font-medium text-red-500
       transition
      md:absolute md:bottom-3 md:left-3 md:mt-0
    `}
              >
                🚧 Under Construction
              </span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
