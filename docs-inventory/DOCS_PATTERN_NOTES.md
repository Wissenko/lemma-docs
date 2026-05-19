# Self-Serve Documentation Pattern Notes

Date: 2026-05-19

These notes capture the public documentation patterns used for the current Lemma docs refactor.

## Sources Reviewed

- Gamma Help Center: https://help.gamma.app/en/
- Gamma article example: https://help.gamma.app/en/articles/7838093-how-do-i-create-a-new-presentation-document-or-webpage-in-gamma
- Gamma troubleshooting example: https://help.gamma.app/en/articles/12805003-gamma-api-troubleshooting
- Stripe quickstarts: https://docs.stripe.com/quickstarts
- Typeform first-form guide: https://help.typeform.com/hc/en-us/articles/360053660271-My-first-form
- Linear docs home: https://linear.app/docs
- Slack quick start guide: https://slack.com/help/articles/360059928654-How-to-use-Slack--your-quick-start-guide
- Intercom getting started collection: https://www.intercom.com/help/en/collections/1865264-getting-started
- Notion getting started category: https://www.notion.com/en-gb/help/category/new-to-notion
- Vercel getting started guide: https://vercel.com/docs/getting-started-with-vercel

## Gamma Pattern Audit

Gamma's Help Center is optimized for non-technical end users:

1. The homepage is search-first, then organized into clear user-facing collections.
2. Collections use plain jobs and product areas: basics, editing, AI generation, sharing, websites, integrations, accounts, billing, security, troubleshooting, and community tips.
3. Article titles are mostly questions: "How do I...", "What is...", "Can I...", "Why isn't...".
4. Articles use a repeatable template: short answer, introduction, explanation, numbered steps, screenshots, callouts, FAQs, related articles, and feedback.
5. Screenshots are tied to the step or product surface being explained.
6. Most articles include "FAQs & Common Issues" even when the main body already explains the feature.
7. Troubleshooting pages are symptom-first: what happened, why it happens, what to try next.

## Lemma Translation

Lemma should borrow Gamma's operating system, not its exact IA.

Current docs recipe:

1. Use question titles for pages where the user has a concrete job.
2. Keep collections compact: Getting Started, Designing Studies, Contacts & Audiences, Launching Studies, Responses & Evidence, Workspace & Account.
3. Give every public docs page one high-quality product screenshot by default.
4. Add "FAQs & Common Issues" to every page.
5. Use callouts consistently:
   - `insight`: why the workflow matters for better evidence
   - `tip`: how to do the job better or faster
   - `note`: product limits, unverified behavior, permissions, credits, or account details
6. End workflow pages with related articles that point to the next likely action.
7. Keep Lemma more opinionated than Gamma: every page should help users get better evidence, not merely locate a control.

## Current Lemma IA

1. Getting Started
2. Designing Studies
3. Contacts & Audiences
4. Launching Studies
5. Responses & Evidence
6. Workspace & Account

Removed from the current docs IA:

- Reference section
- Replace Static Forms page
- Plans and Billing page
- separate output pages for Doc, Slides, and Export
