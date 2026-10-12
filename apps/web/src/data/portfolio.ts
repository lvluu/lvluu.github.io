export const portfolio = {
  name: "Luu Van Loi",
  title: "Senior Full-Stack Engineer · Java / Spring Boot · React · Kubernetes · AI-assisted engineering. Open to remote roles.",
  location: "Da Nang, Vietnam",
  email: "luuvanloi@duck.com",
  links: [
    { label: "GitHub", url: "https://github.com/lvluu" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/luuvanloi/" },
    { label: "Email", url: "mailto:luuvanloi@duck.com" },
  ],
  about:
    "I like owning a feature all the way down: the data model, the Spring Boot service, the React screen, the Helm chart it ships in, and the CI check that stops it from breaking next month. Lately most of my thinking goes into AI-assisted engineering. Agents write plenty of code. What I care about is making them show it works, and making them stop and ask when they can't.",
  work: [
    "Spring Boot + PostgreSQL backend: computed fields kept fresh through a transactional outbox, RBAC from a YAML role model, Infinispan-backed @Cacheable caches.",
    "React with Redux Saga and TypeScript, Zod on every REST boundary, Vitest and Playwright for tests.",
    "Performance: lazy routes to shrink the startup bundle, batched saga RPCs, no polling in hidden tabs, rspack persistent cache. Every perf PR carries before/after timings.",
    "Delivery: Helmfile deployments to Kubernetes, Keycloak, Jenkins pipelines, a Python (uv) tooling workspace for linting, seeding and data migration.",
    "The team's AI setup: spec-driven workflow, Claude Code agents in isolated git worktrees, conventions as CI lint rules, browser verification with screenshot evidence on every PR.",
  ],
  agentLog: [
    { tag: "spec", text: "story picked up, scope locked to 6 files" },
    { tag: "agent#1", text: "git worktree add -b feat/story origin/main" },
    { tag: "agent#2", text: "spawned for tests, sonnet" },
    { tag: "gradle", text: ":server:test  214 passed" },
    { tag: "vitest", text: "412 passed, 0 failed" },
    { tag: "lint", text: "model_lint clean, 0 findings" },
    { tag: "perf", text: "before/after timings attached to PR" },
    { tag: "pr", text: "opened, waiting for CI" },
    { tag: "verify", text: "browser check PASS, 6 screenshots" },
    { tag: "ci", text: "● green, ready to merge" },
  ],
  techStack: [
    {
      category: "Languages",
      items: ["Java", "TypeScript", "Go", "Python", "Rust", "SQL"],
    },
    {
      category: "Backend & Data",
      items: ["Spring Boot", "Node.js", "Hono", "Keycloak", "Infinispan", "PostgreSQL", "MySQL", "Redis", "SQLite", "Cloudflare D1", "MongoDB"],
    },
    {
      category: "Frontend & Testing",
      items: ["React", "Redux Saga", "Vite", "rspack", "Zod", "Playwright", "Vitest"],
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Kubernetes", "Helm", "Helmfile", "Docker / Podman", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Grafana", "Prometheus", "Cloudflare Workers"],
    },
    {
      category: "AI Tooling",
      items: ["Claude Code", "MCP servers", "Multi-agent orchestration", "LLM provider fallback chains"],
    },
    {
      category: "Self-Host / Homelab",
      items: ["Proxmox", "Linux", "Networking", "Virtualization", "Monitoring"],
    },
  ],
  projects: [
    {
      name: "PandaEnglish",
      description:
        "IELTS learning platform: practice tests, instant AI feedback and progress tracking across Reading, Listening, Writing and Speaking. Team project, I own the API.",
      tech: ["React", "TanStack Start", "Hono/tRPC", "Cloudflare Workers", "Gemini"],
      url: "https://panda-english.space/",
    },
    {
      name: "Smarter",
      description:
        "Anti-doomscroll knowledge feed. Swipe short nuggets and keep the good ones in spaced repetition so they stick.",
      tech: ["Vite", "React 19", "Hono", "Cloudflare Workers", "D1", "Gemini"],
      url: "https://smarter.chickeninkitchen.workers.dev/",
    },
    {
      name: "Primavista",
      description:
        "Sightreading-first piano practice app. Import a score, read it with aids, get a daily plan. Local-first, no backend.",
      tech: ["React", "Vite", "IndexedDB (Dexie)", "MusicXML"],
      url: "https://primavista.chickeninkitchen.workers.dev/",
    },
    {
      name: "webhook-notifier",
      description:
        "Horizontally scalable webhook delivery with per-tenant fair scheduling, retries, HMAC-SHA256 signing and a circuit breaker.",
      tech: ["Go", "PostgreSQL"],
      url: "https://github.com/lvluu/webhook-notifier",
    },
    {
      name: "git-ctx",
      description: "Git identity profiles, directory rules and worktree sync from the command line.",
      tech: ["Go", "CLI"],
      url: "https://github.com/lvluu/git-ctx",
    },
  ],
  year: 2026,
} as const;

export type Portfolio = typeof portfolio;
