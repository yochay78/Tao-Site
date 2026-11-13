// Reading notes for chapter pages. A chapter page is indexable (and in the sitemap) only if it has an entry here.
export interface ChapterNote { title: string; description: string; intro: string; body: string[]; faq: [string, string][]; video?: { id: string; title: string; duration: string; uploaded: string } }
const first: Record<number, ChapterNote> = {
8: {
  title: 'Be Like Water',
  description: 'Tao Te Ching chapter 8 in full, with what "the highest good is like water" means and how to live it.',
  intro: 'Chapter 8 of the Tao Te Ching says the highest good is like water. Above is the full chapter. Below is what it means.',
  body: [
    'Most of us were taught that strength means rising. Higher position, louder voice, more control.',
    'Lao Tzu points at water and says the opposite. Water goes down. It settles in the low places everyone else avoids, and because of that, every stream ends up in it. It gives life to everything and never competes for credit.',
    'The chapter then lists seven small ways to live like this: live close to the earth, think deep, give kindly, speak true, lead with order, work with skill, move at the right time. None of them is about winning.',
    'The last line is the quietest and the strongest. Do not fight, and no one can blame you. Water is never defeated because it never enters the fight. Block it and it goes around. That is not weakness. That is a kind of strength you cannot argue with.',
  ],
  faq: [
    ['What does "the highest good is like water" mean?', 'It means the best way to live is to give without competing, and to be at ease in low and humble places. Water nourishes everything and asks for nothing.'],
    ['Why is water close to the Tao?', 'Because it yields, finds its level, and still carves canyons. It shows that gentleness and power are not opposites.'],
  ],
  video: { id: 'UeC1oM60tXk', title: 'Be Like Water: It Has Nothing to Prove', duration: 'PT23S', uploaded: '2026-10-19' },
},
11: {
  title: 'The Empty Space That Makes Things Useful',
  description: 'Tao Te Ching chapter 11 in full: the wheel, the pot and the room, and why emptiness gives things their use.',
  intro: 'Chapter 11 of the Tao Te Ching is about what is not there. Above is the full chapter. Below is what it means.',
  body: [
    'Thirty spokes meet at the hub, but the wheel turns because of the empty space at its center. A pot is made of clay, but you use the hollow inside it. A room is made of walls, but you live in the space between them.',
    'Lao Tzu is not praising emptiness over things. He says Something gives the form and Nothing gives the use. You need both. We just only notice the first.',
    'It is easy to carry this into a life. A day with no gaps has no room for anything to happen. A mind with no silence cannot hear itself. A relationship with no space becomes a grip.',
    'In this chapter, Nothing is not a lack. It is room. And room is what makes everything else work.',
  ],
  faq: [
    ['What does chapter 11 of the Tao Te Ching mean?', 'It means that the usefulness of things comes from the empty space in them: the hub of a wheel, the inside of a pot, the room in a house. Form and emptiness work together.'],
    ['What is "Nothing" in the Tao Te Ching?', 'It is not a void or a loss. It is the open space that lets things function, the room that form needs in order to be useful.'],
  ],
  video: { id: 'GRzBccGrsgY', title: 'What Matters Is What You Can\'t See', duration: 'PT1M35S', uploaded: '2026-10-15' },
},
16: {
  title: 'Return to Stillness',
  description: 'Tao Te Ching chapter 16 in full, and what "return to the root" and stillness mean in plain language.',
  intro: 'Chapter 16 of the Tao Te Ching is about stillness and returning to the root. Above is the full chapter. Below is what it means.',
  body: [
    'The chapter begins with an instruction: reach the utmost emptiness, hold fast to stillness. Then Lao Tzu describes what he sees from there. Everything rises and falls. Everything flourishes, and everything goes back to its root.',
    'Returning to the root is stillness. From there the chapter moves in a chain, one step opening the next: constancy, clarity, openness, fairness, and finally the Tao itself. Not seeing this, it says, is to stumble into disaster.',
    'The ending is the part people remember. The body dies and there is no danger. Readers take it in different ways. One common reading is that when you stop clinging to what rises and falls, even loss and ending lose their grip on you.',
    'The practical side is simple. Before you act, return. Let things settle. What you see from stillness is not what you see from panic.',
  ],
  faq: [
    ['What does "return to the root" mean in the Tao Te Ching?', 'It means coming back to the quiet source that everything rises from and goes back to. In this chapter, that return is stillness.'],
    ['Why does chapter 16 say there is no danger when the body dies?', 'It is often read as a sign that someone who is at one with the Tao no longer fears ending. The chapter does not explain it further, so readers interpret it differently.'],
  ],
},
17: {
  title: 'The Best Leader Is Barely Known',
  description: 'Tao Te Ching chapter 17 in full: why the best leader is barely known, and what it means for leading anyone.',
  intro: 'Chapter 17 of the Tao Te Ching ranks four kinds of leaders. Above is the full chapter. Below is what it means.',
  body: [
    'Lao Tzu lists them from best to worst. The best leader is barely known. Next comes the one who is loved and praised. Then the one who is feared. Then the one who is despised.',
    'It is a surprising order. We tend to want the praised leader, the visible one. Lao Tzu puts the quiet one on top.',
    'The reason is in the last lines. The best leader speaks little. The work gets done, and the people say, we did it ourselves. That is the goal. Not credit, but ownership. People who feel they did it themselves will keep going without being pushed.',
    'This applies to a manager, a teacher, a parent, or anyone who is trying to help someone grow. The line before says it directly: when trust runs short, distrust follows. Trust has to come first.',
  ],
  faq: [
    ['What does "the best leader is barely known" mean?', 'It means the best leader guides so lightly that people feel they did the work themselves. The leader does not need credit or attention.'],
    ['Does this mean a leader should do nothing?', 'No. The work is done and the task is complete. The point is that the leader acts without taking over, so that people keep their own sense of ownership.'],
  ],
  video: { id: 'R3XZgaStOvc', title: 'Give Your Leader a Score. Lao Tzu Already Did.', duration: 'PT1M44S', uploaded: '2026-11-03' },
},
18: {
  title: 'When the Tao Is Lost',
  description: 'Tao Te Ching chapter 18 in full, and what it means that kindness and duty appear when the great Tao is lost.',
  intro: 'Chapter 18 of the Tao Te Ching says something unexpected about kindness and duty. Above is the full chapter. Below is what it means.',
  body: [
    'The chapter says that when the great Tao is lost, kindness and duty appear. When cleverness appears, there is great deceit. When families lose their peace, there is devotion and care. When the country falls into darkness, there are loyal ministers.',
    'It sounds like a criticism of virtue. It is more like an observation. We name a quality when it is missing. A family at peace does not talk about duty. A country in order does not praise its loyal ministers, because it does not need them.',
    'So Lao Tzu is not against kindness. He is pointing at what is behind it. When we need to preach kindness, something deeper has already gone out of balance.',
    'A good question to take from this chapter is simple. Where in your life are you working very hard at a virtue, when what is missing is something quieter underneath?',
  ],
  faq: [
    ['Is Lao Tzu against kindness and duty?', 'No. He is saying that kindness and duty become things people talk about when the natural harmony of the Tao has been lost. They are signs of a deeper problem.'],
    ['What does "when the great Tao is lost" mean?', 'It means when people are no longer in natural harmony with life. In that case, rules and virtues appear to replace what used to happen on its own.'],
  ],
  video: { id: 'l4ZgjmiqH6c', title: 'When the Great Tao Is Forgotten, Goodness Appears', duration: 'PT21S', uploaded: '2026-10-19' },
},
};
// Notes for the other chapters live in src/data/notes-en/*.ts (one file per group of chapters).
const mods = import.meta.glob('./notes-en/*.ts', { eager: true }) as Record<string, { part: Record<number, ChapterNote> }>;
export const notes: Record<number, ChapterNote> = Object.assign({}, first, ...Object.values(mods).map(m => m.part));
