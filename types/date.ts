export type Mood =
  | 'adventurous'
  | 'cozy'
  | 'romantic'
  | 'spontaneous'
  | 'chill'
  | 'creative';

export type Budget = 'low' | 'medium' | 'high';
export type TimeAvailable = '1 hour' | 'half day' | 'full day';
export type Setting = 'indoor' | 'outdoor';

export interface DateFilters {
  mood: Mood;
  budget: Budget;
  timeAvailable: TimeAvailable;
  setting: Setting;
  surpriseMode: boolean;
}

export interface DateIdea {
  id: string;
  title: string;
  mood: Mood;
  budget: Budget;
  timeAvailable: TimeAvailable;
  setting: Setting;
  summary: string;
  detailedPlan: string;
  steps: string[];
  playlist: string;
  conversationPrompts: string[];
  surpriseIdea: string;
}
