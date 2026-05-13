import { useState, useMemo } from "react";
import { Truck } from "lucide-react";

const ITEMS = ["Furniture", "Appliances", "Yard Debris", "Construction", "Other"];

export function LoadEstimator() {
  const [picked, setPicked] = useState<string[]>([]);
  const [qty, setQty] = useState(3);

  const { size, range } = useMemo(() => {
    const score = picked.length * qty;
    if (score <= 4) return { size: "1/4 Truck", range: "$95–$175" };
    if (score <= 12) return { size: "1/2 Truck", range: "$175–$325" };
    return { size: "Full Truck", range: "$325–$575" };
  }, [picked, qty]);

  const toggle = (i: string) => setPicked(p => p.includes(i) ? p.filter(x => x !== i) : [...p, i]);

  return (
    <div className="bg-[#0d0d0d] border-2 border-[#f0b429] rounded-lg p-6 md:p-8 max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <Truck className="text-[#f0b429]" size={28} />
        <h3 className="font-[var(--font-display)] text-3xl text-white tracking-wider">Load Size Estimator</h3>
      </div>
      <p className="text-sm text-[#e8e4d8]/70 mb-4">What are you removing?</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {ITEMS.map(i => (
          <button key={i} onClick={() => toggle(i)}
            className={`px-4 py-2 rounded font-[var(--font-heading)] uppercase text-sm tracking-wider transition-all ${
              picked.includes(i) ? "bg-[#f0b429] text-black" : "bg-black border border-[#f0b429]/40 text-[#e8e4d8]"
            }`}>
            {i}
          </button>
        ))}
      </div>
      <label className="block text-sm text-[#e8e4d8]/70 mb-2">Approximate items: <span className="text-[#f0b429] font-bold">{qty}</span></label>
      <input type="range" min={1} max={10} value={qty} onChange={e => setQty(+e.target.value)}
        className="w-full accent-[#f0b429] mb-6" />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-black p-4 rounded border border-[#f0b429]/30">
          <div className="text-xs uppercase tracking-widest text-[#e8e4d8]/60 mb-1">Estimated Size</div>
          <div className="font-[var(--font-display)] text-2xl text-[#f0b429]">{size}</div>
        </div>
        <div className="bg-black p-4 rounded border border-[#f0b429]/30">
          <div className="text-xs uppercase tracking-widest text-[#e8e4d8]/60 mb-1">Price Range</div>
          <div className="font-[var(--font-display)] text-2xl text-[#f0b429]">{range}</div>
        </div>
      </div>
      <p className="text-xs text-[#e8e4d8]/60 text-center">For exact pricing, call <a href="tel:8509661371" className="text-[#f0b429] font-bold">850-966-1371</a>.</p>
    </div>
  );
}
