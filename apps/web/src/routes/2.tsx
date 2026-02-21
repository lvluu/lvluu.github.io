import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/2")({
  component: EditorialPortfolio,
});

function EditorialPortfolio() {
  return (
    <div
      className="min-h-screen selection:bg-[#2a2a2a] selection:text-[#f5f0e8]"
      style={{
        backgroundColor: "#f5f0e8",
        color: "#2a2a2a",
      }}
    >
      <div className="max-w-[780px] mx-auto px-6 py-16 md:py-24">
        <header className="mb-20 pb-12 border-b border-[#2a2a2a]/10">
          <p
            className="text-xs tracking-[0.2em] uppercase text-[#2a2a2a]/40 mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Portfolio &mdash; No. 02
          </p>
          <h1
            className="text-5xl md:text-7xl font-normal leading-[1.05] mb-6"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {portfolio.name}
          </h1>
          <p
            className="text-lg text-[#2a2a2a]/60 italic max-w-lg"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            {portfolio.title}
          </p>

          <div
            className="flex flex-wrap gap-6 mt-6 text-xs tracking-wide text-[#2a2a2a]/40"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <span>{portfolio.location}</span>
            <span>{portfolio.email}</span>
          </div>

          <div className="flex gap-5 mt-6">
            {portfolio.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-sm text-[#2a2a2a]/60 hover:text-[#2a2a2a] underline underline-offset-4 decoration-[#2a2a2a]/20 hover:decoration-[#2a2a2a]/60 transition-colors"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <section className="mb-20">
          <h2
            className="text-xs tracking-[0.2em] uppercase text-[#2a2a2a]/40 mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            About
          </h2>
          <p
            className="text-xl md:text-2xl leading-relaxed text-[#2a2a2a]/80 italic"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            {portfolio.about}
          </p>
        </section>

        <section className="mb-20">
          <h2
            className="text-xs tracking-[0.2em] uppercase text-[#2a2a2a]/40 mb-10"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {portfolio.techStack.map((cat) => (
              <div key={cat.category} className="border-t border-[#2a2a2a]/10 pt-5">
                <h3
                  className="text-sm font-semibold mb-4 text-[#2a2a2a]/70"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm italic px-3 py-1 rounded-full border border-[#2a2a2a]/10 text-[#2a2a2a]/60 hover:border-[#2a2a2a]/30 hover:text-[#2a2a2a] transition-colors cursor-default"
                      style={{ fontFamily: "'Libre Baskerville', serif" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-[#2a2a2a]/10 pt-8 text-center">
          <p
            className="text-xs text-[#2a2a2a]/30"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            &copy; {portfolio.year} {portfolio.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
