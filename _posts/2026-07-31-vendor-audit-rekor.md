---
title: "The Vendor Audit: Rekor Published a Privacy Framework Three Weeks Ago. We Graded It Against Its Own Terms. It Got a 41."
date: 2026-07-31 23:00:00
section: On the Scent
series: vendor-audit
grade: 41
dek: "On July 8 Rekor Systems published a privacy architecture positioned against the Flock backlash. Its own binding terms grant the company a perpetual, sublicensable, transferable licence to use customer license plate data for all commercial purposes — and its audited accounts disclose substantial doubt about whether the company survives the year."
cover: article-cover-vendor-audit-rekor.png
---

*This series has graded four suppliers of public-safety surveillance against one question: does what the company tells the public match what it writes in its own binding documents? [Flock Safety got 43](/articles/vendor-audit-flock-safety.html), [Motorola Solutions 46](/articles/vendor-audit-motorola-solutions.html), [Genetec 62](/articles/vendor-audit-genetec.html), [Axon 62](/articles/vendor-audit-axon.html). The fifth entry is different in one respect that turned out to matter more than expected: Rekor Systems is a small public company, so alongside the marketing pages and the privacy terms there is an audited annual report, filed under penalty of law, describing the same business. Eight disclosure areas, scored 0–100, every measurement sourced to a document Rekor published or filed itself. Reporting on documents, not legal advice.*

## The method, and its limits

Everything below comes from Rekor-published or Rekor-filed material: the **Privacy and Terms** page at rekor.ai (Updated 02/10/2025), the **Security and Trust** page, the July 8, 2026 press release announcing the company's privacy white paper, and the **Form 10-K for the fiscal year ended December 31, 2025**, filed with the Securities and Exchange Commission under CIK 0001697851, accession number 0001437749-26-010647. No leaks, no contracts, no internal sources.

Three limits, stated before the grades.

First, the standing warning: **a gap between two company documents is a disclosure failure, not proof of a privacy violation.** Nothing below establishes that Rekor mishandled anyone's data.

Second, some of the licence language quoted here — "non-exclusive, perpetual, sublicensable" — is ordinary in software contracts and appears in agreements most readers have accepted without reading. This card does not treat boilerplate as scandal. What it grades is the *combination* of that language with the specific subject matter, which is a record of where private vehicles were at a given time, and the distance between that clause and what the same company says in public.

Third, and most important: this card discusses Rekor's disclosed financial condition, including a going-concern qualification. **That is an accounting judgment about funding runway, not a prediction that the company will fail.** Companies carry going-concern language and continue operating for years. It appears here for one narrow reason — because a perpetual promise is only as durable as the entity making it, and Rekor is the first vendor in this series whose durability is a matter of public record.

## The pattern

Rekor is the only vendor in this series that has made privacy its public argument.

On **July 8, 2026** — three weeks before this audit — the company published a white paper titled *"ALPR AND PRIVACY: A practical framework for preserving public-safety value while reducing unnecessary privacy risk,"* announced in a release headlined "Beyond the Flock Backlash." Its CTO is quoted: "Privacy by design. Trust by proof. These should not be aspirations — they should be architectural decisions made before the first line of code is written."

That is a real contribution and this card credits it. It is also written almost entirely in the normative voice. Systems *should* "protect non-relevant data by default." Retention *should be* "purpose-based, policy-driven, auditable." Frameworks *should* "maintain auditable access logs showing who accessed data, when, and for what purpose."

Then there is the document that actually binds. Rekor's Privacy and Terms page states: "you retain ownership in your Operational Data, and we do not claim any ownership rights in your Operational Data." The very next sentence reads: "You hereby grant to Rekor and its affiliates a non-exclusive, perpetual, sublicensable, transferable right and license to use the Operational Data for all commercial purposes, and Rekor may disclose the Operational Data to third parties."

Both sentences are true. Read together they describe ownership without control — the most complete example this series has found of true sentences that do not add up to a true picture.

## The scored card

The usual warning: **every factual figure below is a measurement**, quoted from a named Rekor-published or Rekor-filed document. **The final grade is not.** It is the journal's editorial judgment of how well each disclosure area holds up. We publish the reasoning so you can argue with the math.

