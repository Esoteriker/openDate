import SectionHeading from '@/components/ui/SectionHeading';

const features = [
  {
    title: 'Save to your private collection',
    description:
      'Keep your best plans in one place and revisit them whenever you need a quick date-night backup.'
  },
  {
    title: 'Share instantly with your partner',
    description:
      'Send the generated plan in one tap, including steps, prompts, playlist mood, and surprise clue.'
  },
  {
    title: 'Regenerate with one click',
    description:
      'Not the right vibe? Refresh your plan while keeping the same constraints.'
  }
];

export default function SaveSharePreview() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Save & Share"
          title="Designed for real-life planning"
          description="DateCraft is built for couples who want less planning stress and more intentional time together."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
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
