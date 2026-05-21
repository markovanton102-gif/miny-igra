# miny-igra.online — слотовик Mines (Astro)

## Локально

```bash
cd miny-igra
cp .env.example .env
# В .env укажи PUBLIC_AFFILIATE_URL=твоя_реф_ссылка
npm run dev
```

## Сборка

```bash
npm run build
```

Папка `dist/` — то, что отдаёт Cloudflare Pages.

## Cloudflare Pages + GitHub

| Настройка | Значение |
|-----------|----------|
| Framework | Astro |
| Build command | `npm run build` |
| Build output | `dist` |
| Environment | `PUBLIC_AFFILIATE_URL` |

## Страницы

- `/` — главная
- `/otzyvy/`, `/kak-igrat/`, `/skachat/`, `/demo/`
- `/igrat-na-dengi/`, `/gde-igrat/`
- `/popolnenie-kartoy/`, `/popolnenie-usdt/`, `/popolnenie-qiwi/`
- `/analogi/` + spaceman, plinko, pilot, chicken-rush, aviator

Бренд казино в тексте не используется — только кнопка «Играть» с реф-ссылкой.
