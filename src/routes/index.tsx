import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Phone, Check } from "lucide-react";
import logo from "@/assets/tally-logo.png";
import { SITE, SERVICES } from "@/lib/site";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { LoadEstimator } from "@/components/LoadEstimator";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Tally Junk Removal — Tallahassee's #1 Junk Haulers" },
      { name: "description", content: "Same-day furniture, appliance, yard debris & construction removal in Tallahassee, FL. Call 850-966-1371." },
    ],
  }),
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-overline", { y: 20, opacity: 0, duration: 0.6, delay: 0.2 });
      gsap.from(".hero-title", { y: 60, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.3, stagger: 0.1 });
      gsap.from(".hero-sub, .hero-badges, .hero-cta", { y: 30, opacity: 0, duration: 0.6, delay: 0.9, stagger: 0.1 });
      gsap.to(".hero-logo", { rotation: 360, duration: 60, repeat: -1, ease: "none" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Same-day banner */}
      <div className="bg-[#f0b429] text-black overflow-hidden border-y border-black/20">
        <div className="py-2 whitespace-nowrap font-[var(--font-heading)] uppercase tracking-widest text-sm animate-[marquee_25s_linear_infinite]">
          ✓ Same-day slots still available today &nbsp;·&nbsp; Call {SITE.phone} &nbsp;·&nbsp; ✓ Licensed & Insured &nbsp;·&nbsp; ✓ Tallahassee Local &nbsp;·&nbsp; ✓ Same-day slots still available today &nbsp;·&nbsp; Call {SITE.phone} &nbsp;·&nbsp;
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center honeycomb-bg overflow-hidden"
        style={{ background: "radial-gradient(ellipse at top, rgba(240,180,41,0.08), transparent 60%), #000" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-10 items-center w-full">
          <div>
            <p className="hero-overline font-[var(--font-heading)] uppercase tracking-[0.25em] text-[#f0b429] text-xs md:text-sm mb-4">
              Tallahassee's #1 Junk Removal
            </p>
            <h1 className="font-[var(--font-display)] text-white leading-[0.9] tracking-wide" style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}>
              <span className="hero-title block">WE HAUL.</span>
              <span className="hero-title block text-[#f0b429]">YOU CALL.</span>
            </h1>
            <p className="hero-sub text-[#e8e4d8] text-base md:text-lg mt-6">
              Furniture · Appliances · Yard Debris · Construction Materials
            </p>
            <div className="hero-badges flex flex-wrap gap-x-4 gap-y-2 mt-5 text-sm text-[#e8e4d8]">
              {["Same-Day Available", "Licensed & Insured", "Tallahassee Local"].map((b, i) => (
                <span key={b} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-[#f0b429] mr-3">·</span>}
                  <Check size={16} className="text-[#f0b429]" /> {b}
                </span>
              ))}
            </div>
            <div className="hero-cta flex flex-wrap gap-3 mt-8">
              <Link to="/contact" className="bg-[#f0b429] text-black font-[var(--font-display)] text-xl px-7 py-3 rounded tracking-wider hover:bg-[#ffd166] transition-all hover:scale-105 inline-block">
                GET A FREE QUOTE
              </Link>
              <a href={SITE.phoneTel} className="border-2 border-[#f0b429] text-[#f0b429] font-[var(--font-display)] text-xl px-7 py-3 rounded tracking-wider hover:bg-[#f0b429] hover:text-black transition-all flex items-center gap-2">
                <Phone size={18} /> CALL {SITE.phone}
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src={logo} alt="Tally Junk Removal logo" className="hero-logo w-72 md:w-96 lg:w-[460px] object-contain drop-shadow-[0_0_60px_rgba(240,180,41,0.3)]" />
          </div>
        </div>
      </section>

      <Stats />

      {/* HOW IT WORKS */}
      <section className="py-20 px-4 honeycomb-bg bg-[#111108]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">How It Works</p>
          <h2 className="font-[var(--font-display)] text-5xl md:text-6xl text-white tracking-wider mb-12">Three Steps. Zero Stress.</h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { n: 1, t: "You Call or Book Online", d: "Tell us what you need hauled. We'll quote it on the spot." },
              { n: 2, t: "We Show Up Same Day", d: "Licensed, insured crew arrives on time, ready to work." },
              { n: 3, t: "Junk Gone. Done.", d: "We haul, sweep up, and donate or recycle whenever possible." },
            ].map(s => (
              <div key={s.n} className="bg-black border border-[#f0b429]/30 p-6 rounded">
                <div className="w-16 h-16 rounded-full bg-[#f0b429] text-black font-[var(--font-display)] text-3xl flex items-center justify-center mx-auto mb-4">{s.n}</div>
                <h3 className="font-[var(--font-heading)] uppercase tracking-wider text-white text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-[#e8e4d8]/80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">What We Haul</p>
            <h2 className="font-[var(--font-display)] text-5xl md:text-6xl text-white tracking-wider">Our Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(s => (
              <Link key={s.slug} to="/services" className="bg-[#0d0d0d] border-l-4 border-[#f0b429] p-6 rounded hover:shadow-[0_0_24px_rgba(240,180,41,0.25)] transition-all hover:scale-[1.02] block">
                <h3 className="font-[var(--font-display)] text-2xl text-white tracking-wider mb-3">{s.name}</h3>
                <p className="text-sm text-[#e8e4d8]/80 mb-4">{s.desc}</p>
                <span className="text-[#f0b429] font-[var(--font-heading)] uppercase tracking-wider text-sm">Book This Service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section className="py-20 px-4 bg-[#111108] honeycomb-bg">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-display)] text-5xl text-white tracking-wider">Get an Instant Estimate</h2>
        </div>
        <LoadEstimator />
      </section>

      {/* GALLERY TEASER + BEFORE/AFTER */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">Recent Work</p>
            <h2 className="font-[var(--font-display)] text-5xl text-white tracking-wider">Before & After</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <img src={gallery1} alt="Yard debris cleanup" className="w-full aspect-square object-cover rounded-lg border-2 border-[#f0b429]/30" />
            <img src={gallery3} alt="Construction debris haul" className="w-full aspect-square object-cover rounded-lg border-2 border-[#f0b429]/30" />
          </div>
          <div className="text-center mt-8">
            <Link to="/gallery" className="text-[#f0b429] font-[var(--font-heading)] uppercase tracking-widest hover:text-[#ffd166]">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#111108] honeycomb-bg">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-display)] text-5xl text-white tracking-wider">Frequently Asked</h2>
        </div>
        <FAQ />
      </section>

      {/* FACEBOOK SOCIAL */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-[#0d0d0d] border-2 border-[#f0b429] rounded-lg p-8 text-center">
          <h3 className="font-[var(--font-display)] text-3xl text-white tracking-wider mb-3">See Our Latest Jobs on Facebook</h3>
          <p className="text-[#e8e4d8]/80 mb-6">Fresh before-and-after photos, customer shoutouts, and same-day haul updates.</p>
          <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-block bg-[#f0b429] text-black font-[var(--font-display)] text-xl px-7 py-3 tracking-wider hover:bg-[#ffd166]">
            VIEW OUR FACEBOOK PAGE →
          </a>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 px-4 bg-[#f0b429] text-black text-center">
        <h2 className="font-[var(--font-display)] text-4xl md:text-6xl tracking-wider">Ready to Haul It?</h2>
        <p className="font-[var(--font-heading)] uppercase tracking-widest mt-2">Same-day service across Tallahassee</p>
        <a href={SITE.phoneTel} className="inline-block mt-6 bg-black text-[#f0b429] font-[var(--font-display)] text-2xl px-8 py-4 tracking-wider hover:scale-105 transition-transform">
          📞 {SITE.phone}
        </a>
      </section>
    </>
  );
}
