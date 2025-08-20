import React from "react";
import clsx from "clsx"; // optional: npm i clsx (or remove clsx and use template strings)

export default function SectionHeading({
  children,
  align = "left", // "left" | "center" | "right"
  className = "",
}) {
  const justify =
    align === "center"
      ? "justify-center"
      : align === "right"
      ? "justify-end"
      : "justify-start";

  return (
    <div
      className={clsx("flex items-center gap-4 min-w-0", justify, className)}
    >
      <h3
        className="text-xs sm:text-sm font-extrabold uppercase
    whitespace-normal sm:whitespace-nowrap 
    tracking-[0.2em] sm:tracking-[0.35em]
    min-w-0 "
      >
        {children}
      </h3>
      <hr className="flex-1 border-t border-black/20 dark:border-white/20" />
    </div>
  );
}
