import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = [
  {
    quote:
      'We stopped repeating the same date every weekend. The prompts helped us have deeper conversations.',
    author: 'Maya & Jordan'
  },
  {
    quote:
      'The surprise mode is subtle but effective. It turns a normal night into something memorable.',
    author: 'Alex & Sam'
  },
  {
    quote:
      'I like that it works for low budget evenings too. The plans feel thoughtful, not generic.',
    author: 'Nina & Chris'
  }
];

export default function Testimonials() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What couples are saying"
          description="Placeholder testimonials for product preview and investor/demo pages."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="card-surface rounded-2xl p-6 shadow-soft">
              <blockquote className="text-sm leading-7 text-ink/80">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-lavenderDeep">{testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
