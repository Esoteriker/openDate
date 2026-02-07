export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="card-surface section-enter rounded-3xl p-8 shadow-soft md:p-14">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-lavenderDeep/85">
                DateCraft AI Planner
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-ink md:text-6xl md:leading-[1.05]">
                Never run out of date ideas again.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">
                Tell DateCraft your mood, budget, and free time. Get a meaningful date plan in seconds,
                complete with flow, prompts, and a small surprise detail.
              </p>
              <div className="mt-8">
                <a
                  href="#generator"
                  className="cta-glow inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-ink"
                >
                  Start Planning
                </a>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/80 bg-white/65 p-5">
              <div className="rounded-xl bg-white/80 p-4">
                <p className="text-sm font-semibold text-lavenderDeep">Mood</p>
                <p className="mt-2 text-sm text-ink/80">Romantic + Cozy</p>
              </div>
              <div className="rounded-xl bg-white/80 p-4">
                <p className="text-sm font-semibold text-lavenderDeep">Budget</p>
                <p className="mt-2 text-sm text-ink/80">Medium</p>
              </div>
              <div className="rounded-xl bg-white/80 p-4">
                <p className="text-sm font-semibold text-lavenderDeep">Time</p>
                <p className="mt-2 text-sm text-ink/80">Half Day</p>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-roseMist to-[#cfc2ee] p-4">
                <p className="text-sm font-semibold text-ink">Generated plan</p>
                <p className="mt-2 text-sm text-ink/85">Sunset walk, curated playlist, and dessert surprise.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
