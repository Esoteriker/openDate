import type { Budget, DateIdea, Language, Mood, Setting, TimeAvailable } from '@/types/date';

export const moods: Mood[] = [
  'adventurous',
  'cozy',
  'romantic',
  'spontaneous',
  'chill',
  'creative'
];

export const budgets: Budget[] = ['low', 'medium', 'high'];

export const timeOptions: TimeAvailable[] = ['1 hour', 'half day', 'full day'];

export const settings: Setting[] = ['indoor', 'outdoor'];

const dateIdeasEn: DateIdea[] = [
  {
    id: 'sunset-photo-walk',
    title: 'Sunset Photo Walk + Secret Dessert Stop',
    mood: 'romantic',
    budget: 'medium',
    timeAvailable: 'half day',
    setting: 'outdoor',
    summary: 'A relaxed evening that blends movement, nostalgia, and one hidden treat.',
    detailedPlan:
      'Start with a golden-hour walk through your favorite neighborhood, trade turns taking candid photos, then end at a pre-picked dessert spot where one partner orders for the other.',
    steps: [
      'Meet at a scenic route 90 minutes before sunset.',
      'Swap phones and capture five candid photos each.',
      'Pick your favorite photo and explain why it matters.',
      'Finish at a quiet dessert place and order a surprise item.'
    ],
    playlist: 'Soft Evenings: acoustic soul, mellow pop, and dreamy indie.',
    conversationPrompts: [
      'What is one memory with me that still feels cinematic?',
      'What small habit makes you feel most loved?',
      'If we had one free month together, where would we live?'
    ],
    surpriseIdea: 'Bring a printed mini photo from an old trip and tuck it into the dessert menu.'
  },
  {
    id: 'at-home-tasting-night',
    title: 'At-Home Tasting Night',
    mood: 'cozy',
    budget: 'low',
    timeAvailable: '1 hour',
    setting: 'indoor',
    summary: 'A quick and intimate date with flavor flights and playful scoring.',
    detailedPlan:
      'Set up three mini tastings at home (tea, chocolate, sparkling water, or snacks) and create your own scorecards for flavor, surprise, and nostalgia.',
    steps: [
      'Prepare three tasting rounds with small portions.',
      'Rate each round on flavor and memory.',
      'Choose a winning round and recreate it monthly.'
    ],
    playlist: 'Slow Cozy: lo-fi jazz, neo-soul instrumentals, and soft piano.',
    conversationPrompts: [
      'Which simple routine should we protect no matter what?',
      'What do you need more of this week from me?',
      'What is one thing we are doing better than last year?'
    ],
    surpriseIdea: 'Hide a handwritten scorecard with a final bonus category: "Best Smile Tonight."'
  },
  {
    id: 'city-challenge-loop',
    title: 'City Challenge Loop',
    mood: 'adventurous',
    budget: 'medium',
    timeAvailable: 'full day',
    setting: 'outdoor',
    summary: 'A full-day micro adventure with checkpoints and spontaneous choices.',
    detailedPlan:
      'Design a route with four checkpoints across the city. At each stop, draw a challenge card: try a new snack, ask a stranger for a local tip, or take a creative photo prompt.',
    steps: [
      'Map four stops in different neighborhoods.',
      'Set one challenge per stop and keep score.',
      'Pause at midpoint for a shared meal and recap.',
      'End at a viewpoint and vote on your favorite challenge.'
    ],
    playlist: 'Motion Mix: upbeat alt-pop, electronic grooves, and bold instrumentals.',
    conversationPrompts: [
      'When do you feel most brave in our relationship?',
      'What new experience should we try this season?',
      'What does adventure mean to you now versus five years ago?'
    ],
    surpriseIdea: 'Prepare one sealed challenge card marked "wildcard" for the final stop.'
  },
  {
    id: 'creative-studio-hour',
    title: 'Creative Studio Hour',
    mood: 'creative',
    budget: 'low',
    timeAvailable: '1 hour',
    setting: 'indoor',
    summary: 'A guided mini studio session for sketches, collages, or quick crafts.',
    detailedPlan:
      'Build a one-hour making session with a theme, timer blocks, and a shared reveal at the end. Keep the process low-pressure and playful.',
    steps: [
      'Pick one prompt: dream home, future vacation, or mood board.',
      'Create for 20 minutes in silence with music on.',
      "Exchange pieces and add one detail to each other's work.",
      'Share takeaways over tea or coffee.'
    ],
    playlist: 'Maker Mode: ambient beats and cinematic instrumentals.',
    conversationPrompts: [
      'What kind of life are we actively designing together?',
      'What would make next month feel more meaningful?',
      'Which of your strengths do I not celebrate enough?'
    ],
    surpriseIdea: 'Include a mystery envelope with a prompt you only open in the final 10 minutes.'
  },
  {
    id: 'spontaneous-cafe-hunt',
    title: 'Spontaneous Cafe Hunt',
    mood: 'spontaneous',
    budget: 'medium',
    timeAvailable: 'half day',
    setting: 'outdoor',
    summary: 'Find three cafes by vibe, not rating, and pick your favorite together.',
    detailedPlan:
      'Use only walking distance and visual cues to choose cafes. No reviews, no ratings. Decide based on mood, smell, and music.',
    steps: [
      'Choose a neighborhood and set a three-cafe target.',
      'At each stop, share one thing you like immediately.',
      'Take one photo at each table and pick a winner at the end.'
    ],
    playlist: 'Weekend Drift: French pop, mellow funk, and soft house.',
    conversationPrompts: [
      'What kind of energy do you want more of in our weekends?',
      'What place we visited together felt most like us?',
      'What should our next tiny tradition be?'
    ],
    surpriseIdea: 'Secretly pre-write a "best table in town" certificate and present it at the winning cafe.'
  },
  {
    id: 'rooftop-dinner-plan',
    title: 'Rooftop Dinner + Future Plans',
    mood: 'chill',
    budget: 'high',
    timeAvailable: 'full day',
    setting: 'indoor',
    summary: 'A calm luxury day ending with a rooftop dinner and reflection ritual.',
    detailedPlan:
      'Start with a slow brunch and bookstore stop, keep the afternoon flexible, then finish with a dressed-up dinner where you exchange three intentions for the next quarter.',
    steps: [
      'Begin with brunch and a shared bookstore challenge.',
      'Leave a free block for rest or a scenic drive.',
      'Dress up and meet at dinner with no phone distractions.',
      'Share one appreciation, one intention, and one promise each.'
    ],
    playlist: 'Night Layers: modern jazz, downtempo R&B, and atmospheric pop.',
    conversationPrompts: [
      'What does support look like for you this season?',
      'What are we proud of as a team?',
      'What is one dream we can actively fund this year?'
    ],
    surpriseIdea: 'Bring a sealed envelope titled "Open on our next milestone date."'
  }
];

