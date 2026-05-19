# Self-Serve Documentation Pattern Notes

Date: 2026-05-19

These notes capture the public documentation patterns used for the current Lemma docs refactor.

## Sources Reviewed

- Stripe quickstarts: https://docs.stripe.com/quickstarts
- Typeform first-form guide: https://help.typeform.com/hc/en-us/articles/360053660271-My-first-form
- Linear docs home: https://linear.app/docs
- Slack quick start guide: https://slack.com/help/articles/360059928654-How-to-use-Slack--your-quick-start-guide
- Intercom getting started collection: https://www.intercom.com/help/en/collections/1865264-getting-started
- Notion getting started category: https://www.notion.com/en-gb/help/category/new-to-notion
- Vercel getting started guide: https://vercel.com/docs/getting-started-with-vercel

## Adopted Patterns

1. Lead with first value.
   - Stripe and Vercel make the first successful workflow explicit.
   - Lemma docs now send new users first to "Run your first study".

2. Organize by jobs before product surfaces.
   - Intercom and Slack expose setup and getting-started flows before deep feature lookup.
   - Lemma sections now map to user intent: get oriented, design, reach, launch, understand, share, operate, reference.

3. Preserve reference, but keep it downstream.
   - Linear and Vercel keep broad reference depth, but users can start from popular or getting-started paths.
   - Lemma keeps product terms, limits, and known gaps as lookup pages.

4. Use product examples to lower ambiguity.
   - Typeform and Slack rely heavily on UI screenshots and walkthroughs.
   - Lemma uses real desktop screenshots from the product audit where they do not expose private workspace details.

5. Separate outcome guidance from exact controls.
   - The docs should tell users when to use voice, follow-up depth, segments, Research Agent, Doc, or Slides.
   - Control-level pages remain, but they live under an outcome-oriented section.

## Lemma IA Decision

The docs should not read like a library of features. The top-level story is:

1. Get oriented.
2. Design the study.
3. Reach the right people.
4. Launch and collect.
5. Understand evidence.
6. Share findings.
7. Operate the workspace.
8. Reference exact behavior.

This preserves discoverability without making the navigation feel like the product sidebar copied into docs.
