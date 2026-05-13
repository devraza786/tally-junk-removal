import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQS.map((f, i) => (
        <div key={i} className="bg-[#0d0d0d] border border-[#f0b429]/30 rounded">
          <button onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left p-5 flex justify-between items-center gap-4">
            <span className="font-[var(--font-heading)] uppercase tracking-wider text-white">{f.q}</span>
            {open === i ? <Minus className="text-[#f0b429]" /> : <Plus className="text-[#f0b429]" />}
          </button>
          {open === i && (
            <div className="px-5 pb-5 text-[#e8e4d8]/80 leading-relaxed">{f.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
