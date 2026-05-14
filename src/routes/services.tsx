import { Sofa, Refrigerator, Trees, HardHat } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { LoadEstimator } from "@/components/LoadEstimator";
import { FAQ } from "@/components/FAQ";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sofa, Refrigerator, Trees, HardHat,
};

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 px-4 honeycomb-bg bg-black text-center">
        <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">What We Take</p>
        <h1 className="font-[var(--font-display)] text-6xl md:text-8xl text-white tracking-wider">Our Services</h1>
        <div className="h-0.5 w-32 bg-[#f0b429] mx-auto mt-4" />
        <p className="text-[#e8e4d8]/80 mt-6 max-w-2xl mx-auto">
          From a single mattress to a full estate cleanout — we haul anything that isn't hazardous. Upfront pricing, no surprises.
        </p>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {SERVICES.map(s => {
            const Icon = ICONS[s.icon];
            return (
              <div key={s.slug} className="bg-[#0d0d0d] border-l-4 border-[#f0b429] p-8 rounded hover:shadow-[0_0_28px_rgba(240,180,41,0.3)] transition-all hover:scale-[1.01]">
                <Icon size={40} className="text-[#f0b429] mb-4" />
                <h2 className="font-[var(--font-display)] text-3xl text-white tracking-wider mb-3">{s.name}</h2>
                <p className="text-[#e8e4d8]/85 mb-5">{s.desc}</p>
                <a href={SITE.phoneTel} className="text-[#f0b429] font-[var(--font-heading)] uppercase tracking-wider text-sm hover:text-[#ffd166]">Book This Service →</a>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#111108] honeycomb-bg">
        <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-white tracking-wider text-center mb-10">Get an Instant Estimate</h2>
        <LoadEstimator />
      </section>

      <section className="py-16 px-4">
        <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-white tracking-wider text-center mb-10">Questions?</h2>
        <FAQ />
      </section>
    </>
  );
}
