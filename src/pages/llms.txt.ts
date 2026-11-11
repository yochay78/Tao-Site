import base from '../data/llms-base.txt?raw';
import { notes } from '../data/tao-notes';
import { notesHe } from '../data/tao-notes-he';
export const GET = () => {
  const en = Object.entries(notes).sort((a, b) => +a[0] - +b[0]);
  const he = Object.entries(notesHe).sort((a, b) => +a[0] - +b[0]);
  let out = base.trimEnd() + '\n\n## Tao Te Ching, chapter by chapter\n';
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
