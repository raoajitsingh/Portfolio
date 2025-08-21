import React, { useMemo, useState, useEffect } from "react";
import Portal from "../components/Portal";

function PDFGlassModal({ open, onClose, title, src }) {
  // Fit to width; keep native toolbar visible
  const embedSrc = src ? `${src}#view=FitH` : "";

  // Lock body scroll & close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Portal>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="readme-title"
        className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4"
      >
        {/* Backdrop */}
        <button
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close"
        />

        {/* Panel: near full-screen */}
        <div
          className="
            relative w-[96vw] sm:w-[94vw] lg:w-[92vw]
            h-[92vh] sm:h-[90vh]
            max-w-none rounded-xl sm:rounded-2xl
            border border-white/20 bg-white/10 dark:bg-slate-900/40
            backdrop-blur-2xl shadow-xl flex flex-col overflow-hidden
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-white/20">
            <h2
              id="readme-title"
              className="text-base sm:text-lg font-semibold text-slate-900/90 dark:text-white"
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="rounded-full p-2
             text-slate-900 dark:text-white
             hover:bg-black/10 dark:hover:bg-white/20
             focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Body: PDF fills remaining space */}
          <div className="flex-1 min-h-0">
            <iframe title={title} src={embedSrc} className="w-full h-full" />
          </div>
        </div>
      </div>
    </Portal>
  );
}

export default function Portfolio() {
  const [openIdx, setOpenIdx] = useState(null);

  const projects = useMemo(
    () => [
      {
        title: "AI Notes App",
        desc: "MERN + OpenAI powered app for creating and managing AI-assisted notes.",
        link: "https://ai-notes-frontend-mu.vercel.app",
        readmeTitle: "AI Notes App — README",
        readmePdf: "/readmes/ai_notes_readme.pdf",
      },
      {
        title: "Authentication System",
        desc: "User registration and login with JWT, OTP verification, and secure password handling.",
        link: "https://auth-frontend-omega-one.vercel.app",
        readmeTitle: "Auth Backend (MERN) — README",
        readmePdf: "/readmes/auth_app.pdf",
      },
      {
        title: "E-commerce (MERN)",
        desc: "Full-stack shop with authentication, product catalog, cart, and orders.",
        link: null, // under construction
        readmeTitle: "E-commerce (MERN) — README",
        readmePdf: "/readmes/ecommerce.pdf",
      },
    ],
    []
  );

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
            <div
              key={p.title}
              className="group block rounded-2xl border border-black/10 dark:border-white/10 p-5 transition hover:border-black/40 dark:hover:border-white/40"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                {p.desc}
              </p>

              <div className="mt-4 flex items-center justify-between text-sm font-medium">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 underline decoration-transparent group-hover:decoration-current"
                >
                  <span>View</span> <span aria-hidden>→</span>
                </a>

                <button
                  type="button"
                  onClick={() => setOpenIdx(i)}
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white underline-offset-4 hover:underline"
                >
                  <span>Read me</span>
                </button>
              </div>
            </div>
          ) : (
            <div
              key={p.title}
              className="group relative block cursor-not-allowed rounded-2xl border border-dashed border-black/20 dark:border-white/20 p-5 opacity-70 transition md:pb-9"
            >
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">
                {p.desc}
              </p>
              <span className="mt-3 block text-xs font-medium text-red-500 transition md:absolute md:bottom-3 md:left-3 md:mt-0">
                🚧 Under Construction
              </span>
            </div>
          )
        )}
      </div>

      <PDFGlassModal
        open={openIdx !== null}
        onClose={() => setOpenIdx(null)}
        title={openIdx !== null ? projects[openIdx].readmeTitle : ""}
        src={openIdx !== null ? projects[openIdx].readmePdf : ""}
      />
    </section>
  );
}
