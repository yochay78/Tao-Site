// Structured data for the Taoism glossary (EN + HE): DefinedTermSet on the index, DefinedTerm + Breadcrumb (+ FAQPage) on entries.
const SITE = 'https://silentpower.me';
export const glossaryBase = (lang: 'en' | 'he') => (lang === 'he' ? `${SITE}/he/glossary/` : `${SITE}/glossary/`);
const setName = (lang: 'en' | 'he') => (lang === 'he' ? 'מילון הטאו' : 'Taoism Glossary');

export function glossarySetLd(lang: 'en' | 'he', items: { id: string; term: string; short: string; updated?: Date }[]) {
  const he = lang === 'he';
  const url = glossaryBase(lang);
  const desc = he
    ? 'הסברים פשוטים למושגי היסוד של הטאואיזם והטאו טה צ\'ינג, כל אחד עם תשובה קצרה וקישור לפרקים שבהם הוא מופיע.'
    : 'Plain definitions of the key ideas in Taoism and the Tao Te Ching, each with a short direct answer and links to the chapters where it appears.';
  const newest = items.map(i => i.updated).filter(Boolean).sort((a: any, b: any) => b - a)[0] as Date | undefined;
  const book = { '@type': 'Book', name: 'Tao Te Ching', author: { '@type': 'Person', name: 'Laozi' } };
  return [
    {
      '@context': 'https://schema.org', '@type': 'DefinedTermSet', '@id': `${url}#set`,
      name: setName(lang), description: desc, inLanguage: lang, url,
      publisher: { '@id': `${SITE}/#org` }, about: book,
      hasDefinedTerm: items.map(i => ({ '@type': 'DefinedTerm', '@id': `${url}${i.id}/#term`, name: i.term, description: i.short, url: `${url}${i.id}/` })),
    },
    {
      '@context': 'https://schema.org', '@type': 'CollectionPage', '@id': `${url}#page`,
      name: setName(lang), description: desc, inLanguage: lang, url,
      isPartOf: { '@id': `${SITE}/#website` }, about: book, mainEntity: { '@id': `${url}#set` },
      ...(newest ? { dateModified: newest.toISOString() } : {}),
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: he ? 'בית' : 'Home', item: he ? `${SITE}/he/` : `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: setName(lang), item: url },
      ],
    },
  ];
}

export function glossaryTermLd(o: { lang: 'en' | 'he'; id: string; term: string; aka?: string; title: string; description: string; short: string; updated: Date; faq?: { q: string; a: string }[] }) {
  const he = o.lang === 'he';
  const base = glossaryBase(o.lang);
  const url = `${base}${o.id}/`;
  const out: any[] = [
    {
      '@context': 'https://schema.org', '@type': 'DefinedTerm', '@id': `${url}#term`,
      name: o.term, description: o.short, url, inLanguage: o.lang,
      ...(o.aka ? { alternateName: o.aka.split('·').map(s => s.trim()).filter(Boolean) } : {}),
      inDefinedTermSet: { '@type': 'DefinedTermSet', '@id': `${base}#set`, name: setName(o.lang), url: base },
    },
    {
      '@context': 'https://schema.org', '@type': 'WebPage', name: o.title, description: o.description, url, inLanguage: o.lang,
      dateModified: o.updated.toISOString(), mainEntity: { '@id': `${url}#term` },
      publisher: { '@id': `${SITE}/#org` }, author: { '@id': `${SITE}/#person` },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: he ? 'בית' : 'Home', item: he ? `${SITE}/he/` : `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: setName(o.lang), item: base },
        { '@type': 'ListItem', position: 3, name: o.term, item: url },
      ],
    },
  ];
  if (o.faq?.length) out.push({
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: o.lang,
    mainEntity: o.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  });
  return out;
}
