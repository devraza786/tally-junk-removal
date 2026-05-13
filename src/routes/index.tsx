import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { Phone, Check } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";
import { Stats } from "@/components/Stats";
import { ScrambleText } from "@/components/ScrambleText";
import heroBg from "@/assets/hero-bg.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Testimonials = lazy(() => import("@/components/Testimonials").then(m => ({ default: m.Testimonials })));
const LoadEstimator = lazy(() => import("@/components/LoadEstimator").then(m => ({ default: m.LoadEstimator })));
const FAQ = lazy(() => import("@/components/FAQ").then(m => ({ default: m.FAQ })));

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Tally Junk Removal — Tallahassee's #1 Junk Haulers" },
      { name: "description", content: "Same-day furniture, appliance, yard debris & construction removal in Tallahassee, FL. Call 850-966-1371." },
    ],
    links: [
      { rel: "preload", as: "image", href: heroBg, fetchPriority: "high" } as { rel: string; as: string; href: string; fetchPriority: string },
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
      gsap.to(".hero-bg", { scale: 1.08, duration: 18, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[88vh] flex items-center overflow-hidden bg-black">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="hero-bg absolute inset-0 w-full h-full object-cover opacity-75 sm:opacity-85"
        />
        {/* Readability overlays — stronger on small screens */}
        <div className="absolute inset-0 bg-black/60 sm:bg-gradient-to-r sm:from-black sm:via-black/80 sm:to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 sm:via-transparent to-black/40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-3xl">
            <p className="hero-overline font-[var(--font-heading)] uppercase tracking-[0.3em] text-[#f0b429] text-xs md:text-sm mb-5">
              <ScrambleText text="TALLAHASSEE'S #1 JUNK REMOVAL" duration={900} delay={150} />
            </p>
            <h1 className="font-[var(--font-display)] text-white leading-[0.9] tracking-wide gold-text-glow drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]" style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}>
              <ScrambleText as="span" text="WE HAUL." duration={700} delay={300} className="hero-title block" />
              <ScrambleText as="span" text="YOU CALL." duration={900} delay={650} className="hero-title block text-[#f0b429]" />
            </h1>
            <p className="hero-sub text-white text-base md:text-lg mt-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Furniture · Appliances · Yard Debris · Construction Materials
            </p>
            <div className="hero-badges flex flex-wrap gap-x-4 gap-y-2 mt-5 text-sm text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
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
        </div>
      </section>

      {/* Same-day banner — moved below hero */}
      <div className="bg-[#f0b429] text-black overflow-hidden border-y border-black/20">
        <div className="py-2 whitespace-nowrap font-[var(--font-heading)] uppercase tracking-widest text-sm animate-[marquee_25s_linear_infinite]">
          ✓ Same-day slots still available today &nbsp;·&nbsp; Call {SITE.phone} &nbsp;·&nbsp; ✓ Licensed & Insured &nbsp;·&nbsp; ✓ Tallahassee Local &nbsp;·&nbsp; ✓ Same-day slots still available today &nbsp;·&nbsp; Call {SITE.phone} &nbsp;·&nbsp;
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      </div>

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
        <Suspense fallback={null}>
          <LoadEstimator />
        </Suspense>
      </section>

      {/* GALLERY TEASER */}
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

      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#111108] honeycomb-bg">
        <div className="text-center mb-10">
          <h2 className="font-[var(--font-display)] text-5xl text-white tracking-wider">Frequently Asked</h2>
        </div>
        <Suspense fallback={null}>
          <FAQ />
        </Suspense>
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
