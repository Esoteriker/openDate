'use client';

import { useLanguage } from '@/components/providers/LanguageProvider';
import type { Language } from '@/types/date';

const languages: Array<{ value: Language; label: string }> = [
  { value: 'en', label: 'EN' },
  { value: 'zh', label: '中文' }
];

export default function LanguageSwitcher() {
  const { language, setLanguage, copy } = useLanguage();

  return (
    <div className="fixed right-5 top-5 z-50 rounded-full border border-white/85 bg-white/80 p-1 shadow-soft backdrop-blur">
      <div className="sr-only">{copy.languageLabel}</div>
      <div className="flex items-center gap-1">
        {languages.map((item) => {
          const isActive = item.value === language;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setLanguage(item.value)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                isActive
                  ? 'bg-lavenderDeep text-white'
                  : 'bg-transparent text-ink/80 hover:bg-white hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
