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
      <div className="h-2 bg-[#e60012] w-full animate-[swissSlide_0.6s_ease-out_forwards]" />

      <div className="max-w-[960px] mx-auto px-6 py-12 md:py-20">
        <header className="mb-20 grid md:grid-cols-[1fr_280px] gap-12 items-end">
          <div>
            <div
              className="text-[11px] uppercase tracking-[0.3em] text-[#e60012] font-bold mb-4 opacity-0 animate-[swissReveal_0.6s_ease-out_forwards]"
            >
              05
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight uppercase overflow-hidden">
              {portfolio.name.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="block opacity-0 animate-[swissSlideUp_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${0.1 + i * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </h1>
          </div>
          <div className="border-t-2 border-[#1a1a1a] pt-4 opacity-0 animate-[swissReveal_0.6s_ease-out_forwards]" style={{ animationDelay: "0.3s" }}>
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
                  className="text-xs font-bold uppercase tracking-wider text-[#e60012] hover:text-[#1a1a1a] hover:translate-x-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8 opacity-0 animate-[swissReveal_0.6s_ease-out_forwards]" style={{ animationDelay: "0.5s" }}>
            <div className="w-8 h-0.5 bg-[#e60012] scale-x-0 animate-[swissExpand_0.5s_ease-out_forwards]" style={{ animationDelay: "0.6s" }} />
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a]/40">
              About
            </h2>
          </div>
          <p className="text-lg md:text-xl leading-relaxed text-[#1a1a1a]/70 max-w-2xl opacity-0 animate-[swissReveal_0.6s_ease-out_forwards]" style={{ animationDelay: "0.7s" }}>
            {portfolio.about}
          </p>
        </section>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 opacity-0 animate-[swissReveal_0.6s_ease-out_forwards]" style={{ animationDelay: "0.9s" }}>
            <div className="w-8 h-0.5 bg-[#e60012] scale-x-0 animate-[swissExpand_0.5s_ease-out_forwards]" style={{ animationDelay: "1s" }} />
            <h2 className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#1a1a1a]/40">
              Tech Stack
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-0 border-t border-l border-[#1a1a1a]/10">
            {portfolio.techStack.map((cat, i) => (
              <div
                key={cat.category}
                className="border-b border-r border-[#1a1a1a]/10 p-6 opacity-0 animate-[swissReveal_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${1.1 + i * 0.1}s` }}
              >
                <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#e60012] mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium px-2.5 py-1 bg-[#1a1a1a]/5 text-[#1a1a1a]/60 hover:bg-[#e60012] hover:text-white hover:scale-105 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t-2 border-[#1a1a1a] pt-6 flex justify-between items-center opacity-0 animate-[swissReveal_0.6s_ease-out_forwards]" style={{ animationDelay: "1.7s" }}>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/30 font-bold">
            &copy; {portfolio.year}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/30 font-bold">
            {portfolio.name}
          </p>
        </footer>
      </div>
      <style>{`
        @keyframes swissReveal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes swissSlideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes swissSlide {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes swissExpand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