const dateIdeasZh: DateIdea[] = [
  {
    id: 'sunset-photo-walk',
    title: '日落拍照散步 + 甜点惊喜站',
    mood: 'romantic',
    budget: 'medium',
    timeAvailable: 'half day',
    setting: 'outdoor',
    summary: '一场轻松又有记忆点的傍晚约会，兼顾互动和仪式感。',
    detailedPlan:
      '在日落前去你们喜欢的街区慢走，轮流给对方抓拍，再去提前选好的甜品店，由一方为另一方点“未知甜品”。',
    steps: [
      '日落前90分钟在一条风景路线见面。',
      '互换手机，彼此拍5张抓拍。',
      '各自挑1张最喜欢的照片，说说原因。',
      '最后到安静甜品店，点一份惊喜甜点。'
    ],
    playlist: '温柔傍晚：木吉他、轻灵流行与梦幻独立音乐。',
    conversationPrompts: [
      '我们哪段回忆让你最有电影感？',
      '我做的哪个小习惯最让你有被爱到？',
      '如果我们有一个月假期，你最想和我住在哪里？'
    ],
    surpriseIdea: '提前准备一张旧旅行的小照片，悄悄夹在甜品菜单里。'
  },
  {
    id: 'at-home-tasting-night',
    title: '居家品鉴小夜晚',
    mood: 'cozy',
    budget: 'low',
    timeAvailable: '1 hour',
    setting: 'indoor',
    summary: '短时间也能有亲密感，用味觉小游戏制造新鲜感。',
    detailedPlan:
      '在家准备三轮小型品鉴（茶、巧克力、气泡水或零食），自制评分卡，按味道、惊喜和回忆感打分。',
    steps: [
      '准备3轮少量试吃。',
      '每轮从味道与记忆感两项打分。',
      '选出冠军口味，约定每月复刻一次。'
    ],
    playlist: '慢调温馨：lo-fi 爵士、neo-soul 与柔和钢琴。',
    conversationPrompts: [
      '我们最该长期坚持的日常小仪式是什么？',
      '这周你最希望我多给你哪种支持？',
      '和去年相比，我们最进步的一件事是什么？'
    ],
    surpriseIdea: '在评分卡最后加一个隐藏项：“今晚最治愈笑容奖”。'
  },
  {
    id: 'city-challenge-loop',
    title: '城市挑战环线日',
    mood: 'adventurous',
    budget: 'medium',
    timeAvailable: 'full day',
    setting: 'outdoor',
    summary: '一整天的城市微冒险，边走边完成随机挑战。',
    detailedPlan:
      '在城市中设计4个打卡点。每到一站抽一张挑战卡，例如尝试新小吃、向路人请教本地推荐，或完成创意拍照任务。',
    steps: [
      '在不同片区规划4个停靠点。',
      '每站设置1个挑战并记录得分。',
      '中途安排一次轻松用餐并复盘。',
      '在观景点收尾，票选最喜欢的挑战。'
    ],
    playlist: '动感出发：节奏流行、电子律动与高能器乐。',
    conversationPrompts: [
      '在我们的关系里，你在哪些时刻最勇敢？',
      '这个季节我们最该一起尝试的新体验是什么？',
      '你现在对“冒险”的定义和五年前有何不同？'
    ],
    surpriseIdea: '准备一张写着“终极彩蛋”的密封挑战卡，最后一站再打开。'
  },
  {
    id: 'creative-studio-hour',
    title: '创意工作室一小时',
    mood: 'creative',
    budget: 'low',
    timeAvailable: '1 hour',
    setting: 'indoor',
    summary: '用一个小时共同创作，让交流更自然也更深入。',
    detailedPlan:
      '设置一个轻松创作主题，用计时分段完成素描、拼贴或手工，最后交换作品并共同完善。',
    steps: [
      '先选主题：理想之家、未来旅行或情绪拼贴。',
      '播放音乐，安静创作20分钟。',
      '交换作品，给对方加一个细节。',
      '边喝茶或咖啡边分享感受。'
    ],
    playlist: '创作时刻：环境电子、电影感氛围器乐。',
    conversationPrompts: [
      '我们正在一起设计怎样的生活方式？',
      '下个月做什么会让你更有幸福感？',
      '你的哪个优点值得我更常表达欣赏？'
    ],
    surpriseIdea: '准备一个“最后10分钟才可打开”的神秘信封提示。'
  },
  {
    id: 'spontaneous-cafe-hunt',
    title: '随性咖啡馆寻宝',
    mood: 'spontaneous',
    budget: 'medium',
    timeAvailable: 'half day',
    setting: 'outdoor',
    summary: '不看评分，只凭直觉和氛围找到你们的心头好。',
    detailedPlan:
      '在一个街区里找3家咖啡馆，只根据门口氛围、香气和音乐决定是否入座，最后共同评选最爱。',
    steps: [
      '先定一个街区，目标打卡3家。',
      '每家都说出第一眼最喜欢的一点。',
      '每桌拍一张照片，最后投票选冠军。'
    ],
    playlist: '周末漫游：法式流行、轻松放克与柔和 house。',
    conversationPrompts: [
      '周末相处里，你希望多一点什么能量？',
      '我们去过的地方里，哪里最像“我们”？',
      '下一次可以坚持的小传统是什么？'
    ],
    surpriseIdea: '提前做一张“本日最佳座位奖”小卡片，在冠军咖啡馆颁发。'
  },
  {
    id: 'rooftop-dinner-plan',
    title: '天台晚餐 + 未来清单',
    mood: 'chill',
    budget: 'high',
    timeAvailable: 'full day',
    setting: 'indoor',
    summary: '从慢节奏白天过渡到精致晚餐，适合深度对话与情感连接。',
    detailedPlan:
      '先从早午餐和书店小任务开始，下午保留弹性休息时段，晚上盛装赴约，在晚餐中彼此分享下个季度的三个共同愿景。',
    steps: [
      '从早午餐和“互选一本书”开始。',
      '下午保留自由时段：休息或短途兜风。',
      '晚餐前换装，约定全程减少手机干扰。',
      '互相分享：一个感谢、一个计划、一个承诺。'
    ],
    playlist: '夜色层次：现代爵士、downtempo R&B 与氛围流行。',
    conversationPrompts: [
      '这个阶段你最需要我怎样支持你？',
      '作为“我们”这个团队，最值得骄傲的是什么？',
      '今年我们最想认真投入实现的共同目标是什么？'
    ],
    surpriseIdea: '准备一个写着“下个里程碑日再打开”的密封信封。'
  }
];

export const dateIdeasByLanguage: Record<Language, DateIdea[]> = {
  en: dateIdeasEn,
  zh: dateIdeasZh
};

export const dateIdeas = dateIdeasEn;

export const getDateIdeas = (language: Language): DateIdea[] => dateIdeasByLanguage[language];
