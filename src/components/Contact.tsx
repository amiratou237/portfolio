import Link from "next/link";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export const Contact = (): React.ReactElement => (
  <section id="contact" className="mx-4 rounded-3xl bg-panel text-center text-panel-fg sm:mx-6">
    <Reveal className="mx-auto max-w-280 px-6 py-20 sm:px-8 sm:py-24">
      <SectionLabel tone="mint" className="justify-center">
        Disponibilité — Immédiate
      </SectionLabel>
      <h2 className="mx-auto mt-5 max-w-3xl text-balance text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight text-panel-fg">
        Construisons <em className="not-italic text-mint">des applications à fort impact</em>, ensemble.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-pretty text-panel-fg/70">
        Ouverte aux opportunités de développement web et logiciel. Basée à Yaoundé, disponible rapidement.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="mailto:bintouamiratou248@gmail.com"
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-pine px-6 text-sm font-semibold text-paper shadow-[0_12px_24px_-12px_rgba(14,90,70,.9)] transition-transform hover:-translate-y-0.5 active:scale-[.96]"
        >
          Me contacter →
        </Link>
        <a
          href="/Bintou_Amiratou_CV_2026.pdf"
          download
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-mint/40 px-6 text-sm font-semibold text-mint transition-colors hover:bg-mint hover:text-panel"
        >
          Télécharger le CV
        </a>
        <a
          href="https://github.com/amiratou237"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border border-panel-fg/30 px-6 text-sm font-semibold text-panel-fg transition-colors hover:border-panel-fg hover:bg-panel-fg hover:text-panel"
        >
          GitHub ↗
        </a>
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-xs text-panel-fg/55">
        <span>bintouamiratou248@gmail.com</span>
        <span>688 92 39 69</span>
        <a href="https://github.com/amiratou237" target="_blank" rel="noreferrer" className="hover:text-panel-fg">
          GitHub
        </a>
        <span>Yaoundé, Cameroun</span>
      </div>
    </Reveal>
  </section>
);
