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

## Lead Capture (LIVE)

Both forms POST directly to the existing Supabase `capture-lead` edge function:
- Endpoint: `https://boddsbxlaytcrkpuckyn.supabase.co/functions/v1/capture-lead`
- Client ID: `992d9253-6123-4d51-91b9-007efd8ad03c`
- No Formspree or webhook secret needed. Leads appear in the KG Dashboard with push notifications.

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
