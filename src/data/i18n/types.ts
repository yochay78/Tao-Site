export interface ProductText {
  title: string; headline: string; short: string; price: string; format: string;
  explores: string[]; whoFor: string; notFor: string; experience: string[]; included: string[]; body: string[];
}
export interface Lang {
  code: string; name: string; htmlLang: string;
  skip: string; navShop: string; navAbout: string; cta: string; langSwitch: string;
  footTag: string; fShop: string; fFree: string; fAbout: string; fPrivacy: string; fTerms: string; fContact: string;
  menuOpen: string;
  home: { title: string; desc: string; label: string; h1: string; sub: string; btnBook: string; btnFree: string;
    freeLabel: string; freeH2: string; freeLede: string; bookLabel: string;
    steps: { t: string; p: string }[]; whoLabel: string; whoH2: string; whoLede: string };
  shop: { title: string; desc: string; label: string; h1: string; lede: string };
  free: { title: string; desc: string; label: string; h1: string; lede: string; more: string; moreLink: string; moreEnd: string };
  about: { title: string; desc: string; label: string; p: string[] };
  prod: { details: string; free: string; buy: string; buyFree: string; via: string; enNote: string;
    explores: string; who: string; notfor: string; exp: string; inc: string; rel: string; back: string; cover: string };
  optin: { label: string; h2: string; p: string; email: string; placeholder: string; button: string; note1: string; note2: string; note3: string };
  products: Record<string, ProductText>;
}
