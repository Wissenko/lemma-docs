# Lemma Product Map

Status values:

- `verified`: observed in the app during a product audit.
- `expected`: expected from current Lemma context, but not yet verified in the app.
- `unclear`: seen or inferred, but behavior needs confirmation.
- `missing-doc`: feature exists or likely exists, but docs coverage is not written yet.

## Product Areas

| Product area | Screen / flow | User job | What Lemma does well | Evidence | Docs page | Status |
| --- | --- | --- | --- | --- | --- | --- |
| App entry | Dashboard / workspace home | Find existing forms and start the next action | Should make form creation and report access obvious | Needed | `/start/quickstart` | expected |
| Creation | New voice form / study creation | Start a new adaptive voice form | Turns a blank start into a guided setup | `atlas-01` | `/start/quickstart` | expected |
| Creation | Goal input | Define the business question the voice form should answer | Starts from a decision, not a generic survey | `atlas-02` | `/create/from-a-goal` | expected |
| Creation | Starter questions | Give the respondent a strong opening path | Combines form-like structure with interview-like depth | `atlas-03` | `/create/write-starter-questions` | expected |
| Creation | Follow-up guidance | Tell Lemma what to listen for | Differentiates Lemma from static forms by surfacing reasons, examples, objections, and tradeoffs | `atlas-04` | `/create/guide-follow-ups` | expected |
| Creation | Preview / test mode | Validate the voice form before sharing it | Lets the creator catch vague prompts and weak follow-ups | `atlas-05` | `/create/test-your-form` | expected |
| Sharing | Share link | Send the form to respondents | Keeps distribution as easy as a normal form link | `atlas-06` | `/share/send-a-form-link` | missing-doc |
| Respondent flow | Respondent landing page | Understand what will happen before answering | Sets expectations for voice, timing, and follow-up questions | `atlas-07` | `/share/respondent-experience` | expected |
| Respondent flow | Voice conversation in progress | Answer naturally and respond to follow-ups | Makes qualitative feedback feel like a short guided conversation | `atlas-08` | `/share/respondent-experience` | expected |
| Response review | Response list | See who responded and inspect individual answers | Should connect raw responses to usable evidence | Needed | `/analyze/transcripts` | missing-doc |
| Response review | Transcript view | Verify what a respondent actually said | Keeps insights transcript-grounded | `atlas-09` | `/analyze/transcripts` | missing-doc |
| Analysis | Summary view | Understand each response quickly | Reduces manual review work | Needed | `/analyze/summaries` | missing-doc |
| Analysis | Themes | Find repeated patterns across responses | Turns conversations into decision evidence | `atlas-10` | `/analyze/themes` | missing-doc |
| Analysis | Quotes | Capture exact respondent language | Preserves customer words for product, sales, and marketing use | `atlas-11` | `/analyze/quotes` | missing-doc |
| Analysis | Report | Read a decision-ready output | Combines summary, themes, quotes, and next actions | `atlas-12` | `/analyze/reports` | expected |
| Templates | Template selection | Start from a known workflow | Helps users avoid a blank prompt | Needed | `/templates` | missing-doc |
| Account | Credits / usage | Understand available usage | Helps users know whether they can run more forms | Needed | `/account/credits-and-usage` | missing-doc |
| Account | Team members | Invite or manage collaborators | Supports team adoption | Needed | `/account/team-members` | missing-doc |
| Trust | Consent / data handling surfaces | Understand what respondents and teams should expect | Builds confidence around voice responses and transcripts | Needed | `/trust/respondent-consent` | missing-doc |

## Audit Questions

For each feature, answer:

1. What screen proves this feature exists?
2. What can the user do there?
3. What decision or workflow does it support?
4. What does Lemma do better than a static form at this step?
5. What screenshot would make the docs clearer?
6. Is the feature live, partial, hidden, or roadmap?

## Gaps To Resolve In App

- Exact creation flow labels.
- Whether the product calls objects "forms", "studies", "interviews", or another term.
- Whether templates are live in-app or only planned for website/docs.
- Exact available report sections.
- Whether shareable report links are live.
- Current account, credits, billing, and team capabilities.
- Current respondent consent and microphone permission copy.