Scale: **85+** disclosures accurate and consistent throughout · **65–84** solid, with real but limited gaps · **45–64** mixed — meaningful divergence alongside genuine substantiation · **25–44** the public-facing claim is materially broader than the documents support · **under 25** the claim and the documents describe different products.

<div class="scorecard" markdown="0">

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">15</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">1</span><h3 class="scorecard__title">Data ownership and third-party access</h3><span class="scorecard__band">"We do not claim any ownership rights" — and the sentence after it</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:15%"></span></div>
<p class="scorecard__judgment">The lowest score this series has awarded in any area, to any vendor. The Privacy and Terms page defines Operational Data as "The data, images, and video produced from using the Software," then states: "Except as may be stated to the contrary in the Rekor Privacy Policy, you retain ownership in your Operational Data, and we do not claim any ownership rights in your Operational Data." The sentence immediately following reads: "You hereby grant to Rekor and its affiliates a non-exclusive, perpetual, sublicensable, transferable right and license to use the Operational Data for all commercial purposes, and Rekor may disclose the Operational Data to third parties." Take those words individually. <em>Perpetual</em>: the licence does not end when the contract does. <em>Sublicensable</em> and <em>transferable</em>, extended to <em>affiliates</em>: it may reach parties the customer never contracted with. <em>All commercial purposes</em>: not limited to providing the service. <em>May disclose to third parties</em>: no stated standard, no notification requirement, no enumeration of who. Note also that the ownership sentence opens with its own escape hatch — the retained ownership holds "except as may be stated to the contrary" in a separate document. Now compare the same question at the other four. Axon: "Axon will not use Customer Content for any advertising or other commercial purposes," and government demands trigger notice to the customer plus assistance with a motion to quash. Genetec: "We do not sell or rent any personal data to any third party." Even Flock, which scored 42 here and drew criticism for it, limits itself to a "good faith belief" standard rather than an unrestricted commercial licence. The de-identified category goes further still: Rekor "owns all right, title and interests in the De-Identified Operational Data," and "may use the De-Identified Operational Data for all purposes" — all purposes, not merely commercial ones — "and Rekor may disclose the De-Identified Operational Data to third parties." Ownership of the plate reads stays nominally with the agency. Everything that can be done with them does not.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">25</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">2</span><h3 class="scorecard__title">The framework and the terms</h3><span class="scorecard__band">Published July 8, 2026 in the voice of "should"</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:25%"></span></div>
<p class="scorecard__judgment">Rekor deserves genuine credit for publishing a privacy framework at all — no other vendor in this series has done it, and the document identifies the right problems: retention, auditability, sharing, and evidentiary integrity are precisely the four areas these cards keep finding trouble in. The company also holds a patent, announced this year, for "encoding and anonymizing vehicle identification data (including license plate reads) at the point of collection." That is real engineering aimed at a real risk. The deduction is for grammatical mood. Every commitment in the framework is a recommendation about what systems in general ought to do — protect non-relevant data "by default," retention that "should be purpose-based, policy-driven, auditable," logs that show "who accessed data, when, and for what purpose." None of it appears as an obligation in the Privacy and Terms page that governs an actual Rekor customer, which was last updated 02/10/2025 and contains no auditability commitment, no default-protection commitment, and no retention standard. A policy paper addressed to legislators is a legitimate thing to publish. It is not a contract term, and a reader who takes the July press release as a description of what Rekor's product guarantees has been given the wrong impression by a document that never technically said so.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">28</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">3</span><h3 class="scorecard__title">Sharing defaults</h3><span class="scorecard__band">The only opt-out sharing default in the series</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:28%"></span></div>
<p class="scorecard__judgment">One clause decides this area, and it runs the opposite direction from every competitor. Rekor's terms state: "By using law enforcement products in the Services, you agree to share your Data with other law enforcement agencies, unless you affirmatively opt-out." Sharing is the default. An agency that never reads the clause is sharing. And the exit is not a setting: "To opt-out, you must submit a written notice to us at info@rekor.ai requesting that your Data be removed from the data sharing pool of services." Leaving the pool requires composing an email to the vendor — a higher bar than any competitor imposes on <em>joining</em> one. Set that against the architecture the other cards documented. Flock's Trust pages say sharing is opt-in and "nothing is shared unless the agency turns it on" — the company lost points on that card for how it <em>described</em> the network, not for the default itself. Genetec says the customer decides "whether to share plate reads or hits beyond your organizational boundaries." Motorola requires that a law-enforcement customer "has reviewed and agreed to the share" before data moves. Rekor inverts the burden, and it does so in the one product category where the consequence is that one department's cameras become several departments' database without anyone at the originating agency making a decision. The framework published three weeks ago names "problematic interagency data sharing" as a risk the industry must address. The terms make interagency sharing the setting a customer has to find and switch off.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">35</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">4</span><h3 class="scorecard__title">Retention disclosure</h3><span class="scorecard__band">Configurable in the product, unstated in the policy</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:35%"></span></div>
<p class="scorecard__judgment">The product side is adequate and matches the sector: Rekor Scout lets customers "define how long vehicle information and license plate images will be retained based on their own privacy and data retention policies," with severity-based auto-retention available per capture type — which is, if anything, more granular than competitors offer. The company-side disclosure is where this thins out. The only retention sentence in the binding policy covers the wrong data: "We will only retain Personal Information about you for as long as necessary to fulfill the purposes Personal Information was collected for, including the purposes of satisfying any legal, accounting or reporting requirements." That governs the personal information of the customer contact — the person who filled in a form — not the plate reads of the public. No document read for this card states how long Rekor itself holds Operational Data, and the perpetual licence in area 1 means the question is not academic: a licence that survives the contract implies retention that survives it too, and nothing published says for how long. As the [retention explainer](/articles/alpr-retention-clocks-explainer.html) for this series set out, the number a council thinks it is asking about is one of four clocks. Rekor answers the customer-facing clock and leaves the vendor-side clock unwritten.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">42</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">5</span><h3 class="scorecard__title">Anonymization and de-identification</h3><span class="scorecard__band">SHA-256 on a plate number, and who owns the result</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:42%"></span></div>
<p class="scorecard__judgment">The Security and Trust page states that SHA-256 cryptographic hashing is used to "anonymize license plate data," and the company's patent covers encoding and anonymizing plate reads at the point of collection. Hashing is a real control and better than storing plaintext. But a cryptographic hash only anonymizes when the input space is too large to search, and a licence plate is close to the smallest input space in common use — a US plate is roughly seven alphanumeric characters, which is an exhaustively enumerable universe on ordinary hardware. Unless the hash is combined with a secret salt, computing the hash of every possible plate and matching them back is a routine exercise, and none of Rekor's published documents state whether a salt is used or how it is protected. That is a question the company could close in one sentence. The second half of this area is the part that compounds it: "Rekor owns all right, title and interests in the De-Identified Operational Data." De-identification is not only a privacy control here — it is also the step at which data ceases to be the customer's and becomes the vendor's outright. Both facts are disclosed, neither is hidden, and this card does not assert that the design was chosen for that reason. It notes that the privacy mechanism and the ownership transfer are the same mechanism.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">45</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">6</span><h3 class="scorecard__title">Durability of the commitments</h3><span class="scorecard__band">What the audited accounts say about a perpetual promise</span></div>
<div class="scorecard__meter"><span style="width:45%"></span></div>
<p class="scorecard__judgment">This area exists only because Rekor is publicly traded, and it is the reason this entry was worth doing. The Form 10-K for fiscal 2025 reports a net loss of $31,460,000, working capital of $1,640,000, cash and equivalents of $16,566,000, and an accumulated deficit of $291,553,000. It then states, in management's own words, that "the existing cash is insufficient to fund its current level of operations for the next twelve months following the issuance of these consolidated financial statements. These factors raise substantial doubt regarding the Company's ability to continue as a going concern." The independent auditor's report repeats the conclusion. To be scrupulous: this is a funding-runway judgment, not a forecast of failure, and companies operate under it for years. The score here is not a comment on the business. It is a comment on <strong>disclosure</strong>, and the finding is that no Rekor document connects these two facts. The privacy terms grant a perpetual, sublicensable, transferable licence and hand outright ownership of de-identified data to the company. The financial statements disclose substantial doubt about that company continuing. Nothing published says what happens to either the licence or the de-identified archive in a sale, a wind-down, or a transfer of assets — and "transferable" is the operative word in the clause. An agency signing today is told its data is its own. Whose it becomes, and under what terms, is the one question the paperwork does not reach. Credit is due for the disclosure itself: it is complete, prominent, and audited, which is more than the private vendors in this series are required to offer about anything.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">58</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">7</span><h3 class="scorecard__title">Policy currency and consistency</h3><span class="scorecard__band">A February 2025 policy under a July 2026 framework</span></div>
<div class="scorecard__meter"><span style="width:58%"></span></div>
<p class="scorecard__judgment">Middle of the field, and better than it looks at first glance. The Privacy and Terms page carries a clear "Updated 02/10/2025" — roughly eighteen months old at the time of this audit, which is materially fresher than Genetec's 2019 vintage and materially staler than Axon's July 6, 2026 notice. Rekor also gets credit for something the other four do not offer at all: because it files with the SEC, its business description is restated annually under audit, so a reader can check the marketing against a document with legal consequences for inaccuracy. The 10-K's own summary of the company's advantages claims "Industry-leading Privacy and Security: Advanced security technologies, SOC II compliance across all platforms, and proprietary algorithms to protect PII." That is a marketing sentence inside a securities filing, and "industry-leading" is not a measurable claim — but the underlying certification is real and substantiated on the security page, which is more than can be said for the badge that cost Flock points. The deduction is for the gap the whole card turns on: a privacy framework published in July 2026 sits on top of terms last revised in February 2025, and the framework's principles have not been written down into the document that binds.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">78</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">8</span><h3 class="scorecard__title">Security certification claims</h3><span class="scorecard__band">Named, broad, and with the public report actually linked</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:78%"></span></div>
<p class="scorecard__judgment">The strongest area on the card by a wide margin, and second in this series only to Axon. Rekor's Security and Trust page names SOC 2 for its software platforms and links the publicly distributable SOC 3 report — the same reader-friendly choice Genetec made and the opposite of Motorola's SOC 2 held behind a non-disclosure agreement. Alongside it: NIST 800-53, ISO 27001, CJIS compliance scoped to the public-safety solutions, and NDAA and TAA compliance scoped to the video-based camera systems. The technical controls are specific rather than adjectival — "Data is protected in transit and at rest using AES-256 encryption," SHA-256 hashing, "multi-layered identity verification and strict access protocols," continuous monitoring, and the claim that "every device undergoes rigorous third-party penetration testing." Naming the scope of each certification rather than implying blanket coverage is the mark of a document written by someone who expected to be checked. Two deductions. The audit-logging commitment is thin where it matters most — "continuous monitoring through AWS tools" describes infrastructure monitoring, not a per-query record of which officer searched which plate and why, which is the log the other four cards examined and which the company's own July framework says systems should maintain. And the certifications are not dated on the page, so a reader cannot tell how current any of them are.</p>
</div>
</div>

