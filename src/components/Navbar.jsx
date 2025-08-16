import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../App";

function ReactLogo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 841.9 595.3"
      aria-hidden="true"
      role="img"
    >
      <g fill="none" stroke="currentColor" strokeWidth="24">
        <ellipse cx="420.9" cy="296.5" rx="250" ry="100" />
        <ellipse
          cx="420.9"
          cy="296.5"
          rx="250"
          ry="100"
          transform="rotate(60 420.9 296.5)"
        />
        <ellipse
          cx="420.9"
          cy="296.5"
          rx="250"
          ry="100"
          transform="rotate(120 420.9 296.5)"
        />
      </g>
      <circle cx="420.9" cy="296.5" r="40" fill="currentColor" />
    </svg>
  );
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-lg text-sm font-medium transition-colors
     ${
       isActive
         ? "bg-black text-white dark:bg-white dark:text-black"
         : "text-black hover:bg-black/10 dark:text-white dark:hover:bg-white/10"
     }`;

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur
                       dark:border-white/10 dark:bg-black/80"
    >
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 md:px-6">
        {/* Logo + Name */}
        <NavLink to="/" className="inline-flex items-center gap-3">
          <ReactLogo className="h-6 w-6 animate-spin-slow text-black dark:text-white" />
          <span className="text-lg font-semibold tracking-tight">
            Ajit Singh Yadav
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={navLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
          <button
            onClick={toggleTheme}
            className="ml-2 rounded-lg border border-black/20 px-3 py-1.5 text-sm
                       hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            {isDark ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden rounded-lg p-2 hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-black dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-white dark:bg-black">
          <div className="flex flex-col px-4 py-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={navLinkClass}
              >
                {link.label}
              </NavLink>
            ))}
            <button
              onClick={() => {
                toggleTheme();
                setMenuOpen(false);
              }}
              className="mt-2 rounded-lg border border-black/20 px-3 py-1.5 text-sm
                         hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
