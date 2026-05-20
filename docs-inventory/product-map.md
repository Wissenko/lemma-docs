# Lemma Product Map

Status values:

- `verified`: observed in the app during a product audit.
- `drafted`: documented from observed product evidence, but still needs another verification pass.
- `unclear`: seen or inferred, but behavior needs confirmation.

## Product Areas

| Product area | Screen / flow | User job | What Lemma does well | Evidence | Docs page | Status |
| --- | --- | --- | --- | --- | --- | --- |
| App entry | Studies dashboard | Find existing studies and start the next action | Gives users a home base for repeated research workflows | `docs-hq/home-dashboard.png` | `/` | drafted |
| Getting started | New Study screen | Create a first study | Lets users describe what they want to learn in a smart builder instead of writing every question from scratch | `docs-hq/start-quickstart-new-study.png` | `/start/quickstart` | drafted |
| Product model | Study tabs | Understand studies, sessions, responses, and outputs | Connects participant sessions to analysis and shareable outputs | `docs-hq/start-what-is-lemma-study-tabs.png` | `/start/what-is-lemma` | drafted |
| Navigation | Sidebar | Find the right product area | Makes studies, contacts, workspace, and account controls discoverable | `docs-hq/start-navigate-lemma-sidebar.png` | `/start/navigate-lemma` | drafted |
| Study design | Smart builder, template picker, and New Study screen | Design a study that gets useful answers | Combines plain-language goal breakdown, format, follow-up depth, context, guide upload, and in-app templates | `docs-hq/create-design-study-new-study.png` | `/create` | drafted |
| Contacts | Contacts index | Choose who to invite | Centralizes participants, imports, segments, topics, and properties | `docs-hq/contacts-index.png` | `/contacts` | drafted |
| Contacts | Segment builder | Build reusable audiences | Uses rules and contact data for repeatable targeting | `docs-hq/contacts-segments-builder.png` | `/contacts/segments` | drafted |
| Contacts | Import contacts | Bring a participant list into Lemma | Supports spreadsheet-based audience setup | `docs-hq/contacts-import-contacts.png` | `/contacts/import-contacts` | drafted |
| Contacts | Add contact | Add one participant manually | Supports lightweight one-off audience setup | `docs-hq/contacts-add-contact.png` | `/contacts/add-contact` | drafted |
| Contacts | Topics settings | Manage participant subscription topics | Separates subscription categories from contact attributes | `docs-hq/contacts-topics-settings.png` | `/contacts/topics` | drafted |
| Contacts | Properties settings | Store targeting attributes | Makes custom fields available for segmentation | `docs-hq/contacts-properties-settings.png` | `/contacts/properties` | drafted |
| Launching | Study overview | Share and monitor a study | Keeps distribution close to the study workspace | `docs-hq/share-launch-overview.png` | `/share` | drafted |
| Evidence | Responses table | Review participant sessions | Starts analysis from source evidence | `docs-hq/analyze-index-responses.png` | `/analyze` | drafted |
| Workspace | Account overview | Manage workspace operations | Groups profile, notifications, credits, and usage controls | `docs-hq/account-index.png` | `/account` | drafted |
| Workspace | Workspace settings | Update organization details | Separates shared workspace settings from profile settings | `docs-hq/account-workspace-settings.png` | `/account/workspace-settings` | drafted |
| Workspace | Team members | Invite and manage teammates | Supports collaboration around studies and evidence | `docs-hq/account-team-members.png` | `/account/team-members` | drafted |
| Workspace | Profile | Update personal profile | Keeps personal account details separate from workspace settings | `docs-hq/account-profile.png` | `/account/profile` | drafted |
| Workspace | Notifications | Configure alerts | Helps study owners monitor responses and credit events | `docs-hq/account-notifications.png` | `/account/notifications` | drafted |
| Workspace | Credits and usage | Understand available usage | Helps users plan text and voice study volume | `docs-hq/account-credits-usage.png` | `/account/credits-and-usage` | drafted |

## Observed Create Study Flow

Source:

`/Users/wissem/Desktop/Screen Recording 2026-05-20 at 16.14.10.mov`

This screen recording covers the study creation experience.

### Create Study Entry

Observed labels and controls:

- Page title: **Create Study**
- Subtitle: **Describe your study goals to get started.**
- Sidebar entry: **New Study**
- Setup controls:
  - **Interaction: Voice conversation**
  - **Follow-up depth: Standard**
- Main prompt area:
  - Placeholder starts with **Paste a brain dump: audience, workflow, tools, what you want to learn, and constraints.**
  - Secondary path: **Skip and chat with the assistant**
  - CTA icon button to submit the prompt
- Secondary setup path:
  - **Upload Discussion Guide**
  - helper text begins **Already have a guide written?**

