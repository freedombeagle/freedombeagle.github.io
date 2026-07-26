# Freedom Beagle — Editorial Style Protocol
*Structural templates per article type, derived from the pieces that established each format. Follow the matching template exactly for consistency — check this before drafting anything new. House-wide rules (voice, citation format, Black's definitions, facts-not-advice) live in `Brand/identity.md`; this file is about structure, section by section.*

## Universal, every article

- Frontmatter: `title`, `date`, `section`, `dek` always; `grade` and `series` only where the type below calls for them.
- Every legal/factual claim gets an inline formal citation (case reporter cite, U.S.C. section, or constitutional provision) *and* a link in the closing Sources list — never just one or the other.
- Legal terms of art defined per Black's Law Dictionary (cite edition: 12th ed. 2024) the first time they appear.
- Closes with a `---` rule and a **Sources:** list, every entry a working link.
- Never gives instructions ("say this," "refuse that") — reports what courts/law/named orgs say, always attributed.
- Not-legal-advice framing where the piece touches individual rights.

---

## 1. Grievance Audit entry (one grievance vs. the modern record)
*Established by: `grievance-audit-01-trial-by-jury.md`*

Frontmatter: `title` in the pattern `"Grievance Audit No. N: [the charge in one clause]."`, `grade` (0–100), `section: Grievance Audit`.

Opens with an italic series-intro paragraph (same boilerplate every entry, method line: quote the grievance → what the Founders built → today's record, cited → Black's definitions → counterweight → close on the record itself).

Section order, exact H2 headers:
1. **The grievance** — blockquote of the actual Declaration text, with paragraph number and year.
2. **What the Founders built** — the constitutional provisions written in response, each as a bolded citation + quoted text.
3. **The terms, per Black's** — bulleted term definitions relevant to this entry.
4. **The record today** — bolded-lead-sentence paragraphs, each a distinct sub-claim, heavily cited. Closes with a **By the numbers** bulleted block, every figure source-tagged.
5. **The counterweight** — the strongest honest case for the other side, stated in full, not strawmanned.
6. **The audit** — the verdict paragraph, closing on a Latin maxim in italics tied to the specific finding (never addresses the reader directly — no "you decide"). Ends with a one-line teaser for the next entry in the series.

## 2. Risk of Rights entry (one amendment vs. 2026)
*Established by: `risk-of-rights-01-first-amendment.md`. Structurally identical to a Grievance Audit entry — same six-part skeleton — with these substitutions:*

- Title pattern: `"Risk of Rights No. N: The [X] Amendment — [one-line characterization]."`
- H2 **The amendment** (not "the grievance") — blockquote of the amendment text with ratification year.
- H2 **What it protects** (not "what the Founders built") — plain-English scope statement, what/who it binds.
- Same **The terms, per Black's** / **The record today** + By the numbers / **The counterweight** / **The audit** structure and rules.

## 3. Series scorecard / roundup (Grievance Audit, Risk of Rights, Capitol Audit leadership pieces)
*Established by: `grievance-audit-scorecard.md`*

Used to close out or summarize a completed run of entries. Frontmatter carries the averaged `grade`.

Structure:
1. Italic intro recapping the series and method.
2. **Where the record lands** — grouped qualitative tally (e.g. "Answered," "Ringing true today," "Contested") each bullet linking back to the specific entry, closing on an unhedged verdict paragraph.
3. **The scored card** — the `.scorecard` HTML block (see Component reference below), one `.scorecard__row` per item, each with its own grade, meter, and judgment paragraph.
4. Closing verdict paragraph + Latin maxim, same rule as individual entries: never address the reader directly.

## 4. Capitol Audit entry — institutional grading (a chamber, an office)
*Established by: `capitol-audit-the-senate.md`, `capitol-audit-the-parliamentarian.md`*

Frontmatter: `title` pattern `"The Capitol Audit: [institution]. [one-line hook]. It Got a [N]."` or similar, `grade`, `section: On the Scent`, `series: capitol-audit`.

Structure:
1. Italic intro — what's being graded and against what yardstick (Article I/II clauses, or the office's actual design).
2. **The method** or **The pattern** — sets up how the score was built and flags the headline finding before the reader hits the full card.
3. **The scored card** — `.scorecard` block, one row per design feature/office-holder, each row citing the specific clause or record being measured. Always includes the standard "these grades are editorial judgment, everything else is a sourced measurement" warning line before the card.
4. Closing analysis paragraph + Latin maxim.
5. **Sources & methodology** section (note the fuller heading vs. plain "Sources") listing each data source by name (GovTrack, OpenSecrets, FEC, etc.) plus case-specific citations.

## 5. Capitol Audit entry — individual grading (leaders, committee chairs)
*Established by: `capitol-audit-leadership.md`, `capitol-audit-committee-chairs.md`*

Same skeleton as #4, but each `.scorecard__row` grades a *person*, not a design feature: `scorecard__num` is a rank number, `scorecard__band` is their title/office. Judgment paragraphs always cover the same four measurements in the same order — attendance, bills enacted, top donor industry, criminal/ethics record — so entries are directly comparable to each other across the series. Closing section is **The last word**, not "the audit" — two cross-cutting findings, not a single verdict, since multiple people are being compared at once.