<div class="scorecard__final">
<div class="scorecard__final-grade">41<span class="scorecard__final-out"> / 100</span></div>
<div class="scorecard__final-label">Rekor Systems' disclosures &middot; averaged across all eight areas</div>
<div class="scorecard__final-rule"></div>
</div>

</div>

Forty-one — the lowest in the series, two points under Flock and twenty-one under Axon. It belongs to the vendor that published a privacy framework three weeks ago.

## The last word

Three findings carry more weight than the average.

First, and this is the uncomfortable one: **publishing a privacy framework and granting yourself a perpetual commercial licence are not contradictory acts, and that is the problem.** Rekor's white paper describes what ALPR systems in general should do. Rekor's terms describe what Rekor may do. Nothing in the first document constrains the second, and nothing in either is false. A council member who reads the July press release, sees a company positioning itself against a competitor's privacy scandal, and concludes that this vendor has bound itself to something has drawn a reasonable inference from documents that never made the commitment. The fix is available and cheap: move the framework's four principles — default protection, purpose-based retention, auditable access logs, evidence integrity — into the terms of service, where they would bind. Until that happens the framework is a position paper, and this card grades documents that bind.

Second: **the sharing default is the single most consequential sentence on this card**, and it is one line long. "You agree to share your Data with other law enforcement agencies, unless you affirmatively opt-out." Every other vendor audited makes an agency choose to share. This one makes an agency choose *not* to. For a jurisdiction that passed a careful ALPR ordinance about retention and access, the data may already be leaving under a default nobody voted on — which is the same structural failure this journal found in the [Capitol Audit](/articles/capitol-audit-scorecard.html), where the powers that eroded were the ones requiring somebody to affirmatively act.

