// Ancient Philosophical Sayings Database
const philosophicalSayings = {
  greek: [
    {
      id: 'greek_001',
      text: 'The only true wisdom is in knowing you know nothing.',
      philosopher: 'Socrates',
      period: '470-399 BCE',
      explanation: 'True wisdom begins with intellectual humility - recognizing the limits of our knowledge opens us to learning.',
      category: 'wisdom',
      difficulty: 'beginner'
    },
    {
      id: 'greek_002',
      text: 'The unexamined life is not worth living.',
      philosopher: 'Socrates',
      period: '470-399 BCE',
      explanation: 'Self-reflection and critical examination of our beliefs and actions are essential for a meaningful existence.',
      category: 'life',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_003',
      text: 'Wise men speak because they have something to say; fools because they have to say something.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'Thoughtful communication requires substance and purpose, not merely the desire to speak.',
      category: 'communication',
      difficulty: 'beginner'
    },
    {
      id: 'greek_004',
      text: 'We are what we repeatedly do. Excellence, then, is not an act but a habit.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'Character and excellence are developed through consistent practice rather than isolated actions.',
      category: 'excellence',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_005',
      text: 'No man ever steps in the same river twice, for it is not the same river and he is not the same man.',
      philosopher: 'Heraclitus',
      period: '535-475 BCE',
      explanation: 'Both the world and we ourselves are in constant flux - change is the fundamental nature of reality.',
      category: 'change',
      difficulty: 'advanced'
    },
    {
      id: 'greek_006',
      text: 'The measure of a man is what he does with power.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'True character is revealed not in weakness but in how one handles authority and influence.',
      category: 'power',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_007',
      text: 'Knowing yourself is the beginning of all wisdom.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'Self-knowledge is the foundation upon which all other understanding is built.',
      category: 'wisdom',
      difficulty: 'beginner'
    },
    {
      id: 'greek_008',
      text: 'The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.',
      philosopher: 'Socrates',
      period: '470-399 BCE',
      explanation: 'True contentment comes from appreciating what we have rather than constantly pursuing more.',
      category: 'happiness',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_009',
      text: 'Quality is not an act, it is a habit.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'Excellence in any domain comes from repeated practice and consistent behavior, not from occasional great efforts.',
      category: 'excellence',
      difficulty: 'beginner'
    },
    {
      id: 'greek_010',
      text: 'He who is not a good servant will not be a good master.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'Leadership requires understanding what it means to serve and follow; humility precedes authority.',
      category: 'leadership',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_011',
      text: 'Courage is the first of human qualities because it is the quality which guarantees the others.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'Without courage, we cannot practice other virtues consistently when faced with difficulty or fear.',
      category: 'virtue',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_012',
      text: 'Wonder is the beginning of wisdom.',
      philosopher: 'Socrates',
      period: '470-399 BCE',
      explanation: 'Curiosity and the capacity to be amazed by the world are the starting points for philosophical inquiry and understanding.',
      category: 'wisdom',
      difficulty: 'beginner'
    },
    {
      id: 'greek_013',
      text: 'The greatest wealth is to live content with little.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'True richness comes from inner peace and satisfaction, not from accumulating material possessions.',
      category: 'contentment',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_014',
      text: 'Patience is bitter, but its fruit is sweet.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'Enduring difficulty and waiting for the right moment is challenging, but the rewards are worth the struggle.',
      category: 'patience',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_015',
      text: 'The whole is greater than the sum of its parts.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'Systems and relationships create emergent properties that cannot be understood by examining components in isolation.',
      category: 'systems',
      difficulty: 'advanced'
    }
  ],

  roman: [
    {
      id: 'roman_001',
      text: 'You have power over your mind—not outside events. Realize this, and you will find strength.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Our true power lies in controlling our reactions and thoughts, not in controlling external circumstances.',
      category: 'control',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_002',
      text: 'We suffer more often in imagination than in reality.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Much of our suffering comes from anticipating problems that never materialize, rather than from actual events.',
      category: 'suffering',
      difficulty: 'beginner'
    },
    {
      id: 'roman_003',
      text: 'It is not what happens to you, but how you react to it that matters.',
      philosopher: 'Epictetus',
      period: '50-135 CE',
      explanation: 'Events themselves are neutral; our responses determine their impact on our lives and character.',
      category: 'control',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_004',
      text: 'The happiness of your life depends upon the quality of your thoughts.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Our mental state and the quality of our thinking directly determine our experience of life.',
      category: 'happiness',
      difficulty: 'beginner'
    },
    {
      id: 'roman_005',
      text: 'No man is free who is not master of himself.',
      philosopher: 'Epictetus',
      period: '50-135 CE',
      explanation: 'True freedom comes from self-discipline and control over our desires, emotions, and actions.',
      category: 'freedom',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_006',
      text: 'Waste no more time arguing what a good man should be. Be one.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Action speaks louder than words; embody virtue through your deeds rather than debating it.',
      category: 'action',
      difficulty: 'beginner'
    },
    {
      id: 'roman_007',
      text: 'Difficulties strengthen the mind, as labor does the body.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Challenges are not obstacles but opportunities for growth and development of character.',
      category: 'growth',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_008',
      text: 'Don\'t explain your philosophy. Embody it.',
      philosopher: 'Epictetus',
      period: '50-135 CE',
      explanation: 'True philosophy is lived, not merely discussed; let your life be the demonstration of your beliefs.',
      category: 'action',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_009',
      text: 'If it is not right, do not do it. If it is not true, do not say it.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Integrity requires aligning our actions and words with truth and righteousness, regardless of convenience.',
      category: 'integrity',
      difficulty: 'beginner'
    },
    {
      id: 'roman_010',
      text: 'Luck is what happens when preparation meets opportunity.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Success is not random; it comes from being ready to act when the right moment arrives.',
      category: 'preparation',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_011',
      text: 'The best revenge is to be unlike him who performed the injury.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Responding to wrongdoing with virtue, rather than retaliation, demonstrates true strength of character.',
      category: 'virtue',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_012',
      text: 'He who fears death will never do anything worthy of a man who is alive.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Fear of mortality paralyzes us from living fully; accepting death frees us to act courageously.',
      category: 'courage',
      difficulty: 'advanced'
    },
    {
      id: 'roman_013',
      text: 'First say to yourself what you would be; and then do what you have to do.',
      philosopher: 'Epictetus',
      period: '50-135 CE',
      explanation: 'Clarity of purpose must precede action; know your ideal self before taking steps toward it.',
      category: 'purpose',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_014',
      text: 'The obstacle is the way.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Challenges are not barriers to success but the path itself; they reveal opportunities for growth.',
      category: 'resilience',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_015',
      text: 'Life is long if you know how to use it.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Time is abundant when we use it wisely and purposefully, rather than wasting it on trivial pursuits.',
      category: 'time',
      difficulty: 'intermediate'
    }
  ],

  eastern: [
    {
      id: 'eastern_001',
      text: 'Knowing others is intelligence; knowing yourself is true wisdom.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Self-knowledge is deeper and more valuable than understanding others; it is the foundation of all wisdom.',
      category: 'wisdom',
      difficulty: 'beginner'
    },
    {
      id: 'eastern_002',
      text: 'Do you have the patience to wait until your mud settles and the water is clear?',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'True understanding requires patience and stillness; clarity comes when we allow turmoil to settle naturally.',
      category: 'patience',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_003',
      text: 'Learning without thinking is useless. Thinking without learning is dangerous.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'Knowledge and reflection must work together; either alone leads to incomplete or harmful understanding.',
      category: 'learning',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_004',
      text: 'What you do not want done to yourself, do not do to others.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'The golden rule of empathy and reciprocity - treat others as you wish to be treated.',
      category: 'empathy',
      difficulty: 'beginner'
    },
    {
      id: 'eastern_005',
      text: 'When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Authenticity and self-acceptance naturally earn respect; comparison and competition arise from insecurity.',
      category: 'authenticity',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_006',
      text: 'The wise man is one who knows what he does not know.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'True wisdom includes recognizing the boundaries of our knowledge and being humble about what we don\'t understand.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_007',
      text: 'Fix your mind on truth, hold firm to virtue, rely on loving kindness, and find your recreation in the Arts.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'A complete life requires truth, moral character, compassion, and appreciation of beauty and culture.',
      category: 'life',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_008',
      text: 'Give evil nothing to oppose and it will disappear by itself.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Negativity often feeds on resistance; sometimes the wisest response is non-engagement and patience.',
      category: 'conflict',
      difficulty: 'advanced'
    },
    {
      id: 'eastern_009',
      text: 'A journey of a thousand miles begins with a single step.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Great achievements start with small, decisive actions; the key is to begin rather than be overwhelmed by the distance.',
      category: 'action',
      difficulty: 'beginner'
    },
    {
      id: 'eastern_010',
      text: 'Silence is a true friend who never betrays.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'In silence we find reliability and safety; words can harm but thoughtful quiet never does.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_011',
      text: 'The man who moves a mountain begins by carrying away small stones.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'Monumental tasks are accomplished through persistent, incremental effort rather than grand gestures.',
      category: 'perseverance',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_012',
      text: 'Nature does not hurry, yet everything is accomplished.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Natural processes unfold at their own pace without force; we too can achieve much through patient, steady effort.',
      category: 'patience',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_013',
      text: 'He who knows others is wise; he who knows himself is enlightened.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Understanding others requires intelligence, but true enlightenment comes from deep self-awareness.',
      category: 'enlightenment',
      difficulty: 'advanced'
    },
    {
      id: 'eastern_014',
      text: 'Our greatest glory is not in never falling, but in rising every time we fall.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'Resilience and the ability to recover from failure define true success, not the absence of mistakes.',
      category: 'resilience',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_015',
      text: 'To attain knowledge, add things every day. To attain wisdom, remove things every day.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Wisdom comes from simplification and letting go of unnecessary complexity, not from accumulation.',
      category: 'wisdom',
      difficulty: 'advanced'
    }
  ],

  modern: [
    {
      id: 'modern_001',
      text: 'I think, therefore I am.',
      philosopher: 'René Descartes',
      period: '1596-1650',
      explanation: 'The very act of thinking proves our existence; consciousness is the fundamental evidence of being.',
      category: 'existence',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_002',
      text: 'Science is organized knowledge. Wisdom is organized life.',
      philosopher: 'Immanuel Kant',
      period: '1724-1804',
      explanation: 'Knowledge becomes science when systematically organized, but wisdom requires organizing how we actually live.',
      category: 'wisdom',
      difficulty: 'advanced'
    },
    {
      id: 'modern_003',
      text: 'When we are no longer able to change a situation, we are challenged to change ourselves.',
      philosopher: 'Viktor Frankl',
      period: '1905-1997',
      explanation: 'When external circumstances are beyond our control, we still have the power to transform our internal response.',
      category: 'change',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_004',
      text: 'The most difficult thing in life is to know yourself.',
      philosopher: 'Thales',
      period: '624-546 BCE',
      explanation: 'Self-knowledge is the greatest challenge because we are often blind to our own faults and motivations.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_005',
      text: 'Happiness resides not in possessions, and not in gold, happiness dwells in the soul.',
      philosopher: 'Democritus',
      period: '460-370 BCE',
      explanation: 'True happiness is an internal state of the soul, not dependent on external material possessions.',
      category: 'happiness',
      difficulty: 'beginner'
    },
    {
      id: 'modern_006',
      text: 'The life which is unexamined is not worth living.',
      philosopher: 'Socrates',
      period: '470-399 BCE',
      explanation: 'A life without self-reflection and critical examination lacks meaning and purpose.',
      category: 'life',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_007',
      text: 'That which does not kill us makes us stronger.',
      philosopher: 'Friedrich Nietzsche',
      period: '1844-1900',
      explanation: 'Adversity and challenges that we survive build resilience and strength of character.',
      category: 'resilience',
      difficulty: 'beginner'
    },
    {
      id: 'modern_008',
      text: 'He who has a why to live can bear almost any how.',
      philosopher: 'Friedrich Nietzsche',
      period: '1844-1900',
      explanation: 'A strong sense of purpose enables us to endure even the most difficult circumstances.',
      category: 'purpose',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_009',
      text: 'Man is condemned to be free.',
      philosopher: 'Jean-Paul Sartre',
      period: '1905-1980',
      explanation: 'We cannot escape the burden of freedom and responsibility for our choices, even when we wish to.',
      category: 'freedom',
      difficulty: 'advanced'
    },
    {
      id: 'modern_010',
      text: 'The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion.',
      philosopher: 'Albert Camus',
      period: '1913-1960',
      explanation: 'In a world of constraints, personal freedom becomes a form of resistance and authenticity.',
      category: 'freedom',
      difficulty: 'advanced'
    },
    {
      id: 'modern_011',
      text: 'Between stimulus and response there is a space. In that space is our power to choose our response.',
      philosopher: 'Viktor Frankl',
      period: '1905-1997',
      explanation: 'We always have the freedom to choose how we respond to events, even when we cannot control the events themselves.',
      category: 'choice',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_012',
      text: 'The unexamined life is not worth living, but the over-examined life is not worth living either.',
      philosopher: 'Socrates (modern interpretation)',
      period: 'Contemporary',
      explanation: 'Balance is needed between reflection and action; excessive analysis can paralyze us from living fully.',
      category: 'balance',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_013',
      text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
      philosopher: 'Ralph Waldo Emerson',
      period: '1803-1882',
      explanation: 'Maintaining authenticity against social pressure and conformity requires courage and is a significant achievement.',
      category: 'authenticity',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_014',
      text: 'The mind is everything. What you think you become.',
      philosopher: 'Buddha',
      period: '563-483 BCE',
      explanation: 'Our thoughts shape our reality and character; mental discipline is the foundation of transformation.',
      category: 'mind',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_015',
      text: 'In the middle of difficulty lies opportunity.',
      philosopher: 'Albert Einstein',
      period: '1879-1955',
      explanation: 'Challenges contain hidden possibilities for growth, innovation, and positive change.',
      category: 'opportunity',
      difficulty: 'beginner'
    }
  ]
};

