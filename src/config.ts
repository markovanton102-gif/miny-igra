export const site = {
  name: "Мины — игра в казино",
  domain: "https://miny-igra.online",
  lang: "ru",
} as const;

export const affiliateUrl =
  import.meta.env.PUBLIC_AFFILIATE_URL ??
  "https://w-one932049.life/v3/2158/1win-mines?p=7afk";

export const apkDownloadUrl =
  import.meta.env.PUBLIC_APK_DOWNLOAD_URL ??
  "https://r1wlfjc.life/application-cordova/v1/apk/com-mobile-one-win/1win.apk?p=g0bv";

export const demoGameUrl =
  import.meta.env.PUBLIC_DEMO_GAME_URL ??
  "https://launch.mix4play.com/nextapi/launch/game/demo?auth=987b13dc-5bd4-487c-bef7-316ed17d9d28&game=pr_mines&project=tutu-prod&language=ru&platform=desktop&exit_url=https%3A%2F%2Fvgs-aff.top&cashier_url=https%3A%2F%2Fvgs-aff.top%2Fwlredirect%3Flink%3D%2Frefill";

export const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL ?? "";
export const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? "";
export const reviewsSiteSlug = "miny-igra";

export const whereToPlay = [
  {
    name: "1win",
    url: "https://1wzpdo.life/v3/2158/1win-mines?p=7afk",
    desc: "Mines и Mines+ в каталоге, прямой переход на игру мин.",
    icon: "💣",
    perks: ["Mines+ в instant-разделе", "APK для Android", "Карта, USDT, QIWI"],
    featured: true,
  },
  {
    name: "Vegas Grand",
    url: "https://vgs-aff.top/r_b1s3wyA8xKoU",
    desc: "Казино с instant-играми и демо-режимом у оператора.",
    icon: "🎰",
    perks: ["Mines в поиске лобби", "Мобильная версия", "Пополнение и вывод"],
  },
  {
    name: "GetX",
    url: "https://lvlx.click/tcp9hs8hg",
    desc: "Быстрый старт: регистрация и instant-игры в одном месте.",
    icon: "⚡",
    perks: ["Instant-игры", "Игра с телефона", "Бонусы новичкам"],
  },
] as const;

export const nav = [
  { href: "/", label: "Главная" },
  { href: "/otzyvy/", label: "Отзывы" },
  { href: "/kak-igrat/", label: "Как играть" },
  { href: "/skachat/", label: "Скачать" },
  { href: "/demo/", label: "Демо" },
  { href: "/gde-igrat/", label: "Где играть" },
  { href: "/analogi/", label: "Аналоги" },
] as const;

export const footerLinks = [
  ...nav,
  { href: "/igrat-na-dengi/", label: "Играть на деньги" },
  { href: "/popolnenie-kartoy/", label: "Пополнение картой" },
  { href: "/popolnenie-usdt/", label: "Пополнение USDT" },
  { href: "/popolnenie-qiwi/", label: "Пополнение QIWI" },
] as const;