Third, the reason to audit a public company: **the filings answer a question the marketing cannot.** Every vendor in this series makes promises about the future — retention, deletion, access, restraint. Only one of them has published audited financial statements disclosing substantial doubt about its ability to continue as a going concern while simultaneously holding a perpetual, transferable licence over its customers' license plate data. Those two facts sit in two documents that never reference each other. This card takes no position on whether Rekor's business succeeds, and hopes it does; the company employs people and its privacy engineering is more serious than most of the sector's. But a promise about data lasts exactly as long as the institution holding the data, and "transferable" means somebody else may one day hold it.

*Cavendum est ne quid promittas quod praestare non possis* — take care not to promise what you cannot deliver. The framework published in July is the best statement of principle any vendor in this series has issued. It is written in a document that promises nothing.

---

**Sources & methodology:**

- All disclosures graded on this card were read from documents published or filed by Rekor Systems, Inc.; no internal documents, contracts, or non-public sources were used.
- The Operational Data definition, "you retain ownership in your Operational Data, and we do not claim any ownership rights in your Operational Data," the "non-exclusive, perpetual, sublicensable, transferable right and license to use the Operational Data for all commercial purposes," disclosure to third parties, "Rekor owns all right, title and interests in the De-Identified Operational Data," the retention sentence, and the opt-out law-enforcement sharing clause; Updated 02/10/2025: [Privacy and Terms](https://www.rekor.ai/privacy)
- SOC 2 with linked public SOC 3, NIST 800-53, ISO 27001, CJIS, NDAA and TAA compliance, AES-256 encryption, SHA-256 hashing to anonymize plate data, access protocols, continuous monitoring, and third-party penetration testing: [Security and Trust](https://www.rekor.ai/security)
- The July 8, 2026 white paper "ALPR AND PRIVACY: A practical framework for preserving public-safety value while reducing unnecessary privacy risk," the "Beyond the Flock Backlash" headline, and the quoted statements from CEO Robert A. Berman and CTO Chris Kadoch: [Rekor press release, July 8, 2026](https://www.globenewswire.com/news-release/2026/07/08/3323942/0/en/Beyond-the-Flock-Backlash-Rekor-Publishes-Privacy-and-Evidence-Architecture-for-Responsible-Vehicle-Recognition.html)
- The patent for encoding and anonymizing vehicle identification data at the point of collection, and the policymaker framework: [Rekor Systems Offers Policymakers a Privacy-Protected and Responsible Path Forward](https://www.rekor.ai/post/rekor-systems-offers-policymakers-a-privacy-protected-and-responsible-path-forward-for-the-use-of-automated-license-plate-recognition)
- Net loss of $31,460,000, working capital of $1,640,000, cash and equivalents of $16,566,000, accumulated deficit of $291,553,000, the going-concern statement and the auditor's concurrence, and the "Industry-leading Privacy and Security... SOC II compliance across all platforms" claim: [Rekor Systems, Inc. Form 10-K for the fiscal year ended December 31, 2025](https://www.sec.gov/Archives/edgar/data/1697851/000143774926010647/rekr20251231_10k.htm), filed with the SEC, CIK 0001697851, accession 0001437749-26-010647
- Customer-configurable retention in Rekor Scout: [Rekor Redefines Privacy, Security and Sharing for License Plate Data](https://www.rekor.ai/post/rekor-redefines-privacy-security-and-sharing-for-license-plate-data-for-commercial-and-government-users)
- The comparison cards: [Flock Safety, 43](/articles/vendor-audit-flock-safety.html) · [Motorola Solutions, 46](/articles/vendor-audit-motorola-solutions.html) · [Genetec, 62](/articles/vendor-audit-genetec.html) · [Axon, 62](/articles/vendor-audit-axon.html)
- The four retention clocks this card refers to: [Four Vendors, Four Retention Policies, and Almost No Numbers](/articles/alpr-retention-clocks-explainer.html)
- The grades are the journal's editorial judgment; every underlying factual claim above is quoted from a Rekor-published or Rekor-filed document as cited. The going-concern discussion reflects a disclosed accounting judgment about funding runway and is not a prediction about the company's future.
