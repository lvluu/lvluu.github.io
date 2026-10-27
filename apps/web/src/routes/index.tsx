import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";
import { AgentLog } from "@/components/agent-log";
import { DaNangWeather } from "@/components/da-nang-weather";

export const Route = createFileRoute("/")({
  component: SwissPortfolio,
});

const RED = "#e60012";
const INK = "#141414";
const PAPER = "#f6f5f2";
const mono = "'JetBrains Mono', ui-monospace, monospace";
const sans = "'Archivo', system-ui, sans-serif";
const expanded = "'Archivo Expanded', 'Archivo', system-ui, sans-serif";

function SwissPortfolio() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{ backgroundColor: PAPER, color: INK, fontFamily: sans }}
    >
      <div className="h-1.5 w-full origin-left animate-[swExpand_0.7s_cubic-bezier(0.16,1,0.3,1)_forwards]" style={{ backgroundColor: RED }} />

      <div className="mx-auto max-w-[1040px] px-6 py-14 md:px-10 md:py-24">
        {/* HEADER */}
        <header className="mb-24 grid gap-10 md:grid-cols-[1fr_300px] md:items-end">
          <div>
            <div
              className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em]"
              style={{ fontFamily: mono, color: RED }}
            >
              <span>01</span>
              <span className="inline-block h-px w-10 origin-left animate-[swExpand_0.6s_0.2s_cubic-bezier(0.16,1,0.3,1)_both]" style={{ backgroundColor: RED }} />
              <span style={{ color: `${INK}66` }}>Portfolio &rsquo;{String(portfolio.year).slice(2)}</span>
            </div>
            <h1
              className="text-[clamp(2.75rem,11vw,6rem)] font-black uppercase leading-[0.86] tracking-[-0.03em]"
              style={{ fontFamily: expanded, textWrap: "balance" }}
            >
              {portfolio.name.split(" ").map((word, i) => (
                <span
                  key={word}
                  className="block overflow-hidden"
                >
                  <span
                    className="block animate-[swRise_0.7s_cubic-bezier(0.16,1,0.3,1)_both]"
                    style={{ animationDelay: `${0.15 + i * 0.09}s` }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>

          <div
            className="animate-[swFade_0.7s_0.35s_both] border-t-2 pt-4"
            style={{ borderColor: INK }}
          >
            <p className="mb-5 text-sm leading-relaxed" style={{ color: `${INK}b3` }}>
              {portfolio.title}
            </p>
            <dl className="mb-5 space-y-1.5 text-xs" style={{ fontFamily: mono, color: `${INK}80` }}>
              <div className="flex justify-between gap-4">
                <dt style={{ color: `${INK}4d` }}>LOC</dt>
                <dd>{portfolio.location}<DaNangWeather /></dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt style={{ color: `${INK}4d` }}>MAIL</dt>
                <dd className="truncate">{portfolio.email}</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {portfolio.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] outline-none transition-colors duration-200 focus-visible:ring-2"
                  style={{ color: RED }}
                >
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">{link.label}</span>
                  <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </header>

        {/* ABOUT */}
        <Section n="02" title="About">
          <div className="grid gap-10 md:grid-cols-[1fr_500px] md:items-start">
            <p className="max-w-[60ch] text-lg leading-[1.7] md:text-xl" style={{ color: `${INK}c2` }}>
              {portfolio.about}
            </p>
            <AgentLog lines={portfolio.agentLog} ink={INK} paper={PAPER} accent={RED} font={mono} />
          </div>
        </Section>

        {/* PROJECTS */}
        <Section n="03" title="Side Projects">
          <div className="grid gap-px md:grid-cols-3" style={{ backgroundColor: `${INK}14` }}>
            {portfolio.projects.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-7 outline-none transition-colors duration-300 animate-[swFade_0.6s_both] focus-visible:ring-2 focus-visible:ring-inset"
                style={{ backgroundColor: PAPER, animationDelay: `${0.1 + i * 0.08}s` }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = INK)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PAPER)}
              >
                <div className="mb-4 flex items-baseline justify-between">
                  <span className="text-[11px] font-medium tabular-nums" style={{ fontFamily: mono, color: RED }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span aria-hidden className="text-sm opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ color: PAPER }}>&rarr;</span>
                </div>
                <h3 className="mb-2.5 text-xl font-extrabold uppercase tracking-tight transition-colors group-hover:text-[var(--pp)]" style={{ ["--pp" as string]: PAPER }}>
                  {p.name}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed transition-colors" style={{ color: `${INK}8c` }}>
                  <span className="group-hover:hidden">{p.description}</span>
                  <span className="hidden group-hover:inline" style={{ color: `${PAPER}b3` }}>{p.description}</span>
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="border px-2 py-0.5 text-[10px] font-medium tracking-wide transition-colors"
                      style={{ fontFamily: mono, borderColor: `${INK}1f`, color: `${INK}80` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* STACK */}
        <Section n="04" title="Tech Stack">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {portfolio.techStack.map((cat) => (
              <div key={cat.category} className="animate-[swFade_0.6s_both]">
                <h3 className="mb-4 border-b pb-2 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ borderColor: `${INK}1f`, color: RED }}>
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="cursor-default px-3 py-1 text-sm font-medium transition-colors duration-200"
                      style={{ backgroundColor: `${INK}0a`, color: `${INK}a6` }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = RED; e.currentTarget.style.color = PAPER; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = `${INK}0a`; e.currentTarget.style.color = `${INK}a6`; }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FOOTER */}
        <footer
          className="mt-8 flex items-center justify-between border-t-2 pt-6 text-[11px] font-bold uppercase tracking-[0.2em]"
          style={{ borderColor: INK, color: `${INK}4d`, fontFamily: mono }}
        >
          <span>&copy; {portfolio.year}</span>
          <span style={{ color: RED }}>&#9632;</span>
          <span>{portfolio.name}</span>
        </footer>
      </div>

      <style>{`
        @keyframes swRise { from { opacity: 0; transform: translateY(105%); } to { opacity: 1; transform: translateY(0); } }
        @keyframes swFade { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes swExpand { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes swBlink { 50% { opacity: 0; } }
        :focus-visible { outline: 2px solid ${RED}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; animation-delay: 0s !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="mb-24">
      <div className="mb-10 flex items-center gap-3 animate-[swFade_0.6s_both]">
        <span className="text-[11px] font-medium tabular-nums" style={{ fontFamily: mono, color: RED }}>{n}</span>
        <span className="inline-block h-px w-8" style={{ backgroundColor: RED }} />
        <h2 className="text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: `${INK}66` }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
