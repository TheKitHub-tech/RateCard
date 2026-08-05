# Pricing and booking rules

This document records the principal operational logic implemented in V4.3. It is a handover reference, not a replacement for approved source rate records.

## Booking status

Submitting a Booking Request does not confirm availability or create a reservation. A booking is confirmed only when the Kit Hub confirms it in writing.

All prices shown by the public rate card are exclusive of VAT.

## Equipment hire

### Hire period

Equipment customers may select start and end dates or enter a manual number of chargeable days.

Equipment pricing uses the embedded 1-day, 3-day and 5-day rate structure and the established incremental calculation for other durations.

### Weekend rule

The Kit Hub does not operate on weekends.

- A Saturday or Sunday collection date is adjusted to the preceding Friday.
- A Saturday or Sunday return date is adjusted to the following Monday.
- A weekend-only request is therefore Friday to Monday and charged as four calendar days.
- An equipment request already spanning a weekend continues to count every calendar day.
- The weekend adjustment applies only to equipment, not rooms.

## Rooms & Spaces

### Booking controls

- One shared room date and time window applies to all room lines in a Booking Request.
- Different room windows require separate Booking Requests.
- Start and end times use whole-hour values only.
- The current implementation offers starts from 09:00 to 22:00 and end times from 10:00 to 23:00.
- Same-day end time must be later than start time.
- A manual number of days can be entered instead of a complete date range.

### Authoritative prices

Published hourly, half-day, 1-day, 3-day and 5-day room prices are source values. The site uses these values directly and does not recreate listed package prices from the hourly figure.

### Same-day pricing

- 1 hour: hourly rate multiplied by 1.
- 2 hours: hourly rate multiplied by 2.
- 3 hours: hourly rate multiplied by 3.
- 4 hours: listed half-day price.
- 5 hours or more: listed 1-day price.

TV Studio A has no listed half-day rate. A four-hour TV Studio A request therefore uses the listed 1-day price.

### Multi-day pricing

- 1 day: listed 1-day price.
- 2 days: listed 1-day price multiplied by 2.
- 3 days: listed 3-day price.
- 4 days: listed 3-day price divided by 3, then multiplied by 4.
- 5 days: listed 5-day price.
- 6 days or more: listed 5-day price divided by 5, then multiplied by the requested number of days.

### Mandatory technical support

The following rooms include one mandatory one-hour technical-support charge per room:

- Ritterman Dance Studio.
- Ravensfield Theatre.
- Grove Dance Theatre.

The charge applies once per affected room, irrespective of booking length. It is combined into the room line total and remains visible in the breakdown.

- Weekday start before 18:00: £37 standard-hours support.
- Weekday start at or after 18:00: £75 out-of-hours support.
- Weekend start: £75 out-of-hours support.
- A booking starting before 18:00 keeps the standard mandatory charge even if it finishes later.

Additional technical support remains a separate optional service. Technical Consultation is displayed as contact the Kit Hub to arrange.

### Closures

The current static closure calendar includes:

- England and Wales bank holidays for 2026, 2027 and 2028.
- A provisional Christmas closure from 24 December to 2 January for each configured year.

Known closure dates are blocked. Dates beyond the configured years receive an additional-confirmation warning. The closure list must be reviewed annually by the nominated owner.
