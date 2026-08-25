"use client";

/** Bascule clair/sombre : pilote la classe `.dark` sur <html> et persiste le choix.
 *  L'icône affichée est gérée en pur CSS (variante `dark:`), sans état React. */
export const ThemeToggle = (): React.ReactElement => {
  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !isDark);
    try {
      localStorage.setItem("theme", isDark ? "light" : "dark");
    } catch {
      /* stockage indisponible : on ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Changer le thème (clair / sombre)"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink/80 transition-colors hover:text-pine"
    >
      {/* Lune — visible en mode sombre */}
      <svg
        className="hidden dark:block"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
      {/* Soleil — visible en mode clair */}
      <svg
        className="block dark:hidden"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    </button>
  );
};
