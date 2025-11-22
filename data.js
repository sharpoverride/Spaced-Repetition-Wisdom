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
    },
    {
      id: 'greek_016',
      text: 'Knowledge is the wing where the mind flies.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'Intellectual insight lifts us beyond the mundane.',
      category: 'knowledge',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_017',
      text: 'Courage is the first of human qualities because it is the quality which guarantees the others.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'Without bravery, other virtues cannot be practiced.',
      category: 'courage',
      difficulty: 'beginner'
    },
    {
      id: 'greek_018',
      text: 'The greatest wealth is to live content with little.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'True richness comes from inner peace and satisfaction, not material possessions.',
      category: 'contentment',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_019',
      text: 'He who is not a good servant will not be a good master.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'Leadership requires understanding service and humility.',
      category: 'virtue',
      difficulty: 'intermediate'
    },
    {
      id: 'greek_020',
      text: 'Wonder is the beginning of wisdom.',
      philosopher: 'Socrates',
      period: '470-399 BCE',
      explanation: 'Curiosity sparks the pursuit of knowledge.',
      category: 'wisdom',
      difficulty: 'beginner'
    },
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
    },
    {
      id: 'roman_016',
      text: 'The universe is change; our life is what our thoughts make it.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Our perception shapes reality; by changing our thoughts, we transform our experience.',
      category: 'perception',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_017',
      text: 'Begin each day by telling yourself: Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Preparing mentally for difficulties makes us resilient and prevents disappointment.',
      category: 'preparation',
      difficulty: 'advanced'
    },
    {
      id: 'roman_018',
      text: 'A gem cannot be polished without friction, nor a man perfected without trials.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Challenges are necessary for growth and character development.',
      category: 'growth',
      difficulty: 'intermediate'
    },
    {
      id: 'roman_019',
      text: 'He who is brave is free.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Courage liberates us from fear and external constraints.',
      category: 'courage',
      difficulty: 'beginner'
    },
    {
      id: 'roman_020',
      text: 'The best way to avenge yourself is to not be like that.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Rising above wrongdoing through virtue is the truest form of victory.',
      category: 'virtue',
      difficulty: 'intermediate'
    },
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
    },
    {
      id: 'eastern_016',
      text: 'The journey of a thousand miles begins with a single step.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Great endeavors start with small, decisive actions; the key is to begin.',
      category: 'action',
      difficulty: 'beginner'
    },
    {
      id: 'eastern_017',
      text: 'When the student is ready, the teacher will appear.',
      philosopher: 'Buddha',
      period: '563-483 BCE',
      explanation: 'Learning opportunities arise when we are prepared to receive them.',
      category: 'learning',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_018',
      text: 'He who knows others is wise; he who knows himself is enlightened.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Self-awareness surpasses knowledge of others in importance.',
      category: 'self-knowledge',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_019',
      text: 'The superior man is modest in his speech, but exceeds in his actions.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'True excellence is demonstrated through deeds, not words.',
      category: 'action',
      difficulty: 'intermediate'
    },
    {
      id: 'eastern_020',
      text: 'Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.',
      philosopher: 'Buddha',
      period: '563-483 BCE',
      explanation: 'Mindfulness and presence are the keys to peace and effectiveness.',
      category: 'mindfulness',
      difficulty: 'beginner'
    },
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
    },
    {
      id: 'modern_016',
      text: 'Who looks outside, dreams; who looks inside, awakes.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'True understanding comes from introspection rather than seeking answers in the external world.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_017',
      text: 'The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.',
      philosopher: 'William James',
      period: '1842-1910',
      explanation: 'Our mindset determines our reality; changing our attitude can transform our life experience.',
      category: 'mindset',
      difficulty: 'beginner'
    },
    {
      id: 'modern_018',
      text: 'The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.',
      philosopher: 'Bertrand Russell',
      period: '1872-1970',
      explanation: 'Wisdom involves recognizing uncertainty, while ignorance often breeds false confidence.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'modern_019',
      text: 'Freedom is what you do with what\'s been done to you.',
      philosopher: 'Jean-Paul Sartre',
      period: '1905-1980',
      explanation: 'We cannot control our past or circumstances, but we are free to choose how we respond to them.',
      category: 'freedom',
      difficulty: 'advanced'
    },
    {
      id: 'modern_020',
      text: 'He who has a why to live can bear almost any how.',
      philosopher: 'Friedrich Nietzsche',
      period: '1844-1900',
      explanation: 'Having a purpose or meaning in life enables us to endure significant hardships.',
      category: 'purpose',
      difficulty: 'intermediate'
    }
  ],

  renaissance: [
    {
      id: 'renaissance_001',
      text: 'It is better to be feared than loved, if you cannot be both.',
      philosopher: 'Niccolò Machiavelli',
      period: '1469-1527',
      explanation: 'In leadership, commanding respect and fear is more reliable than relying on affection, though one should avoid being hated.',
      category: 'power',
      difficulty: 'intermediate'
    },
    {
      id: 'renaissance_002',
      text: 'The greatest thing in the world is to know how to belong to oneself.',
      philosopher: 'Michel de Montaigne',
      period: '1533-1592',
      explanation: 'Self-possession and autonomy are the highest forms of personal achievement.',
      category: 'self',
      difficulty: 'advanced'
    },
    {
      id: 'renaissance_003',
      text: 'Knowledge is power.',
      philosopher: 'Francis Bacon',
      period: '1561-1626',
      explanation: 'Understanding and information provide the ability to influence and control outcomes.',
      category: 'knowledge',
      difficulty: 'beginner'
    },
    {
      id: 'renaissance_004',
      text: 'Prevention is better than cure.',
      philosopher: 'Desiderius Erasmus',
      period: '1466-1536',
      explanation: 'It is wiser to stop problems from happening than to try to fix them after they have occurred.',
      category: 'wisdom',
      difficulty: 'beginner'
    },
    {
      id: 'renaissance_005',
      text: 'You wouldn\'t abandon ship in a storm just because you couldn\'t control the winds.',
      philosopher: 'Thomas More',
      period: '1478-1535',
      explanation: 'We must persist in our duties and efforts even when circumstances are difficult and beyond our control.',
      category: 'perseverance',
      difficulty: 'intermediate'
    },
    {
      id: 'renaissance_006',
      text: 'The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low, and achieving our mark.',
      philosopher: 'Michelangelo',
      period: '1475-1564',
      explanation: 'Ambition and high standards are crucial; mediocrity is a greater trap than failure.',
      category: 'ambition',
      difficulty: 'intermediate'
    },
    {
      id: 'renaissance_007',
      text: 'Time is a vindictive bandit to steal the beauty of our former selves.',
      philosopher: 'Raphael',
      period: '1483-1520',
      explanation: 'Aging is inevitable, and we must accept the passage of time and the changes it brings.',
      category: 'time',
      difficulty: 'intermediate'
    },
    {
      id: 'renaissance_008',
      text: 'Five enemies of peace inhabit with us: avarice, ambition, envy, anger, and pride.',
      philosopher: 'Petrarch',
      period: '1304-1374',
      explanation: 'Inner peace is destroyed by our own negative emotions and vices, not just external conflict.',
      category: 'peace',
      difficulty: 'advanced'
    },
    {
      id: 'renaissance_009',
      text: 'I cannot live under pressures from patrons, let alone paint.',
      philosopher: 'Michelangelo',
      period: '1475-1564',
      explanation: 'Creative freedom is essential for producing one\'s best work; external pressure stifles art.',
      category: 'freedom',
      difficulty: 'beginner'
    },
    {
      id: 'renaissance_010',
      text: 'There is no greater agony than bearing an untold story inside you.',
      philosopher: 'Maya Angelou (attributed to Renaissance spirit)',
      period: 'Modern/Timeless',
      explanation: 'Self-expression is a fundamental human need; suppression leads to suffering.',
      category: 'expression',
      difficulty: 'intermediate'
    }
  ],

  love: [
    {
      id: 'love_001',
      text: 'Love is composed of a single soul inhabiting two bodies.',
      philosopher: 'Aristotle',
      period: '384-322 BCE',
      explanation: 'True love creates a profound spiritual unity between two people.',
      category: 'connection',
      difficulty: 'beginner'
    },
    {
      id: 'love_002',
      text: 'At the touch of love everyone becomes a poet.',
      philosopher: 'Plato',
      period: '428-348 BCE',
      explanation: 'Love inspires creativity and elevates our expression and perception of the world.',
      category: 'inspiration',
      difficulty: 'beginner'
    },
    {
      id: 'love_003',
      text: 'Immature love says: \'I love you because I need you.\' Mature love says: \'I need you because I love you.\'',
      philosopher: 'Erich Fromm',
      period: '1900-1980',
      explanation: 'True love is based on giving and appreciation, not on dependency or using the other person.',
      category: 'maturity',
      difficulty: 'intermediate'
    },
    {
      id: 'love_004',
      text: 'The way to love anything is to realize that it may be lost.',
      philosopher: 'G.K. Chesterton',
      period: '1874-1936',
      explanation: 'Awareness of impermanence deepens our appreciation and cherishing of what we love.',
      category: 'appreciation',
      difficulty: 'intermediate'
    },
    {
      id: 'love_005',
      text: 'Love is the child of freedom, never that of domination.',
      philosopher: 'Erich Fromm',
      period: '1900-1980',
      explanation: 'Love can only flourish when both partners are free; control and possession destroy it.',
      category: 'freedom',
      difficulty: 'intermediate'
    },
    {
      id: 'love_006',
      text: 'We are asleep. With one another\'s help, we may wake.',
      philosopher: 'Rumi',
      period: '1207-1273',
      explanation: 'Relationships can be a catalyst for spiritual awakening and self-realization.',
      category: 'growth',
      difficulty: 'advanced'
    },
    {
      id: 'love_007',
      text: 'To love is to recognize yourself in another.',
      philosopher: 'Eckhart Tolle',
      period: '1948-',
      explanation: 'Love dissolves the illusion of separation, revealing our shared essence.',
      category: 'oneness',
      difficulty: 'advanced'
    },
    {
      id: 'love_008',
      text: 'Love is an act of endless forgiveness, a tender look which becomes a habit.',
      philosopher: 'Peter Ustinov',
      period: '1921-2004',
      explanation: 'Sustaining love requires constant patience, acceptance, and choosing kindness.',
      category: 'forgiveness',
      difficulty: 'intermediate'
    },
    {
      id: 'love_009',
      text: 'One word frees us of all the weight and pain of life: that word is love.',
      philosopher: 'Sophocles',
      period: '497-406 BCE',
      explanation: 'Love has the power to heal suffering and lighten the burdens of existence.',
      category: 'healing',
      difficulty: 'beginner'
    },
    {
      id: 'love_010',
      text: 'Absence is to love what wind is to fire; it extinguishes the small, it inflames the great.',
      philosopher: 'Roger de Bussy-Rabutin',
      period: '1618-1693',
      explanation: 'True love is strengthened by separation, while superficial attraction fades.',
      category: 'endurance',
      difficulty: 'intermediate'
    }
  ],

  living: [
    {
      id: 'living_001',
      text: 'The art of living is more like wrestling than dancing.',
      philosopher: 'Marcus Aurelius',
      period: '121-180 CE',
      explanation: 'Life requires readiness to stand firm against sudden and unforeseen challenges.',
      category: 'resilience',
      difficulty: 'intermediate'
    },
    {
      id: 'living_002',
      text: 'Simplicity is the ultimate sophistication.',
      philosopher: 'Leonardo da Vinci',
      period: '1452-1519',
      explanation: 'True refinement and mastery are found in eliminating the unnecessary.',
      category: 'simplicity',
      difficulty: 'beginner'
    },
    {
      id: 'living_003',
      text: 'Beware the barrenness of a busy life.',
      philosopher: 'Socrates',
      period: '470-399 BCE',
      explanation: 'Constant activity without reflection or purpose leads to an empty existence.',
      category: 'balance',
      difficulty: 'intermediate'
    },
    {
      id: 'living_004',
      text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
      philosopher: 'Mahatma Gandhi',
      period: '1869-1948',
      explanation: 'Balance the urgency of living fully in the present with the long-term value of growth.',
      category: 'growth',
      difficulty: 'beginner'
    },
    {
      id: 'living_005',
      text: 'It is not the man who has too little, but the man who craves more, that is poor.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Poverty is a state of mind defined by desire, not by the amount of possessions.',
      category: 'contentment',
      difficulty: 'intermediate'
    },
    {
      id: 'living_006',
      text: 'To live is the rarest thing in the world. Most people exist, that is all.',
      philosopher: 'Oscar Wilde',
      period: '1854-1900',
      explanation: 'True living involves passion, awareness, and engagement, not just biological survival.',
      category: 'purpose',
      difficulty: 'intermediate'
    },
    {
      id: 'living_007',
      text: 'Do not spoil what you have by desiring what you have not.',
      philosopher: 'Epicurus',
      period: '341-270 BCE',
      explanation: 'Happiness is found in appreciating present blessings rather than focusing on lack.',
      category: 'gratitude',
      difficulty: 'beginner'
    },
    {
      id: 'living_008',
      text: 'Life is really simple, but we insist on making it complicated.',
      philosopher: 'Confucius',
      period: '551-479 BCE',
      explanation: 'Complexity often arises from our own desires, anxieties, and unnecessary additions.',
      category: 'simplicity',
      difficulty: 'beginner'
    },
    {
      id: 'living_009',
      text: 'The privilege of a lifetime is to become who you truly are.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'The ultimate goal of life is self-realization and authenticity.',
      category: 'authenticity',
      difficulty: 'advanced'
    },
    {
      id: 'living_010',
      text: 'We must be willing to let go of the life we planned so as to have the life that is waiting for us.',
      philosopher: 'Joseph Campbell',
      period: '1904-1987',
      explanation: 'Embracing our true path often requires releasing our rigid expectations and controlling nature.',
      category: 'acceptance',
      difficulty: 'intermediate'
    }
  ],

  wealth: [
    {
      id: 'wealth_001',
      text: 'Wealth consists not in having great possessions, but in having few wants.',
      philosopher: 'Epictetus',
      period: '50-135 CE',
      explanation: 'True wealth is defined by freedom from desire rather than the accumulation of material goods.',
      category: 'contentment',
      difficulty: 'beginner'
    },
    {
      id: 'wealth_002',
      text: 'It is not the man who has too little, but the man who craves more, that is poor.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Poverty is a state of mind characterized by insatiable desire.',
      category: 'mindset',
      difficulty: 'intermediate'
    },
    {
      id: 'wealth_003',
      text: 'The real measure of your wealth is how much you\'d be worth if you lost all your money.',
      philosopher: 'Anonymous',
      period: 'Unknown',
      explanation: 'True value lies in character, skills, and relationships, which cannot be taken away.',
      category: 'character',
      difficulty: 'beginner'
    },
    {
      id: 'wealth_004',
      text: 'Money is a terrible master but an excellent servant.',
      philosopher: 'P.T. Barnum',
      period: '1810-1891',
      explanation: 'Money should be a tool to achieve your goals, not the driving force that controls your life.',
      category: 'control',
      difficulty: 'beginner'
    },
    {
      id: 'wealth_005',
      text: 'A wise man should have money in his head, but not in his heart.',
      philosopher: 'Jonathan Swift',
      period: '1667-1745',
      explanation: 'Manage finances intelligently without becoming emotionally attached or corrupted by them.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'wealth_006',
      text: 'Wealth is the ability to fully experience life.',
      philosopher: 'Henry David Thoreau',
      period: '1817-1862',
      explanation: 'Prosperity is measured by the richness of one\'s experiences and freedom, not just bank balance.',
      category: 'experience',
      difficulty: 'intermediate'
    },
    {
      id: 'wealth_007',
      text: 'The more you give, the more you have.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Generosity creates a flow of abundance and spiritual wealth that hoarding cannot achieve.',
      category: 'generosity',
      difficulty: 'advanced'
    },
    {
      id: 'wealth_008',
      text: 'Beware of little expenses. A small leak will sink a great ship.',
      philosopher: 'Benjamin Franklin',
      period: '1706-1790',
      explanation: 'Financial stability requires attention to detail and discipline in small matters.',
      category: 'discipline',
      difficulty: 'beginner'
    },
    {
      id: 'wealth_009',
      text: 'Fortune sides with him who dares.',
      philosopher: 'Virgil',
      period: '70-19 BCE',
      explanation: 'Creating wealth often requires calculated risk-taking and courage.',
      category: 'courage',
      difficulty: 'intermediate'
    },
    {
      id: 'wealth_010',
      text: 'If you live for having it all, what you have is never enough.',
      philosopher: 'Vicki Robin',
      period: '1945-',
      explanation: 'The pursuit of "more" is an endless treadmill; satisfaction comes from "enough".',
      category: 'satisfaction',
      difficulty: 'intermediate'
    }
  ],

  creativity: [
    {
      id: 'creativity_001',
      text: 'Creativity is intelligence having fun.',
      philosopher: 'Albert Einstein',
      period: '1879-1955',
      explanation: 'Innovation comes from playfulness and the joy of exploration, not just rigid logic.',
      category: 'play',
      difficulty: 'beginner'
    },
    {
      id: 'creativity_002',
      text: 'Every child is an artist. The problem is how to remain an artist once we grow up.',
      philosopher: 'Pablo Picasso',
      period: '1881-1973',
      explanation: 'We are born with innate creativity, but societal conditioning often suppresses it.',
      category: 'innocence',
      difficulty: 'intermediate'
    },
    {
      id: 'creativity_003',
      text: 'Art is not what you see, but what you make others see.',
      philosopher: 'Edgar Degas',
      period: '1834-1917',
      explanation: 'The purpose of art is communication and shifting perspective, not just replication.',
      category: 'perspective',
      difficulty: 'intermediate'
    },
    {
      id: 'creativity_004',
      text: 'Creativity takes courage.',
      philosopher: 'Henri Matisse',
      period: '1869-1954',
      explanation: 'Expressing something new requires bravery to face criticism and failure.',
      category: 'courage',
      difficulty: 'beginner'
    },
    {
      id: 'creativity_005',
      text: 'You can\'t use up creativity. The more you use, the more you have.',
      philosopher: 'Maya Angelou',
      period: '1928-2014',
      explanation: 'Creativity is a renewable resource that grows with practice and expression.',
      category: 'abundance',
      difficulty: 'beginner'
    },
    {
      id: 'creativity_006',
      text: 'To practice any art, no matter how well or badly, is a way to make your soul grow.',
      philosopher: 'Kurt Vonnegut',
      period: '1922-2007',
      explanation: 'The act of creation is valuable for personal and spiritual growth, regardless of the outcome.',
      category: 'growth',
      difficulty: 'intermediate'
    },
    {
      id: 'creativity_007',
      text: 'Great things are done by a series of small things brought together.',
      philosopher: 'Vincent van Gogh',
      period: '1853-1890',
      explanation: 'Masterpieces are the result of persistent attention to detail and incremental effort.',
      category: 'persistence',
      difficulty: 'intermediate'
    },
    {
      id: 'creativity_008',
      text: 'The object of art is not to reproduce reality, but to create a reality of the same intensity.',
      philosopher: 'Alberto Giacometti',
      period: '1901-1966',
      explanation: 'Art aims to evoke deep feeling and presence, not just to copy appearance.',
      category: 'intensity',
      difficulty: 'advanced'
    },
    {
      id: 'creativity_009',
      text: 'Simplicity is the glory of expression.',
      philosopher: 'Walt Whitman',
      period: '1819-1892',
      explanation: 'The most powerful creative work often comes from stripping away the unnecessary.',
      category: 'simplicity',
      difficulty: 'intermediate'
    },
    {
      id: 'creativity_010',
      text: 'Inspiration exists, but it must find you working.',
      philosopher: 'Pablo Picasso',
      period: '1881-1973',
      explanation: 'Don\'t wait for the muse; consistent work invites inspiration to arrive.',
      category: 'discipline',
      difficulty: 'beginner'
    }
  ],

  science: [
    {
      id: 'science_001',
      text: 'Somewhere, something incredible is waiting to be known.',
      philosopher: 'Carl Sagan',
      period: '1934-1996',
      explanation: 'The universe is full of wonders yet to be discovered, inviting our curiosity.',
      category: 'curiosity',
      difficulty: 'beginner'
    },
    {
      id: 'science_002',
      text: 'The first principle is that you must not fool yourself and you are the easiest person to fool.',
      philosopher: 'Richard Feynman',
      period: '1918-1988',
      explanation: 'Intellectual honesty and self-skepticism are the foundations of scientific inquiry.',
      category: 'truth',
      difficulty: 'intermediate'
    },
    {
      id: 'science_003',
      text: 'Equipped with his five senses, man explores the universe around him and calls the adventure Science.',
      philosopher: 'Edwin Hubble',
      period: '1889-1953',
      explanation: 'Science is the systematic extension of our natural perception to understand reality.',
      category: 'exploration',
      difficulty: 'beginner'
    },
    {
      id: 'science_004',
      text: 'Nothing in life is to be feared, it is only to be understood.',
      philosopher: 'Marie Curie',
      period: '1867-1934',
      explanation: 'Knowledge conquers fear; understanding the unknown makes it manageable.',
      category: 'understanding',
      difficulty: 'intermediate'
    },
    {
      id: 'science_005',
      text: 'Science is organized knowledge. Wisdom is organized life.',
      philosopher: 'Immanuel Kant',
      period: '1724-1804',
      explanation: 'Facts alone are not enough; we need wisdom to apply knowledge meaningfully to our lives.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'science_006',
      text: 'The good thing about science is that it\'s true whether or not you believe in it.',
      philosopher: 'Neil deGrasse Tyson',
      period: '1958-',
      explanation: 'Objective reality exists independently of our personal opinions or beliefs.',
      category: 'reality',
      difficulty: 'beginner'
    },
    {
      id: 'science_007',
      text: 'Measure what is measurable, and make measurable what is not so.',
      philosopher: 'Galileo Galilei',
      period: '1564-1642',
      explanation: 'Quantification and observation are key to understanding the physical world.',
      category: 'observation',
      difficulty: 'advanced'
    },
    {
      id: 'science_008',
      text: 'It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.',
      philosopher: 'Charles Darwin',
      period: '1809-1882',
      explanation: 'Flexibility and adaptation are more critical for survival than raw strength or intellect.',
      category: 'adaptation',
      difficulty: 'intermediate'
    },
    {
      id: 'science_009',
      text: 'If I have seen further it is by standing on the shoulders of Giants.',
      philosopher: 'Isaac Newton',
      period: '1642-1727',
      explanation: 'Progress is cumulative; we build upon the discoveries and knowledge of those who came before us.',
      category: 'humility',
      difficulty: 'beginner'
    },
    {
      id: 'science_010',
      text: 'The most incomprehensible thing about the world is that it is comprehensible.',
      philosopher: 'Albert Einstein',
      period: '1879-1955',
      explanation: 'It is a profound mystery that the human mind can understand the laws of the universe.',
      category: 'wonder',
      difficulty: 'advanced'
    }
  ],

  leadership: [
    {
      id: 'leadership_001',
      text: 'A leader is a dealer in hope.',
      philosopher: 'Napoleon Bonaparte',
      period: '1769-1821',
      explanation: 'The primary role of a leader is to inspire and provide a vision of a better future.',
      category: 'inspiration',
      difficulty: 'beginner'
    },
    {
      id: 'leadership_002',
      text: 'To handle yourself, use your head; to handle others, use your heart.',
      philosopher: 'Eleanor Roosevelt',
      period: '1884-1962',
      explanation: 'Self-discipline requires logic, but leading people requires empathy and emotional intelligence.',
      category: 'empathy',
      difficulty: 'intermediate'
    },
    {
      id: 'leadership_003',
      text: 'The supreme art of war is to subdue the enemy without fighting.',
      philosopher: 'Sun Tzu',
      period: '544-496 BCE',
      explanation: 'True strategic mastery involves achieving goals through diplomacy and strategy rather than conflict.',
      category: 'strategy',
      difficulty: 'advanced'
    },
    {
      id: 'leadership_004',
      text: 'It is better to lead from behind and to put others in front, especially when you celebrate victory when nice things occur. You take the front line when there is danger.',
      philosopher: 'Nelson Mandela',
      period: '1918-2013',
      explanation: 'True leaders empower their team during success and protect them during crisis.',
      category: 'humility',
      difficulty: 'intermediate'
    },
    {
      id: 'leadership_005',
      text: 'Management is doing things right; leadership is doing the right things.',
      philosopher: 'Peter Drucker',
      period: '1909-2005',
      explanation: 'Management focuses on efficiency, while leadership focuses on vision and ethical direction.',
      category: 'vision',
      difficulty: 'beginner'
    },
    {
      id: 'leadership_006',
      text: 'If your actions inspire others to dream more, learn more, do more and become more, you are a leader.',
      philosopher: 'John Quincy Adams',
      period: '1767-1848',
      explanation: 'Leadership is defined by the positive impact and growth you stimulate in others.',
      category: 'influence',
      difficulty: 'intermediate'
    },
    {
      id: 'leadership_007',
      text: 'A good leader takes a little more than his share of the blame, a little less than his share of the credit.',
      philosopher: 'Arnold H. Glasow',
      period: '1905-1998',
      explanation: 'Accountability and generosity are hallmarks of respected leadership.',
      category: 'integrity',
      difficulty: 'beginner'
    },
    {
      id: 'leadership_008',
      text: 'Keep your fears to yourself, but share your courage with others.',
      philosopher: 'Robert Louis Stevenson',
      period: '1850-1894',
      explanation: 'Leaders must project stability and confidence to reassure their followers, even when afraid.',
      category: 'courage',
      difficulty: 'intermediate'
    },
    {
      id: 'leadership_009',
      text: 'The quality of a leader is reflected in the standards they set for themselves.',
      philosopher: 'Ray Kroc',
      period: '1902-1984',
      explanation: 'Leading by example through high personal standards is the most effective way to influence.',
      category: 'standards',
      difficulty: 'beginner'
    },
    {
      id: 'leadership_010',
      text: 'Leadership and learning are indispensable to each other.',
      philosopher: 'John F. Kennedy',
      period: '1917-1963',
      explanation: 'Effective leadership requires continuous growth and adaptation to new information.',
      category: 'growth',
      difficulty: 'intermediate'
    }
  ],

  nature: [
    {
      id: 'nature_001',
      text: 'In every walk with nature one receives far more than he seeks.',
      philosopher: 'John Muir',
      period: '1838-1914',
      explanation: 'Nature provides spiritual and physical restoration beyond our expectations.',
      category: 'restoration',
      difficulty: 'beginner'
    },
    {
      id: 'nature_002',
      text: 'Adopt the pace of nature: her secret is patience.',
      philosopher: 'Ralph Waldo Emerson',
      period: '1803-1882',
      explanation: 'Nature achieves great things without rushing; we should emulate this steady, patient progress.',
      category: 'patience',
      difficulty: 'intermediate'
    },
    {
      id: 'nature_003',
      text: 'The clearest way into the Universe is through a forest wilderness.',
      philosopher: 'John Muir',
      period: '1838-1914',
      explanation: 'Immersion in wild nature connects us to the fundamental truths of existence.',
      category: 'connection',
      difficulty: 'beginner'
    },
    {
      id: 'nature_004',
      text: 'Look deep into nature, and then you will understand everything better.',
      philosopher: 'Albert Einstein',
      period: '1879-1955',
      explanation: 'Observing natural laws provides insight into all aspects of life and reality.',
      category: 'insight',
      difficulty: 'intermediate'
    },
    {
      id: 'nature_005',
      text: 'Nature does not hurry, yet everything is accomplished.',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'Effortless action (Wu Wei) allows for completion without stress or haste.',
      category: 'flow',
      difficulty: 'advanced'
    },
    {
      id: 'nature_006',
      text: 'To forget how to dig the earth and to tend the soil is to forget ourselves.',
      philosopher: 'Mahatma Gandhi',
      period: '1869-1948',
      explanation: 'Connection to the land and agriculture is essential for human grounding and identity.',
      category: 'grounding',
      difficulty: 'intermediate'
    },
    {
      id: 'nature_007',
      text: 'The earth has music for those who listen.',
      philosopher: 'William Shakespeare',
      period: '1564-1616',
      explanation: 'Beauty and harmony are always present in nature if we pay attention.',
      category: 'beauty',
      difficulty: 'beginner'
    },
    {
      id: 'nature_008',
      text: 'We abuse land because we regard it as a commodity belonging to us. When we see land as a community to which we belong, we may begin to use it with love and respect.',
      philosopher: 'Aldo Leopold',
      period: '1887-1948',
      explanation: 'Shifting from ownership to stewardship is vital for ecological ethics.',
      category: 'stewardship',
      difficulty: 'advanced'
    },
    {
      id: 'nature_009',
      text: 'Nature is not a place to visit. It is home.',
      philosopher: 'Gary Snyder',
      period: '1930-',
      explanation: 'We are not separate from nature; we are an integral part of it.',
      category: 'belonging',
      difficulty: 'beginner'
    },
    {
      id: 'nature_010',
      text: 'Come forth into the light of things, let nature be your teacher.',
      philosopher: 'William Wordsworth',
      period: '1770-1850',
      explanation: 'Direct experience of the natural world is a superior source of wisdom to books alone.',
      category: 'wisdom',
      difficulty: 'intermediate'
    }
  ],

  humor: [
    {
      id: 'humor_001',
      text: 'The human race has one really effective weapon, and that is laughter.',
      philosopher: 'Mark Twain',
      period: '1835-1910',
      explanation: 'Humor is a powerful tool for resilience and coping with life\'s difficulties.',
      category: 'resilience',
      difficulty: 'beginner'
    },
    {
      id: 'humor_002',
      text: 'Life is too important to be taken seriously.',
      philosopher: 'Oscar Wilde',
      period: '1854-1900',
      explanation: 'A lighthearted approach often reveals more truth than solemnity.',
      category: 'perspective',
      difficulty: 'beginner'
    },
    {
      id: 'humor_003',
      text: 'I refuse to join any club that would have me as a member.',
      philosopher: 'Groucho Marx',
      period: '1890-1977',
      explanation: 'Self-deprecation and skepticism of status are signs of a grounded ego.',
      category: 'humility',
      difficulty: 'intermediate'
    },
    {
      id: 'humor_004',
      text: 'Common sense is the collection of prejudices acquired by age eighteen.',
      philosopher: 'Albert Einstein',
      period: '1879-1955',
      explanation: 'What we consider "obvious" is often just culturally conditioned bias.',
      category: 'wisdom',
      difficulty: 'intermediate'
    },
    {
      id: 'humor_005',
      text: 'A day without laughter is a day wasted.',
      philosopher: 'Charlie Chaplin',
      period: '1889-1977',
      explanation: 'Joy and humor are essential components of a meaningful life.',
      category: 'joy',
      difficulty: 'beginner'
    },
    {
      id: 'humor_006',
      text: 'The secret of life is honesty and fair dealing. If you can fake that, you\'ve got it made.',
      philosopher: 'Groucho Marx',
      period: '1890-1977',
      explanation: 'A cynical look at how society often values the appearance of virtue over virtue itself.',
      category: 'cynicism',
      difficulty: 'advanced'
    },
    {
      id: 'humor_007',
      text: 'Always forgive your enemies; nothing annoys them so much.',
      philosopher: 'Oscar Wilde',
      period: '1854-1900',
      explanation: 'Forgiveness can be a strategic act of power as well as a moral virtue.',
      category: 'strategy',
      difficulty: 'intermediate'
    },
    {
      id: 'humor_008',
      text: 'I have not failed. I\'ve just found 10,000 ways that won\'t work.',
      philosopher: 'Thomas Edison',
      period: '1847-1931',
      explanation: 'Reframing failure as learning is a key to persistence and innovation.',
      category: 'persistence',
      difficulty: 'beginner'
    },
    {
      id: 'humor_009',
      text: 'Better to remain silent and be thought a fool than to speak out and remove all doubt.',
      philosopher: 'Abraham Lincoln',
      period: '1809-1865',
      explanation: 'Restraint in speech is often a greater sign of wisdom than constant talking.',
      category: 'silence',
      difficulty: 'intermediate'
    },
    {
      id: 'humor_010',
      text: 'If you think you are too small to make a difference, try sleeping with a mosquito.',
      philosopher: 'Dalai Lama',
      period: '1935-',
      explanation: 'Even the smallest entity can have a significant impact on its environment.',
      category: 'impact',
      difficulty: 'beginner'
    }
  ],

  time: [
    {
      id: 'time_001',
      text: 'It is not that we have a short time to live, but that we waste a lot of it.',
      philosopher: 'Seneca',
      period: '4 BCE-65 CE',
      explanation: 'Life is long enough if we use it wisely; the problem is our squandering of time on trivialities.',
      category: 'management',
      difficulty: 'beginner'
    },
    {
      id: 'time_002',
      text: 'The two most powerful warriors are patience and time.',
      philosopher: 'Leo Tolstoy',
      period: '1828-1910',
      explanation: 'Endurance and the passage of time can resolve problems that force and haste cannot.',
      category: 'patience',
      difficulty: 'intermediate'
    },
    {
      id: 'time_003',
      text: 'Time is the most valuable thing a man can spend.',
      philosopher: 'Theophrastus',
      period: '371-287 BCE',
      explanation: 'Unlike money, time cannot be regained once lost, making it our most precious resource.',
      category: 'value',
      difficulty: 'beginner'
    },
    {
      id: 'time_004',
      text: 'Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.',
      philosopher: 'Bil Keane',
      period: '1922-2011',
      explanation: 'The only moment we truly possess and can act within is the current one.',
      category: 'presence',
      difficulty: 'beginner'
    },
    {
      id: 'time_005',
      text: 'Dost thou love life? Then do not squander time, for that\'s the stuff life is made of.',
      philosopher: 'Benjamin Franklin',
      period: '1706-1790',
      explanation: 'To waste time is to waste life itself, as our existence is measured in time.',
      category: 'urgency',
      difficulty: 'intermediate'
    },
    {
      id: 'time_006',
      text: 'Time changes everything except something within us which is always surprised by change.',
      philosopher: 'Thomas Hardy',
      period: '1840-1928',
      explanation: 'While the external world is in constant flux, our inner consciousness often feels timeless.',
      category: 'change',
      difficulty: 'advanced'
    },
    {
      id: 'time_007',
      text: 'The future starts today, not tomorrow.',
      philosopher: 'Pope John Paul II',
      period: '1920-2005',
      explanation: 'Procrastination delays our future; we build it through our actions in the present.',
      category: 'action',
      difficulty: 'beginner'
    },
    {
      id: 'time_008',
      text: 'Life can only be understood backwards; but it must be lived forwards.',
      philosopher: 'Søren Kierkegaard',
      period: '1813-1855',
      explanation: 'Meaning often emerges only in retrospect, yet we must make decisions without that hindsight.',
      category: 'understanding',
      difficulty: 'advanced'
    },
    {
      id: 'time_009',
      text: 'They always say time changes things, but you actually have to change them yourself.',
      philosopher: 'Andy Warhol',
      period: '1928-1987',
      explanation: 'Passive waiting for time to fix things is ineffective; active agency is required for change.',
      category: 'agency',
      difficulty: 'intermediate'
    },
    {
      id: 'time_010',
      text: 'Time is a created thing. To say \'I don\'t have time,\' is like saying, \'I don\'t want to.\'',
      philosopher: 'Lao Tzu',
      period: '6th century BCE',
      explanation: 'We prioritize what matters to us; lack of time is often a lack of priority.',
      category: 'priorities',
      difficulty: 'advanced'
    }
  ],

  jung: [
    {
      id: 'jung_001',
      text: 'One does not become enlightened by imagining figures of light, but by making the darkness conscious.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'True growth comes from facing our own shadow and hidden nature, not just seeking positivity.',
      category: 'shadow',
      difficulty: 'intermediate'
    },
    {
      id: 'jung_002',
      text: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'Unexamined patterns and complexes control our behavior until we bring them into awareness.',
      category: 'consciousness',
      difficulty: 'advanced'
    },
    {
      id: 'jung_003',
      text: 'I am not what happened to me, I am what I choose to become.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'We have the agency to define ourselves by our choices rather than being defined by our past trauma.',
      category: 'agency',
      difficulty: 'beginner'
    },
    {
      id: 'jung_004',
      text: 'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'Deep human connection inevitably changes both participants.',
      category: 'relationships',
      difficulty: 'intermediate'
    },
    {
      id: 'jung_005',
      text: 'Everything that irritates us about others can lead us to an understanding of ourselves.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'Our projections onto others reveal our own hidden traits (the shadow).',
      category: 'projection',
      difficulty: 'advanced'
    },
    {
      id: 'jung_006',
      text: 'Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'True insight and awakening are internal processes, not found in the external world.',
      category: 'introspection',
      difficulty: 'intermediate'
    },
    {
      id: 'jung_007',
      text: 'Thinking is difficult, that’s why most people judge.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'Critical thinking requires effort and nuance, whereas judgment is a lazy shortcut.',
      category: 'judgment',
      difficulty: 'beginner'
    },
    {
      id: 'jung_008',
      text: 'The pendulum of the mind oscillates between sense and nonsense, not between right and wrong.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'The human mind is driven by meaning and absurdity more than by moral binaries.',
      category: 'mind',
      difficulty: 'advanced'
    },
    {
      id: 'jung_009',
      text: 'Where love rules, there is no will to power, and where power predominates, love is lacking. The one is the shadow of the other.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'Love and the desire for control are opposing forces; you cannot fully have both simultaneously.',
      category: 'power',
      difficulty: 'advanced'
    },
    {
      id: 'jung_010',
      text: 'A man who has not passed through the inferno of his passions has never overcome them.',
      philosopher: 'Carl Jung',
      period: '1875-1961',
      explanation: 'We must experience and integrate our emotions to master them, rather than repressing them.',
      category: 'integration',
      difficulty: 'intermediate'
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
    modern: { mastered: 0, learning: 0, total: 0 },
    renaissance: { mastered: 0, learning: 0, total: 0 },
    love: { mastered: 0, learning: 0, total: 0 },
    living: { mastered: 0, learning: 0, total: 0 },
    wealth: { mastered: 0, learning: 0, total: 0 },
    creativity: { mastered: 0, learning: 0, total: 0 },
    science: { mastered: 0, learning: 0, total: 0 },
    leadership: { mastered: 0, learning: 0, total: 0 },
    nature: { mastered: 0, learning: 0, total: 0 },
    humor: { mastered: 0, learning: 0, total: 0 },
    time: { mastered: 0, learning: 0, total: 0 },
    jung: { mastered: 0, learning: 0, total: 0 }
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