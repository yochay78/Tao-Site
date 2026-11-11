// Hebrew reading notes (title, summary, explanation, questions). A Hebrew chapter page is indexable only if it has an entry here.
// Entries live in src/data/notes-he/*.ts (one file per group of chapters).
import type { ChapterNote } from './tao-notes';
const mods = import.meta.glob('./notes-he/*.ts', { eager: true }) as Record<string, { part: Record<number, ChapterNote> }>;
export const notesHe: Record<number, ChapterNote> = Object.assign({}, ...Object.values(mods).map(m => m.part));
