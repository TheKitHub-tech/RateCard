# The Kit Hub External Hire Rate Card
## Handover and support guide

**Status:** Pre-launch working draft  
**Current application:** V5.0  
**Last updated:** September 2026

---

# Start here

This document explains how to support and maintain the Rate Card.

You do **not** need to understand all of the code to use this guide.

There are three support levels:

- **Level 1:** everyday use and basic checks
- **Level 2:** updating catalogue data and publishing approved changes
- **Level 3:** changing how the application works

If you are unsure what to do, start at Level 1 and ask for help before changing anything.

---

# 1. What the Rate Card does

The Rate Card is a public website for external hire enquiries.

It lets users:

- browse equipment and rooms
- search and filter the catalogue
- choose dates or hire days
- add items to a Basket
- see estimated prices
- enter basic client and production details
- create an Excel Booking Request
- prepare an email to the Kit Hub

The Rate Card does **not**:

- check live SISO or SmartHub availability
- reserve equipment or rooms
- confirm a booking
- take payment
- create user accounts
- store user contact details, email addresses or other client details within the website
- store bookings in a central database
- connect directly to a live database

Client and production details are only used in the browser to create the Booking Request. They are not saved to a Kit Hub website database.

A booking is only confirmed by the Kit Hub.

---

# 2. Level 1: everyday support

## Who this is for

Level 1 is for Kit Hub staff who use the Rate Card but do not work with code.

You do not need to understand GitHub, HTML or JavaScript.

## What Level 1 should be able to do

- open the Rate Card
- use Equipment
- use Rooms & Spaces
- use the Basket
- search for an item
- add something to the Basket
- create a test Booking Request
- recognise when something is not working
- pass useful information to Level 2 or Level 3

## Quick check if someone says the site is broken

1. Open the Rate Card in a private/incognito browser window.
2. Check that the landing page appears.
3. Open **Equipment**.
4. Search for a common item.
5. Add it to the Basket.
6. Open **Rooms & Spaces**.
7. Check that room cards appear.
8. Open the Basket and check that it still works.
9. If possible, create a test Booking Request using dummy details.

If the problem still happens, send the maintainer:

- what you were trying to do
- what went wrong
- browser and device
- a screenshot if possible
- the date and time

## What Level 1 should not do

Do not:

- edit `index.html`
- edit prices in the code
- change JavaScript
- change GitHub files
- change hosting settings
- change DNS settings
- try to fix security issues

Ask Level 2 or Level 3 instead.

---

# 3. Planned Level 1 improvement

At the moment, equipment and room data are stored inside `index.html`.

That means routine changes still need Level 2.

The planned next step is to move catalogue data into a separate file, for example:

```text
data/catalogue.json
```

A simple internal Catalogue Editor can then be built so Level 1 staff can update routine information without touching code.

The future editor should allow approved staff to:

- search for an item
- change a price
- change a name
- change a description
- change category or brand
- add a new item
- retire an item
- edit room information
- check for errors before saving

The editor itself should also be stored in this GitHub repository.

The aim is simple:

> Routine catalogue updates should not require coding knowledge.

This is planned work and is **not part of V5.0 yet**.

---

# 4. Level 2: catalogue updates and releases

## Who this is for

Level 2 is for someone who is comfortable using GitHub and making careful changes to the catalogue.

Level 2 is for changing **data**, not changing how the application works.

Examples of Level 2 work:

- changing an approved price
- changing an item name
- changing a description
- changing a category
- changing a brand
- adding a new item
- adding or changing a room
- changing a package
- publishing an approved update
- rolling back to an earlier working version

If you need to change how pricing, dates, exports or the Basket work, go to Level 3.

---

# 5. Where the data is in V5.0

The current V5.0 application keeps its main catalogue data inside `index.html`.

Use search in the file rather than scrolling through it.

## Equipment

Search for:

```javascript
const ITEMS = [
```

Equipment records contain fields such as:

```javascript
{
  "id": "RC-0002",
  "category": "Cameras & Lenses",
  "group": "DSLR/Mirrorless Cameras",
  "brand": "Canon",
  "name": "EOS R5 Kit",
  "prices": {
    "1 day": 136,
    "3 days": 326.4,
    "5 days": 408
  },
  "duplicateName": false,
  "description": "..."
}
```

The important point is that each item has a unique ID.

Do not change an existing ID just because the price, name or description has changed.

---

# 6. Updating an existing equipment item

1. Open the current approved `index.html`.
2. Search for the item's ID if you know it.
3. If not, search for the exact item name.
4. Check that you have found the correct record.
5. Change only the field that has been approved.
6. Do not change the surrounding JavaScript.
7. Save the change.
8. Test the item before publishing.

Common fields you may update:

```text
category
group
brand
name
prices
description
```

