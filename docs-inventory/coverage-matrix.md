# Documentation Coverage Matrix

This matrix prevents the docs from drifting into generic advice.

Status values:

- `drafted`: page exists, but may still need product screenshots.
- `verified`: page matches observed product behavior and has screenshot evidence.
- `missing`: page does not exist yet.
- `blocked`: needs product access, demo data, or feature confirmation.

| Feature / flow | User question | Docs page | Screenshot evidence | Current status | Gap |
| --- | --- | --- | --- | --- | --- |
| What Lemma is | What is this product for? | `/start/what-is-lemma` | None required, product screenshots helpful | drafted | Verify exact product terminology |
| Quickstart | How do I create my first voice form? | `/start/quickstart` | `atlas-01`, `atlas-05`, `atlas-12` | drafted | Needs real creation and report screenshots |
| Static form replacement | Which existing form should I rebuild? | `/start/replace-a-static-form` | Optional comparison visual | drafted | Verify product import/rebuild language |
| Start from a goal | What should I type first? | `/create/from-a-goal` | `atlas-02` | drafted | Needs exact UI label |
| Starter questions | How should I write opening questions? | `/create/write-starter-questions` | `atlas-03` | drafted | Needs exact UI constraints and examples |
| Follow-up guidance | How do I tell Lemma what to ask about? | `/create/guide-follow-ups` | `atlas-04` | drafted | Needs exact field behavior |
| Test form | How do I preview before sharing? | `/create/test-your-form` | `atlas-05` | drafted | Needs test-mode screenshot |
| Share link | How do I send the form? | `/share/send-a-form-link` | `atlas-06` | missing | Need page and screenshot |
| Respondent flow | What will respondents see? | `/share/respondent-experience` | `atlas-07`, `atlas-08` | drafted | Needs respondent screenshots and mic copy |
| Better answers | How do I get higher-quality responses? | `/share/get-better-answers` | Optional | missing | Need page |
| Mic/browser help | What if voice does not work? | `/share/microphone-and-browser-help` | Browser permission screenshot | missing | Need page and exact support behavior |
| Response list | Where do completed answers appear? | `/analyze/transcripts` | `atlas-09` | missing | Need page |
| Summaries | How do I use summaries? | `/analyze/summaries` | Needed | missing | Need page and screenshot |
| Themes | How do I find patterns? | `/analyze/themes` | `atlas-10` | missing | Need page and screenshot |
| Quotes | How do I pull customer language? | `/analyze/quotes` | `atlas-11` | missing | Need page and screenshot |
| Reports | How do I read the report? | `/analyze/reports` | `atlas-12` | drafted | Needs exact report section verification |
| Templates | Which workflow should I start from? | `/templates` | `atlas-13` | missing | Confirm if templates exist in-app |
| Credits / usage | How much can I run? | `/account/credits-and-usage` | `atlas-14` | missing | Confirm current billing model |
| Team members | Can my team collaborate? | `/account/team-members` | `atlas-15` | missing | Confirm live capabilities |
| Data handling | What happens to responses? | `/trust/data-handling` | Optional | missing | Need product/legal truth |
| Respondent consent | What should I tell respondents? | `/trust/respondent-consent` | Respondent entry copy | missing | Need exact consent/mic language |
| Product limits | What should I not expect Lemma to do? | `/reference/product-limits` | None | missing | Use product truth and avoid roadmap claims |

## Definition Of Done For A Feature

A feature is documented when:

1. Its page answers the user's actual job.
2. The page names what Lemma does especially well at that step.
3. The page avoids claiming unsupported parity with Typeform or Google Forms.
4. At least one screenshot exists or the reason for not using one is explicit.
5. Product terminology matches the current app.
6. The feature's status is live, partial, or roadmap-safe.
