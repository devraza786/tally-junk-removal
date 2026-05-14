import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black honeycomb-bg px-4">
      <div className="text-center">
        <h1 className="font-[var(--font-display)] text-8xl text-[#f0b429] tracking-wider">404</h1>
        <p className="text-white/80 mt-2">This page hauled itself away.</p>
        <Link to="/" className="inline-block mt-6 bg-[#f0b429] text-black px-6 py-3 font-[var(--font-display)] tracking-wider hover:bg-[#ffd166]">GO HOME</Link>
      </div>
    </div>
  );
}
