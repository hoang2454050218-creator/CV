# ARISE — Founder Portfolio / CV

Bilingual (EN + VN) founder story site for the sole builder of **ARISE** — a live, three-service freight risk-intelligence platform (**OMEN → VANTIS → NEXQUOTE**). Built with Next.js (App Router), TypeScript strict, and Tailwind CSS v4. All motion is CSS/IntersectionObserver-based — no animation library, and content is never hidden for no-JS visitors, headless renderers, or `prefers-reduced-motion` users.

## Run

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /en or /vi
npm run build      # production build
npm start          # serve the production build
```

## Edit content (the only files you normally touch)

All visible copy lives in two typed dictionaries — no strings are hardcoded in JSX:

| File | Language |
|---|---|
| `src/content/en.ts` | English |
| `src/content/vi.ts` | Tiếng Việt |

Both must satisfy the schema in `src/content/types.ts`, so TypeScript will flag any missing/mismatched key. Proper nouns and tech names stay in English in both locales.

### TODO before publishing

1. **Timeline** — adjust the milestone months in `timeline.milestones` if they differ from reality.
2. **Telegram proof-bot** — add its public URL in `footer.links` when you're ready to share it.
3. **Site URL** — set the `NEXT_PUBLIC_SITE_URL` env var in production (used by sitemap, canonical, OG).

⚠️ Never publish internal IPs, secrets, `.env` values, or private endpoints. Only add URLs you're comfortable making public.

## Languages

- Routes are locale-prefixed: `/en`, `/vi`, `/en/resume`, `/vi/resume`.
- `/` redirects via `src/proxy.ts`: cookie first, then `Accept-Language`.
- The header toggle persists the choice (cookie + localStorage) and swaps the current path in place.

## CV / PDF export

`/en/resume` and `/vi/resume` are print-optimized (A4, `@media print`, ATS-friendly selectable text). "Download CV" buttons open this route; the print button (or `Ctrl/Cmd+P` → *Save as PDF*) produces the PDF.

## Design system

Tokens live in `src/app/globals.css` (OKLCH, light theme in `:root`, dark under `.dark`) and are documented in `DESIGN.md`. Strategy notes in `PRODUCT.md`. Dark/light follows the OS by default with a manual toggle (next-themes). All motion honors `prefers-reduced-motion`.

## Deploy (Vercel)

Zero-config: push the repo to GitHub → import in Vercel → deploy. Then set `NEXT_PUBLIC_SITE_URL=https://your-domain` in Project Settings → Environment Variables and redeploy.
