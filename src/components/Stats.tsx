import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !ref.current) return;
    const els = ref.current.querySelectorAll<HTMLElement>("[data-count]");
    els.forEach(el => {
      const target = +(el.dataset.count || "0");
      gsap.fromTo(el, { textContent: 0 }, {
        textContent: target, duration: 2, ease: "power2.out", snap: { textContent: 1 },
        scrollTrigger: { trigger: el, start: "top 85%" },
      });
    });
  }, []);
  return (
    <section ref={ref} className="bg-[#111108] honeycomb-bg py-12 border-y border-[#f0b429]/30">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-6 text-center">
        <div className="border-r border-[#f0b429]/30 last:border-r-0">
          <div className="font-[var(--font-display)] text-5xl md:text-6xl text-[#f0b429]">
            <span data-count="500">0</span>+
          </div>
          <div className="font-[var(--font-heading)] uppercase text-white/80 text-xs md:text-sm tracking-widest mt-2">Loads Hauled</div>
        </div>
        <div className="border-r border-[#f0b429]/30">
          <div className="font-[var(--font-display)] text-5xl md:text-6xl text-[#f0b429]">Same-Day</div>
          <div className="font-[var(--font-heading)] uppercase text-white/80 text-xs md:text-sm tracking-widest mt-2">Service Available</div>
        </div>
        <div>
          <div className="font-[var(--font-display)] text-5xl md:text-6xl text-[#f0b429]">
            <span data-count="100">0</span>%
          </div>
          <div className="font-[var(--font-heading)] uppercase text-white/80 text-xs md:text-sm tracking-widest mt-2">Satisfaction</div>
        </div>
      </div>
    </section>
  );
}
