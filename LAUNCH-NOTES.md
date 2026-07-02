# Launch Notes - KalnyesGrowth 4-Feature Build

## New Pages
- `calculator.html` - Missed Call Cost Calculator (standalone, fully functional)
- `free-demo.html` - Free Demo multi-step funnel (5 steps, lead capture)

## Index.html Changes
- Added **Plans section** (3 tiers: $297, $597, $1,500+) between Reviews and Free Tools
- Added **Dashboard teaser** (coded browser mockup) between Services and Scarcity
- Added **4 new FAQ items** (plan switching, cancellation, outside VA, free demo details)
- Updated FAQ schema in `<head>` to include new questions
- Wired Missed Call Calculator CTA to `calculator.html`
- Wired Free Demo CTA to `free-demo.html`
- Added "Plans" to desktop nav and mobile menu
- Added calculator + free-demo links to footer

## Environment Variables / TODOs

### Formspree (or Vercel Serverless)
Both `calculator.html` and `free-demo.html` have a `FORM_ENDPOINT` constant that needs a real value.

**Option A (Formspree, works on GitHub Pages):**
1. Create a form at https://formspree.io
2. Replace `'https://formspree.io/f/YOUR_FORM_ID'` in both files

**Option B (Vercel Serverless):**
1. Migrate site to Vercel (or create a separate API project)
2. Create `/api/demo-lead.js` endpoint using Resend for email delivery
3. Update FORM_ENDPOINT to point to the Vercel function URL

### KG Dashboard Webhook
`free-demo.html` sends leads to the KG Dashboard app.

- `KG_APP_URL` - Currently set to `https://project-kday6.vercel.app`
- `KG_WEBHOOK_SECRET` - Replace `'YOUR_WEBHOOK_SECRET'` with the actual secret from the KG app environment

### Analytics Events (TODO)
`calculator.html` has TODO comments for these events:
- `calculator_started` - fire on first input interaction
- `calculator_completed` - fire when results are first displayed
- `calculator_email_submitted` - fire on email form submit

## Testing Checklist
- [ ] Calculator: industry dropdown prefills job value
- [ ] Calculator: sliders update results live
- [ ] Calculator: "See your free demo" link passes params to free-demo.html
- [ ] Calculator: email form submits (after Formspree setup)
- [ ] Free Demo: calculator params show banner and pre-fill industry
- [ ] Free Demo: "I don't have one" checkbox toggles GBP fields
- [ ] Free Demo: language toggle switches between English/Espanol
- [ ] Free Demo: form validates each step before advancing
- [ ] Free Demo: honeypot silently catches bots
- [ ] Free Demo: ?done=1 shows thank-you state directly
- [ ] Plans: cards render 3-up on desktop, stack on mobile (popular first)
- [ ] Plans: all CTAs open Calendly popup
- [ ] Dashboard teaser: browser mockup renders properly
- [ ] Nav: "Plans" link scrolls to plans section
- [ ] Mobile menu: "Plans" link works
- [ ] Test at 375px, 768px, 1440px
- [ ] Test with JS disabled (FAQ schema still in head, stats show real values)
