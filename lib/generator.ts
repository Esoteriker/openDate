import { dateIdeas } from '@/lib/data';
import type { DateFilters, DateIdea } from '@/types/date';

const randomPick = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const generateDateIdea = (filters: DateFilters): DateIdea => {
  const strictMatches = dateIdeas.filter(
    (idea) =>
      idea.mood === filters.mood &&
      idea.budget === filters.budget &&
      idea.timeAvailable === filters.timeAvailable &&
      idea.setting === filters.setting
  );

  if (strictMatches.length > 0) {
    return withSurprise(strictMatches, filters.surpriseMode);
  }

  const closeMatches = dateIdeas.filter(
    (idea) => idea.mood === filters.mood && idea.setting === filters.setting
  );

  if (closeMatches.length > 0) {
    return withSurprise(closeMatches, filters.surpriseMode);
  }

  return withSurprise(dateIdeas, filters.surpriseMode);
};

const withSurprise = (pool: DateIdea[], surpriseMode: boolean): DateIdea => {
  const idea = randomPick(pool);

  if (!surpriseMode) {
    return idea;
  }

  return {
    ...idea,
    surpriseIdea: `${idea.surpriseIdea} Bonus twist: add a short note that starts with "Tonight I appreciate...".`
  };
};

export const serializeIdeaForSharing = (idea: DateIdea): string => {
  return [
    `DateCraft plan: ${idea.title}`,
    idea.summary,
    `Plan: ${idea.detailedPlan}`,
    `Surprise: ${idea.surpriseIdea}`
  ].join('\n');
};
