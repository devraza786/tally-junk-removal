import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { BeforeAfter } from "@/components/BeforeAfter";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";
import g9 from "@/assets/gallery-9.jpg";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
  head: () => ({
    meta: [
      { title: "Gallery — Tally Junk Removal | Before & After Hauls" },
      { name: "description", content: "Real before-and-after photos of junk removal jobs in Tallahassee, FL by Tally Junk Removal." },
    ],
  }),
});

const PHOTOS = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <>
      <section className="py-20 px-4 honeycomb-bg bg-black text-center">
        <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">Real Jobs · Real Results</p>
        <h1 className="font-[var(--font-display)] text-6xl md:text-8xl text-white tracking-wider">Gallery</h1>
        <div className="h-0.5 w-32 bg-[#f0b429] mx-auto mt-4" />
        <p className="text-[#e8e4d8]/70 mt-6 text-sm max-w-2xl mx-auto">
          Replace these with the latest photos from our <a href={SITE.facebook} target="_blank" rel="noreferrer" className="text-[#f0b429] underline">Facebook page</a>.
        </p>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[var(--font-display)] text-3xl md:text-4xl text-white tracking-wider text-center mb-6">Drag to Reveal</h2>
          <BeforeAfter before={g1} after={g3} alt="Yard cleanup" />
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {PHOTOS.map((p, i) => (
            <button key={i} onClick={() => setOpen(p)} className="block w-full break-inside-avoid group relative">
              <img src={p} alt={`Tally job ${i + 1}`} loading="lazy" className="w-full rounded-lg border-2 border-transparent group-hover:border-[#f0b429] group-hover:shadow-[0_0_24px_rgba(240,180,41,0.4)] transition-all" />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-6 right-6 text-[#f0b429]"><X size={32} /></button>
          <img src={open} alt="" className="max-w-full max-h-full rounded border-2 border-[#f0b429]" />
        </div>
      )}
    </>
  );
}
