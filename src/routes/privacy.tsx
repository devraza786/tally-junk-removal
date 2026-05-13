import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
  head: () => ({ meta: [{ title: "Privacy Policy — Tally Junk Removal" }] }),
});

function Privacy() {
  return (
    <section className="py-20 px-4 max-w-3xl mx-auto">
      <h1 className="font-[var(--font-display)] text-5xl text-white tracking-wider mb-6">Privacy Policy</h1>
      <div className="space-y-4 text-[#e8e4d8]/85 leading-relaxed">
        <p>Tally Junk Removal respects your privacy. This page explains what we collect and how we use it.</p>
        <h2 className="font-[var(--font-heading)] uppercase tracking-wider text-[#f0b429] text-xl mt-6">Information We Collect</h2>
        <p>When you submit our quote form, we collect your name, phone, email, address, and service details so we can contact you about the job.</p>
        <h2 className="font-[var(--font-heading)] uppercase tracking-wider text-[#f0b429] text-xl mt-6">Cookies</h2>
        <p>We use cookies for basic site functionality. You can disable them in your browser settings.</p>
        <h2 className="font-[var(--font-heading)] uppercase tracking-wider text-[#f0b429] text-xl mt-6">How We Use Your Info</h2>
        <p>We use it solely to respond to your inquiry and deliver service. We do not sell or share your information with third parties.</p>
        <h2 className="font-[var(--font-heading)] uppercase tracking-wider text-[#f0b429] text-xl mt-6">Contact</h2>
        <p>Questions? Email <a href="mailto:info@tallyjunk.com" className="text-[#f0b429] underline">info@tallyjunk.com</a>.</p>
      </div>
    </section>
  );
}
