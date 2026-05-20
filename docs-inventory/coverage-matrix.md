# Documentation Coverage Matrix

This matrix prevents the docs from drifting into generic advice.

Status values:

- `drafted`: page exists, but may still need product or screenshot verification.
- `verified`: page matches observed product behavior and has screenshot evidence.
- `blocked`: needs product access, demo data, or feature confirmation.

| User job | Docs page | Screenshot evidence | Current status | Gap |
| --- | --- | --- | --- | --- |
| Find the right help page | `/` | `docs-hq/home-dashboard.png` | verified | Watch whether search labels stay clear as more pages return |
| Get oriented | `/start` | `docs-hq/start-get-oriented-dashboard.png` | verified | None for current public scope |
| Create first study | `/start/quickstart` | `docs-hq/start-quickstart-new-study.png` | verified | Capture full successful create-to-response flow later |
| Understand Lemma | `/start/what-is-lemma` | `docs-hq/start-what-is-lemma-study-tabs.png` | verified | None for current public scope |
| Understand core terms | `/start/how-studies-work` | `docs-hq/start-what-is-lemma-study-tabs.png` | verified | None for current public scope |
| Browse create guides | `/create` | `docs-hq/create-design-study-new-study.png` | verified | None for current public scope |
| Create with Smart Builder | `/create/smart-builder` | `docs-hq/create-from-goal-brain-dump.png` | verified | None for current public scope |
| Choose text or voice | `/create/text-or-voice` | `docs-hq/create-choose-format-menu.png` | verified | None for current public scope |
| Choose follow-up depth | `/create/follow-up-depth` | `docs-hq/create-choose-depth-menu.png` | verified | None for current public scope |
| Edit questions and follow-ups | `/create/questions-and-follow-ups` | `docs-hq/create-guide-follow-ups-depth.png` | verified | None for current public scope |
| Use templates | `/create/templates` | `docs-hq/create-use-template-gallery.png` | verified | None for current public scope |
| Test a study | `/create/test-study` | `docs-hq/create-test-preview-overview.png` | verified | None for current public scope |
| Browse results guides | `/analyze` | `docs-hq/analyze-index-responses.png` | verified | None for current public scope |
| Review responses | `/analyze/responses` | `docs-hq/analyze-sessions-table.png` | verified | None for current public scope |
| Use transcripts | `/analyze/transcripts` | `docs-hq/analyze-transcript-view.png` | verified | None for current public scope |
| Read Insights | `/analyze/insights` | `docs-hq/analyze-reports-overview.png` | verified | None for current public scope |
| Ask questions in Research | `/analyze/research` | `docs-hq/analyze-research-agent-chat.png` | verified | Recapture if the tab label or UI changes |

## Private Drafts

The former Contacts, Launch, Workspace, Account, Billing, and navigation pages are intentionally outside `content/docs` for now. They live in `docs-inventory/private-drafts/` until those areas should become public.

## Definition Of Done For A Page

A page is documented when:

1. Its title is written as the user's question or a clear collection name.
2. It answers the user's actual job in plain language.
3. It names what Lemma does especially well at that step.
4. It avoids claiming unsupported parity with Typeform or Google Forms.
5. It includes exactly one high-quality product screenshot unless there is a deliberate exception.
6. It includes FAQs & Common Issues.
7. It points to the next likely user action.
8. Product terminology matches the current app.
