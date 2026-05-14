import { Helmet } from "react-helmet";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import g10 from "@/assets/gallery-10.jpg";
import g11 from "@/assets/gallery-11.jpg";
import g12 from "@/assets/gallery-12.jpg";
import g13 from "@/assets/gallery-13.jpg";
import g14 from "@/assets/gallery-14.jpg";
import g15 from "@/assets/gallery-15.jpg";
import g16 from "@/assets/gallery-16.jpg";
import g17 from "@/assets/gallery-17.jpg";
import { SITE } from "@/lib/site";

const PHOTOS = [g10, g11, g12, g13, g14, g15, g16, g17, g1, g2, g3, g4, g5, g6, g7, g8, g9];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(() => setIndex(i => (i === null ? null : (i - 1 + PHOTOS.length) % PHOTOS.length)), []);
  const next = useCallback(() => setIndex(i => (i === null ? null : (i + 1) % PHOTOS.length)), []);

  useEffect(() => {
    const imgs = PHOTOS.map(src => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      return img;
    });
    return () => { imgs.length = 0; };
  }, []);

  useEffect(() => {
    if (index === null) return;
    [-1, 1, 2].forEach(o => {
      const n = (index + o + PHOTOS.length) % PHOTOS.length;
      const img = new Image();
      img.src = PHOTOS[n];
    });
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  return (
    <>
      <Helmet>
        <title>Gallery — Tally Junk Removal | Before & After Hauls</title>
        <meta name="description" content="Real before-and-after photos of junk removal jobs in Tallahassee, FL by Tally Junk Removal." />
      </Helmet>

      <section className="py-20 px-4 honeycomb-bg bg-black text-center">
        <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">Real Jobs · Real Results</p>
        <h1 className="font-[var(--font-display)] text-6xl md:text-8xl text-white tracking-wider">Gallery</h1>
        <div className="h-0.5 w-32 bg-[#f0b429] mx-auto mt-4" />
        <p className="text-[#e8e4d8]/70 mt-6 text-sm max-w-2xl mx-auto">
          Fresh before-and-afters from real Tallahassee hauls. See more on our{" "}
          <a href={SITE.facebook} target="_blank" rel="noreferrer" className="text-[#f0b429] underline">Facebook page</a>.
        </p>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {PHOTOS.map((p, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group relative aspect-square overflow-hidden rounded-lg border-2 border-[#f0b429]/20 hover:border-[#f0b429] transition-all hover:shadow-[0_0_28px_rgba(240,180,41,0.45)] focus:outline-none focus:ring-2 focus:ring-[#f0b429]"
              aria-label={`Open photo ${i + 1}`}
            >
              <img src={p} alt={`Tally job ${i + 1}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-3">
                <span className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-xs">View</span>
                <ZoomIn className="text-[#f0b429]" size={18} />
              </div>
            </button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 text-[#f0b429] font-[var(--font-heading)] uppercase tracking-widest text-sm">
              <span>{index + 1} / {PHOTOS.length}</span>
              <button onClick={(e) => { e.stopPropagation(); close(); }} aria-label="Close" className="hover:text-[#ffd166] p-2">
                <X size={28} />
              </button>
            </div>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-black/60 border border-[#f0b429]/60 text-[#f0b429] hover:bg-[#f0b429] hover:text-black transition-all flex items-center justify-center"
              style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
            >
              <ChevronLeft size={28} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={PHOTOS[index]}
                alt={`Photo ${index + 1}`}
                onClick={(e) => e.stopPropagation()}
                className="max-w-[90vw] max-h-[82vh] object-contain rounded border-2 border-[#f0b429] shadow-[0_0_60px_rgba(240,180,41,0.25)]"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-black/60 border border-[#f0b429]/60 text-[#f0b429] hover:bg-[#f0b429] hover:text-black transition-all flex items-center justify-center"
              style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
            >
              <ChevronRight size={28} />
            </button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center px-4">
              <div className="flex gap-2 overflow-x-auto no-scrollbar max-w-full bg-black/60 border border-[#f0b429]/30 rounded p-2">
                {PHOTOS.map((p, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                    className={`flex-none w-14 h-14 rounded overflow-hidden border-2 transition-all ${i === index ? "border-[#f0b429] scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}
                  >
                    <img src={p} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
