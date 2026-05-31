export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold tracking-widest uppercase">
          Sleep Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find what environment factors<br className="hidden sm:block" /> affect your sleep quality
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          SleepSync correlates your sleep data with temperature, humidity, noise, and light levels to reveal exactly what's stealing your rest — and how to fix it.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Sleeping Better — $9/mo
        </a>
        <div className="mt-12 grid grid-cols-3 gap-6 text-center">
          {[
            ["4 Factors", "Tracked automatically"],
            ["AI Insights", "Personalized tips"],
            ["Any Device", "Wearable or manual"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{title}</div>
              <div className="text-[#8b949e] text-sm mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited sleep log entries",
              "Environmental factor correlation",
              "Weekly pattern reports",
              "Personalized recommendations",
              "IoT sensor integrations",
              "CSV data export"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "What data sources does SleepSync support?",
              "You can connect wearables like Fitbit, Oura, or Apple Watch, or log sleep manually. For environment data, use IoT sensors (temperature, humidity, noise, light) or enter readings by hand."
            ],
            [
              "How does the correlation analysis work?",
              "SleepSync computes statistical correlations between your nightly sleep scores and environmental readings logged around bedtime, surfacing which factors have the strongest positive or negative impact on your rest."
            ],
            [
              "Can I cancel my subscription at any time?",
              "Yes. You can cancel anytime from your billing portal. You'll retain access until the end of your current billing period with no hidden fees."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        © {new Date().getFullYear()} SleepSync. All rights reserved.
      </footer>
    </main>
  );
}
