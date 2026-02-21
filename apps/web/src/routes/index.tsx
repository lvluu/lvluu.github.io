import { createFileRoute, redirect } from "@tanstack/react-router";

const VERSIONS = ["1", "2", "3", "4", "5"] as const;

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    const pick = VERSIONS[Math.floor(Math.random() * VERSIONS.length)];
    throw redirect({ to: `/${pick}` });
  },
});
