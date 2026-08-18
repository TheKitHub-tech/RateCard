# Security and privacy

## Public repository rule

Never commit:

- client names, email addresses, phone numbers or company details;
- generated Booking Requests;
- generated basket exports or quotes;
- credentials, access tokens or deployment secrets;
- internal insurance, finance or commercial documents;
- unapproved terms and conditions.

The public application stores the active basket and shared booking window in browser session storage. It does not send request data to a server.

## Reporting a problem

Report security or privacy concerns privately to the project owner through the usual Middlesex University internal channel. Do not place sensitive details in a public GitHub issue.

## Deployment

Deployment credentials belong in GitHub or Netlify account settings, never in this repository. The static site requires no environment variables.
