# Lemma Docs

Self-serve product documentation for `docs.heylemma.com`.

This site is built with Next.js and Fumadocs. It is intentionally product-led rather than developer-led: the first job is to help a user replace a shallow static form with an adaptive Lemma voice form, share it, and use the resulting report.

## Commands

```bash
npm install
npm run dev
npm run build
```

## Initial Content Scope

The first release includes the 10 highest-priority pages:

1. `/`
2. `/start/quickstart`
3. `/start/what-is-lemma`
4. `/start/replace-a-static-form`
5. `/create/from-a-goal`
6. `/create/write-starter-questions`
7. `/create/guide-follow-ups`
8. `/create/test-your-form`
9. `/share/respondent-experience`
10. `/analyze/reports`

## Full V1 Sitemap

```txt
/

Start
/start/what-is-lemma
/start/quickstart
/start/replace-a-static-form
/start/voice-forms-vs-static-forms
/start/product-status

Create a voice form
/create
/create/from-a-goal
/create/write-starter-questions
/create/guide-follow-ups
/create/test-your-form

Share with respondents
/share
/share/send-a-form-link
/share/respondent-experience
/share/get-better-answers
/share/microphone-and-browser-help

Analyze responses
/analyze
/analyze/transcripts
/analyze/summaries
/analyze/themes
/analyze/quotes
/analyze/reports
/analyze/turn-findings-into-actions

Templates
/templates
/templates/customer-feedback-form
/templates/lead-qualification-form
/templates/churn-feedback-form
/templates/nps-follow-up-form
/templates/customer-story-intake-form
/templates/client-intake-form
/templates/message-testing-form
/templates/product-research-form

Examples
/examples
/examples/customer-feedback-report
/examples/lead-qualification-report
/examples/churn-feedback-report

Account
/account
/account/credits-and-usage
/account/team-members
/account/billing
/account/support

Trust
/trust
/trust/data-handling
/trust/respondent-consent
/trust/privacy-faq

Reference
/reference/glossary
/reference/changelog
/reference/product-limits
```

## Screenshot Pass

Screenshot placeholders are marked in MDX with `ScreenshotSlot`. The first Atlas capture pass should prioritize:

1. New voice form / study creation.
2. Goal input.
3. Starter questions.
4. Follow-up guidance.
5. Preview or test response.
6. Respondent landing page.
7. In-progress voice response.
8. Report view.

## Product Audit System

The product-doc coverage system lives in `docs-inventory/`:

- `product-map.md`: product feature inventory.
- `screenshot-manifest.md`: exact screenshot capture plan.
- `coverage-matrix.md`: feature-to-doc coverage tracker.
- `atlas-agent-prompt.md`: prompt for an Atlas/browser audit pass.

Update those files before writing broad new documentation pages. The docs should reflect observed product behavior, not assumed feature behavior.