After changing an item, check:

- search
- category filter
- group filter
- brand filter
- item card
- Basket
- price shown
- Booking Request export

---

# 7. Adding a new equipment item

Before adding an item, make sure you have:

- the approved name
- the correct category
- the correct group
- the correct brand
- approved prices
- a description
- a new unique item ID

Use a similar existing record as a template.

Do not copy an old ID.

After adding the item, test:

- full-name search
- partial-name search
- filters
- prices
- Basket
- Booking Request export

---

# 8. Equipment packages

Search for:

```javascript
const PACKAGES = [
```

Packages use existing equipment IDs.

Example:

```javascript
{
  id: 'PACKAGE-DOCUMENTARY-INTERVIEW',
  name: 'Documentary Interview Kit',
  purpose: '...',
  components: [
    { id: 'RC-0009', qty: 1 },
    { id: 'RC-0431', qty: 2 }
  ]
}
```

When changing a package:

- check that every equipment ID exists
- check the quantities
- check the package card
- add the package to the Basket
- check that the correct items appear

Do not create duplicate equipment records just to build a package.

---

# 9. Rooms & Spaces

Search for:

```javascript
const ROOMS = [
```

Room records contain fields such as:

```javascript
{
  "id": "ROOM-001",
  "category": "Production Studios",
  "sourceName": "Studio A",
  "name": "TV Studio A",
  "area": "147m2",
  "description": "Sound isolated and double height production space",
  "rates": {
    "hourly": 420.0,
    "halfDay": null,
    "oneDay": 1200.0,
    "threeDay": 3600.0,
    "fiveDay": 6000.0
  },
  "notes": "",
  "mandatorySupport": false
}
```

The example above is included only to show the structure used in `index.html`.

When updating a room, change only the approved fields.

Common room fields:

```text
category
sourceName
name
area
description
rates
notes
mandatorySupport
```

`null` means that a rate is not available.

After changing a room:

- find it in Rooms & Spaces
- check the displayed rates
- add it to the Basket
- check the calculated total
- check Booking Request export

Room pricing and equipment pricing use different rules.

Do not assume that changing one will change the other.

---

# 10. Retiring an item

Do not reuse an old ID for a different item.

Do not delete old release files just because an item has been removed.

Until the planned catalogue system is built, agree the retirement method with the service owner before publishing.

A future separate catalogue should use a simple active/inactive field, for example:

```json
"active": false
```

This will allow an item to be hidden without losing its ID.

---

# 11. Level 2 release process

For an approved update:

1. Start from the current approved version.
2. Make the change.
3. Test it locally.
4. Update the version information if needed.
5. Update `CHANGELOG.md`.
6. Update any documentation affected by the change.
7. Keep a copy of the approved release in `archive/`.
8. Put the approved live file in:

```text
site/index.html
```

9. Commit the change to GitHub.
10. Check that deployment finishes successfully.
11. Open the live site in a private browser window.
12. Run a quick live check.

Do not upload Booking Requests or client information to GitHub.

---

# 12. Level 2 test checklist

For a normal catalogue update, check:

- the site loads
- Equipment works
- Rooms & Spaces works
- Basket works
- search works
- filters work
- changed item or room looks correct
- changed price looks correct
- date/day controls still work
- Basket totals still work
- client details form still works
- Excel Booking Request exports
- changed item appears correctly in the export
- desktop layout works
- mobile layout works

If the change affects pricing rules, date rules, exports or application behaviour, it should be handled as Level 3 work.

---

# 13. Level 3: development and technical support

## Who this is for

Level 3 is for a developer or technical owner.

Level 3 is needed when changing how the application works.

Examples:

- pricing logic
- weekend rules
- date calculations
- room charging rules
- Basket behaviour
- Excel import/export logic
- browser storage
- customer data flow
- authentication
- APIs
- database connections
- direct email sending
- SISO or SmartHub integration
- payment systems
- major accessibility changes
- major UI changes
- security changes that need code changes

Simple rule:

> Changing a price is Level 2.  
> Changing how prices are calculated is Level 3.

---

# 14. How V5.0 works

V5.0 is a browser-based application.

The current `index.html` contains:

- page layout
- styling
- JavaScript
- equipment data
- package data
- room data
- pricing rules
- Basket logic
- date logic
- Excel import/export logic
- email preparation logic

There is no central application database.

There is no build process needed to run the current file.

The public site is a static website.

---

# 15. Browser storage

The current application uses browser session storage for temporary working data such as the Basket and booking window.

The code also contains migration handling for older Basket data that may exist in local storage.

Client details are used in the browser to create the Booking Request.

The current application does not store those client details in the website and does not send them to a Kit Hub application database.

Never commit personal client information to GitHub.

---

# 16. Security and IT review

