'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import SectionHeading from '@/components/ui/SectionHeading';
import { getDateIdeas } from '@/lib/data';
import { budgetLabels, moodLabels, settingLabels, timeLabels } from '@/lib/i18n';

export default function ExampleIdeas() {
  const { language, copy } = useLanguage();
  const featured = getDateIdeas(language).slice(0, 3);

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.examples.eyebrow}
          title={copy.examples.title}
          description={copy.examples.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((idea) => (
            <article
              key={idea.id}
              className="card-surface rounded-2xl p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">
                {moodLabels[language][idea.mood]}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{idea.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{idea.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs text-ink/70">
                <span className="rounded-full border border-lavenderDeep/20 bg-white/80 px-3 py-1">
                  {budgetLabels[language][idea.budget]}
                </span>
                <span className="rounded-full border border-lavenderDeep/20 bg-white/80 px-3 py-1">
                  {timeLabels[language][idea.timeAvailable]}
                </span>
                <span className="rounded-full border border-lavenderDeep/20 bg-white/80 px-3 py-1">
                  {settingLabels[language][idea.setting]}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
