type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
  /** "pine" pour fond clair, "mint" pour fond sombre */
  tone?: "pine" | "mint";
};

export const SectionLabel = ({ children, className = "", tone = "pine" }: SectionLabelProps): React.ReactElement => (
  <div
    className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] ${
      tone === "mint" ? "text-mint" : "text-pine"
    } ${className}`}
  >
    <span className="h-px w-5 bg-current" aria-hidden="true" />
    {children}
  </div>
);
