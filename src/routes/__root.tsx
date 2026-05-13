import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import appCss from "../styles.css?url";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyCtas, CookieBanner } from "@/components/StickyCtas";
import { Loader } from "@/components/Loader";
import { SITE } from "@/lib/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black honeycomb-bg px-4">
      <div className="text-center">
        <h1 className="font-[var(--font-display)] text-8xl text-[#f0b429] tracking-wider">404</h1>
        <p className="text-white/80 mt-2">This page hauled itself away.</p>
        <a href="/" className="inline-block mt-6 bg-[#f0b429] text-black px-6 py-3 font-[var(--font-display)] tracking-wider">GO HOME</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="font-[var(--font-display)] text-4xl text-white">Something broke.</h1>
        <button onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 bg-[#f0b429] text-black px-6 py-3 font-[var(--font-display)] tracking-wider">TRY AGAIN</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tally Junk Removal — Tallahassee's #1 Junk Haulers" },
      { name: "description", content: "Same-day furniture, appliance, yard debris & construction removal in Tallahassee, FL. Call 850-966-1371." },
      { property: "og:title", content: "Tally Junk Removal — Tallahassee's #1 Junk Haulers" },
      { property: "og:description", content: "Same-day junk removal in Tallahassee, FL. Furniture, appliances, yard debris, construction. Call 850-966-1371." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#000000" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: SITE.name,
          telephone: SITE.phone,
          email: SITE.email,
          image: "/favicon.png",
          address: { "@type": "PostalAddress", addressLocality: "Tallahassee", addressRegion: "FL", postalCode: SITE.zip, addressCountry: "US" },
          areaServed: "Tallahassee, FL",
          url: "/",
          priceRange: "$$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const router = useRouter();
  const isHome = router.state.location.pathname === "/";
  const [loaded, setLoaded] = useState(!isHome);

  useEffect(() => {
    if (!isHome) setLoaded(true);
  }, [isHome]);

  return (
    <QueryClientProvider client={queryClient}>
      {!loaded && isHome && <Loader onDone={() => setLoaded(true)} />}
      <Nav />
      <main className="min-h-screen pt-16 sm:pt-20 honeycomb-bg">
        <Outlet />
      </main>
      <Footer />
      <StickyCtas />
      <CookieBanner />
    </QueryClientProvider>
  );
}
