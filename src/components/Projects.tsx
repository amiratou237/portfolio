import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Project = {
  image: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  href: string;
};

const projects: Project[] = [
  {
    image: "/images/e-transit.png",
    alt: "Interface de la plateforme E-Transit",
    category: "Architecture Full-Stack & Fintech",
    title: "E-Transit — Transport & Logistique",
    description:
      "API NestJS/PostgreSQL avec Stripe (séquestre/webhooks), AWS S3, Twilio et SendGrid. Réduction des erreurs de paiement de 10% et confirmation client sous 20 secondes.",
    stack: ["NestJS", "PostgreSQL", "Stripe", "AWS S3"],
    href: "https://e-transit.cm/",
  },
  {
    image: "/images/CinoBiz-Global.png",
    alt: "Interface de la plateforme CINOBIZ GLOBAL",
    category: "Projet Client-to-Business",
    title: "CINOBIZ GLOBAL",
    description:
      "Plateforme premium Next.js, Supabase et Resend. Digitalisation de la collecte de leads avec validation Zod et export Excel, réduisant le temps de traitement des prospects de 50%.",
    stack: ["Next.js", "Supabase", "TypeScript", "Resend"],
    href: "http://cinobizglobal.com/",
  },
  {
    image: "/images/SosDocta.png",
    alt: "Interface du module boutique SosDocta",
    category: "Backend & E-commerce",
    title: "SosDocta — Module Boutique",
    description:
      "Migration MongoDB vers PostgreSQL, cache Redis et stockage MinIO sous Docker. Temps de réponse serveur réduit de 15% et charge serveur diminuée de 20%.",
    stack: ["Spring Boot", "PostgreSQL", "Redis", "Docker"],
    href: "https://sosdoctatest.com/",
  },
  {
    image: "/images/helpdeskpro.png",
    alt: "Interface de la plateforme HelpDesk Pro",
    category: "SaaS Support Informatique",
    title: "HelpDesk Pro",
    description:
      "Gestion de tickets support avec Express.js, Prisma, Next.js et notifications Socket.IO en temps réel. Algorithme de priorisation réduisant le MTTR de 30%.",
    stack: ["Express.js", "Prisma", "Socket.IO", "Next.js"],
    href: "https://help-desk-pro-frontend.vercel.app/home",
  },
];

export const Projects = (): React.ReactElement => (
  <section id="work" className="py-18">
    <div className="mx-auto max-w-280 px-6 sm:px-8">
      <Reveal className="mb-12 max-w-xl">
        <SectionLabel>Projets sélectionnés</SectionLabel>
        <h2 className="mt-3 text-balance text-3xl font-semibold">Réalisations axées sur les résultats.</h2>
      </Reveal>
      <div>
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={Math.min(index * 50, 150)}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} — ouvrir le site dans un nouvel onglet`}
              className="group grid gap-8 border-t border-line py-9 md:grid-cols-[.9fr_1.1fr] md:items-center md:gap-10 last:border-b"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-sand ring-1 ring-ink/10">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[.08em] text-pine">{project.category}</span>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-pine">
                  {project.title}
                </h3>
                <p className="mt-2.5 max-w-xl text-pretty text-sm leading-6 text-ink/75">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[11px] text-ink/70 transition-colors duration-300 group-hover:border-pine/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs font-medium text-pine">
                  Voir le site
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
