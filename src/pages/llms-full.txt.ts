import { tao } from '../data/tao';
import { notes } from '../data/tao-notes';
import { notesHe } from '../data/tao-notes-he';
export const GET = () => {
  let out = '# Silent Power | Tao Te Ching: full chapters\n\n> The 81 chapters of the Tao Te Ching in a spare poetic English rendering by Yod Mem (Silent Power), with a plain explanation and common questions for each chapter. Source site: https://silentpower.me/tao/\n\n';
  for (const c of tao) {
    const nt = notes[c.n];
    out += `## Chapter ${c.n}${nt ? ': ' + nt.title : ''}\nURL: https://silentpower.me/tao/${c.n}/\n\n${c.en.trim()}\n\n`;
    if (nt) {
      out += `${nt.intro}\n\n${nt.body.join('\n\n')}\n\n`;
      for (const [q, a] of nt.faq) out += `Q: ${q}\nA: ${a}\n\n`;
    }
  }
  const he = Object.keys(notesHe);
  if (he.length) {
    out += '\n# עברית\n\n';
    for (const c of tao) {
      const nt = notesHe[c.n];
      if (!nt) continue;
      out += `## פרק ${c.n}: ${nt.title}\nURL: https://silentpower.me/he/tao/${c.n}/\n\n${c.he.trim()}\n\n${nt.intro}\n\n${nt.body.join('\n\n')}\n\n`;
      for (const [q, a] of nt.faq) out += `ש: ${q}\nת: ${a}\n\n`;
    }
  }
  return new Response(out, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
