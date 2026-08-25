"use client";
import { useEffect, useState } from "react";

const TIME_ZONE = "Africa/Douala";

/**
 * Signature du portfolio : une carte « instrument système » temps réel.
 * Horloge locale de Yaoundé, statut de disponibilité et profil sous forme de code.
 */
export const SystemCard = (): React.ReactElement => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    let cancelled = false;
    const tick = () => {
      if (!cancelled) setNow(new Date());
    };
    const immediate = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      cancelled = true;
      clearTimeout(immediate);
      clearInterval(id);
    };
  }, []);

  const time = now
    ? new Intl.DateTimeFormat("fr-FR", { timeZone: TIME_ZONE, hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(now)
    : "--:--:--";
  const date = now
    ? new Intl.DateTimeFormat("fr-FR", { timeZone: TIME_ZONE, weekday: "short", day: "2-digit", month: "short" }).format(now)
    : "";

  return (
    <div
      className="overflow-hidden rounded-2xl bg-panel text-panel-fg shadow-[0_32px_64px_-24px_rgba(10,64,49,.55)] ring-1 ring-white/10"
      role="img"
      aria-label="Carte de profil développeuse : disponible, horloge locale de Yaoundé et extrait de code"
    >
      {/* Barre de fenêtre */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-panel-fg/50">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </div>
        <span>bintou — system</span>
        <span className="tabular-nums" aria-label={`Heure locale de Yaoundé : ${time}`}>{time}</span>
      </div>

      {/* Corps */}
      <div className="px-5 py-4 font-mono text-[13px] leading-7">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
          </span>
          <span className="text-panel-fg/55">status:</span>
          <span className="text-mint">disponible</span>
        </div>
        <div className="mt-1 text-panel-fg/35">{date} · UTC+1</div>

        <div className="mt-3 text-panel-fg/35">{"// profil.ts"}</div>
        <div>
          <span className="text-mint">const</span> <span className="text-panel-fg">dev</span> = &#123;
        </div>
        <div className="pl-4">name: <span className="text-gold">&quot;Bintou&quot;</span>,</div>
        <div className="pl-4">role: <span className="text-gold">&quot;Full-Stack&quot;</span>,</div>
        <div className="pl-4">
          stack: [<span className="text-gold">&quot;NestJS&quot;</span>, <span className="text-gold">&quot;Next.js&quot;</span>],
        </div>
        <div className="pl-4">based: <span className="text-gold">&quot;Yaoundé&quot;</span>,</div>
        <div className="pl-4">
          status: <span className="text-mint">&quot;open to work&quot;</span>,
        </div>
        <div>
          &#125;;
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-mint motion-reduce:animate-none" aria-hidden="true" />
        </div>
        <div className="mt-2 text-panel-fg/35">{"// 200 OK · uptime 100%"}</div>
      </div>
    </div>
  );
};
