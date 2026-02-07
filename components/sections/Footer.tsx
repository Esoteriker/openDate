'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';

export default function Footer() {
  const { copy } = useLanguage();

  return (
    <footer className="px-6 pb-10 pt-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/85 bg-white/70 px-6 py-5 text-center text-sm text-ink/75 md:flex-row md:text-left">
        <p>{copy.footer.title}</p>
        <p>{copy.footer.subtitle}</p>
      </div>
    </footer>
  );
}
