'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import SectionHeading from '@/components/ui/SectionHeading';

export default function HowItWorks() {
  const { copy } = useLanguage();

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.howItWorks.eyebrow}
          title={copy.howItWorks.title}
          description={copy.howItWorks.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {copy.howItWorks.steps.map((step, index) => (
            <article
              key={step.title}
              className="card-surface rounded-2xl p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
                {copy.howItWorks.stepLabel} {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
