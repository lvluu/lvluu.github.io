import { useEffect, useState } from "react";

interface LogLine {
  tag: string;
  text: string;
}

interface AgentLogProps {
  lines: readonly LogLine[];
  ink: string;
  paper: string;
  accent: string;
  font: string;
}

const STEP_MS = 900;
const VISIBLE = 7;

function stamp(offset: number): string {
  const s = 12 * 3600 + 4 * 60 + offset * 3;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`;
}

export function AgentLog({ lines, ink, paper, accent, font }: AgentLogProps) {
  const reduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [count, setCount] = useState(reduced ? lines.length : 1);

  useEffect(() => {
    if (reduced) return;
    // ponytail: restart from line 1 after a short pause at the end, no per-line state
    const id = setInterval(() => setCount((c) => (c >= lines.length + 3 ? 1 : c + 1)), STEP_MS);
    return () => clearInterval(id);
  }, [reduced, lines.length]);

  const shown = lines.slice(0, Math.min(count, lines.length)).map((l, i) => ({ ...l, i }));
  const tail = shown.slice(-VISIBLE);

  return (
    <div
      className="relative overflow-hidden border-2 p-5 text-[12px] leading-[1.9] md:text-[13px]"
      style={{ backgroundColor: ink, borderColor: ink, color: `${paper}b3`, fontFamily: font }}
      aria-label="Illustrative agent pipeline log"
    >
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]" style={{ color: `${paper}59` }}>
        <span>~/work · agent loop</span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: accent }} />
          live demo
        </span>
      </div>
      <div className="min-h-[13.3em]" role="log" aria-live="off">
        {tail.map((l) => (
          <div key={l.i} className="flex gap-3 animate-[swFade_0.35s_both] whitespace-nowrap">
            <span style={{ color: `${paper}4d` }}>[{stamp(l.i)}]</span>
            <span className="w-14 shrink-0" style={{ color: accent }}>{l.tag}</span>
            <span className="truncate">{l.text}</span>
          </div>
        ))}
        <span className="inline-block h-[1.1em] w-[0.6em] translate-y-[0.2em] animate-[swBlink_1s_steps(1)_infinite]" style={{ backgroundColor: paper }} />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `repeating-linear-gradient(0deg, ${paper} 0 1px, transparent 1px 3px)` }}
      />
    </div>
  );
}
