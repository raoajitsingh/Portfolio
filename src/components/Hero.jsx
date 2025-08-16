import React from "react";
import { Outlet } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative isolate h-[calc(100svh-4rem)] flex items-center overflow-hidden border m-6  border-black/20 dark:border-white/20 min-h-0 pt-[env(safe-area-inset-top)] 
        pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid w-full h-full lg:grid-cols-[35%_65%] min-h-0">
        <div className="w-full h-full min-h-0">
          <img
            src="/rao2.jpg"
            alt="Ajit Singh Yadav"
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="h-full min-h-0 
            flex flex-col 
            lg:pl-8 px-4 md:px-6 
            py-6                         /* top/bottom padding so text isn't under edges */
            overflow-y-auto overscroll-contain 
            scroll-pt-6                  /* if you jump to anchors, keep 6px from top */
            pb-[env(safe-area-inset-bottom)]"
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
}
