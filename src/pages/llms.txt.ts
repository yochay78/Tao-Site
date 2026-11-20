import base from '../data/llms-base.txt?raw';
import { notes } from '../data/tao-notes';
import { notesHe } from '../data/tao-notes-he';
import { getCollection } from 'astro:content';
export const GET = async () => {
  const en = Object.entries(notes).sort((a, b) => +a[0] - +b[0]);
  const he = Object.entries(notesHe).sort((a, b) => +a[0] - +b[0]);
  const byDate = (x: any, y: any) => +y.data.date - +x.data.date;
  const jEn = (await getCollection('journal')).sort(byDate);
  const jHe = (await getCollection('journalHe')).sort(byDate);
  let out = base.trimEnd() + '\n\n## Journal essays\n';
  for (const j of jEn) out += `- [${j.data.title}](https://silentpower.me/journal/${j.id}/): ${j.data.description}\n`;
  if (jHe.length) {
    out += '\n## יומן (עברית)\n';
    for (const j of jHe) out += `- [${j.data.title}](https://silentpower.me/he/journal/${j.id}/): ${j.data.description}\n`;
  }
  const gEn = (await getCollection('glossary')).sort((a, b) => a.data.order - b.data.order);
  const gHe = (await getCollection('glossaryHe')).sort((a, b) => a.data.order - b.data.order);
  if (gEn.length) {
    out += '\n## Taoism glossary\n- [All terms](https://silentpower.me/glossary/)\n';
    for (const g of gEn) out += `- [${g.data.term}](https://silentpower.me/glossary/${g.id}/): ${g.data.short}\n`;
  }
  if (gHe.length) {
    out += '\n## מילון הטאו (עברית)\n- [כל המושגים](https://silentpower.me/he/glossary/)\n';
    for (const g of gHe) out += `- [${g.data.term}](https://silentpower.me/he/glossary/${g.id}/): ${g.data.short}\n`;
  }
  out += '\n## Tao Te Ching, chapter by chapter\n';
  out += '- [All chapters](https://silentpower.me/tao/): index of the 81 chapters\n';
  out += '- [Full text of every chapter with explanations and FAQ, one file](https://silentpower.me/llms-full.txt)\n';
  for (const [k, v] of en) out += `- [Chapter ${k}: ${v.title}](https://silentpower.me/tao/${k}/): ${v.description}\n`;
  if (he.length) {
    out += '\n## פרק אחרי פרק (עברית)\n';
    out += '- [כל הפרקים](https://silentpower.me/he/tao/)\n';
    for (const [k, v] of he) out += `- [פרק ${k}: ${v.title}](https://silentpower.me/he/tao/${k}/): ${v.description}\n`;
  }
  return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
