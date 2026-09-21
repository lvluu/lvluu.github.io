export const portfolio = {
  name: "Luu Van Loi",
  title: "Software Engineer | Full-Stack Development | DevOps & Cloud Automation",
  location: "Da Nang, Vietnam",
  email: "luuvanloi@duck.com",
  links: [
    { label: "GitHub", url: "https://github.com/lvluu" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/luuvanloi/" },
    { label: "Email", url: "mailto:luuvanloi@duck.com" },
  ],
  about:
    "I'm a Software Engineer passionate about building full-stack applications, cloud automation, and system reliability. I work across Go, Java, Node.js, React, AWS, Kubernetes, Terraform, and CI/CD pipelines — building scalable systems and turning complex problems into elegant solutions. I also enjoy experimenting with Proxmox, Linux, and self-hosting in my free time.",
  techStack: [
    {
      category: "Languages & Tools",
      items: ["Go", "Python", "Node.js", "Java", "React", "GitHub Actions", "Linux"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "Redis", "SQLite", "Cloudflare D1", "MongoDB"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Kubernetes", "Docker", "Terraform", "Ansible", "Grafana", "Prometheus", "Helm", "Jenkins"],
    },
    {
      category: "Self-Host / Homelab",
      items: ["Proxmox", "Networking", "Virtualization", "Monitoring"],
    },
  ],
  projects: [
    {
      name: "PandaEnglish",
      description:
        "IELTS learning platform — practice tests, instant AI feedback, and progress tracking across Reading, Listening, Writing, and Speaking.",
      tech: ["React", "TanStack Start", "Hono/tRPC", "Cloudflare Workers", "Gemini"],
      url: "https://panda-english.space/",
    },
    {
      name: "Smarter",
      description:
        "Anti-doomscroll knowledge-feed PWA — swipe short nuggets, keep the good ones into spaced repetition so they stick.",
      tech: ["Vite", "React 19", "Hono", "Cloudflare Workers", "D1", "Gemini"],
      url: "https://smarter.chickeninkitchen.workers.dev/",
    },
    {
      name: "Primavista",
      description:
        "Sightreading-first piano practice app — import a score, read it with aids, get a daily plan. Local-first, no backend.",
      tech: ["React", "Vite", "IndexedDB (Dexie)", "MusicXML"],
      url: "https://primavista.chickeninkitchen.workers.dev/",
    },
  ],
  year: 2026,
} as const;

export type Portfolio = typeof portfolio;
