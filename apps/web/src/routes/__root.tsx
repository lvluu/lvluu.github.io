import { HeadContent, Outlet, createRootRouteWithContext } from "@tanstack/react-router";

import "../index.css";

export interface RouterAppContext {}

export const Route = createRootRouteWithContext<RouterAppContext>()({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        title: "Luu Van Loi - Software Engineer",
      },
      {
        name: "description",
        content:
          "Software Engineer | Full-Stack Development | DevOps & Cloud Automation",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Manrope:wght@200..800&family=Outfit:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Syne:wght@400..800&family=Archivo:wght@100..900&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  );
}