// Spaced Repetition System Data
let userProgress = {
  cards: {},
  sessions: [],
  streak: 0,
  totalReviews: 0,
  categories: {
    greek: { mastered: 0, learning: 0, total: 0 },
    roman: { mastered: 0, learning: 0, total: 0 },
    eastern: { mastered: 0, learning: 0, total: 0 },
    modern: { mastered: 0, learning: 0, total: 0 }
  },
  achievements: [],
  journalEntries: []
};

// Initialize user progress if empty
function initializeUserProgress() {
  const saved = localStorage.getItem('philosophyProgress');
  if (saved) {
    userProgress = JSON.parse(saved);
  } else {
    // Initialize all cards as new
    Object.keys(philosophicalSayings).forEach(category => {
      userProgress.categories[category].total = philosophicalSayings[category].length;
      philosophicalSayings[category].forEach(card => {
        userProgress.cards[card.id] = {
          interval: 0,
          repetitions: 0,
          easeFactor: 2.5,
          nextReview: Date.now(),
          category: category,
          difficulty: card.difficulty
        };
      });
    });
    saveProgress();
  }
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem('philosophyProgress', JSON.stringify(userProgress));
}

// Get cards due for review
function getDueCards() {
  const now = Date.now();
  const dueCards = [];

  Object.keys(userProgress.cards).forEach(cardId => {
    if (userProgress.cards[cardId].nextReview <= now) {
      dueCards.push(cardId);
    }
  });

  return dueCards;
}

