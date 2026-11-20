# SilentPower.me — daily SEO / GEO log

Read this first every run. Append one entry per day at the end. Avoid repeating topics.

## Journal topics covered
- EN: how-to-stop-overthinking (ch 15, 16), letting-go-of-control-tao (29, 64), silence-and-stillness-tao (11, 15, 16), stop-trying-to-be-so-effortful / wu wei (2, 37, 48), tao-te-ching-for-beginners, why-the-weakest-wins (8, 43, 78)
- EN+HE: knowing-when-enough-is-enough / contentment (9, 33, 44, 46) — 2026-11-18
- EN+HE: those-who-know-do-not-speak (56, 1, 2, 23, 81) — 2026-11-19
- EN+HE: tao-te-ching-on-leadership (17, 57, 60, 66) — 2026-11-20

## How the Hebrew journal works
- Hebrew articles live in `src/content/journal-he/*.md` (collection `journalHe`, cta = Hebrew product slug: effortless-he / frictionless-he).
- Use the SAME filename/slug as the English article → hreflang pairs and the language switch are created automatically.
- Pages: /he/journal/ and /he/journal/[slug]/ (dir=rtl, lang=he). llms.txt + llms-full.txt list both journals automatically.
- Optional frontmatter `faq: [{q, a}]` (EN + HE) → visible "Common questions" block + FAQPage JSON-LD + Q/A in llms-full.txt.
- Chapter numbers in the `chapter` label are auto-linked to /tao/N/ (or /he/tao/N/) under each article.
- Reverse links: every /tao/N/ and /he/tao/N/ page shows a "From the journal" / "מהיומן" list of articles whose `chapter` label names N (automatic).

---

## 2026-11-18
**Audit:** all key URLs 200; canonical = silentpower.me; robots.txt welcomes AI crawlers; sitemap OK. Gaps found: no Hebrew journal; journal list in llms.txt was hardcoded (new posts would be missing); Article JSON-LD was minimal (no publisher, image, mainEntityOfPage, inLanguage, breadcrumbs); journal pages had no internal links back to journal/chapters; Hebrew home linked chapter 1 as "הדרך שאי אפשר לומר" (rule: always טאו).
**Changed:**
- Built Hebrew journal (collection `journalHe`, /he/journal/ index + article pages, RTL, hreflang EN↔HE, sitemap, nav + footer + home links).
- Richer Article JSON-LD + BreadcrumbList for EN and HE articles (`src/data/journal-ld.ts`).
- llms.txt and llms-full.txt now generate journal lists (with descriptions / full text) from the collections; removed hardcoded list from llms-base.txt.
- Journal link added to English footer; "more from the Journal / all 81 chapters" links under every article.
- Fixed "הדרך" → "הטאו" on Hebrew home chapter-1 link.
**Published:**
- https://silentpower.me/journal/knowing-when-enough-is-enough/
- https://silentpower.me/he/journal/knowing-when-enough-is-enough/
- https://silentpower.me/he/journal/
**Idea for tomorrow:** translate an existing EN article to Hebrew (e.g. how-to-stop-overthinking) so the HE journal grows, or a new topic like "What does 'those who know do not speak' mean?" (ch 56). Consider FAQPage block on journal articles.

## 2026-11-19
**Audit:** home, /journal/, /he/journal/, /tao/56/, /he/, robots, sitemap, llms.txt all 200; chapter pages have canonical + hreflang en/he + x-default + JSON-LD. Gaps: journal articles had no FAQ block / FAQPage schema (chapter pages do); articles cited chapters but did not link to them.
**Changed:**
- Journal schema: optional `faq` list (EN + HE). Renders a visible FAQ section, adds FAQPage JSON-LD, and adds Q/A to llms-full.txt (GEO: direct answers AI engines can quote).
- Auto internal links from every journal article (EN + HE) to the chapters named in its `chapter` label (`src/data/chapter-links.ts`) — applies to all existing articles too.
**Published:**
- https://silentpower.me/journal/those-who-know-do-not-speak/
- https://silentpower.me/he/journal/those-who-know-do-not-speak/
**Idea for tomorrow:** add `faq` to older EN articles (overthinking, wu wei, letting go) and translate how-to-stop-overthinking to Hebrew; or new topic "What does wu wei mean in daily life / at work?" (check search first).

**Fix (same day):** footer language row had no spacing between names (a general footer rule overrode `.langrow` gap). Added `footer.site .wrap>div.langrow{gap:8px 18px}`.

## 2026-11-20
**Audit:** home, /journal/, /he/journal/, /tao/17/, /he/, robots, sitemap, llms.txt and yesterday's EN+HE articles all 200. Gaps: chapter pages never linked to journal articles (one-way linking only); 4 older EN articles had no FAQ / FAQPage schema; wu-wei article mentioned the cook carving an ox without saying it comes from the Zhuangzi. Search check: "a leader is best when people barely know he exists" (ch 17) is a heavily searched / quoted line.
**Changed:**
- Chapter pages (EN + HE) now list related journal articles ("From the journal" / "מהיומן"), auto-built from each article's `chapter` label. HE chapter pages also link to /he/journal/.
- Added `faq` (4 Q/A each → visible FAQ + FAQPage JSON-LD + llms-full.txt) to: how-to-stop-overthinking, stop-trying-to-be-so-effortful, tao-te-ching-for-beginners, letting-go-of-control-tao.
- Accuracy: wu-wei article now says the ox-carving cook image is from the Zhuangzi.
**Published:**
- https://silentpower.me/journal/tao-te-ching-on-leadership/
- https://silentpower.me/he/journal/tao-te-ching-on-leadership/
**Idea for tomorrow:** translate how-to-stop-overthinking (or wu wei) to Hebrew and expand it; or new topic "The journey of a thousand miles begins with a single step" — check letting-go article first (it cites ch 64) and angle it on procrastination / starting small. Remaining EN articles without faq: silence-and-stillness-tao, why-the-weakest-wins.
