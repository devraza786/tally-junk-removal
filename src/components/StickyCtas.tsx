import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export function StickyCtas() {
  return (
    <>
      {/* WhatsApp bottom-left */}
      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 md:bottom-6 left-4 z-40 w-14 h-14 rounded-full bg-[#f0b429] text-black flex items-center justify-center shadow-lg shadow-[#f0b429]/40 hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} />
      </a>
      {/* Book Now hexagon bottom-right (desktop) */}
      <Link
        to="/contact"
        className="hidden md:flex fixed bottom-6 right-6 z-40 w-20 h-20 items-center justify-center bg-[#f0b429] text-black font-[var(--font-display)] text-sm tracking-wider hover:scale-110 transition-transform shadow-lg shadow-[#f0b429]/50"
        style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}
      >
        BOOK<br />NOW
      </Link>
      {/* Mobile sticky call bar */}
      <a
        href={SITE.phoneTel}
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#f0b429] text-black text-center py-3 font-[var(--font-display)] text-xl tracking-wider"
      >
        📞 CALL NOW {SITE.phone}
      </a>
    </>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("tally-cookie-ok")) {
      setShow(true);
    }
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-20 md:bottom-28 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-[#0d0d0d] border-2 border-[#f0b429] p-4 rounded-md shadow-xl">
      <p className="text-sm text-[#e8e4d8] mb-3">
        We use cookies to make Tally Junk Removal work better for you. Read our{" "}
        <Link to="/privacy" className="text-[#f0b429] underline">Privacy Policy</Link>.
      </p>
      <button
        onClick={() => { localStorage.setItem("tally-cookie-ok", "1"); setShow(false); }}
        className="bg-[#f0b429] text-black font-[var(--font-heading)] uppercase tracking-wider text-sm px-4 py-2 rounded"
      >
        Got it
      </button>
    </div>
  );
}
