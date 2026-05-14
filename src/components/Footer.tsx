import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/tally-logo.png";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-black honeycomb-bg border-t border-[#f0b429]/30 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <img src={logo} alt="Tally Junk Removal" className="w-28 h-28 object-contain mb-4" />
          <p className="font-[var(--font-display)] text-2xl text-[#f0b429] tracking-wider mb-2">{SITE.tagline}</p>
          <p className="text-sm text-[#e8e4d8]/70">Tallahassee's #1 junk removal crew. Same-day service. Honest pricing.</p>
        </div>
        <div>
          <h3 className="font-[var(--font-display)] text-2xl text-white tracking-wider mb-4">Quick Links</h3>
          <ul className="space-y-2 text-[#e8e4d8]/80">
            <li><a href="/" className="hover:text-[#f0b429]">Home</a></li>
            <li><a href="/services" className="hover:text-[#f0b429]">Services</a></li>
            <li><a href="/gallery" className="hover:text-[#f0b429]">Gallery</a></li>
            <li><a href="/about" className="hover:text-[#f0b429]">About</a></li>
            <li><a href="/contact" className="hover:text-[#f0b429]">Contact</a></li>
            <li><a href="/privacy" className="hover:text-[#f0b429]">Privacy Policy</a></li>
          </ul>
          <h4 className="font-[var(--font-heading)] uppercase text-sm tracking-widest text-[#f0b429] mt-6 mb-2">Service Areas</h4>
          <ul className="text-sm text-[#e8e4d8]/60 space-y-1">
            {SERVICES.slice(0,4).map(s => <li key={s.slug}>{s.name}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-[var(--font-display)] text-2xl text-white tracking-wider mb-4">Contact</h3>
          <ul className="space-y-3 text-[#e8e4d8]/80">
            <li><a href={SITE.phoneTel} className="flex items-center gap-2 hover:text-[#f0b429]"><Phone size={16} className="text-[#f0b429]" /> {SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-[#f0b429]"><Mail size={16} className="text-[#f0b429]" /> {SITE.email}</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-[#f0b429]" /> {SITE.city} {SITE.zip}</li>
            <li className="text-sm">{SITE.hours}</li>
            <li><a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#f0b429] hover:text-[#ffd166]"><Facebook size={20} /> Facebook</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#f0b429]/20 py-6 text-center text-xs text-[#e8e4d8]/50">
        © {new Date().getFullYear()} Tally Junk Removal. Tallahassee, FL. All rights reserved.
      </div>
    </footer>
  );
}
