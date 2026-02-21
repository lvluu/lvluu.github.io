import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/4")({
  component: InkPortfolio,
});

function InkPortfolio() {
  return (
    <div
      className="min-h-screen selection:bg-[#c4a35a] selection:text-[#0d0d0d]"
      style={{
        backgroundColor: "#0d0d0d",
        color: "#d4cfc4",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      <div className="max-w-[700px] mx-auto px-6 py-20 md:py-32">
        <header className="mb-24">
          <div
            className="text-[10px] uppercase tracking-[0.4em] mb-10 opacity-0 animate-[inkFade_1s_ease-out_forwards]"
            style={{ color: "#c4a35a", fontFamily: "'DM Mono', monospace" }}
          >
            iv
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-6 italic opacity-0 animate-[inkFade_1s_ease-out_forwards]" style={{ animationDelay: "0.2s" }}>
            {portfolio.name}
          </h1>
          <div
            className="w-0 h-px mb-6 overflow-hidden animate-[inkExpand_0.8s_ease-out_forwards]"
            style={{ backgroundColor: "#c4a35a", animationDelay: "0.5s" }}
          />
          <p
            className="text-sm leading-relaxed max-w-md opacity-0 animate-[inkFade_1s_ease-out_forwards]"
            style={{ color: "#7a7568", fontFamily: "'DM Mono', monospace", animationDelay: "0.7s" }}
          >
            {portfolio.title}
          </p>

          <div
            className="flex flex-wrap gap-6 mt-8 text-xs opacity-0 animate-[inkFade_1s_ease-out_forwards]"
            style={{ color: "#5a554a", fontFamily: "'DM Mono', monospace", animationDelay: "0.9s" }}
          >
            <span>{portfolio.location}</span>
            <span>{portfolio.email}</span>
          </div>

          <div className="flex gap-6 mt-6 opacity-0 animate-[inkFade_1s_ease-out_forwards]" style={{ animationDelay: "1.1s" }}>
            {portfolio.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-xs tracking-[0.1em] transition-all duration-300 group relative"
                style={{
                  color: "#c4a35a",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#c4a35a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </header>

        <section className="mb-24">
          <p className="text-xl md:text-2xl font-light italic leading-[1.8] opacity-0 animate-[inkFade_1s_ease-out_forwards]" style={{ color: "#a09882", animationDelay: "1.4s" }}>
            {portfolio.about}
          </p>
        </section>

        <section className="mb-24">
          <div
            className="text-[10px] uppercase tracking-[0.4em] mb-12 opacity-0 animate-[inkFade_1s_ease-out_forwards]"
            style={{ color: "#c4a35a", fontFamily: "'DM Mono', monospace", animationDelay: "1.7s" }}
          >
            Craft
          </div>
          <div className="space-y-12">
            {portfolio.techStack.map((cat, i) => (
              <div key={cat.category} className="opacity-0 animate-[inkFade_1s_ease-out_forwards]" style={{ animationDelay: `${2 + i * 0.2}s` }}>
                <div
                  className="text-xs tracking-[0.15em] mb-4"
                  style={{ color: "#5a554a", fontFamily: "'DM Mono', monospace" }}
                >
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-base font-light italic cursor-default transition-all duration-300 hover:scale-105"
                      style={{ color: "#7a7568" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <div
            className="w-16 h-px mb-6 opacity-0 animate-[inkFade_1s_ease-out_forwards]"
            style={{ backgroundColor: "#c4a35a", animationDelay: "3s" }}
          />
          <p
            className="text-[10px] tracking-[0.3em] opacity-0 animate-[inkFade_1s_ease-out_forwards]"
            style={{ color: "#3a3630", fontFamily: "'DM Mono', monospace", animationDelay: "3.2s" }}
          >
            &copy; {portfolio.year} {portfolio.name}
          </p>
        </footer>
      </div>
      <style>{`
        @keyframes inkFade {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes inkExpand {
          from { width: 0; }
          to { width: 4rem; }
        }
      `}</style>
    </div>
  );
}
