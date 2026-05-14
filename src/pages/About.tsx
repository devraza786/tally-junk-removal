import { Helmet } from "react-helmet";
import { Zap, DollarSign, Shield, Leaf, Check, X } from "lucide-react";
import logo from "@/assets/tally-logo.png";

const PILLARS = [
  { icon: Zap, t: "Fast & Same-Day Available" },
  { icon: DollarSign, t: "Upfront & Honest Pricing" },
  { icon: Shield, t: "Licensed, Insured & Local" },
  { icon: Leaf, t: "Eco-Responsible Disposal" },
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Tally Junk Removal | Tallahassee's Trusted Crew</title>
        <meta name="description" content="Tally Junk Removal is Tallahassee's most trusted local haul crew. Same-day, honest pricing, licensed & insured." />
      </Helmet>

      <section className="py-20 px-4 honeycomb-bg bg-black">
        <div className="max-w-5xl mx-auto text-center">
          <img src={logo} alt="" className="w-32 h-32 mx-auto mb-6" />
          <h1 className="font-[var(--font-display)] text-5xl md:text-7xl text-white tracking-wider leading-[0.95]">
            TALLAHASSEE'S MOST<br />
            <span className="text-[#f0b429]">TRUSTED HAUL CREW</span>
          </h1>
          <div className="h-0.5 w-32 bg-[#f0b429] mx-auto mt-6" />
          <p className="text-lg text-[#e8e4d8]/85 mt-8 leading-relaxed max-w-3xl mx-auto">
            Tally Junk Removal was built to serve Tallahassee with speed, reliability, and zero stress. We handle furniture, appliances, yard waste, and construction debris — showing up on time, doing the work right, and leaving your space cleaner than we found it. <span className="text-[#f0b429] font-bold">No hidden fees. No excuses. Just results.</span>
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => (
            <div key={i} className="bg-[#0d0d0d] border border-[#f0b429]/30 p-6 rounded text-center hover:border-[#f0b429] transition-colors">
              <p.icon size={36} className="text-[#f0b429] mx-auto mb-3" />
              <h3 className="font-[var(--font-heading)] uppercase tracking-wider text-white text-sm">{p.t}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#111108] honeycomb-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[var(--font-display)] text-4xl md:text-5xl text-white tracking-wider text-center mb-10">Why Tally?</h2>
          <div className="bg-[#0d0d0d] border border-[#f0b429]/40 rounded overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-black">
                <tr>
                  <th className="p-4 font-[var(--font-heading)] uppercase tracking-wider text-[#f0b429]"></th>
                  <th className="p-4 font-[var(--font-heading)] uppercase tracking-wider text-white/70">Big-Box Companies</th>
                  <th className="p-4 font-[var(--font-heading)] uppercase tracking-wider text-[#f0b429]">Tally</th>
                </tr>
              </thead>
              <tbody className="text-[#e8e4d8]/85">
                {[
                  ["Response Time", "Days", "Same-Day"],
                  ["Pricing", "Hidden fees", "Upfront"],
                  ["Operator", "Subcontractors", "Local crew"],
                  ["Service", "Generic", "Tallahassee-focused"],
                ].map(([k, a, b]) => (
                  <tr key={k} className="border-t border-[#f0b429]/20">
                    <td className="p-4 font-[var(--font-heading)] uppercase text-sm tracking-wider text-white">{k}</td>
                    <td className="p-4"><span className="inline-flex items-center gap-2"><X size={16} className="text-red-500" /> {a}</span></td>
                    <td className="p-4"><span className="inline-flex items-center gap-2"><Check size={16} className="text-[#f0b429]" /> {b}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
