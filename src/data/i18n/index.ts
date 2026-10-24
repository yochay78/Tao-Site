import type { Lang } from './types';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';
import { hi } from './hi';
import { fil } from './fil';
export const i18n: Record<string, Lang> = { es, fr, it, hi, fil };
export const langMenu: [string, string, string][] = [
  ['English', '/', 'en'], ['עברית', '/he/', 'he'],
  ...Object.values(i18n).map(l => [l.name, `/${l.code}/`, l.code] as [string, string, string]),
];
