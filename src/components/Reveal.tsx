"use client";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Délai d'apparition en ms (staggering) */
  delay?: number;
};

/** Révèle son contenu à l'entrée dans le viewport, en respectant prefers-reduced-motion. */
export const Reveal = ({ children, className = "", delay = 0 }: RevealProps): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${className} ${visible ? "reveal-visible" : "reveal-hidden"}`}
    >
      {children}
    </div>
  );
};
