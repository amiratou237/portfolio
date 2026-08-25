import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

type Skill = {
  title: string;
  text: string;
  tools: string[];
  icon: React.ReactElement;
};

const skills: Skill[] = [
  {
    title: "Interfaces",
    text: "Composants dynamiques, responsives et accessibles, pensés pour l'usage réel.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Backend & API",
    text: "API REST, temps réel, authentification et intégrations de paiement tierces.",
    tools: ["NestJS", "Node.js", "Spring Boot", "Socket.IO"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="7" rx="2" />
        <rect x="2" y="14" width="20" height="7" rx="2" />
        <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
        <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
      </svg>
    ),
  },
  {
    title: "Données & Cloud",
    text: "Modélisation SQL, cache, stockage objet et déploiement conteneurisé.",
    tools: ["PostgreSQL", "Redis", "AWS S3", "Docker"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
  },
  {
    title: "Qualité & Méthodes",
    text: "Tests, revues de code, CI/CD et collaboration agile pour fiabiliser la livraison.",
    tools: ["Tests unitaires", "Git/GitHub", "CI/CD", "Agile"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <path d="M14 7h1a2 2 0 0 1 2 2v1" />
        <path d="M10 17H9a2 2 0 0 1-2-2v-1" />
      </svg>
    ),
  },
];

export const Skills = (): React.ReactElement => (
  <section id="skills" className="py-18">
    <div className="mx-auto max-w-280 px-6 sm:px-8">
      <Reveal className="mb-12 max-w-xl">
        <SectionLabel>Compétences</SectionLabel>
        <h2 className="mt-3 text-balance text-3xl font-semibold">Ce que je maîtrise, concrètement.</h2>
      </Reveal>
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <Reveal key={skill.title} delay={index * 60} className="h-full">
            <article className="group flex h-full flex-col bg-paper p-6 transition-colors duration-300 hover:bg-pine-light sm:p-7">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-pine-light text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-paper">
                {skill.icon}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{skill.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/70">{skill.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                {skill.tools.map((tool) => (
                  <li key={tool} className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[11px] text-ink/70">
                    {tool}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
