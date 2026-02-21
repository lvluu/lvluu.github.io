import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/1")({
  component: BrutalistPortfolio,
});

function BrutalistPortfolio() {
  return (
    <div
      className="min-h-screen bg-black text-white selection:bg-white selection:text-black"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 py-16 md:py-24">
        <header className="mb-20 border-b border-white/10 pb-16">
          <div className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6">
            Portfolio / 01
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-[0.85] mb-8">
            {portfolio.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>
          <p className="text-sm uppercase tracking-[0.2em] text-white/50 max-w-lg">
            {portfolio.title}
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-2 mt-8 text-xs uppercase tracking-[0.15em] text-white/30">
            <span>{portfolio.location}</span>
            <span>{portfolio.email}</span>
          </div>

          <div className="flex gap-6 mt-8">
            {portfolio.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white border-b border-white/20 hover:border-white pb-0.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <section className="mb-20">
          <div className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-6">
            About
          </div>
          <p className="text-white/70 text-sm leading-7 max-w-2xl">
            {portfolio.about}
          </p>
        </section>

        <section className="mb-20">
          <div className="text-[10px] uppercase tracking-[0.5em] text-white/30 mb-10">
            Stack
          </div>
          <div className="space-y-10">
            {portfolio.techStack.map((cat) => (
              <div key={cat.category}>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-4 border-l-2 border-white/20 pl-3">
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs uppercase tracking-[0.1em] px-3 py-1.5 border border-white/15 text-white/60 hover:border-white/60 hover:text-white transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-white/10 pt-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
            &copy; {portfolio.year} {portfolio.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
