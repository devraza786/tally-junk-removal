import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrambleText } from "@/components/ScrambleText";

export function Loader({ onDone }: { onDone: () => void }) {
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const t = setTimeout(onDone, 200);
      return () => clearTimeout(t);
    }
    const tl = gsap.timeline({ onComplete: onDone });
    tl.from(".loader-ring circle", { strokeDashoffset: 1400, duration: 1.2, ease: "power2.out" }, 0)
      .from(".hex-cell", { opacity: 0, scale: 0.6, stagger: { each: 0.015, from: "random" }, duration: 0.4, ease: "power2.out" }, 0)
      .to(".hex-cell", { opacity: 0.9, stagger: { each: 0.01, from: "random" }, duration: 0.25, yoyo: true, repeat: 1 }, 0.6)
      .to(".loader-flash", { opacity: 0.55, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.inOut" }, 1.2)
      .to(".loader-wrap", { y: "-120vh", duration: 0.6, ease: "power3.in" }, 2.6);
  }, [onDone]);

  if (skip) return null;

  // Build a small grid of hex cells for the flash effect
  const cells: { x: number; y: number }[] = [];
  for (let r = 0; r < 7; r++) for (let c = 0; c < 9; c++) {
    cells.push({ x: c * 56 + (r % 2 ? 28 : 0), y: r * 50 });
  }

  return (
    <div className="loader-wrap fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 540 360" preserveAspectRatio="xMidYMid slice">
        {cells.map((c, i) => (
          <polygon
            key={i}
            className="hex-cell"
            points={`${c.x + 14},${c.y} ${c.x + 42},${c.y} ${c.x + 56},${c.y + 25} ${c.x + 42},${c.y + 50} ${c.x + 14},${c.y + 50} ${c.x},${c.y + 25}`}
            fill="none"
            stroke="#f0b429"
            strokeWidth="1"
            opacity="0.4"
          />
        ))}
      </svg>
      <div className="loader-flash absolute inset-0 bg-[#f0b429] opacity-0 pointer-events-none" />
      <svg className="loader-ring absolute" width="380" height="380" viewBox="0 0 380 380">
        <circle cx="190" cy="190" r="180" fill="none" stroke="#f0b429" strokeWidth="3" strokeDasharray="1131" strokeDashoffset="0" />
      </svg>
      <div className="relative text-center">
        <div className="font-[var(--font-display)] text-[#f0b429] text-7xl md:text-8xl tracking-[0.15em] gold-text-glow">
          <ScrambleText text="TALLY" duration={900} delay={300} />
        </div>
        <div className="font-[var(--font-heading)] uppercase tracking-[0.4em] text-white/80 text-xs md:text-sm mt-3">
          <ScrambleText text="JUNK REMOVAL" duration={1100} delay={800} />
        </div>
      </div>
      <button
        onClick={() => { setSkip(true); onDone(); }}
        className="absolute bottom-6 right-6 text-[#f0b429] font-[var(--font-heading)] text-sm tracking-widest uppercase hover:text-[#ffd166]"
      >
        Skip
      </button>
    </div>
  );
}
