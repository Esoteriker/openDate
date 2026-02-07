'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Hero() {
  const { copy } = useLanguage();

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-16 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="card-surface section-enter rounded-3xl p-8 shadow-soft md:p-14">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-lavenderDeep/85">
                {copy.hero.badge}
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-ink md:text-6xl md:leading-[1.05]">
                {copy.hero.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink/75">{copy.hero.subtitle}</p>
              <div className="mt-8">
                <a
                  href="#generator"
                  className="cta-glow inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold text-ink"
                >
                  {copy.hero.cta}
                </a>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/80 bg-white/65 p-5">
              <div className="rounded-xl bg-white/80 p-4">
                <p className="text-sm font-semibold text-lavenderDeep">{copy.hero.preview.moodLabel}</p>
                <p className="mt-2 text-sm text-ink/80">{copy.hero.preview.moodValue}</p>
              </div>
              <div className="rounded-xl bg-white/80 p-4">
                <p className="text-sm font-semibold text-lavenderDeep">{copy.hero.preview.budgetLabel}</p>
                <p className="mt-2 text-sm text-ink/80">{copy.hero.preview.budgetValue}</p>
              </div>
              <div className="rounded-xl bg-white/80 p-4">
                <p className="text-sm font-semibold text-lavenderDeep">{copy.hero.preview.timeLabel}</p>
                <p className="mt-2 text-sm text-ink/80">{copy.hero.preview.timeValue}</p>
              </div>
              <div className="rounded-xl bg-gradient-to-r from-roseMist to-[#cfc2ee] p-4">
                <p className="text-sm font-semibold text-ink">{copy.hero.preview.generatedLabel}</p>
                <p className="mt-2 text-sm text-ink/85">{copy.hero.preview.generatedValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
