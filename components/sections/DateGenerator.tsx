'use client';

import { useState } from 'react';
import { budgets, moods, settings, timeOptions } from '@/lib/data';
import { generateDateIdea, serializeIdeaForSharing } from '@/lib/generator';
import type { DateFilters, DateIdea } from '@/types/date';

const defaultFilters: DateFilters = {
  mood: 'romantic',
  budget: 'medium',
  timeAvailable: 'half day',
  setting: 'outdoor',
  surpriseMode: true
};

export default function DateGenerator() {
  const [filters, setFilters] = useState<DateFilters>(defaultFilters);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DateIdea | null>(null);
  const [feedback, setFeedback] = useState<string>('');

  const updateFilter = <K extends keyof DateFilters>(key: K, value: DateFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const generate = () => {
    setFeedback('');
    setIsLoading(true);

    window.setTimeout(() => {
      setResult(generateDateIdea(filters));
      setIsLoading(false);
    }, 1200);
  };

  const handleSave = () => {
    if (!result) return;

    const key = 'datecraft.saved';
    const current = localStorage.getItem(key);
    const parsed: DateIdea[] = current ? JSON.parse(current) : [];

    if (parsed.some((item) => item.id === result.id)) {
      setFeedback('Already saved in your collection.');
      return;
    }

    const next = [result, ...parsed].slice(0, 20);
    localStorage.setItem(key, JSON.stringify(next));
    setFeedback('Saved to your date collection.');
  };

  const handleShare = async () => {
    if (!result) return;

    const text = serializeIdeaForSharing(result);
    const canShare = typeof navigator !== 'undefined' && typeof navigator.share === 'function';
    const canCopy = typeof navigator !== 'undefined' && !!navigator.clipboard;

    try {
      if (canShare) {
        await navigator.share({
          title: 'DateCraft Plan',
          text
        });
        setFeedback('Shared successfully.');
        return;
      }

      if (canCopy) {
        await navigator.clipboard.writeText(text);
        setFeedback('Copied plan to clipboard.');
        return;
      }

      setFeedback('Sharing is not supported on this browser.');
    } catch {
      setFeedback('Unable to share right now.');
    }
  };

  return (
    <section id="generator" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-lavenderDeep/75">
            AI Generator
          </p>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Craft your next date in seconds</h2>
        </div>

        <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="card-surface rounded-3xl p-6 shadow-soft md:p-8">
            <div className="space-y-5">
              <FormField label="Mood">
                <select
                  className="input"
                  value={filters.mood}
                  onChange={(event) => updateFilter('mood', event.target.value as DateFilters['mood'])}
                >
                  {moods.map((mood) => (
                    <option key={mood} value={mood}>
                      {capitalize(mood)}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Budget">
                <select
                  className="input"
                  value={filters.budget}
                  onChange={(event) => updateFilter('budget', event.target.value as DateFilters['budget'])}
                >
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {capitalize(budget)}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Time available">
                <select
                  className="input"
                  value={filters.timeAvailable}
                  onChange={(event) =>
                    updateFilter('timeAvailable', event.target.value as DateFilters['timeAvailable'])
                  }
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {capitalize(time)}
                    </option>
                  ))}
                </select>
              </FormField>

              <FormField label="Indoor or outdoor">
                <select
                  className="input"
                  value={filters.setting}
                  onChange={(event) => updateFilter('setting', event.target.value as DateFilters['setting'])}
                >
                  {settings.map((setting) => (
                    <option key={setting} value={setting}>
                      {capitalize(setting)}
                    </option>
                  ))}
                </select>
              </FormField>

              <label className="flex items-center justify-between rounded-2xl border border-white/80 bg-white/70 px-4 py-3">
                <div>
                  <p className="text-sm font-semibold text-ink">Surprise mode</p>
                  <p className="text-xs text-ink/65">Add an extra emotional twist to the final plan.</p>
                </div>
                <button
                  type="button"
                  className={`relative h-7 w-14 rounded-full transition-colors ${
                    filters.surpriseMode ? 'bg-lavenderDeep/80' : 'bg-ink/20'
                  }`}
                  onClick={() => updateFilter('surpriseMode', !filters.surpriseMode)}
                >
                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-transform ${
                      filters.surpriseMode ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>
              </label>

              <button type="button" onClick={generate} className="cta-glow w-full rounded-full px-6 py-3 font-semibold text-ink">
                {isLoading ? 'Generating...' : 'Generate Date Idea'}
              </button>
            </div>
          </aside>

          <article className="card-surface rounded-3xl p-6 shadow-soft md:p-8">
            {isLoading ? (
              <LoadingState />
            ) : result ? (
              <ResultCard
                result={result}
                onSave={handleSave}
                onShare={handleShare}
                onRegenerate={generate}
                feedback={feedback}
              />
            ) : (
              <EmptyState />
            )}
          </article>
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
      {children}
    </label>
  );
}

function LoadingState() {
  return (
    <div className="space-y-4">
      <div className="h-5 w-44 animate-pulse rounded bg-roseMist/90" />
      <div className="h-10 w-3/4 animate-shimmer rounded-lg bg-gradient-to-r from-roseMist via-white to-roseMist bg-[length:200%_100%]" />
      <div className="h-24 animate-shimmer rounded-lg bg-gradient-to-r from-[#e5ddf8] via-white to-[#e5ddf8] bg-[length:200%_100%]" />
      <div className="h-24 animate-shimmer rounded-lg bg-gradient-to-r from-[#f1d8d6] via-white to-[#f1d8d6] bg-[length:200%_100%]" />
      <p className="text-sm text-ink/65">Composing your plan with mood, pace, and surprise signals...</p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex h-full min-h-80 items-center justify-center rounded-2xl border border-dashed border-lavenderDeep/25 bg-white/45 p-6 text-center">
      <div>
        <p className="text-lg font-semibold text-ink">No plan generated yet</p>
        <p className="mt-2 text-sm text-ink/70">
          Choose your preferences and click "Generate Date Idea" to get a detailed plan.
        </p>
      </div>
    </div>
  );
}

interface ResultCardProps {
  result: DateIdea;
  onSave: () => void;
  onShare: () => Promise<void>;
  onRegenerate: () => void;
  feedback: string;
}

function ResultCard({ result, onSave, onShare, onRegenerate, feedback }: ResultCardProps) {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Generated Plan</p>
        <h3 className="mt-2 text-2xl font-semibold text-ink">{result.title}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/75">{result.summary}</p>
      </div>

      <section className="rounded-2xl border border-white/85 bg-white/70 p-5">
        <h4 className="text-sm font-semibold text-lavenderDeep">Detailed date plan</h4>
        <p className="mt-2 text-sm leading-7 text-ink/80">{result.detailedPlan}</p>
      </section>

      <section className="rounded-2xl border border-white/85 bg-white/70 p-5">
        <h4 className="text-sm font-semibold text-lavenderDeep">Step-by-step flow</h4>
        <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-6 text-ink/80">
          {result.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl border border-white/85 bg-white/70 p-5">
          <h4 className="text-sm font-semibold text-lavenderDeep">Playlist suggestion</h4>
          <p className="mt-2 text-sm leading-7 text-ink/80">{result.playlist}</p>
        </section>
        <section className="rounded-2xl border border-white/85 bg-white/70 p-5">
          <h4 className="text-sm font-semibold text-lavenderDeep">Small surprise idea</h4>
          <p className="mt-2 text-sm leading-7 text-ink/80">{result.surpriseIdea}</p>
        </section>
      </div>

      <section className="rounded-2xl border border-white/85 bg-white/70 p-5">
        <h4 className="text-sm font-semibold text-lavenderDeep">Conversation prompts</h4>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-ink/80">
          {result.conversationPrompts.map((prompt) => (
            <li key={prompt}>- {prompt}</li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <button onClick={onSave} className="rounded-full border border-lavenderDeep/35 bg-white/80 px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white">
          Save
        </button>
        <button onClick={onShare} className="rounded-full border border-lavenderDeep/35 bg-white/80 px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white">
          Share
        </button>
        <button onClick={onRegenerate} className="cta-glow rounded-full px-5 py-2 text-sm font-semibold text-ink">
          Regenerate
        </button>
      </div>

      {feedback ? <p className="text-sm font-medium text-lavenderDeep">{feedback}</p> : null}
    </div>
  );
}

function capitalize(value: string) {
  if (value.length === 0) return value;
  return value[0].toUpperCase() + value.slice(1);
}
