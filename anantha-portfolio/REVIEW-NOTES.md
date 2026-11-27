# Portfolio review notes — carry into final Antigravity pass

## User-observed visual issues (Stage 1 screenshots)
- Excessive whitespace relative to the amount of content.
- Small typography and low legibility; increase body/navigation/card text sizes and tune hierarchy.
- Background reads as white/light grey rather than the intended darker editorial treatment.
- User wants a more visibly dark visual direction; revisit the balance of charcoal/dark sections and warm beige surfaces across all pages.
- Avoid overly spaced-out micro-labels and tiny metadata.

## Design requirements to preserve
- Editorial identity, serif headings + sans-serif body.
- Black/charcoal and warm beige foundation with restrained terracotta/olive/teal accents.
- Responsive desktop/tablet/mobile, accessible contrast, keyboard navigation, semantic HTML.
- Do not use generic stock imagery as substitutes for user's actual photos/certificates.

## QA rule
Recheck all pages at desktop and mobile widths; verify navigation, links, downloads, PDF preview, image loading, text contrast, font sizes and vertical rhythm before final delivery.


## Stage 3 review notes
- User noted earlier visual problems: excessive whitespace, small typography, low contrast and background reading as white. These remain queued for final visual redesign pass.
- Stage 3 added project case studies, experience timeline, achievements and certifications content.
- LeetCode statistics were not refreshed live; historical count intentionally omitted.
- Smart URL Shortener has no supplied screenshots or repository link; no demo/repo fabricated.
- Bus Booking source indicates simulated payment and in-memory booking state; copy avoids production claims.

## Stage 4 visual refinement applied
- Reworked the global page canvas to a charcoal foundation (#1b1c18) with dark charcoal section surfaces and warm beige editorial cards.
- Increased body, navigation, metadata, card and paragraph typography for legibility.
- Reduced excessive hero/section vertical spacing and tightened grid rhythm.
- Replaced bright white page surfaces on inner pages with charcoal/dark surfaces; certificate document previews intentionally retain a light paper background for faithful document viewing.
- Preserved serif editorial headings, sans-serif body text, terracotta accents and responsive breakpoints.

## Final QA limitations
- Static local-link and asset checks are performed before packaging.
- Browser-based visual testing is not available in this run; do not treat responsive rendering as browser-verified.
- LeetCode live statistics were not retrievable; no current numerical count is asserted.
