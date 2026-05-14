import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyCtas, CookieBanner } from "@/components/StickyCtas";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";

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

function ErrorComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="font-[var(--font-display)] text-4xl text-white">Something broke.</h1>
        <button onClick={() => window.location.href = "/"}
          className="mt-6 bg-[#f0b429] text-black px-6 py-3 font-[var(--font-display)] tracking-wider">TRY AGAIN</button>
      </div>
    </div>
  );
}

export default function RootLayout({ isError, isNotFound }: { isError?: boolean; isNotFound?: boolean }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loaded, setLoaded] = useState(!isHome);

  useEffect(() => {
    if (!isHome) setLoaded(true);
  }, [isHome]);

  if (isError) return <ErrorComponent />;
  if (isNotFound) return <NotFoundComponent />;

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tally Junk Removal — Tallahassee's #1 Junk Haulers</title>
        <meta name="description" content="Same-day furniture, appliance, yard debris & construction removal in Tallahassee, FL. Call 850-966-1371." />
        <meta property="og:title" content="Tally Junk Removal — Tallahassee's #1 Junk Haulers" />
        <meta property="og:description" content="Same-day junk removal in Tallahassee, FL. Furniture, appliances, yard debris, construction. Call 850-966-1371." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@400;600;700&family=Inter:wght@400;500;600;700&display=swap" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Tally Junk Removal",
            telephone: "+18509661371",
            email: "info@tallyjunkremoval.com",
            image: "/favicon.png",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tallahassee",
              addressRegion: "FL",
              postalCode: "32303",
              addressCountry: "US",
            },
            areaServed: "Tallahassee, FL",
            url: "/",
            priceRange: "$$",
          })}
        </script>
      </head>
      <body>
        <CustomCursor />
        {!loaded && isHome && <Loader onDone={() => setLoaded(true)} />}
        <Nav />
        <main className="min-h-screen pt-16 sm:pt-20 honeycomb-bg">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <StickyCtas />
        <CookieBanner />
      </body>
    </html>
  );
}
