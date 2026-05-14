import { Helmet } from "react-helmet";
import { Link, useParams, Navigate } from "react-router-dom";
import { AREAS, SERVICES, SITE } from "@/lib/site";

export default function AreasDetail() {
  const { slug } = useParams<{ slug: string }>();
  const area = AREAS.find(a => a.slug === slug);

  if (!area) {
    return (
      <div className="py-20 text-center text-white">
        <h1 className="font-[var(--font-display)] text-4xl mb-4">Area not found</h1>
        <Link to="/services" className="text-[#f0b429] underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Junk Removal in {area.name}, FL — Tally Junk Removal</title>
        <meta name="description" content={`Same-day junk removal in ${area.name}, FL. Furniture, appliances, yard debris, construction. Call 850-966-1371.`} />
      </Helmet>

      <section className="py-20 px-4 honeycomb-bg bg-black text-center">
        <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">Local · Trusted · Fast</p>
        <h1 className="font-[var(--font-display)] text-5xl md:text-7xl text-white tracking-wider">
          Junk Removal in <span className="text-[#f0b429]">{area.name}, FL</span>
        </h1>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto space-y-6 text-[#e8e4d8]/85 leading-relaxed">
        <p>
          Tally Junk Removal proudly serves {area.name} and the surrounding Tallahassee area with same-day junk hauling, honest upfront pricing, and a friendly local crew. Whether you're cleaning out a garage, clearing storm debris, or finishing a renovation, we make it disappear — fast.
        </p>
        <p>
          From single-item pickups to full property cleanouts, we handle every job in {area.name} with the same care and professionalism. Licensed, insured, and locally operated — call <a href={SITE.phoneTel} className="text-[#f0b429] font-bold">{SITE.phone}</a> for a free quote.
        </p>
      </section>
      <section className="py-12 px-4 bg-[#111108] honeycomb-bg">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[var(--font-display)] text-4xl text-white tracking-wider text-center mb-8">Services in {area.name}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {SERVICES.map(s => (
              <div key={s.slug} className="bg-[#0d0d0d] border-l-4 border-[#f0b429] p-5 rounded">
                <h3 className="font-[var(--font-display)] text-xl text-white tracking-wider">{s.name}</h3>
                <p className="text-sm text-[#e8e4d8]/80 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 px-4 text-center">
        <h2 className="font-[var(--font-display)] text-4xl text-white tracking-wider mb-4">Ready to Haul It?</h2>
        <Link to="/contact" className="inline-block bg-[#f0b429] text-black font-[var(--font-display)] text-2xl px-8 py-3 tracking-wider">GET A FREE QUOTE</Link>
        <div className="mt-8 max-w-3xl mx-auto aspect-video rounded overflow-hidden border-2 border-[#f0b429]/40">
          <iframe title={`${area.name} map`} src={`https://www.google.com/maps?q=${encodeURIComponent(area.name + ", Tallahassee, FL")}&output=embed`} className="w-full h-full" loading="lazy" />
        </div>
      </section>
    </>
  );
}
