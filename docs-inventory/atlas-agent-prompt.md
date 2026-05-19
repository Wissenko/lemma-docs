# Atlas Agent Prompt: Lemma Product Docs Audit

Use this prompt when running Atlas or another browser agent against the Lemma app.

```txt
You are auditing the Lemma app to produce product documentation for docs.heylemma.com.

Goal:
Create a structured product inventory and screenshot plan. Do not write final docs yet.

Product positioning:
Lemma replaces static forms when teams need richer answers. It creates adaptive AI voice forms, sends a link to respondents, asks follow-up questions, and turns responses into transcripts, summaries, themes, quotes, reports, and next actions.

Primary user jobs:
1. Create a voice form from a goal.
2. Write starter questions.
3. Guide follow-up behavior.
4. Test the respondent experience.
5. Share a form link.
6. Understand what respondents see.
7. Review transcripts and responses.
8. Read summaries, themes, quotes, reports, and next actions.
9. Manage account usage, team, and billing if available.
10. Understand privacy, consent, and data-handling surfaces if visible.

Audit rules:
- Use a demo workspace only. Do not use private customer data.
- Do not delete, publish, email, invite, bill, or submit anything.
- Do not create real external side effects.
- If you need microphone permission, stop and mark the step as requiring human confirmation.
- If a feature is not visible, mark it as missing or unclear. Do not infer it as live.
- Screenshot only clean demo states. Avoid private emails, tokens, payment info, customer names, or internal URLs.

For every major screen or flow, record:
- screen_name
- route_or_location
- user_job
- visible_actions
- product_value_to_highlight
- exact_terms_used_in_ui
- screenshot_id
- screenshot_recommendation
- docs_page
- status: verified / unclear / missing / blocked
- notes

Required screenshot IDs:
- atlas-01: new voice form or creation entry
- atlas-02: goal input
- atlas-03: starter questions
- atlas-04: follow-up guidance
- atlas-05: preview or test form
- atlas-06: share link
- atlas-07: respondent landing screen
- atlas-08: in-progress voice response
- atlas-09: transcript view
- atlas-10: themes
- atlas-11: quotes
- atlas-12: report view
- atlas-13: templates
- atlas-14: credits or usage
- atlas-15: team members

Output:
1. Product map updates as a markdown table.
2. Screenshot manifest updates as a markdown table.
3. Coverage matrix updates as a markdown table.
4. A short list of documentation pages that should be added next.
5. A list of product terms that the docs must use exactly as the UI uses them.
```
```

## After The Atlas Run

Copy the output into:

- `docs-inventory/product-map.md`
- `docs-inventory/screenshot-manifest.md`
- `docs-inventory/coverage-matrix.md`

Then update MDX pages and replace `ScreenshotSlot` components with real images.
