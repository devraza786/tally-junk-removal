import { useState, useRef, useEffect } from "react";

export function BeforeAfter({ before, after, alt = "" }: { before: string; after: string; alt?: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const move = (clientX: number) => {
      if (!ref.current || !dragging.current) return;
      const r = ref.current.getBoundingClientRect();
      const p = ((clientX - r.left) / r.width) * 100;
      setPos(Math.max(0, Math.min(100, p)));
    };
    const onMove = (e: MouseEvent) => move(e.clientX);
    const onTouch = (e: TouchEvent) => e.touches[0] && move(e.touches[0].clientX);
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div ref={ref} className="relative w-full aspect-square overflow-hidden rounded-lg border-2 border-[#f0b429]/50 select-none">
      <img src={after} alt={alt + " after"} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt={alt + " before"} className="w-full h-full object-cover" />
      </div>
      <span className="absolute top-3 left-3 bg-black/70 text-[#f0b429] font-[var(--font-display)] text-sm px-3 py-1 rounded tracking-widest">BEFORE</span>
      <span className="absolute top-3 right-3 bg-black/70 text-[#f0b429] font-[var(--font-display)] text-sm px-3 py-1 rounded tracking-widest">AFTER</span>
      <div
        className="absolute top-0 bottom-0 w-1 bg-[#f0b429] cursor-ew-resize"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#f0b429] flex items-center justify-center text-black font-bold"
          style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}>
          ⇔
        </div>
      </div>
    </div>
  );
}
