import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bintou — Développeuse Full-Stack",
  description:
    "Portfolio de Bintou Amiratou Ganiyou — développement full-stack JavaScript/TypeScript : backend, temps réel, e-commerce et paiements. Basée à Yaoundé, Cameroun.",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactElement => (
  <html
    lang="fr"
    suppressHydrationWarning
    className={`antialiased ${display.variable} ${sans.variable} ${mono.variable}`}
  >
    <head>
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark")}catch(e){}})();`,
        }}
      />
    </head>
    <body>
      <a href="#main" className="skip-link">Aller au contenu principal</a>
      {children}
    </body>
  </html>
);
export default RootLayout;
