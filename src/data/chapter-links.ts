// Pull chapter numbers (1-81) out of a journal article's `chapter` label, e.g. "chapters 9, 33 and 46".
export function chapterNums(label?: string): number[] {
  if (!label) return [];
  const seen = new Set<number>();
  for (const m of label.matchAll(/\d+/g)) { const n = +m[0]; if (n >= 1 && n <= 81) seen.add(n); }
  return [...seen];
}