### Global Follow-Up Depth

Observed options in the global **Follow-up depth** menu:

- **Quick pulse**: short pulse check, **3-5 questions**, minimal follow-ups.
- **Standard interview**: typical research interview, **6-10 questions**, light probing.
- **Deep dive**: in-depth exploration, **12-18 questions**, rich probing.

Use this distinction in docs:

- Global follow-up depth shapes the overall study length and probing intensity.
- Per-question follow-up settings control whether and how Lemma probes after a specific question.

### Templates

Observed templates on the New Study screen:

- **Customer Discovery**
  - Prompt: **What do people need before they choose you?**
  - Use case: interview prospects or customers about pains, expectations, alternatives, buying triggers, and what would make them switch.
- **Customer Satisfaction**
  - Prompt: **Why are customers happy, frustrated, or leaving?**
  - Use case: understand satisfaction, friction, trust, and what should improve first.
- **Product/Service Feedback**
  - Prompt: **What should we improve, add, or remove?**
  - Use case: collect deeper feedback on a product, service, store experience, onboarding flow, package, feature, or offer before deciding what to change.
- **Employee Experience**
  - Prompt: **What is making employees stay, struggle, or leave?**
  - Use case: understand onboarding friction, engagement drivers, manager pain points, process blockers, and exit reasons.

### Smart Builder / Assistant

Observed behavior:

- User can enter a plain-language goal, for example:
  - **I want to understand if my customers are happy, frustrated, or leaving.**
- The assistant thinks, then creates a study draft.
- Drafted study context included:
  - study title
  - **Study Goal**
  - **Background Info**
  - **Moderator Tone**
  - **Key Terms**
  - **Welcome Screen**
  - **Closing Message**
- The assistant asks clarifying questions and exposes suggested actions, including:
  - **Confirm the assumptions**
  - **Refine the tone**
  - **Add key terms**
  - **More casual**
  - **More formal**
  - **More direct**
  - **Tighten churn probing**
  - **Add a behavior question**
  - **Run a preview**
- Status before question generation:
  - **Study context · ready for next step**
- Primary CTA:
  - **Generate questions**

### Key Terms

Observed labels:

- Empty state: **none yet — add proper nouns the voice STT wouldn't already know (brand / product / team / acronym)**
- Input placeholder: **Type one term, or paste comma-separated**
- Filled state: **1 term — proper nouns boosted in voice recognition**

Docs interpretation:

- Key terms help voice recognition understand proper nouns, product names, team names, brand names, and acronyms.
- Present key terms as especially relevant for voice studies, not as a generic tagging or analysis feature.

### Question Management

Observed after question generation:

- Status: **Interview questions · ready for next step**
- Top actions:
  - **Test Interview**
  - **Review**
- Study header still shows title, draft state, and estimated duration.
- Each interview question can expose:
  - **AI follow-up questions** toggle
  - **Follow-up depth**
  - Depth option shown: **Light**
  - **Follow-up instructions for moderator**
  - Empty instruction placeholder: **Click to add follow-up instructions for the moderator**
- Generated questions in the sample study included:
  - **To start, how would you describe your experience as a customer so far?**
  - **What has felt most valuable or helpful to you recently?**
  - **What has felt most frustrating or difficult recently?**
  - **When you think about staying with us, what feels like the biggest reason to continue?**

Docs interpretation:

- Lemma does not force users to write all questions from scratch.
- The create flow should be documented as: describe the study goal, let the smart builder draft context and questions, then refine.
- Per-question follow-up controls are part of question editing, not only a global study setting.

## Observed Insights Flow

Source:

`/Users/wissem/Desktop/Screen Recording 2026-05-20 at 16.25.44.mov`

This screen recording covers the experience after a study is launched and responses have been collected.

### Studies Dashboard

Observed labels and controls:

- Page title: **Studies**
- Search input: **Search**
- Filters:
  - **Active (9)**
  - **Archived (2)**
- Actions:
  - **Import**
  - **+ New Study**
- Study cards show:
  - study title
  - status badge, e.g. **ACTIVE**, **DRAFT**, **Example**
  - interaction badge, e.g. **VOICE**, **TEXT**
  - participant count, e.g. **30 participants**
  - update state, e.g. **Updated 9m ago**, **Read-only demo**
- Example study observed:
  - **How knowledge workers adopt AI tools**
  - **Example**
  - **30 participants**
  - **Read-only demo**

### Study-Level Navigation

Observed top navigation for a published study:

- **Overview**
- **Responses**
- **Insights**
- **Research**
- **View survey**

Docs interpretation:

- Treat these as the main post-launch surfaces.
- `Responses` is the source-evidence table.
- `Insights` is the generated report/synthesis surface.
- `Research` is the chat interface for asking questions about the study data.
- `View survey` lets the study owner inspect the respondent-facing study.

