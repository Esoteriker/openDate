import type { Budget, Language, Mood, Setting, TimeAvailable } from '@/types/date';

export const moodLabels: Record<Language, Record<Mood, string>> = {
  en: {
    adventurous: 'Adventurous',
    cozy: 'Cozy',
    romantic: 'Romantic',
    spontaneous: 'Spontaneous',
    chill: 'Chill',
    creative: 'Creative'
  },
  zh: {
    adventurous: '冒险',
    cozy: '温馨',
    romantic: '浪漫',
    spontaneous: '随性',
    chill: '放松',
    creative: '创意'
  }
};

export const budgetLabels: Record<Language, Record<Budget, string>> = {
  en: {
    low: 'Low',
    medium: 'Medium',
    high: 'High'
  },
  zh: {
    low: '低预算',
    medium: '中预算',
    high: '高预算'
  }
};

export const timeLabels: Record<Language, Record<TimeAvailable, string>> = {
  en: {
    '1 hour': '1 Hour',
    'half day': 'Half Day',
    'full day': 'Full Day'
  },
  zh: {
    '1 hour': '1小时',
    'half day': '半天',
    'full day': '全天'
  }
};

export const settingLabels: Record<Language, Record<Setting, string>> = {
  en: {
    indoor: 'Indoor',
    outdoor: 'Outdoor'
  },
  zh: {
    indoor: '室内',
    outdoor: '室外'
  }
};

interface SectionText {
  eyebrow: string;
  title: string;
  description: string;
}

interface GeneratorText {
  sectionEyebrow: string;
  sectionTitle: string;
  fields: {
    mood: string;
    budget: string;
    timeAvailable: string;
    setting: string;
    surpriseMode: string;
    surpriseHint: string;
  };
  buttons: {
    generate: string;
    generating: string;
    save: string;
    share: string;
    regenerate: string;
  };
  loading: string;
  emptyTitle: string;
  emptyDescription: string;
  labels: {
    generatedPlan: string;
    detailedPlan: string;
    stepFlow: string;
    playlist: string;
    surprise: string;
    prompts: string;
  };
  feedback: {
    alreadySaved: string;
    saved: string;
    shared: string;
    copied: string;
    shareNotSupported: string;
    shareFailed: string;
  };
  shareTitle: string;
}

