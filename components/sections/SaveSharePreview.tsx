'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import SectionHeading from '@/components/ui/SectionHeading';

export default function SaveSharePreview() {
  const { copy } = useLanguage();

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.saveShare.eyebrow}
          title={copy.saveShare.title}
          description={copy.saveShare.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {copy.saveShare.cards.map((feature) => (
            <article key={feature.title} className="card-surface rounded-2xl p-6 shadow-soft">
              <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
