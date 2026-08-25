import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const experiences = [
  {
    date: "17 Avr. 2026 — Présent",
    company: "ICT DIGITAL HUB",
    role: "Développeuse Full Stack (Projet E-Transit)",
    description:
      "Architecture REST backend NestJS/PostgreSQL, sécurisation multi-OAuth (Google, Apple), stockage cloud AWS S3, séquestre Stripe et notifications Twilio/SendGrid.",
  },
  {
    date: "31 Juil. 2025",
    company: "MM SUN CARE",
    role: "Développeuse Web (Module E-Commerce)",
    description:
      "Optimisation du backend Spring Boot et PostgreSQL, cache Redis, stockage d'images MinIO, dockerisation et tests unitaires pour fiabiliser la codebase.",
  },
  {
    date: "2023 — 2024",
    company: "Freelance",
    role: "Développeuse Full Stack & WordPress",
    description:
      "Applications React, Next.js, Node.js et thèmes WordPress sur-mesure. Optimisation SEO et des temps de chargement (PageSpeed).",
  },
];

export const Experience = (): React.ReactElement => (
  <section id="experience" className="py-18">
    <div className="mx-auto max-w-280 px-6 sm:px-8">
      <Reveal className="mb-12 max-w-xl">
        <SectionLabel>Expérience</SectionLabel>
        <h2 className="mt-3 text-balance text-3xl font-semibold">Parcours professionnel.</h2>
      </Reveal>
      <div>
        {experiences.map((item, index) => (
          <Reveal key={item.company} delay={Math.min(index * 50, 150)}>
            <article className="group grid gap-1 border-t border-line py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <time className="pt-0.5 font-mono text-xs text-ink/55">{item.date}</time>
              <div>
                <h3 className="font-sans text-base font-semibold transition-colors duration-300 group-hover:text-pine">
                  {item.company}
                </h3>
                <div className="mt-1 text-sm font-semibold text-pine">{item.role}</div>
                <p className="mt-1.5 max-w-2xl text-sm leading-6 text-ink/70">{item.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
