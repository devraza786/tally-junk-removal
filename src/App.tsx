import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyCtas, CookieBanner } from "@/components/StickyCtas";
import { Loader } from "@/components/Loader";

import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Gallery from "@/pages/Gallery";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";
import AreasDetail from "@/pages/AreasDetail";
import NotFound from "@/pages/NotFound";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [loaded, setLoaded] = useState(!isHome);

  useEffect(() => {
    if (!isHome) setLoaded(true);
  }, [isHome]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/areas/:slug" element={<AreasDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyCtas />
      <CookieBanner />
    </>
  );
}
