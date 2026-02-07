import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    title: 'Choose your vibe',
    description: 'Pick mood, budget, timing, and whether you prefer indoor or outdoor plans.'
  },
  {
    title: 'Generate instantly',
    description: 'DateCraft blends your preferences into a thoughtful plan with clear steps.'
  },
  {
    title: 'Enjoy together',
    description: 'Use prompts, playlist guidance, and surprise cues to make it memorable.'
  }
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="How It Works"
          title="Three simple steps to a better date night"
          description="From quick one-hour ideas to full-day plans, DateCraft adapts to your energy and schedule."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="card-surface rounded-2xl p-6 shadow-soft transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/75">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
