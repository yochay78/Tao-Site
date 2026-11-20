// Structured data for the Taoism glossary (EN + HE): DefinedTermSet on the index, DefinedTerm + Breadcrumb (+ FAQPage) on entries.
const SITE = 'https://silentpower.me';
export const glossaryBase = (lang: 'en' | 'he') => (lang === 'he' ? `${SITE}/he/glossary/` : `${SITE}/glossary/`);
const setName = (lang: 'en' | 'he') => (lang === 'he' ? 'מילון הטאו' : 'Taoism Glossary');

export function glossarySetLd(lang: 'en' | 'he', items: { id: string; term: string; short: string }[]) {
  const url = glossaryBase(lang);
  return [{
    '@context': 'https://schema.org', '@type': 'DefinedTermSet', '@id': `${url}#set`,
    name: setName(lang), inLanguage: lang, url,
    publisher: { '@id': `${SITE}/#org` },
    hasDefinedTerm: items.map(i => ({ '@type': 'DefinedTerm', name: i.term, description: i.short, url: `${url}${i.id}/` })),
  }];
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
