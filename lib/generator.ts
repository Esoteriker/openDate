import { getDateIdeas } from '@/lib/data';
import type { DateFilters, DateIdea, Language } from '@/types/date';

const randomPick = <T>(items: T[]): T => {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const generateDateIdea = (filters: DateFilters, language: Language): DateIdea => {
  const ideas = getDateIdeas(language);
  const strictMatches = ideas.filter(
    (idea) =>
      idea.mood === filters.mood &&
      idea.budget === filters.budget &&
      idea.timeAvailable === filters.timeAvailable &&
      idea.setting === filters.setting
  );

  if (strictMatches.length > 0) {
    return withSurprise(strictMatches, filters.surpriseMode, language);
  }

  const closeMatches = ideas.filter(
    (idea) => idea.mood === filters.mood && idea.setting === filters.setting
  );

  if (closeMatches.length > 0) {
    return withSurprise(closeMatches, filters.surpriseMode, language);
  }

  return withSurprise(ideas, filters.surpriseMode, language);
};

const withSurprise = (pool: DateIdea[], surpriseMode: boolean, language: Language): DateIdea => {
  const idea = randomPick(pool);

  if (!surpriseMode) {
    return idea;
  }

  const bonusText =
    language === 'zh'
      ? '附加小彩蛋：写下一句“今晚我最感谢你的是……”。'
      : 'Bonus twist: add a short note that starts with "Tonight I appreciate...".';

  return {
    ...idea,
    surpriseIdea: `${idea.surpriseIdea} ${bonusText}`
  };
};

export const serializeIdeaForSharing = (idea: DateIdea, language: Language): string => {
  if (language === 'zh') {
    return [
      `DateCraft 约会方案：${idea.title}`,
      idea.summary,
      `计划：${idea.detailedPlan}`,
      `惊喜：${idea.surpriseIdea}`
    ].join('\n');
  }

  return [`DateCraft plan: ${idea.title}`, idea.summary, `Plan: ${idea.detailedPlan}`, `Surprise: ${idea.surpriseIdea}`].join(
    '\n'
  );
};
