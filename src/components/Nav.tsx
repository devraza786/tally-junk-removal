import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/tally-logo.png";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  const isActive = (path: string) => {
    if (path === "/") return loc.pathname === "/";
    return loc.pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "bg-[#0d0d0d]/95 backdrop-blur border-b-2 border-[#f0b429]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <img src={logo} alt="Tally" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          <span className="font-[var(--font-display)] text-lg sm:text-xl text-[#f0b429] tracking-wider hidden xs:inline">
            TALLY JUNK REMOVAL
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`font-[var(--font-heading)] uppercase text-sm tracking-widest transition-colors relative ${isActive(l.to) ? "text-[#f0b429]" : "text-white/80 hover:text-[#f0b429]"}`}>
              {l.label}
            </Link>
          ))}
          <a href={SITE.phoneTel}
            className="bg-[#f0b429] text-black font-[var(--font-display)] text-lg px-5 py-2 rounded tracking-wider hover:bg-[#ffd166] transition-colors flex items-center gap-2">
            <Phone size={16} /> {SITE.phone}
          </a>
        </nav>
        <button className="lg:hidden text-[#f0b429]" onClick={() => setOpen(true)} aria-label="Menu">
          <Menu size={28} />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/98 honeycomb-bg flex flex-col">
          <div className="flex justify-between items-center px-4 h-16 sm:h-20">
            <img src={logo} alt="" className="w-10 h-10" />
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-[#f0b429]"><X size={28} /></button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6">
            {links.map(l => (
              <Link key={l.to} to={l.to}
                className={`font-[var(--font-display)] text-4xl tracking-wider transition-colors ${isActive(l.to) ? "text-[#f0b429]" : "text-white hover:text-[#f0b429]"}`}>
                {l.label}
              </Link>
            ))}
            <a href={SITE.phoneTel} className="mt-6 bg-[#f0b429] text-black font-[var(--font-display)] text-2xl px-8 py-3 rounded tracking-wider">
              {SITE.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
