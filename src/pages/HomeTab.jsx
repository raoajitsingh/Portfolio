import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";

export default function HomeTab() {
  const words = useMemo(() => ["Developer", "Builder"], []);
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = isDeleting ? 150 : 200;
    const currentWord = words[index % words.length];

    if (!isDeleting && subText.length === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1000); // pause after word
      return;
    }
    if (isDeleting && subText.length === 0) {
      setTimeout(() => {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 500); // pause before next word
      return;
    }

    const timer = setTimeout(() => {
      setSubText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [subText, isDeleting, index, words]);

  return (
    <div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-5 sm:mt-15">
        AJIT SINGH YADAV
      </h1>
      <p className="mt-6 max-w-2xl text-black/70 dark:text-white/70">
        Full-stack (MERN) developer crafting fast, accessible, and elegant web
        apps with React & Tailwind.
      </p>
      <h2 className="mt-10 text-3xl font-bold">
        Creative <span className="text-cyan-500">{subText}</span>
        <span className="border-r-2 border-cyan-500 animate-pulse ml-1"></span>
      </h2>
      <div className="mt-10 sm:mt-20 flex gap-4">
        <NavLink
          to="/contact"
          className="rounded-2xl border px-6 py-3 text-sm font-semibold transition
                     border-black dark:border-white hover:bg-black hover:text-white
                     dark:hover:bg-white dark:hover:text-black"
        >
          Get in touch
        </NavLink>
      </div>
    </div>
  );
}
