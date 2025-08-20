// src/components/Hero.jsx
import React, { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

export default function Hero() {
  const paneRef = useRef(null);
  const { pathname } = useLocation();

  // Scroll the right pane to top on tab change
  useEffect(() => {
    const el = paneRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollTo({
      top: 0,
      left: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [pathname]);

  return (
    <section
      className="relative isolate h-[calc(100svh-4rem)] m-6 rounded-2xl
                        border border-black/20 dark:border-white/20 min-h-0"
    >
      <div className="grid w-full h-full min-h-0 md:grid-cols-[35%_65%]">
        {/* Left: hidden on mobile */}
        <div className="hidden md:block w-full h-full min-h-0">
          <img
            src="/rao2.jpg"
            alt="Ajit Singh Yadav"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: scrollable content */}
        <div
          ref={paneRef}
          className="h-full min-h-0 min-w-0 flex flex-col
                     px-4 md:px-6 lg:pl-8
                     py-8 md:py-8
                     overflow-y-auto overflow-x-hidden overscroll-contain
                     scroll-pt-10 pb-24 md:pb-10"
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
}