### Responses / Sessions

Observed labels and behavior:

- Tab: **Responses**
- Page title: **Sessions**
- Summary: **30 completed interviews**
- Row count: **30 rows**
- Table controls:
  - **Columns**
- Table columns visible in the demo:
  - participant
  - started
  - duration
  - status
  - summary
  - transcript
  - answer columns for the study questions
- Row status observed:
  - **DONE**
- Transcript column action:
  - **View**
- Analysis action observed on rows:
  - **Retry analysis**

Docs interpretation:

- Use `Sessions` when referring to completed interviews inside `Responses`.
- The Responses table is not only a list of people; it combines metadata, AI summary, transcript access, and per-question answers.
- The table can be horizontally scrolled to inspect answers to individual questions.

### Transcript View

Observed behavior:

- Clicking **View** in the transcript column opens a transcript page.
- Back link: **Responses**
- Header includes study title, participant name, role/context, and timestamp.
- Page title: **Transcript**
- Transcript is displayed as alternating **Interviewer** and **Participant** turns.

Docs interpretation:

- Transcripts are the grounding layer for verifying summaries and insights.
- Documentation should tell users to inspect transcripts when a generated claim matters.

### Insights Report

Observed labels and structure:

- Tab: **Insights**
- Action: **Export**
- Report title in demo: **How knowledge workers adopt AI tools**
- Report metadata:
  - **Sample**
  - **Method**
  - **Field Period**
  - **Issued**
- Observed example values:
  - **30 interviews**
  - **1:1 structured · 12-16 min**
  - **Q2 2026**
  - **Apr 30, 2026**
- Section: **By the numbers**
- Metric cards:
  - **Completed interviews**
  - **Recorded conversation**
  - **Distinct functions**
  - **Quotes available**
- Observed example values:
  - **30**
  - **6h 55m**
  - **18 roles**
  - **180 answers**
- Report sections observed:
  - **About the sample**
  - numbered findings, e.g. **Finding 02**
  - charts/exhibits
  - highlighted quotes attributed to participants/roles

Docs interpretation:

- `Insights` should be documented as the generated synthesis/report surface, not as raw response review.
- Emphasize that Insights packages patterns, sample context, charts/exhibits, findings, and quotes into a shareable/report-like artifact.
- Mention **Export** as the visible action for taking the report out of the product, but verify export formats before documenting specifics.

### Research Chat

Observed labels and behavior:

- Tab: **Research**
- Input placeholder: **Ask about your study data...**
- User can ask questions over the collected study data.
- Observed prompts in the demo:
  - **Are there any contradictions between participants?**
  - **What is the most important insight from the study?**
- Assistant returns structured answers with bullets, named participants, tensions, bottom-line synthesis, and suggested follow-up framing.

Docs interpretation:

- `Research` should be documented as a way to ask targeted questions across study data after responses are collected.
- It is useful for exploring contradictions, themes, strongest insights, participant segments, and next questions without manually reading every session first.
- Claims from Research should still be verified against Responses and transcripts when the output will inform a decision.

## Observed Parameters / Settings Flow

Source:

`/Users/wissem/Desktop/Screen Recording 2026-05-20 at 16.39.40.mov`

This screen recording covers workspace settings, report branding, profile, notifications, billing, credits, and usage.

### Workspace Members And Access

Observed sidebar entries:

- **Workspace**
- **Account & Billing**

Observed Workspace sections:

- Member list with rows showing user identity, email, and role.
- Roles observed:
  - **Participant**
  - **Sponsor**
- Section: **Pending Invitations**
  - Helper text: **People you've invited who haven't accepted yet**
  - Columns: **E-mail**, **Invited by**, **Expires**, **Actions**
  - Empty state: **No pending invitations**
- Section: **Access Requests**
  - Helper text: **Requests to join your organization**
  - Columns: **User**, **E-mail**, **Actions**
  - Empty state: **No pending requests**

Docs interpretation:

- Workspace settings should be documented as organization-level administration.
- Keep this separate from study creation, respondent launch, and insights workflows.
- Roles and permissions need a dedicated verification pass before making detailed claims.

### Brand Kit

Observed section:

- **Brand kit**
- Helper text: **Workspace-wide colors, fonts, geometry, and identity. Applied to every generated analysis report.**
- Action: **Start from preset**
- Right-side panel:
  - **Live preview**
  - Helper text: **Themed with your draft kit. Updates as you edit.**
  - Link/action: **Open full preview**

Observed Brand kit areas:

