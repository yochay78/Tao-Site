// Structured data for journal articles (EN + HE): Article + BreadcrumbList (+ FAQPage when the article has a faq).
const SITE = 'https://silentpower.me';
export function articleLd(o: { title: string; description: string; date: Date; url: string; lang: 'en' | 'he'; section?: string; faq?: { q: string; a: string }[] }) {
  const he = o.lang === 'he';
  const home = he ? `${SITE}/he/` : `${SITE}/`;
  const index = he ? `${SITE}/he/journal/` : `${SITE}/journal/`;
  const out: any[] = [
    {
      '@context': 'https://schema.org', '@type': 'Article',
      headline: o.title, description: o.description,
      datePublished: o.date.toISOString(), dateModified: o.date.toISOString(),
      inLanguage: o.lang, url: o.url, mainEntityOfPage: { '@type': 'WebPage', '@id': o.url },
      image: `${SITE}/og.png`,
      ...(o.section ? { articleSection: o.section } : {}),
      about: [{ '@type': 'Book', name: 'Tao Te Ching', author: { '@type': 'Person', name: 'Laozi' } }],
      author: { '@type': 'Person', '@id': `${SITE}/#person`, name: 'Yod Mem', url: `${SITE}/about/` },
      publisher: { '@type': 'Organization', '@id': `${SITE}/#org`, name: 'Silent Power', logo: { '@type': 'ImageObject', url: `${SITE}/og.png` } },
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: he ? 'בית' : 'Home', item: home },
        { '@type': 'ListItem', position: 2, name: he ? 'יומן' : 'Journal', item: index },
        { '@type': 'ListItem', position: 3, name: o.title, item: o.url },
      ],
    },
  ];
  if (o.faq?.length) out.push({
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: o.lang,
    mainEntity: o.faq.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  });
  return out;
}
