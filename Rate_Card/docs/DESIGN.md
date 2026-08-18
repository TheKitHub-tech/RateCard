# Design and interaction rules

## Brand direction

- MDX red: `#e30a0a`
- MDX indigo: `#2f2552`
- Arial for functional interface and body text
- Institutional display styling only where already embedded or available
- No bundled proprietary fonts
- Straight edges, thin borders and restrained corner radii
- No gradients, heavy shadows or decorative clutter

## Information hierarchy

- Landing page gives equal access to Equipment and Rooms & Spaces.
- Full-list Excel and PDF exports sit beneath the two main landing choices.
- The global warning bar stays short enough to read as one desktop line.
- Search is the focal control in each catalogue panel.
- Filters sit underneath search.
- Search scope is the final equipment filter.
- Date/time controls sit on the right side of desktop catalogue panels behind a visible vertical divider.

## Equipment panel

- Search remains larger than its secondary filters.
- Category, Group and Brand share a row where space permits.
- Search scope sits beneath those filters.
- Reset filters stays aligned with search scope.
- Status badges and Advanced options remain in the unused lower-left panel space.
- Expanding Advanced options must not move its button to a new row.

## Rooms & Spaces panel

- Mirror the Equipment panel structure.
- Search and room category appear on the left.
- Shared start/end dates and whole-hour times appear on the right.
- Avoid introductory headings or repeated helper sentences that do not affect a decision.

## Category controls

Every category heading is a button with:

- a clear Collapse or Expand label;
- a visible plus/minus icon;
- `aria-expanded`;
- `aria-controls` linked to the category contents;
- collapse state retained while filters refresh the current view.

## Warnings and dialogs

- Use the page's in-app dialogs.
- Do not use native `alert()` or `confirm()` for normal interactions.
- Weekend equipment guidance appears only after a weekend date choice.
- TV Studio A and other rule explanations appear at the point of decision.

## Mobile portrait

- Desktop layout must remain unchanged by mobile-only work.
- No horizontal page scrolling.
- Navigation, filters, dates, times and buttons stack into a natural reading order.
- Touch targets remain comfortably usable.
- Dialogs remain within the viewport.
- Basket quantity and remove controls remain visible.
- Export controls wrap without overlap.

## Customer-facing language

- Say **the Kit Hub**.
- Say **Booking Request**.
- Use clear request language, not Book now or Confirm booking.
- Avoid em dashes.
- Keep operational warnings direct and concise.
