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
            className="text-[10px] uppercase tracking-[0.4em] mb-10"
            style={{ color: "#c4a35a", fontFamily: "'DM Mono', monospace" }}
          >
            iv
          </div>
          <h1 className="text-5xl md:text-7xl font-light leading-[1.1] mb-6 italic">
            {portfolio.name}
          </h1>
          <div
            className="w-16 h-px mb-6"
            style={{ backgroundColor: "#c4a35a" }}
          />
          <p
            className="text-sm leading-relaxed max-w-md"
            style={{ color: "#7a7568", fontFamily: "'DM Mono', monospace" }}
          >
            {portfolio.title}
          </p>

          <div
            className="flex flex-wrap gap-6 mt-8 text-xs"
            style={{ color: "#5a554a", fontFamily: "'DM Mono', monospace" }}
          >
            <span>{portfolio.location}</span>
            <span>{portfolio.email}</span>
          </div>

          <div className="flex gap-6 mt-6">
            {portfolio.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-xs tracking-[0.1em] transition-colors"
                style={{
                  color: "#c4a35a",
                  fontFamily: "'DM Mono', monospace",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#e8d5a0")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#c4a35a")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <section className="mb-24">
          <p className="text-xl md:text-2xl font-light italic leading-[1.8]" style={{ color: "#a09882" }}>
            {portfolio.about}
          </p>
        </section>

        <section className="mb-24">
          <div
            className="text-[10px] uppercase tracking-[0.4em] mb-12"
            style={{ color: "#c4a35a", fontFamily: "'DM Mono', monospace" }}
          >
            Craft
          </div>
          <div className="space-y-12">
            {portfolio.techStack.map((cat) => (
              <div key={cat.category}>
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
                      className="text-base font-light italic cursor-default transition-colors"
                      style={{ color: "#7a7568" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#c4a35a")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#7a7568")
                      }
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
            className="w-16 h-px mb-6"
            style={{ backgroundColor: "#c4a35a" }}
          />
          <p
            className="text-[10px] tracking-[0.3em]"
            style={{ color: "#3a3630", fontFamily: "'DM Mono', monospace" }}
          >
            &copy; {portfolio.year} {portfolio.name}
          </p>
        </footer>
      </div>
    </div>
  );
}
