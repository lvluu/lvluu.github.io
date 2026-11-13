import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";
import { AgentLog } from "@/components/agent-log";
import { DaNangWeather } from "@/components/da-nang-weather";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

// Graphite Sketch, "paper white" palette (Palletism)
const INK = "#2b2b2b";
const MUTED = "#6e6e6e";
const BORDER = "#e3e2de";
const SURFACE = "#f7f6f3";
const mono = "'JetBrains Mono', ui-monospace, monospace";
const body = "'Literata', Georgia, serif";
const display = "'Cormorant Garamond', Georgia, serif";

const label = "text-[11px] uppercase tracking-[0.3em]";

function Portfolio() {
  const [first, ...rest] = portfolio.name.split(" ");
  return (
    <div className="min-h-screen antialiased" style={{ backgroundColor: "#fff", color: INK, fontFamily: body }}>
      <div className="mx-auto max-w-[1080px] px-6 md:px-10">
        {/* HERO */}
        <header className="grid items-center gap-10 pb-20 pt-16 md:grid-cols-[1fr_1.1fr] md:pb-28 md:pt-24">
          <div className="animate-[swFade_0.7s_both]">
            <p className={`mb-6 ${label}`} style={{ color: MUTED }}>
              Portfolio &rsquo;{String(portfolio.year).slice(2)} &middot; {portfolio.location}
              <DaNangWeather />
            </p>
            <h1
              className="text-[clamp(3.5rem,10vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: display }}
            >
              {first}
              <br />
              <em className="font-medium italic">{rest.join(" ")}</em>
            </h1>
            <p className="mt-6 max-w-[34ch] text-lg leading-relaxed" style={{ color: MUTED }}>
              {portfolio.title.split(" · ")[0]}.
            </p>
            <p className="mt-2 max-w-[40ch] text-sm leading-relaxed italic" style={{ color: MUTED }}>
              {portfolio.title.split(" · ").slice(1).join(" · ")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {portfolio.links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={
                    i === 0
                      ? "px-6 py-3 text-sm transition-opacity hover:opacity-80"
                      : "border-b pb-0.5 text-sm transition-colors hover:border-current"
                  }
                  style={
                    i === 0
                      ? { backgroundColor: INK, color: "#fff" }
                      : { borderColor: INK, color: INK }
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <img
            src="/hero.jpg"
            alt="Pencil drawing of two engineers and a small robot crossing a plank bridge over a gap"
            width={1024}
            height={576}
            className="w-full animate-[swFade_0.9s_0.2s_both]"
          />
        </header>

        {/* ABOUT */}
        <Section title="About">
          <p
            className="mx-auto max-w-[30ch] text-center text-[clamp(1.6rem,3.6vw,2.4rem)] leading-[1.3]"
            style={{ fontFamily: display, fontWeight: 500 }}
          >
            {portfolio.about.split(". ").slice(0, 1).join("")}.
          </p>
          <p className="mx-auto mt-8 max-w-[58ch] text-center text-base leading-[1.8]" style={{ color: MUTED }}>
            {portfolio.about.split(". ").slice(1).join(". ")}
          </p>
          <div className="mx-auto mt-12 max-w-[560px]">
            <AgentLog lines={portfolio.agentLog} ink={SURFACE} paper={INK} accent={MUTED} font={mono} />
          </div>
        </Section>

        {/* PROJECTS */}
        <Section title="Side Projects">
          <ul className="border-t" style={{ borderColor: BORDER }}>
            {portfolio.projects.map((p, i) => (
              <li key={p.name} className="border-b" style={{ borderColor: BORDER }}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-2 py-7 transition-colors hover:bg-[#f7f6f3] md:grid-cols-[3rem_1fr_1.4fr] md:gap-8 md:px-4"
                >
                  <span className="text-sm tabular-nums" style={{ color: MUTED }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-[1.75rem] font-semibold leading-tight"
                    style={{ fontFamily: display }}
                  >
                    {p.name}
                    <span aria-hidden className="ml-2 inline-block opacity-0 transition-opacity group-hover:opacity-100">&rarr;</span>
                  </h3>
                  <div>
                    <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{p.description}</p>
                    <p className="mt-3 text-xs" style={{ color: MUTED, fontFamily: mono }}>
                      {p.tech.join(" · ")}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* STACK */}
        <Section title="Tech Stack">
          <dl className="mx-auto max-w-[760px]">
            {portfolio.techStack.map((cat) => (
              <div
                key={cat.category}
                className="grid gap-1 border-t py-5 md:grid-cols-[13rem_1fr] md:gap-8"
                style={{ borderColor: BORDER }}
              >
                <dt className="text-lg font-semibold" style={{ fontFamily: display }}>{cat.category}</dt>
                <dd className="text-sm leading-relaxed" style={{ color: MUTED }}>{cat.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <footer
          className={`flex items-center justify-between border-t py-8 ${label}`}
          style={{ borderColor: BORDER, color: MUTED }}
        >
          <span>&copy; {portfolio.year}</span>
          <span>{portfolio.name}</span>
        </footer>
      </div>

      <style>{`
        @keyframes swFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        :focus-visible { outline: 2px solid ${INK}; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: 0.001ms !important; animation-delay: 0s !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="pb-24 md:pb-32">
      <div className="mb-12 flex items-center justify-center gap-5">
        <span className="h-px w-16" style={{ backgroundColor: BORDER }} />
        <h2 className={label} style={{ color: MUTED }}>{title}</h2>
        <span className="h-px w-16" style={{ backgroundColor: BORDER }} />
      </div>
      {children}
    </section>
  );
}
