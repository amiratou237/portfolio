import Link from "next/link";

const nav = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#work", label: "Projets" },
  { href: "#experience", label: "Expérience" },
];

export const Footer = (): React.ReactElement => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-280 flex-col items-center justify-between gap-6 px-6 py-8 text-center sm:flex-row sm:px-8 sm:text-left">
      <div>
        <Link href="#top" className="font-display text-lg font-semibold tracking-tight">
          bintou<span className="text-pine">.</span>dev
        </Link>
        <p className="mt-1 font-mono text-[11px] text-ink/50">
          © 2026 Bintou Amiratou Ganiyou. Tous droits réservés.
        </p>
      </div>
      <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[11px]" aria-label="Navigation pied de page">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="text-ink/55 transition-colors hover:text-pine">
            {item.label}
          </Link>
        ))}
      </nav>
      <a href="#top" className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ink/55 transition-colors hover:text-pine">
        Retour en haut
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </a>
    </div>
  </footer>
);
