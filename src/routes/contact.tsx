import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact — Tally Junk Removal | Get a Free Quote" },
      { name: "description", content: "Get a free junk removal quote in Tallahassee, FL. Call 850-966-1371 or fill out our quick form." },
    ],
  }),
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="py-20 px-4 honeycomb-bg bg-black text-center">
        <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">Get In Touch</p>
        <h1 className="font-[var(--font-display)] text-6xl md:text-8xl text-white tracking-wider">Free Quote</h1>
        <div className="h-0.5 w-32 bg-[#f0b429] mx-auto mt-4" />
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <a href={SITE.phoneTel} className="flex items-center gap-4 bg-[#f0b429] text-black p-5 rounded hover:bg-[#ffd166]">
              <Phone size={28} />
              <div>
                <div className="text-xs uppercase tracking-widest">Call Now</div>
                <div className="font-[var(--font-display)] text-3xl tracking-wider">{SITE.phone}</div>
              </div>
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-4 bg-[#0d0d0d] border border-[#f0b429]/40 text-white p-5 rounded hover:border-[#f0b429]">
              <Mail size={24} className="text-[#f0b429]" />
              <div>
                <div className="text-xs uppercase tracking-widest text-[#e8e4d8]/70">Email</div>
                <div className="font-[var(--font-heading)] text-lg">{SITE.email}</div>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-[#0d0d0d] border border-[#f0b429]/40 text-white p-5 rounded">
              <MapPin size={24} className="text-[#f0b429]" />
              <div>
                <div className="text-xs uppercase tracking-widest text-[#e8e4d8]/70">Service Area</div>
                <div className="font-[var(--font-heading)] text-lg">{SITE.city} {SITE.zip}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-[#0d0d0d] border border-[#f0b429]/40 text-white p-5 rounded">
              <Clock size={24} className="text-[#f0b429]" />
              <div>
                <div className="text-xs uppercase tracking-widest text-[#e8e4d8]/70">Hours</div>
                <div className="font-[var(--font-heading)] text-lg">{SITE.hours}</div>
              </div>
            </div>
            <div className="aspect-video w-full rounded overflow-hidden border-2 border-[#f0b429]/40">
              <iframe
                title="Tallahassee FL map"
                src="https://www.google.com/maps?q=Tallahassee%2C+FL+32311&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-[#0d0d0d] border-2 border-[#f0b429] rounded p-6 md:p-8 space-y-4"
          >
            {sent ? (
              <div className="text-center py-12">
                <h3 className="font-[var(--font-display)] text-3xl text-[#f0b429] tracking-wider">Thanks!</h3>
                <p className="text-[#e8e4d8] mt-2">We'll be in touch shortly. For faster service, call <a href={SITE.phoneTel} className="text-[#f0b429] underline">{SITE.phone}</a>.</p>
              </div>
            ) : (
              <>
                <h2 className="font-[var(--font-display)] text-3xl text-white tracking-wider">Request a Quote</h2>
                {[
                  { n: "name", t: "Full Name", type: "text" },
                  { n: "phone", t: "Phone", type: "tel" },
                  { n: "email", t: "Email", type: "email" },
                  { n: "address", t: "Address", type: "text" },
                ].map(f => (
                  <input key={f.n} required name={f.n} type={f.type} placeholder={f.t}
                    className="w-full bg-black border border-[#f0b429]/40 text-white p-3 rounded focus:border-[#f0b429] outline-none" />
                ))}
                <select required name="service" className="w-full bg-black border border-[#f0b429]/40 text-white p-3 rounded focus:border-[#f0b429] outline-none">
                  <option value="">Select Service</option>
                  {SERVICES.map(s => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                  <option value="other">Other / Multiple</option>
                </select>
                <input name="date" type="date" className="w-full bg-black border border-[#f0b429]/40 text-white p-3 rounded focus:border-[#f0b429] outline-none" />
                <textarea name="message" rows={4} placeholder="Tell us what needs hauling..."
                  className="w-full bg-black border border-[#f0b429]/40 text-white p-3 rounded focus:border-[#f0b429] outline-none" />
                <button type="submit" className="w-full bg-[#f0b429] text-black font-[var(--font-display)] text-2xl py-3 rounded tracking-wider hover:bg-[#ffd166]">
                  SEND QUOTE REQUEST
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
