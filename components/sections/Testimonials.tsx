'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import SectionHeading from '@/components/ui/SectionHeading';

const testimonials = {
  en: [
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
      quote: 'I like that it works for low budget evenings too. The plans feel thoughtful, not generic.',
      author: 'Nina & Chris'
    }
  ],
  zh: [
    {
      quote: '我们终于不再每周重复同一种约会了，里面的话题真的让聊天更深入。',
      author: 'Maya & Jordan'
    },
    {
      quote: '惊喜模式很克制但很有效，普通的一晚也能变得有记忆点。',
      author: 'Alex & Sam'
    },
    {
      quote: '我喜欢它也支持低预算方案，内容依旧很有心，不是模板化推荐。',
      author: 'Nina & Chris'
    }
  ]
} as const;

export default function Testimonials() {
  const { language, copy } = useLanguage();
  const items = testimonials[language];

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={copy.testimonials.eyebrow}
          title={copy.testimonials.title}
          description={copy.testimonials.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((testimonial) => (
            <figure key={testimonial.author} className="card-surface rounded-2xl p-6 shadow-soft">
              <blockquote className="text-sm leading-7 text-ink/80">"{testimonial.quote}"</blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-lavenderDeep">
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
