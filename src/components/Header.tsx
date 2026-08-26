"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#work", label: "Projets" },
  { href: "#experience", label: "Expérience" },
];

export const Header = (): React.ReactElement => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", "about", "skills", "work", "experience", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-line bg-paper/85 shadow-[0_8px_24px_-16px_rgba(27,32,28,.3)] backdrop-blur-xl"
          : "border-transparent bg-paper/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-280 items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-xl font-semibold tracking-tight"
        >
          bintou<span className="text-pine">.</span>dev
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Navigation principale">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className={`transition-colors hover:text-pine ${
                active === link.href ? "text-pine" : "text-ink/70 hover:text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/Bintou_Amiratou_CV_2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center rounded-full border border-ink px-5 font-mono text-xs font-medium transition-colors hover:bg-ink hover:text-paper sm:inline-flex"
          >
            CV ↗
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="14" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-paper px-6 py-4 md:hidden"
          aria-label="Navigation mobile"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block border-b border-line/60 py-3.5 text-base font-medium ${
                active === link.href ? "text-pine" : "text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2">
            <a
              href="/Bintou_Amiratou_CV_2026.pdf"
              download
              onClick={() => setOpen(false)}
              className="block rounded-full border border-pine/50 px-4 py-3 text-center text-sm font-semibold text-pine"
            >
              Télécharger le CV
            </a>
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-pine px-4 py-3 text-center text-sm font-semibold text-paper"
            >
              Me contacter
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