## 6. Field Notes explainer (companion/deep-dive on a mechanism, no grade)
*Established by: `parliamentarian-byrd-rule-explainer.md`, `senate-filibuster-cloture-explainer.md`, `alpr-brand-name-language-explainer.md`*

Frontmatter: `title` short and punchy (often two sentences, second one a hook), `section: Field Notes`, `dek`. **No `grade` field** — these are not scored.

Structure: shorter than an Audit entry, no fixed section count, but always:
1. Opens with a direct question or a concrete, specific hook — not a scene-setter.
2. 3–6 H2 sections, each covering one mechanical/historical fact, plain declarative headers (not templated labels like "the record" — headers are specific to the topic, e.g. "Where the office came from," "The plain version").
3. Always closes on a **The plain version** (or equivalent single closing section) that states the throughline in 2-4 sentences — no Latin maxim requirement here (optional, used sometimes), no formal "counterweight" section required, but still facts-not-advice.
4. Plain **Sources:** list (not "Sources & methodology").
5. Often cross-links to the companion Audit entry it pairs with, and vice versa (edit the Audit entry's Sources list to link back once the companion publishes).

## 7. Know Your Rights piece
*Established by: `pulled-over-know-your-rights.md`*

Frontmatter: `section: Field Notes` (Know Your Rights is currently filed under Field Notes in practice), plain declarative `title`, no grade.

Structure specific to this type — organized by **what the law requires / doesn't require**, not by chronology or by amendment:
1. One-paragraph framing of the legal situation, with the not-legal-advice line stated explicitly in the first paragraph, not just implied.
2. **What the law requires of [subject]** — bulleted, each bullet citing the controlling case or statute.
3. **What the Constitution does not require** — same bullet format, mirrored structure.
4. Situational H2s as needed (e.g. "The clock courts put on stops," "Recording," "What the case law says about resisting") — always framed as "what courts have ruled," never as instructions.
5. Closes with a cross-link to a related investigative piece where one exists, framed as reporting ("connects to our coverage of X"), not a call to action.
6. Plain **Sources:** list.

## 8. On the Scent investigation (narrative, non-templated)
*Established by: `flock-cameras-fourth-amendment.md`*

Frontmatter: `section: On the Scent`, `series` if part of an ongoing investigation, no `grade` (these are reporting, not scored audits).

Deliberately the least templated type — it's narrative journalism, not a rubric. Still follows conventions:
1. Cold-open paragraph with a concrete, specific fact/number, not a general statement.
2. H2 sections follow the actual narrative/chronological arc of the story (e.g. "How the dragnet works," "The Norfolk case," "Then the Supreme Court weighed in") — headers are bespoke to the story, never templated.
3. Named sourcing inline for every factual claim (organization + what they found), same as elsewhere.
4. Closes with a direct statement of what's still unresolved and a commitment to keep tracking it, when the story is ongoing.
5. Plain **Sources:** list.
6. Follow-up entries in the same investigation (e.g. `flock-cameras-followup-appeal-and-laws.md`) open by explicitly recalling the promise from the prior entry ("X months ago we said we'd track...") and structure each H2 around one thread being updated.

---

## Component reference: the `.scorecard` block

Used by types 3, 4, 5 only. Markup skeleton (always wrapped `<div class="scorecard" markdown="0">`):

```html
<div class="scorecard__row">
<div class="scorecard__grade">NN</div>            <!-- add " scorecard__grade--high" if grade >= 65 -->
<div class="scorecard__body">                      <!-- add " scorecard__grade--low" if grade < 45 -->
<div class="scorecard__head">
  <span class="scorecard__num">N</span>
  <h3 class="scorecard__title">[name/feature]</h3>
  <span class="scorecard__band">[role/category]</span>
</div>
<div class="scorecard__meter"><span style="width:NN%"></span></div>  <!-- same --high/--low modifier as grade -->
<p class="scorecard__judgment">[analysis paragraph]</p>
</div>
</div>
```

**Known recurring bug — check every time:** the `--high` / `--low` modifier class belongs on `.scorecard__grade` and `.scorecard__meter` ONLY, never on the outer `.scorecard__row` or `.scorecard__body` div. Run a final `grep -n 'scorecard__row scorecard__grade\|scorecard__body scorecard__grade'` before publishing — should return nothing.

Grade band thresholds (consistent across every use of the component): **≥65** high (green/blue accent) · **45–64** neutral, no modifier · **<45** low (red accent).

Always precede the card with the standard disclosure line: measurements are sourced, the final grade is editorial judgment, rubric published so readers can argue with the math.

---

## Quick lookup: which template for a new piece?

| The piece is... | Use template # | Gets a `.scorecard`? | Gets a `grade`? |
|---|---|---|---|
| One Declaration grievance vs. today | 1 | No | Yes |
| One Bill of Rights amendment vs. today | 2 | No | Yes |
| Wrapping up a completed scored series | 3 | Yes | Yes (averaged) |
| Grading a chamber/office's design | 4 | Yes | Yes |
| Grading a group of individuals | 5 | Yes | Yes |
| Explaining one mechanism/office, no scoring | 6 | No | No |
| Rights during a specific interaction w/ police/gov't | 7 | No | No |
| Breaking/ongoing investigative story | 8 | No | No |
