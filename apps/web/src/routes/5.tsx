import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/5")({
  component: SwissPortfolio,
});

function SwissPortfolio() {
  return (
    <div
      className="min-h-screen selection:bg-[#e60012] selection:text-white"
      style={{
        backgroundColor: "#fafafa",
        color: "#1a1a1a",
        fontFamily: "'Archivo', sans-serif",
      }}
    >
      <div className="h-2 bg-[#e60012] w-full" />

      <div className="max-w-[960px] mx-auto px-6 py-12 md:py-20">
        <header className="mb-20 grid md:grid-cols-[1fr_280px] gap-12 items-end">
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.3em] text-[#e60012] font-bold mb-4"
            >
              05
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight uppercase">
              {portfolio.name.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {word}
                </span>
              ))}
            </h1>
          </div>
          <div className="border-t-2 border-[#1a1a1a] pt-4">
            <p className="text-sm text-[#1a1a1a]/60 leading-relaxed mb-4">
              {portfolio.title}
            </p>
            <div className="space-y-1 text-xs text-[#1a1a1a]/40">
              <div>{portfolio.location}</div>
              <div>{portfolio.email}</div>
            </div>
            <div className="flex gap-4 mt-4">
              {portfolio.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-xs font-bold uppercase tracking-wider text-[#e60012] hover:text-[#1a1a1a] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-0.5 bg-[#e60012]" />
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a]/40">
              About
            </h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/70 max-w-2xl">
            {portfolio.about}
          </p>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-0.5 bg-[#e60012]" />
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a]/40">
              Tech Stack
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 border-t border-l border-[#1a1a1a]/10">
            {portfolio.techStack.map((cat) => (
              <div
                key={cat.category}
                className="border-b border-r border-[#1a1a1a]/10 p-6"
              >
                <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#e60012] mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 bg-[#1a1a1a]/5 text-[#1a1a1a]/60 hover:bg-[#e60012] hover:text-white transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t-2 border-[#1a1a1a] pt-6 flex justify-between items-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/30 font-bold">
            &copy; {portfolio.year}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/30 font-bold">
            {portfolio.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