Before full operational launch, the service is being reviewed with Middlesex University IT.

Current planned work includes:

- IT vulnerability assessment
- annual external penetration testing
- agreement on production hosting
- agreement on domain/DNS ownership
- agreement on long-term GitHub ownership
- final support ownership for Levels 1, 2 and 3

Do not place detailed security findings, passwords, tokens or secrets in the public repository.

Any future feature that adds:

- login
- a backend
- a live database
- payment
- direct email sending
- customer data storage
- SISO/SmartHub integration

should be treated as a new Level 3 security/privacy review.

---

# 17. Hosting and DNS

The current prototype uses static web hosting.

The final MDX hosting setup is still to be agreed.

In simple terms, the final process will need to decide:

1. what the official MDX web address should be
2. where the website will be hosted
3. who controls the domain/DNS
4. how that web address points to the hosting service
5. who controls HTTPS/certificates
6. who owns the production deployment

The exact DNS setup depends on the final hosting choice.

Do not change DNS settings without the approved MDX process.

Once this is agreed, this section should be replaced with the exact confirmed process.

---

# 18. Accessibility

The current code already includes accessibility features such as:

- a skip link
- labelled form controls
- keyboard focus styles
- ARIA labels/status areas
- keyboard-friendly controls
- responsive layouts

This does not automatically mean the whole site has passed a formal accessibility audit.

The final MDX review process should be added here once confirmed.

---

# 19. Rollback and recovery

If a new release causes a problem:

1. stop changing the live file
2. find the last approved working version
3. restore the previous approved `site/index.html`
4. redeploy or roll back using the approved hosting process
5. check that the live site works again
6. record what went wrong
7. fix the issue in a new working version

Do not delete working historic releases.

GitHub history should always provide a recovery route.

---

# 20. Target repository layout

The repository should be simple enough for a new person to understand quickly.

Recommended structure:

```text
RateCard/
|
|-- README.md
|-- HANDOVER.md
|-- CHANGELOG.md
|-- VERSION
|-- SECURITY.md
|
|-- site/
|   `-- index.html
|
|-- archive/
|   `-- previous approved releases
|
|-- docs/
|   |-- DEPLOYMENT.md
|   |-- RELEASE_PROCESS.md
|   |-- TESTING_CHECKLIST.md
|   `-- PRICING_AND_BOOKING_RULES.md
|
|-- tools/
|   `-- catalogue-editor/
|
|-- data/
|   `-- catalogue.json
|
`-- .github/
```

`HANDOVER.md` should stay at the repository root so it is easy to find.

---

# 21. Root README

The root `README.md` should clearly point people to this file.

Suggested wording:

```markdown
## Supporting or taking over the Rate Card?

**Start with [HANDOVER.md](HANDOVER.md).**

It explains everyday support, catalogue maintenance, releases and technical ownership.
```

Someone who does not use GitHub regularly should not have to search through folders to find the handover.

---

# 22. Future catalogue system

A key handover improvement is to move catalogue data out of `index.html`.

Target structure:

```text
site/index.html
data/catalogue.json
tools/catalogue-editor/
```

The application would read the catalogue from the data file.

The Catalogue Editor would give approved staff a simple way to update that file.

Benefits:

- easier routine updates
- less risk of breaking application code
- easier testing
- easier handover
- clearer separation between data and logic

Before an updated catalogue is accepted, the editor should check things such as:

- missing IDs
- duplicate IDs
- missing names
- invalid prices
- missing room fields
- package references to items that do not exist
- invalid quantities

This is planned work and not part of V5.0.

---

# 23. Important rules

Do not:

- edit production code without knowing which support level the change belongs to
- reuse equipment or room IDs
- mix equipment pricing rules with room pricing rules
- publish unapproved prices
- commit client Booking Requests to GitHub
- commit passwords, tokens or secrets
- delete approved historic releases

Keep the public Rate Card and internal Quote Builder as separate tools unless an approved future design changes this.

---

# 24. Before this handover is considered complete

The handover should be treated as final only when:

- hosting is agreed
- domain/DNS ownership is agreed
- security review is complete
- annual penetration testing ownership is agreed
- Level 1 owner is named
- Level 2 maintainer is named
- Level 3 technical owner is named
- repository structure is final
- deployment and rollback instructions have been tested
- catalogue maintenance has a safe documented process
- ideally, Level 1 catalogue updates no longer require code editing

A useful final test is:

> Can someone other than the original developer make a small approved catalogue change, publish it and roll it back using only the repository documentation?

If yes, the handover is doing its job.

---

# 25. Document status

**Document:** `HANDOVER.md`  
**Purpose:** Support, maintenance and technical handover  
**Status:** Pre-launch working draft  
**Next review:** After the current IT, hosting and security work is agreed
