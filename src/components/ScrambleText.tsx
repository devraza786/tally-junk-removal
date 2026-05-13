import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "@/hooks/useReducedMotion";

const CHARS = "!<>-_\\/[]{}—=+*^?#TJABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function ScrambleText({
  text,
  className = "",
  duration = 1200,
  trigger = true,
  delay = 0,
  as: As = "span",
}: {
  text: string;
  className?: string;
  duration?: number;
  trigger?: boolean;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}) {
  const [out, setOut] = useState(text);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) return;
    if (prefersReducedMotion()) {
      setOut(text);
      return;
    }
    let start: number | null = null;
    const startTimeout = window.setTimeout(() => {
      const tick = (t: number) => {
        if (start === null) start = t;
        const p = Math.min(1, (t - start) / duration);
        const reveal = Math.floor(p * text.length);
        let s = "";
        for (let i = 0; i < text.length; i++) {
          if (i < reveal || text[i] === " ") s += text[i];
          else s += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setOut(s);
        if (p < 1) raf.current = requestAnimationFrame(tick);
        else setOut(text);
      };
      raf.current = requestAnimationFrame(tick);
    }, delay);
    return () => {
      clearTimeout(startTimeout);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [text, duration, trigger, delay]);

  return <As className={className}>{out}</As>;
}
