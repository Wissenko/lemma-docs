# Screenshot Manifest

Screenshots should come from a stable demo workspace with clean sample data.

Use neutral demo content, not real private customer data. Prefer screenshots that show the main user task clearly over screenshots that show every UI detail.

## Naming

Save screenshots under:

`public/screenshots/`

Use lowercase kebab-case:

`atlas-01-new-voice-form.png`

## Capture Plan

| ID | File | Product route / location | State required | Purpose | Crop | Docs page | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| atlas-01 | `atlas-01-new-voice-form.png` | App creation entry | Empty or dashboard state with clear create action | Show where users start a new voice form | Full viewport | `/start/quickstart` | needed |
| atlas-02 | `atlas-02-goal-input.png` | Creation flow | Goal field filled with a realistic example | Show that Lemma starts from a business question | Main panel | `/create/from-a-goal` | needed |
| atlas-03 | `atlas-03-starter-questions.png` | Creation flow | 3-4 starter questions filled | Show how creators define opening questions | Main panel | `/create/write-starter-questions` | needed |
| atlas-04 | `atlas-04-follow-up-guidance.png` | Creation flow | Follow-up guidance filled | Show the differentiated Lemma setup step | Main panel | `/create/guide-follow-ups` | needed |
| atlas-05 | `atlas-05-test-form.png` | Preview / test mode | Test flow ready to start or mid-test | Show how to validate before sharing | Full viewport | `/create/test-your-form` | needed |
| atlas-06 | `atlas-06-share-link.png` | Share screen | Share link visible but private URL obscured if needed | Show how form distribution works | Main panel | `/share/send-a-form-link` | needed |
| atlas-07 | `atlas-07-respondent-landing.png` | Respondent link | First respondent screen | Show expectations before answering | Full viewport | `/share/respondent-experience` | needed |
| atlas-08 | `atlas-08-voice-response.png` | Respondent flow | In-progress voice answer state | Show adaptive voice conversation | Full viewport | `/share/respondent-experience` | needed |
| atlas-09 | `atlas-09-transcript-view.png` | Response detail | Transcript visible with safe demo content | Show transcript-grounded evidence | Main panel | `/analyze/transcripts` | needed |
| atlas-10 | `atlas-10-themes.png` | Analysis / report | Themes visible | Show pattern finding across responses | Main panel | `/analyze/themes` | needed |
| atlas-11 | `atlas-11-quotes.png` | Analysis / report | Quotes visible | Show exact respondent language | Main panel | `/analyze/quotes` | needed |
| atlas-12 | `atlas-12-report.png` | Report page | Summary, themes, quotes, or actions visible | Show the decision-ready output | Full viewport | `/analyze/reports` | needed |
| atlas-13 | `atlas-13-templates.png` | Template selection | Template choices visible | Show self-serve starting points | Full viewport | `/templates` | needed |
| atlas-14 | `atlas-14-credits-usage.png` | Account / billing | Usage or credit state visible | Show account usage model | Main panel | `/account/credits-and-usage` | needed |
| atlas-15 | `atlas-15-team-members.png` | Account / team | Team member list or invite flow visible | Show collaboration capabilities | Main panel | `/account/team-members` | needed |

## Screenshot Quality Rules

- Use demo data with specific but non-sensitive examples.
- Avoid screenshots containing real emails, private names, payment information, tokens, or internal URLs.
- Prefer one clear action per screenshot.
- Crop only when the crop helps the user focus.
- Keep enough surrounding UI to orient the user.
- Do not use screenshots to imply unavailable features.

## Atlas Capture Notes

During Atlas capture, fill the `Status` column with:

- `captured`
- `blocked-login`
- `not-found`
- `feature-unclear`
- `needs-demo-data`
