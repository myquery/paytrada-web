# Landing-page design verification

Verified on 2026-10-24 against the optimized production build in Google Chrome.

## Build and source checks

- `npm run typecheck`: passed.
- `npm run lint`: passed.
- `npm run build`: passed, including Next.js type checking, linting, and static prerendering.
- `git diff --check -- src README.md`: passed.
- No test script or existing test suite is configured in this repository.

## Browser checks

58 assertions passed. Full browser evidence is in `artifacts/browser-review.json` and `artifacts/interaction-checks.json`.

| Production viewport | Document width | Runtime errors | Unloaded images | Broken anchors | Automated WCAG violations |
| --- | --- | --- | --- | --- | --- |
| 390px | 390px | 0 | 0 | 0 | 0 |
| 768px | 768px | 0 | 0 | 0 | 0 |
| 1440px | 1440px | 0 | 0 | 0 | 0 |

Accessibility checks used axe-core 4.11 with WCAG 2 A/AA and WCAG 2.1 AA rules. This is an automated audit, not a complete accessibility certification.

Also verified:

- Mobile menu opens, closes with Escape, closes after a navigation choice, and dismisses on an outside click.
- Vision and merchant anchors navigate correctly; every fragment link has a destination.
- The contact action has a `mailto:` destination using the existing configurable contact address. Email delivery and inbox ownership were not tested.
- Both coming-soon store badges are visible at all three primary widths.
- Manrope loads correctly as the display font.
- Additional widths of 320, 700, 900, 1100, and 1920px have no horizontal overflow.
- Reduced motion disables smooth scrolling and reveal transitions; content remains visible.
- Without JavaScript, the hero, all four pillars, and native mobile navigation remain available.
- Generated and interface imagery is labelled as illustrative; development and settlement caveats remain in the page.

## Visual review

Hero and full-page production screenshots are saved in `artifacts/screenshots/` for 390, 768, and 1440px widths. Reviewed hero hierarchy, composition, brand spacing, mobile image cropping, menu geometry, artwork overlap, and the lower editorial sections. Adjustments following rendered review included correcting font variable scope, reframing the mobile merchant crop, removing a rotating ring that caused overflow, and improving secondary-text contrast.

## Assets and delivery

The repository supplied the geometric Paytrada logo, but no commerce illustration or X banner. Original commerce artwork was generated with the built-in imagegen tool, optimized to WebP, and integrated with code-built product concepts. Its provenance and full prompt are recorded beside this document. No external stock imagery is used.

The described reference screenshot was not attached in the available conversation. Its stated composition guided the design.

The existing Next.js app, product narrative, metadata, configurable contact destination, and development-status qualifications are preserved. No new application or runtime dependencies were added. The local review server was stopped after verification. No deployment was performed.
