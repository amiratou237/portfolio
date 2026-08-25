import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const tags = ["Architecture Backend", "Paiement & Webhooks", "Optimisation & Cache", "Lead Gen & SaaS"];

export const About = (): React.ReactElement => (
  <section id="about" className="mx-4 rounded-3xl bg-pine-light sm:mx-6">
    <div className="mx-auto max-w-280 px-6 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionLabel>À propos</SectionLabel>
          <h2 className="mt-3 max-w-lg text-balance text-3xl font-semibold">
            Je transforme la technique en impact business concret.
          </h2>
          <p className="mt-4 font-mono text-xs text-ink/55">
            BTS Génie Logiciel · Full-Stack JS/TS · Yaoundé
          </p>
        </Reveal>
        <Reveal delay={80} className="text-pretty text-base leading-7 text-ink/80">
          <p>
            Diplômée d&apos;un BTS en Génie Logiciel, je développe des architectures backend robustes et des
            interfaces frontend modernes pour des plateformes e-commerce, de mise en relation et de gestion
            métier.
          </p>
          <p className="mt-4">
            Spécialisée en intégration de systèmes tiers (Stripe, Twilio, SendGrid), authentification
            multi-fournisseurs et optimisation de performances de bases de données relationnelles.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line bg-paper px-3 py-1.5 font-mono text-[11px] text-ink/75">
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
