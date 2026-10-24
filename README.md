# Paytrada landing page

## Run locally

```sh
npm install
npm run dev
```

Set `NEXT_PUBLIC_SITE_URL` to the canonical deployment URL when deploying. It defaults to `https://paytrada.app` for canonical and Open Graph metadata. Set `NEXT_PUBLIC_CONTACT_EMAIL` to the team's working contact address before publishing; the current contact links use `hello@paytrada.app` as the configuration placeholder.

## Build checks

```sh
npm run typecheck
npm run lint
npm run build
```

## Notes

- This is the existing responsive Next.js landing page, refined in place. Interface artwork is conceptual and code-built; it does not represent live transaction data.
- The supplied `paytrada_new_geometric.png` is retained. Transparent marks extracted from that authentic logo are used throughout the interface.
- The hero combines original generated editorial artwork with accessible, code-built interface concepts. Optimized WebP assets live in `public/images`; the generation prompt and provenance are in `docs/design/hero-artwork.md`.
- Manrope and DM Sans are self-hosted variable fonts. Their SIL Open Font Licenses are included in `public/fonts`.
- Navigation and content work without JavaScript. A small client enhancement adds reveals and mobile-menu dismissal, honors reduced motion, and preserves native anchor navigation.
- Merchant platform integrations, protected settlement, and virtual-channel scalability are described as opportunities or work under development.
- The contact destination must be verified and configured before launch. No lead form is shown, so the page does not claim to save submissions.
