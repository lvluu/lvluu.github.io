import { createFileRoute } from "@tanstack/react-router";
import { portfolio } from "@/data/portfolio";

export const Route = createFileRoute("/3")({
  component: TerminalPortfolio,
});

function TerminalPortfolio() {
  return (
    <div
      className="min-h-screen relative overflow-hidden selection:bg-[#00ff41] selection:text-black"
      style={{
        backgroundColor: "#0a0f0a",
        color: "#00ff41",
        fontFamily: "'IBM Plex Mono', 'JetBrains Mono', monospace",
      }}
    >
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,255,65,0.03) 1px, rgba(0,255,65,0.03) 2px)",
          backgroundSize: "100% 2px",
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto px-6 py-12 md:py-20">
        <header className="mb-16">
          <div className="border border-[#00ff41]/20 rounded-sm">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#00ff41]/20 bg-[#00ff41]/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60" />
              <span className="ml-3 text-[10px] text-[#00ff41]/30">
                lvluu@portfolio ~ v03
              </span>
            </div>
            <div className="p-6 space-y-3">
              <div>
                <span className="text-[#00ff41]/50">$ </span>
                <span className="text-[#00ff41]/80">whoami</span>
              </div>
              <div className="text-2xl md:text-4xl font-bold text-[#00ff41]">
                {portfolio.name}
              </div>
              <div>
                <span className="text-[#00ff41]/50">$ </span>
                <span className="text-[#00ff41]/80">cat role.txt</span>
              </div>
              <div className="text-sm text-[#00ff41]/60">
                {portfolio.title}
              </div>
              <div className="pt-2">
                <span className="text-[#00ff41]/50">$ </span>
                <span className="text-[#00ff41]/80">echo $LOCATION</span>
              </div>
              <div className="text-sm text-[#00ff41]/60">
                {portfolio.location}
              </div>
              <div className="flex flex-wrap gap-4 pt-3">
                {portfolio.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs text-[#00ff41]/50 hover:text-[#00ff41] transition-colors"
                  >
                    [{link.label}]
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <div className="mb-3">
            <span className="text-[#00ff41]/50">$ </span>
            <span className="text-[#00ff41]/80">cat about.md</span>
          </div>
          <div className="border-l-2 border-[#00ff41]/20 pl-4">
            <p className="text-sm leading-7 text-[#00ff41]/60">
              {portfolio.about}
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6">
            <span className="text-[#00ff41]/50">$ </span>
            <span className="text-[#00ff41]/80">ls -la ./stack/</span>
          </div>
          <div className="space-y-6">
            {portfolio.techStack.map((cat) => (
              <div key={cat.category}>
                <div className="text-xs text-[#00ff41]/40 mb-3">
                  drwxr-xr-x &nbsp; {cat.category.toLowerCase().replace(/ /g, "_")}/
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 border border-[#00ff41]/15 text-[#00ff41]/50 hover:border-[#00ff41]/50 hover:text-[#00ff41] hover:bg-[#00ff41]/5 transition-all cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="border-t border-[#00ff41]/10 pt-6">
          <div className="text-xs text-[#00ff41]/20">
            <span className="text-[#00ff41]/30">$ </span>
            echo "&copy; {portfolio.year} {portfolio.name}"
          </div>
          <div className="mt-1 text-xs text-[#00ff41]/30 animate-pulse">
            _
          </div>
        </footer>
      </div>
    </div>
  );
}
