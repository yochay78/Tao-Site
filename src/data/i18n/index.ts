import type { Lang } from './types';
import { es } from './es';
export const i18n: Record<string, Lang> = { es };
export const langMenu: [string, string, string][] = [
  ['English', '/', 'en'], ['עברית', '/he/', 'he'],
  ...Object.values(i18n).map(l => [l.name, `/${l.code}/`, l.code] as [string, string, string]),
];
