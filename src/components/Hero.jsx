// src/components/Hero.jsx
import React from "react";
import { Outlet } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="
        relative isolate
        h-[calc(100svh-4rem)]            /* safe viewport height */
        flex items-center overflow-hidden
        m-6 rounded-2xl
        border border-black/20 dark:border-white/20
        min-h-0
        pt-[env(safe-area-inset-top)]
        pb-[env(safe-area-inset-bottom)]
      "
    >
      <div className="grid w-full h-full min-h-0 md:grid-cols-[35%_65%]">
        {/* Left: fixed photo (hidden on mobile) */}
        <div className="hidden md:block w-full h-full min-h-0">
          <img
            src="/rao2.jpg"
            alt="Ajit Singh Yadav"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: scrollable content area */}
        <div
          className="
            h-full min-h-0 min-w-0
            flex flex-col
            px-4 md:px-6 lg:pl-8
            py-6 md:py-6 lg:py-0
            overflow-x-hidden
            overflow-y-auto overscroll-contain
            scroll-pt-6
            pb-[env(safe-area-inset-bottom)]
          "
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
}
