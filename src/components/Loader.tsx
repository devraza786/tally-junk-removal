import { useEffect, useState } from "react";
import { gsap } from "gsap";
import logo from "@/assets/tally-logo.png";

export function Loader({ onDone }: { onDone: () => void }) {
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      const t = setTimeout(onDone, 300);
      return () => clearTimeout(t);
    }
    const tl = gsap.timeline({ onComplete: onDone });
    tl.from(".loader-ring circle", { strokeDashoffset: 1400, duration: 1.2, ease: "power2.out" }, 0)
      .from(".loader-logo", { scale: 0.5, opacity: 0, ease: "back.out(2)", duration: 0.8 }, 0.4)
      .to(".loader-logo", { scale: 1.06, duration: 0.3, yoyo: true, repeat: 1, ease: "power2.inOut" }, 1.6)
      .to(".loader-wrap", { y: "-120vh", duration: 0.5, ease: "power3.in" }, 2.6);
  }, [onDone]);

  if (skip) return null;

  return (
    <div className="loader-wrap fixed inset-0 z-[200] bg-black flex items-center justify-center honeycomb-bg">
      <svg className="loader-ring absolute" width="380" height="380" viewBox="0 0 380 380">
        <circle cx="190" cy="190" r="180" fill="none" stroke="#f0b429" strokeWidth="3"
          strokeDasharray="1131" strokeDashoffset="0" />
      </svg>
      <img src={logo} alt="Tally Junk Removal" className="loader-logo w-72 h-72 object-contain" />
      <button
        onClick={() => { setSkip(true); onDone(); }}
        className="absolute bottom-6 right-6 text-[#f0b429] font-[var(--font-heading)] text-sm tracking-widest uppercase hover:text-[#ffd166]"
      >
        Skip
      </button>
    </div>
  );
}
