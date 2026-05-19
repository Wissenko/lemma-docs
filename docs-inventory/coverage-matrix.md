# Documentation Coverage Matrix

This matrix prevents the docs from drifting into generic advice.

Status values:

- `drafted`: page exists, but may still need product or screenshot verification.
- `verified`: page matches observed product behavior and has screenshot evidence.
- `blocked`: needs product access, demo data, or feature confirmation.

| User job | Docs page | Screenshot evidence | Current status | Gap |
| --- | --- | --- | --- | --- |
| Find the right help page | `/` | `docs-hq/home-dashboard.png` | drafted | Add real search affordance if Fumadocs search is not obvious enough |
| Get oriented | `/start` | `docs-hq/start-get-oriented-dashboard.png` | drafted | Verify sidebar/product language after next app pass |
| Create first study | `/start/quickstart` | `docs-hq/start-quickstart-new-study.png` | drafted | Capture full successful create-to-response flow |
| Understand Lemma | `/start/what-is-lemma` | `docs-hq/start-what-is-lemma-study-tabs.png` | drafted | Confirm final public terminology for outputs |
| Navigate app | `/start/navigate-lemma` | `docs-hq/start-navigate-lemma-sidebar.png` | drafted | Verify current sidebar labels |
| Design study | `/create` | `docs-hq/create-design-study-new-study.png` | drafted | Add more concrete examples after template strategy is stable |
| Choose audience | `/contacts` | `docs-hq/contacts-index.png` | drafted | Verify distribution behavior from contacts/segments |
| Build reusable audience | `/contacts/segments` | `docs-hq/contacts-segments-builder.png` | drafted | Confirm available filters and operators |
| Import contacts | `/contacts/import-contacts` | `docs-hq/contacts-import-contacts.png` | drafted | Confirm import validation/error states |
| Add contact manually | `/contacts/add-contact` | `docs-hq/contacts-add-contact.png` | drafted | Confirm required fields |
| Manage participant topics | `/contacts/topics` | `docs-hq/contacts-topics-settings.png` | drafted | Confirm participant-facing topic behavior |
| Store targeting data | `/contacts/properties` | `docs-hq/contacts-properties-settings.png` | drafted | Confirm property types and where they appear |
| Launch study | `/share` | `docs-hq/share-launch-overview.png` | drafted | Capture respondent flow from live share link |
| Review evidence | `/analyze` | `docs-hq/analyze-index-responses.png` | drafted | Capture Doc/Slides export behavior after next pass |
| Manage workspace | `/account` | `docs-hq/account-index.png` | drafted | Verify current Account & Billing labels |
| Update workspace settings | `/account/workspace-settings` | `docs-hq/account-workspace-settings.png` | drafted | Confirm org/team split |
| Manage teammates | `/account/team-members` | `docs-hq/account-team-members.png` | drafted | Confirm roles and permissions |
| Update profile | `/account/profile` | `docs-hq/account-profile.png` | drafted | Confirm email/password behavior |
| Manage notifications | `/account/notifications` | `docs-hq/account-notifications.png` | drafted | Confirm notification delivery behavior |
| Understand credits and usage | `/account/credits-and-usage` | `docs-hq/account-credits-usage.png` | drafted | Confirm exact credit consumption rules |

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
