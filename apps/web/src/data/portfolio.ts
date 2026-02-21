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
  year: 2026,
} as const;

export type Portfolio = typeof portfolio;
