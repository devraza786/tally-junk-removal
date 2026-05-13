import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/hooks/useReducedMotion";

/** Gold hexagon cursor that activates only inside the given container ref. */
export function CustomCursor({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (prefersReducedMotion()) return;
    // Touch devices: skip
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let x = 0, y = 0, rx = 0, ry = 0;
    let active = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
    };
    const onEnter = () => { active = true; el.style.cursor = "none"; ring.style.opacity = "1"; };
    const onLeave = () => { active = false; el.style.cursor = ""; ring.style.opacity = "0"; };
    const onDown = () => ring.classList.add("cursor-down");
    const onUp = () => ring.classList.remove("cursor-down");

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      ring.style.transform = `translate3d(${rx - 22}px, ${ry - 22}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousedown", onDown);
    el.addEventListener("mouseup", onUp);
    raf = requestAnimationFrame(loop);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(raf);
      el.style.cursor = "";
    };
  }, [containerRef]);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[150] w-11 h-11 opacity-0 transition-opacity duration-200 mix-blend-difference"
        style={{
          background: "transparent",
          border: "2px solid #f0b429",
          clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
          boxShadow: "0 0 16px rgba(240,180,41,0.6)",
        }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[151] w-2 h-2 rounded-full bg-[#f0b429]"
        style={{ boxShadow: "0 0 10px #f0b429" }}
      />
      <style>{`.cursor-down { transform-origin: center; filter: drop-shadow(0 0 12px #f0b429); }`}</style>
    </>
  );
}
