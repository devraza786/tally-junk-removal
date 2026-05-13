const REVIEWS = [
  { name: "Sarah M.", initials: "SM", quote: "Tally hauled our entire garage cleanout same-day. Showed up on time, fair price, super professional crew.", rating: 5 },
  { name: "James T.", initials: "JT", quote: "Best junk removal in Tallahassee, hands down. They cleared a massive yard debris pile in under an hour.", rating: 5 },
  { name: "Maria R.", initials: "MR", quote: "Honest pricing, no surprises. The team was friendly and they even swept up after. Highly recommend!", rating: 5 },
  { name: "David K.", initials: "DK", quote: "Called at 9am, they were here by noon. Took an old fridge, washer, and a sofa. Painless experience.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 honeycomb-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[var(--font-heading)] uppercase tracking-widest text-[#f0b429] text-sm mb-2">What Tallahassee Says</p>
          <h2 className="font-[var(--font-display)] text-5xl md:text-6xl text-white tracking-wider">Real Reviews. Real Results.</h2>
          <div className="h-0.5 w-24 bg-[#f0b429] mx-auto mt-4" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-[#0d0d0d] border-t-2 border-[#f0b429] p-6 rounded">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#f0b429] text-black flex items-center justify-center font-[var(--font-display)] text-lg"
                  style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)" }}>
                  {r.initials}
                </div>
                <div>
                  <div className="font-[var(--font-heading)] text-white uppercase tracking-wide">{r.name}</div>
                  <div className="text-xs text-[#e8e4d8]/60">Tallahassee, FL</div>
                </div>
              </div>
              <div className="text-[#f0b429] mb-3">{"★".repeat(r.rating)}</div>
              <p className="text-sm text-[#e8e4d8]/85 leading-relaxed">"{r.quote}"</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#e8e4d8]/50 mt-8">Replace these placeholders with real reviews from your customers.</p>
      </div>
    </section>
  );
}
