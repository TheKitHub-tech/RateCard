# Changelog

All notable public changes are recorded here.

## Unreleased

- No changes yet.

## Update to V5 - 2026-08-17

### Added

- Full rate-card exports in Excel and PDF, with separate Equipment and Rooms sheets in Excel.
- Selected-basket exports in Excel and PDF.
- Production/client name field carried into Booking Requests, basket exports, PDFs and generated filenames.
- Five equipment packages that add their individual components to the basket without package pricing or discounts.
- Clear expand/collapse controls for every Equipment and Rooms & Spaces category.
- Session-persistent collection/return dates and times shared across Equipment and Rooms & Spaces.
- Mobile portrait usability pass covering navigation, filters, booking controls, cards, basket and export controls.

### Changed

- Equipment weekend hire is charged as two days. Saturday or Sunday choices are adjusted to Friday collection and Monday return.
- Weekend equipment guidance now appears as an in-page pop-up only when a weekend date is selected.
- Equipment and Rooms & Spaces use the same compact search/booking-control layout with a clear vertical divider.
- The main search fields are larger, with filters underneath and Search scope placed last.
- Equipment status badges and Advanced options now remain within the compact search panel.
- Advanced options stays in place when expanded and only changes its plus/minus state.
- The global warning is one concise red bar containing the request warning and the VAT/indicative-pricing notice.
- Room interface text was simplified and redundant guidance removed.
- Room names corrected to TV Studio B, Podcast Studio and Radio Studio.
- Brand metadata was reconciled against the corrected full-rate-card workbook.
- Category, group, brand and search-scope filtering was tightened without changing desktop layout.
- Catalogue content now contains 514 equipment items and 37 rooms and spaces.

### Fixed

- Removed the standalone Cartoni Lightweight Tripod (KPTZ721/100), which is part of the Cartoni KJ-103 Jib kit.
- Added the Cartoni Lightweight Tripod to the KJ-103 Jib description so it remains visible in catalogue and export information.
- Removed layout shifts when Equipment advanced options opens.
- Preserved package references, room prices and export schemas through the catalogue updates.

### Integration

- The current Booking Request format is compatible with internal Quote Builder V3.2.
- Quote Builder V3.2 preserves imported room charges, mandatory support, production/client details, weekend pricing and collection/return times.

V4.4 through V4.29 were iterative working builds leading to this consolidated public release. They are intentionally not included as public release archives.

## 4.3 - 2026-08-07

### Added

- Rooms & Spaces catalogue and shared room booking window.
- Combined equipment, room and optional-service basket.
- Room hourly, half-day and multi-day pricing.
- Campus closure validation and mandatory technical-support calculations.
- Combined Excel Booking Request and pre-addressed email workflow.
- Initial equipment weekend adjustment.

### Notes

- V4.3 was the previous stable public baseline and remains included for rollback.
