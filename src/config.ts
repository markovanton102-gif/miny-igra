export const site = {
  name: 'Мины — игра в казино',
  domain: 'https://miny-igra.online',
  lang: 'ru',
} as const;

/** Подставь реф-ссылку от партнёрки */
export const affiliateUrl =
  import.meta.env.PUBLIC_AFFILIATE_URL ?? 'https://example.com/ref';

export const nav = [
  { href: '/', label: 'Главная' },
  { href: '/otzyvy/', label: 'Отзывы' },
  { href: '/kak-igrat/', label: 'Как играть' },
  { href: '/skachat/', label: 'Скачать' },
  { href: '/demo/', label: 'Демо' },
  { href: '/gde-igrat/', label: 'Где играть' },
  { href: '/analogi/', label: 'Аналоги' },
] as const;