- **Color**
  - Helper text: **Accents, ink, page background, and the chart palette.**
  - Fields:
    - **Primary**: action titles emphasis, links, primary fills, delta numbers.
    - **Ink (body text)**
    - **Background**
    - **Secondary**: optional second accent — failure modes, warnings.
    - **Positive (deltas)**
    - **Negative (deltas)**
    - **Chart palette**: 3-5 colours; categorical or sequential.
- **Typography**
  - Helper text: display and body fonts; tabular numbers fall back to body if unset.
  - Fields:
    - **Display font**
    - **Body font**
    - **Numeric font**
    - **Body base size**
    - **Heading weight**
- **Geometry**
  - Helper text: corner radius, spacing density, stroke weight.
  - Controls:
    - **Corner radius**
    - **Density**: **Compact**, **Regular**, **Airy**
    - **Stroke width**: **Thin (1px)**, **Medium (1.5px)**, **Bold (2px)**
- **Format**
  - Helper text: page conventions used by exports and the cover.
  - Controls:
    - **Page ratio**: **16:9 (deck)**, **4:3 (legacy deck)**, **A4 portrait**, **US letter**, **Web (no fixed page)**
    - **Language**: **English**, **Français**, **Español**, **Deutsch**, **Italiano**
    - **Date format**: **ISO (2026-05-07)**, **US (May 7, 2026)**, **EU (7 May 2026)**
    - **Sentence-case action titles** toggle
- **Exhibits**
  - Helper text: how charts and exhibits are framed.
  - Controls:
    - **Label prefix**: **Exhibit N°**, **Figure N°**, **Chart N°**, **None (hide)**
    - **Source prefix**
    - **Show gridlines**
    - **Bar style**: **Filled**, **Outlined**
    - **Bar corners**: **Rounded**, **Squared**

Observed presets:

- **Default (Lemma)**
- **Strategy classic**
- **Strategy modern**
- **Strategy bold**
- **Notion soft**
- **Stripe modern**
- **Editorial mono**

Docs interpretation:

- Brand kit affects generated analysis reports, not the respondent interview UI.
- Live preview should be documented as the way to inspect report styling before using/exporting insights.
- Do not over-document every visual control on a general getting-started page; this belongs in Workspace & Account or a dedicated Brand kit page if needed.

### Account & Billing

Observed page:

- **Account & Billing**
- Helper text: **Manage your profile, notification preferences, plan, and credits.**

Observed sections:

- **Profile**
  - Fields/actions:
    - **Name**
    - **Email**
    - **Password**
    - **Save**
    - **Send reset link**
- **Email Notifications**
  - **Credits at 50%**
    - Email when your workspace has used half of its credits this cycle.
  - **Credits at 20%**
    - Email when your workspace credit balance drops to 20%.
  - **Credits depleted**
    - Email when your workspace runs out of credits; new interviews will fail.
  - **Study paused**
    - Email the other sponsors of the workspace when a teammate pauses a study.
  - **New responses**
    - Select control observed: **Every response**
- **Plan & Billing**
  - Notice: plans and credits apply to the workspace, not per user.
  - Current plan area:
    - **Current plan for Wissem**
    - plan observed: **Tools**
    - renewal and monthly credits shown
    - action: **Manage payments & invoices**
  - Billing cadence toggle:
    - **Monthly**
    - **Annual (save 20%)**
  - Plan cards observed:
    - **Free**
    - **Tools**
    - **Pro**
    - **Scale**
  - Credit balance area:
    - **Credit balance**
    - note: **1 credit = 1 audio interview up to 30 minutes. Text interviews are unlimited on your plan.**
  - Credit packs observed:
    - **10 credits**
    - **50 credits**
    - **200 credits**
  - **Usage breakdown**
    - timeframe: **last 30 days**
    - columns:
      - **Study**
      - **Interviews**
      - **Credits used**

Docs interpretation:

- Credits apply to audio interviews; text interviews are unlimited on the observed plan.
- Notification settings are account/billing-adjacent and affect credit/study/response alerts.
- Pricing details can change; docs should explain the usage model and where to check billing, not hard-code plan prices unless the pricing table is intended to be public and stable.

## Audit Questions

For each feature, answer:

1. What screen proves this feature exists?
2. What can the user do there?
3. What decision or workflow does it support?
4. What does Lemma do better than a static form at this step?
5. What screenshot would make the docs clearer?
6. Is the feature live, partial, hidden, or roadmap?

## Gaps To Resolve In App

- Interaction menu text for **Text conversation** and any other interaction modes.
- Exact behavior after **Test Interview**.
- Exact behavior after **Review**.
- Exact available export formats from **Insights**.
- Whether shareable report links are live.
- Exact role/permission capabilities for **Participant** and **Sponsor**.
- Exact public pricing/plan details if the docs need to include prices.
- Current respondent consent and microphone permission copy.
