import type { Budget, DateIdea, Mood, Setting, TimeAvailable } from '@/types/date';

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

export const dateIdeas: DateIdea[] = [
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
      'Exchange pieces and add one detail to each other\'s work.',
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
