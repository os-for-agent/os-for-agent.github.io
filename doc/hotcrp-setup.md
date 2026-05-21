# HotCRP Setup — AgenticOS 2026 (2nd Edition, @ SOSP 2026)

Working checklist + config values for standing up the submission site. I cannot
provision the server; create the instance at <https://hotcrp.com> (free hosted)
or self-host, then plug in the values below. Once the URL exists, tell me and
I'll wire it into `index.html` (the "Submission Link TBA" button + the
"Submission website is TBA" line in Submission Guidelines).

## 0. Create the instance

- Go to <https://hotcrp.com> → "Create a conference site".
- Suggested short name: `agenticos2026` → URL `https://agenticos2026.hotcrp.com`.
- Conference full name: **2nd Workshop on Operating Systems Design for AI Agents (AgenticOS 2026)**.
- Set yourself (cwang@multikernel.io) as chair/admin.

## 1. Settings → Basics

| Field | Value |
|-------|-------|
| Conference name (long) | 2nd Workshop on Operating Systems Design for AI Agents |
| Conference name (short) | AgenticOS 2026 |
| Site contact | Cong Wang — cwang@multikernel.io |
| Time zone | Set to the chairs' working zone (e.g. America/Los_Angeles or Asia/Shanghai) — affects all deadline cutoffs |

## 2. Settings → Submissions (deadlines)

All deadlines are AoE-style cutoffs; pick the time zone above and set times to
23:59. Derived from the workshop timeline:

| Milestone | Date | HotCRP setting |
|-----------|------|----------------|
| CFP / site open | May 20, 2026 | Open submissions now |
| Registration deadline (title/abstract) | Jul 1, 2026 | "Registration deadline" (optional, same as submission) |
| **Submission deadline** | **Jul 1, 2026 23:59** | "Submission deadline" |
| Hard update deadline | Jul 1, 2026 (no grace) | Leave grace period off, or +24h if desired |
| Review assignment | Jul 1–2, 2026 | Manual, after deadline |
| **Reviews due** | **Aug 1, 2026** | "Review deadline" (PC + external) |
| Discussion period | through Aug 7, 2026 | Online discussion via comments |
| Decisions sent | Aug 7, 2026 | Notify authors |
| Camera-ready due | Aug 29, 2026 | "Final version deadline" |
| Workshop | Sep 29, 2026 | — |

## 3. Settings → Submission form

Tracks (single-blind review, per CFP):

- **Topic / track field** (radio or topic): `Vision Paper (1–2 pp)` and
  `Research Paper (up to 6 pp)`.
- Page limits are advisory (HotCRP enforces a single max) — set **max 6 pages
  excluding references**; state the 1–2 pp vision-track guidance in the field
  description.
- Format: **ACM double-column conference template**
  (<https://www.acm.org/publications/proceedings-template>).
- **Anonymity: single-blind** → in Settings → Submissions, set "Blind review"
  to **Optional/Open** (authors visible to reviewers). Do NOT enable
  double-blind.
- PDF upload required; abstract required; topics list = the CFP topics of
  interest (optional but useful for assignment):
  - New OS abstractions for agent execution
  - Dynamic sandboxing / lightweight runtimes
  - Semantics-aware resource management & scheduling
  - Long-lived state / agent context & memory
  - eBPF-driven observability & enforcement
  - Compiler–OS co-design
  - GPU / accelerator virtualization
  - Security & isolation for agent tools/data flows
  - Agents managing systems (tuning, anomaly detection, recovery)

## 4. Settings → Reviews

- Review type: PC reviews; allow external reviews if PC wants delegates.
- **≥ 2 reviews per submission** (per CFP). Aim assignment for 2–3.
- Review form: keep default (Overall merit, Reviewer expertise, Summary,
  Strengths, Weaknesses, Comments to authors, Comments to PC). Light workshop —
  trim to Overall merit + Expertise + Summary + Comments if you want it lean.
- Review visibility: reviewers see others' reviews after submitting their own
  (standard for discussion).
- Review deadline: **Aug 1, 2026**.

## 5. Program Committee

- PC is finalized by **Jun 10, 2026** (handled separately; not on the public
  site yet).
- Add PC under Settings → Program committee, or bulk-upload a CSV:
  `email,first,last,affiliation`.
- Send account/welcome emails after the roster is locked.
- Set conflict-of-interest collection on (authors mark conflicts at submission).

## 6. Decisions & camera-ready

- Decision types: Accept / Reject (add "Accept (talk only, non-archival)" if you
  keep the non-archival website-only model from edition 1).
- No formal proceedings: accepted papers appear on the workshop website only,
  authors may opt out / it does not preclude future publication (carry over the
  edition-1 FAQ policy).
- Camera-ready (final version) deadline: **Aug 29, 2026**.

## 7. After the URL exists — handoff to me

Send me the final submission URL and I'll update `index.html`:
- "Submission Link TBA" button (Important Dates card) → the HotCRP URL.
- "Submission website is TBA." line in Submission Guidelines → the HotCRP URL.

## Quick reference — public-facing dates (already live on the site)

- Paper Submission Deadline: **July 1, 2026**
- Notification of Acceptance: **August 7, 2026**
- Camera-Ready Deadline: **August 29, 2026**
- Workshop Date: **September 29, 2026**
