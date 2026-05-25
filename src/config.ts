export const site = {
  name: 'Мины — игра в казино',
  domain: 'https://miny-igra.online',
  lang: 'ru',
} as const;

/** Подставь реф-ссылку от партнёрки */
export const affiliateUrl =
  import.meta.env.PUBLIC_AFFILIATE_URL ?? 'https://example.com/ref';

export const demoGameUrl =
  import.meta.env.PUBLIC_DEMO_GAME_URL ??
  'https://launch.mix4play.com/nextapi/launch/game/demo?auth=987b13dc-5bd4-487c-bef7-316ed17d9d28&game=pr_mines&project=tutu-prod&language=ru&platform=desktop&exit_url=https%3A%2F%2Fvgs-aff.top&cashier_url=https%3A%2F%2Fvgs-aff.top%2Fwlredirect%3Flink%3D%2Frefill';

export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? '';
export const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '';
export const reviewsSiteSlug = 'miny-igra';

export const whereToPlay = [
  { name: '1win', url: 'https://1wzpdo.life/v3/2158/1win-mines?p=7afk' },
  { name: 'Vegas Grand', url: 'https://vgs-aff.top/r_b1s3wyA8xKoU' },
  { name: 'GetX', url: 'https://lvlx.click/tcp9hs8hg' },
] as const;

export const nav = [
  { href: '/', label: 'Главная' },
  { href: '/otzyvy/', label: 'Отзывы' },
  { href: '/kak-igrat/', label: 'Как играть' },
  { href: '/skachat/', label: 'Скачать' },
  { href: '/demo/', label: 'Демо' },
  { href: '/gde-igrat/', label: 'Где играть' },
  { href: '/analogi/', label: 'Аналоги' },
] as const;
