export type Locale = 'zh' | 'en'
export type Bilingual = Record<Locale, string>
export const text = (zh: string, en: string): Bilingual => ({zh, en})
export const asset = (file: string) => `/templates/kelo-marketing/${file}`
export const brand = {name: text('Kelo 营销', 'Kelo Marketing'), logo: asset('logo-mark.svg'), year: 2026}
export const route = (base: string, slug = '') => `${base}/${slug}`.replace(/\/$/, '') || '/'
