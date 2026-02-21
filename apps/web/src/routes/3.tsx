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
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.04] animate-scanlines"
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
        <header className="mb-16 opacity-0 animate-[terminalFadeIn_0.5s_ease-out_forwards]">
          <div className="border border-[#00ff41]/20 rounded-sm">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-[#00ff41]/20 bg-[#00ff41]/5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/60 animate-pulse" style={{ animationDelay: "0s" }} />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/60 animate-pulse" style={{ animationDelay: "0.15s" }} />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/60 animate-pulse" style={{ animationDelay: "0.3s" }} />
              <span className="ml-3 text-[10px] text-[#00ff41]/30">
                lvluu@portfolio ~ v03
              </span>
            </div>
            <div className="p-6 space-y-3">
              <div className="opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "0.3s" }}>
                <span className="text-[#00ff41]/50">$ </span>
                <span className="text-[#00ff41]/80">whoami</span>
              </div>
              <div className="text-2xl md:text-4xl font-bold text-[#00ff41] opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "0.5s" }}>
                {portfolio.name}
              </div>
              <div className="opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "0.8s" }}>
                <span className="text-[#00ff41]/50">$ </span>
                <span className="text-[#00ff41]/80">cat role.txt</span>
              </div>
              <div className="text-sm text-[#00ff41]/60 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "1s" }}>
                {portfolio.title}
              </div>
              <div className="pt-2 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "1.3s" }}>
                <span className="text-[#00ff41]/50">$ </span>
                <span className="text-[#00ff41]/80">echo $LOCATION</span>
              </div>
              <div className="text-sm text-[#00ff41]/60 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "1.5s" }}>
                {portfolio.location}
              </div>
              <div className="flex flex-wrap gap-4 pt-3 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "1.8s" }}>
                {portfolio.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="text-xs text-[#00ff41]/50 hover:text-[#00ff41] hover:scale-110 transition-all duration-200"
                  >
                    [{link.label}]
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <div className="mb-3 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "2.2s" }}>
            <span className="text-[#00ff41]/50">$ </span>
            <span className="text-[#00ff41]/80">cat about.md</span>
          </div>
          <div className="border-l-2 border-[#00ff41]/20 pl-4 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "2.4s" }}>
            <p className="text-sm leading-7 text-[#00ff41]/60">
              {portfolio.about}
            </p>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "2.8s" }}>
            <span className="text-[#00ff41]/50">$ </span>
            <span className="text-[#00ff41]/80">ls -la ./stack/</span>
          </div>
          <div className="space-y-6">
            {portfolio.techStack.map((cat, i) => (
              <div key={cat.category} className="opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: `${3.1 + i * 0.2}s` }}>
                <div className="text-xs text-[#00ff41]/40 mb-3">
                  drwxr-xr-x &nbsp; {cat.category.toLowerCase().replace(/ /g, "_")}/
                </div>
                <div className="flex flex-wrap gap-2 pl-4">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 border border-[#00ff41]/15 text-[#00ff41]/50 hover:border-[#00ff41]/50 hover:text-[#00ff41] hover:bg-[#00ff41]/5 hover:scale-105 transition-all duration-200 cursor-default"
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
          <div className="text-xs text-[#00ff41]/20 opacity-0 animate-[terminalType_0.3s_ease-out_forwards]" style={{ animationDelay: "4.5s" }}>
            <span className="text-[#00ff41]/30">$ </span>
            echo "&copy; {portfolio.year} {portfolio.name}"
          </div>
          <div className="mt-1 text-xs text-[#00ff41]/30">
            <span className="animate-cursor">_</span>
          </div>
        </footer>
      </div>
      <style>{`
        @keyframes terminalFadeIn {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes terminalType {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scanlines {
          0% { background-position: 0 0; }
          100% { background-position: 0 100px; }
        }
        .animate-scanlines {
          animation: scanlines 10s linear infinite;
        }
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-cursor {
          animation: cursor-blink 1s step-end infinite;
        }
      `}</style>
    </div>
  );
}