// Get card data by ID
function getCardById(cardId) {
  const [category] = cardId.split('_');
  const categoryKey = category === 'greek' ? 'greek' :
    category === 'roman' ? 'roman' :
      category === 'eastern' ? 'eastern' : 'modern';

  return philosophicalSayings[categoryKey]?.find(card => card.id === cardId);
}

// Update card based on difficulty rating
function updateCard(cardId, difficulty) {
  const card = userProgress.cards[cardId];
  let newInterval;
  let newEaseFactor = card.easeFactor;

  switch (difficulty) {
    case 'again':
      newInterval = 0;
      card.repetitions = 0;
      newEaseFactor = Math.max(1.3, card.easeFactor - 0.2);
      break;
    case 'hard':
      newInterval = Math.max(1, card.interval * 0.8);
      newEaseFactor = Math.max(1.3, card.easeFactor - 0.15);
      break;
    case 'good':
      if (card.repetitions === 0) {
        newInterval = 1;
      } else if (card.repetitions === 1) {
        newInterval = 6;
      } else {
        newInterval = Math.round(card.interval * card.easeFactor);
      }
      card.repetitions++;
      break;
    case 'easy':
      if (card.repetitions === 0) {
        newInterval = 4;
      } else {
        newInterval = Math.round(card.interval * card.easeFactor * 1.3);
      }
      card.repetitions++;
      newEaseFactor = card.easeFactor + 0.15;
      break;
  }

  card.interval = newInterval;
  card.easeFactor = newEaseFactor;
  card.nextReview = Date.now() + (newInterval * 24 * 60 * 60 * 1000);

  userProgress.totalReviews++;

  // Update category progress
  updateCategoryProgress(card.category);

  saveProgress();
}

// Update category progress
function updateCategoryProgress(category) {
  const categoryCards = Object.keys(userProgress.cards)
    .filter(id => userProgress.cards[id].category === category)
    .map(id => userProgress.cards[id]);

  const mastered = categoryCards.filter(card => card.repetitions >= 3).length;
  const learning = categoryCards.filter(card => card.repetitions > 0 && card.repetitions < 3).length;

  userProgress.categories[category] = {
    mastered,
    learning,
    total: categoryCards.length
  };
}

// Get statistics for charts
function getProgressStats() {
  const stats = {
    categories: userProgress.categories,
    totalReviews: userProgress.totalReviews,
    streak: userProgress.streak,
    mastery: {
      greek: (userProgress.categories.greek.mastered / userProgress.categories.greek.total * 100) || 0,
      roman: (userProgress.categories.roman.mastered / userProgress.categories.roman.total * 100) || 0,
      eastern: (userProgress.categories.eastern.mastered / userProgress.categories.eastern.total * 100) || 0,
      modern: (userProgress.categories.modern.mastered / userProgress.categories.modern.total * 100) || 0
    }
  };

  return stats;
}

// Initialize on load
initializeUserProgress();