export interface SiteCopy {
  languageLabel: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    preview: {
      moodLabel: string;
      moodValue: string;
      budgetLabel: string;
      budgetValue: string;
      timeLabel: string;
      timeValue: string;
      generatedLabel: string;
      generatedValue: string;
    };
  };
  howItWorks: SectionText & {
    stepLabel: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  generator: GeneratorText;
  examples: SectionText;
  saveShare: SectionText & {
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonials: SectionText;
  footer: {
    title: string;
    subtitle: string;
  };
}

export const siteCopy: Record<Language, SiteCopy> = {
  en: {
    languageLabel: 'Language',
    hero: {
      badge: 'DateCraft AI Planner',
      title: 'Never run out of date ideas again.',
      subtitle:
        'Tell DateCraft your mood, budget, and free time. Get a meaningful date plan in seconds, complete with flow, prompts, and a small surprise detail.',
      cta: 'Start Planning',
      preview: {
        moodLabel: 'Mood',
        moodValue: 'Romantic + Cozy',
        budgetLabel: 'Budget',
        budgetValue: 'Medium',
        timeLabel: 'Time',
        timeValue: 'Half Day',
        generatedLabel: 'Generated plan',
        generatedValue: 'Sunset walk, curated playlist, and dessert surprise.'
      }
    },
    howItWorks: {
      eyebrow: 'How It Works',
      title: 'Three simple steps to a better date night',
      description:
        'From quick one-hour ideas to full-day plans, DateCraft adapts to your energy and schedule.',
      stepLabel: 'Step',
      steps: [
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
      ]
    },
    generator: {
      sectionEyebrow: 'AI Generator',
      sectionTitle: 'Craft your next date in seconds',
      fields: {
        mood: 'Mood',
        budget: 'Budget',
        timeAvailable: 'Time available',
        setting: 'Indoor or outdoor',
        surpriseMode: 'Surprise mode',
        surpriseHint: 'Add an extra emotional twist to the final plan.'
      },
      buttons: {
        generate: 'Generate Date Idea',
        generating: 'Generating...',
        save: 'Save',
        share: 'Share',
        regenerate: 'Regenerate'
      },
      loading: 'Composing your plan with mood, pace, and surprise signals...',
      emptyTitle: 'No plan generated yet',
      emptyDescription: 'Choose your preferences and click "Generate Date Idea" to get a detailed plan.',
      labels: {
        generatedPlan: 'Generated Plan',
        detailedPlan: 'Detailed date plan',
        stepFlow: 'Step-by-step flow',
        playlist: 'Playlist suggestion',
        surprise: 'Small surprise idea',
        prompts: 'Conversation prompts'
      },
      feedback: {
        alreadySaved: 'Already saved in your collection.',
        saved: 'Saved to your date collection.',
        shared: 'Shared successfully.',
        copied: 'Copied plan to clipboard.',
        shareNotSupported: 'Sharing is not supported on this browser.',
        shareFailed: 'Unable to share right now.'
      },
      shareTitle: 'DateCraft Plan'
    },
    examples: {
      eyebrow: 'Examples',
      title: 'Sample date ideas',
      description: 'A preview of what DateCraft can generate based on different moods and constraints.'
    },
    saveShare: {
      eyebrow: 'Save & Share',
      title: 'Designed for real-life planning',
      description:
        'DateCraft is built for couples who want less planning stress and more intentional time together.',
      cards: [
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
          description: 'Not the right vibe? Refresh your plan while keeping the same constraints.'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'What couples are saying',
      description: 'Placeholder testimonials for product preview and investor/demo pages.'
    },
    footer: {
      title: 'DateCraft - AI-Powered Date Idea Generator',
      subtitle: 'Built for modern couples who want meaningful time together.'
    }
  },
  zh: {
    languageLabel: '语言',
    hero: {
      badge: 'DateCraft AI 约会策划',
      title: '再也不会为约会灵感发愁。',
      subtitle:
        '告诉 DateCraft 你的心情、预算和可用时间，即可在几秒内获得一份有温度的约会方案，包含流程、话题和小惊喜。',
      cta: '开始规划',
      preview: {
        moodLabel: '氛围',
        moodValue: '浪漫 + 温馨',
        budgetLabel: '预算',
        budgetValue: '中预算',
        timeLabel: '时间',
        timeValue: '半天',
        generatedLabel: '生成方案',
        generatedValue: '日落散步、精选歌单和甜点惊喜。'
      }
    },
    howItWorks: {
      eyebrow: '使用方式',
      title: '三步搞定更有意义的约会',
      description: '无论你只有1小时还是一整天，DateCraft 都会按你们的节奏生成方案。',
      stepLabel: '步骤',
      steps: [
        {
          title: '选择约会氛围',
          description: '设置心情、预算、时长，以及偏好室内或室外。'
        },
        {
          title: '一键生成方案',
          description: 'DateCraft 会根据偏好生成有细节、有节奏的完整约会流程。'
        },
        {
          title: '尽情享受时光',
          description: '使用话题、歌单建议和惊喜提示，让约会更难忘。'
        }
      ]
    },
    generator: {
      sectionEyebrow: 'AI 生成器',
      sectionTitle: '几秒定制下一次约会',
      fields: {
        mood: '心情',
        budget: '预算',
        timeAvailable: '可用时间',
        setting: '室内或室外',
        surpriseMode: '惊喜模式',
        surpriseHint: '为最终方案增加一点情绪价值和仪式感。'
      },
      buttons: {
        generate: '生成约会方案',
        generating: '正在生成...',
        save: '保存',
        share: '分享',
        regenerate: '重新生成'
      },
      loading: '正在根据你们的心情、节奏与惊喜偏好生成方案...',
      emptyTitle: '还没有生成方案',
      emptyDescription: '先选择条件，再点击“生成约会方案”获取完整内容。',
      labels: {
        generatedPlan: '已生成方案',
        detailedPlan: '详细约会计划',
        stepFlow: '分步流程',
        playlist: '歌单建议',
        surprise: '小惊喜建议',
        prompts: '聊天话题'
      },
      feedback: {
        alreadySaved: '这条方案已在你的收藏里。',
        saved: '已保存到你的约会收藏。',
        shared: '分享成功。',
        copied: '方案已复制到剪贴板。',
        shareNotSupported: '当前浏览器不支持直接分享。',
        shareFailed: '暂时无法分享，请稍后重试。'
      },
      shareTitle: 'DateCraft 约会方案'
    },
    examples: {
      eyebrow: '示例',
      title: '约会灵感示例',
      description: '以下是 DateCraft 基于不同情绪与条件生成的方案预览。'
    },
    saveShare: {
      eyebrow: '保存与分享',
      title: '为真实约会场景而设计',
      description: 'DateCraft 帮你减少规划压力，把时间留给真正重要的相处。',
      cards: [
        {
          title: '收藏你的专属方案',
          description: '把喜欢的方案保存下来，下一次约会随时可用。'
        },
        {
          title: '一键分享给伴侣',
          description: '快速发送完整方案，包括流程、话题、歌单氛围和惊喜提示。'
        },
        {
          title: '不满意就重生成',
          description: '保持条件不变，一键刷新出新的约会灵感。'
        }
      ]
    },
    testimonials: {
      eyebrow: '用户评价',
      title: '情侣们怎么说',
      description: '当前为占位示例，可用于产品演示或落地页。'
    },
    footer: {
      title: 'DateCraft - AI 驱动的约会灵感生成器',
      subtitle: '为想认真经营关系的现代情侣打造。'
    }
  }
};
