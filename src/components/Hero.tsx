import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "./SectionLabel";
import { SystemCard } from "./SystemCard";

export const Hero = (): React.ReactElement => (
  <section id="top" className="overflow-hidden py-18 sm:py-24">
    <div className="mx-auto grid max-w-280 items-center gap-16 px-6 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
      <div>
        <SectionLabel className="mb-6">Yaoundé, Cameroun · Disponible </SectionLabel>
        <h1 className="max-w-3xl text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-semibold tracking-tight">
          Je conçois des produits web <em className="not-italic text-pine">performants</em>, du backend à
          l&apos;interface.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-[1.06rem] leading-7 text-ink/75">
          Développeuse Full-Stack JavaScript/TypeScript basée à Yaoundé, je bâtis des applications rapides,
          fiables et orientées résultats — paiements, temps réel, e-commerce et gestion métier.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="#work"
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-pine px-6 text-sm font-semibold text-paper shadow-[0_12px_24px_-12px_rgba(14,90,70,.7)] transition-transform hover:-translate-y-0.5 active:scale-[.96]"
          >
            Voir mes projets →
          </Link>
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink px-6 text-sm font-semibold transition-colors hover:bg-ink hover:text-paper active:scale-[.96]"
          >
            Me contacter
          </Link>
        </div>
        <div className="mt-9 flex flex-wrap gap-x-7 gap-y-2.5 font-mono text-xs text-ink/60">
          <span className="flex items-center gap-1.5">
            <i className="h-1.5 w-1.5 rounded-full bg-pine" aria-hidden="true" />
            NestJS · Next.js · Spring Boot
          </span>
          <span className="flex items-center gap-1.5">
            <i className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden="true" />
            Freelance & missions agence
          </span>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-87.5">
        <div className="relative aspect-4/5 overflow-hidden rounded-[1.25rem] bg-sand shadow-[0_24px_48px_-32px_rgba(27,32,28,.5)] ring-1 ring-ink/10">
          <Image
            src="/images/pp.jpg"
            alt="Portrait de Bintou, développeuse full-stack"
            fill
            priority
            sizes="(max-width: 1024px) 320px, 380px"
            className="object-cover"
          />
        </div>
        <div className="relative -top-12 -left-6  w-[calc(100%+3rem)] sm:block">
          <SystemCard />
        </div>
      </div>
    </div>
  </section>
);
