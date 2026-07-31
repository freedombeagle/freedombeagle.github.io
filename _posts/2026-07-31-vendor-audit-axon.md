---
title: "The Vendor Audit: We Graded Axon's Public-Safety Disclosures Against Its Own Documents. It Got a 62."
date: 2026-07-31 18:00:00
section: On the Scent
series: vendor-audit
grade: 62
dek: "Axon holds FedRAMP High, an ISO standard for AI management systems, and the strongest data-ownership language in this series. It also cannot tell you whether an AI wrote the police report filed against you, or whether your body-camera footage trains its models. Same score as Genetec, opposite shape."
cover: article-cover-vendor-audit-axon.png
---

*The first three entries in this series graded license plate reader vendors: [Flock Safety 43](/articles/vendor-audit-flock-safety.html), [Motorola Solutions 46](/articles/vendor-audit-motorola-solutions.html), [Genetec 62](/articles/vendor-audit-genetec.html). This one grades the largest supplier of police technology in the United States, and it is not primarily an ALPR company — Axon sells the body cameras, the evidence cloud those cameras upload to, the ALPR that rides in its fleet cars, and, since 2024, an AI that drafts the police report. The series was always defined as the companies selling public-safety surveillance, not the companies selling one product. Eight disclosure areas, scored 0–100, every measurement sourced to a document Axon published itself. Reporting on documents, not legal advice.*

## The method, and its limits

Everything below is read from Axon-published material: the **Axon Cloud Services Privacy Notice** (Last Updated July 6th, 2026), the **Axon Trust Center** at trust.axon.com including its Responsible AI Statement and Frequently Asked Privacy Questions, and the company's own resource pages on AI in policing and Draft One. No leaks, no contracts, no internal sources.

The standing warning applies: **a gap between two company documents is a disclosure failure, not proof of a privacy violation.** Nothing below establishes that Axon mishandled anyone's data.

One scope note. Axon's catalogue is far wider than the three vendors already graded — Tasers, body cameras, drones, evidence management, records, dispatch, real-time crime centers through its Fusus acquisition. This card grades what the company publishes about **data handling and AI across that platform**, not the hardware. And unlike the previous three, the sharpest questions here are not about license plates at all. They are about a machine that writes the first draft of the official account of an arrest.

## The pattern

Axon's card is the most polarised in the series, and the split is unusually clean.

Everything about **infrastructure and legal terms** is the best this audit has found. Not marginally — categorically. Axon's trust center lists FedRAMP High, DoD IL4, CJIS, SOC 2, and eight ISO standards including ISO/IEC 42001:2023, the management-system standard for artificial intelligence. Its privacy notice was updated three weeks before this audit. Its ownership language is unambiguous, and its answer to government demands for customer data is the strongest commitment any vendor in this series has put in writing.

Everything about **AI accountability** is the worst. Across four separate Axon documents that all had occasion to address it, the company never states whether Customer Content is used to train its models — while its own marketing warns that a competitor's tools might do exactly that. And nothing anywhere in Axon's published material says whether the AI's original draft of a police report survives the officer's edits, or whether the finished report discloses that a machine wrote the first version of it.

That combination is the finding. This is a company that has done the expensive, unglamorous compliance work almost no one else in the sector has done, and has not answered the two questions its newest product raises.

## The scored card

The usual warning: **every factual figure below is a measurement**, quoted from a named Axon-published document. **The final grade is not.** It is the journal's editorial judgment of how well each disclosure area holds up against the company's own paperwork. We publish the reasoning so you can argue with the math.

Scale: **85+** disclosures accurate and consistent throughout · **65–84** solid, with real but limited gaps · **45–64** mixed — meaningful divergence alongside genuine substantiation · **25–44** the public-facing claim is materially broader than the documents support · **under 25** the claim and the documents describe different products.

<div class="scorecard" markdown="0">

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">28</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">1</span><h3 class="scorecard__title">AI report provenance and disclosure</h3><span class="scorecard__band">"Transparency and accountability" vs. what the documents actually promise</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:28%"></span></div>
<p class="scorecard__judgment">The lowest score on the card, on the product with the highest stakes. Draft One generates a police report narrative from body-camera audio; the officer then reviews and edits it. Axon's Responsible AI Statement promises "robust logging, monitoring, and event response mechanisms to track AI-related activities, detect anomalies, and respond to potential risks in real time, ensuring transparency and accountability." Read the object of that sentence carefully: it logs <em>AI-related activities</em> for security and risk purposes. It does not say the model's original draft is retained, and it does not say the filed report is marked as AI-assisted. The statement's own transparency commitment is scoped explicitly to the buyer — "Axon's AI development methodologies and security controls are created in explainable formats <strong>for customers</strong>" — which is a promise to explain the system to the agency, not to disclose a machine's involvement to a defendant, a court, or a records requester. The contrast inside Axon's own documents is what sinks this. The Cloud Services Privacy Notice states that "tamper-proof audit trails are created automatically by Axon Cloud Services upon ingestion of any Evidence" — a specific, strong, checkable commitment for footage. No equivalent commitment exists in any published Axon document for the narrative Draft One produces. A body-camera video cannot be quietly altered. The first draft of the report describing it apparently can vanish, and Axon has not said otherwise.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">35</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">2</span><h3 class="scorecard__title">AI training on customer data</h3><span class="scorecard__band">A warning about competitors, and silence about itself</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:35%"></span></div>
<p class="scorecard__judgment">Four Axon documents were read for this card that had clear occasion to answer one question — does agency footage, audio, or evidence train Axon's models? — and none of them answers it. The Cloud Services Privacy Notice commits only that "Axon will not use Customer Content for any advertising or other commercial purposes," which is a narrower promise than it sounds: model training is neither advertising nor obviously a "commercial purpose" in the sense the sentence is built around. The Responsible AI Statement covers oversight, bias testing, and model overreach, and says nothing about training data. The Frequently Asked Privacy Questions run to roughly 7,200 words and contain no instance of "train," "machine learning," or "AI model." What Axon <em>does</em> say arrives on a marketing page, and it cuts against the company: warning agencies away from consumer AI tools, Axon writes that with those products "the data they share may be used to influence future iterations of generative AI, and may even be shared with third parties" — an implied contrast Axon never actually claims for itself in a governing document. The closest thing to a disclosure is this: "If we need to test with real customer data, we request permission to enroll customers in our voluntary, privacy-centric program — all while working within the confines of our data sharing agreement." Permission-based, disclosed, and to the company's credit not hidden. But it confirms real customer data is used for product development while leaving the general question unanswered on every page where a customer would look for the answer.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">38</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">3</span><h3 class="scorecard__title">Impact statistics</h3><span class="scorecard__band">Time savings that do not fit inside a working week</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:38%"></span></div>
<p class="scorecard__judgment">Axon's AI page makes three separate time-savings claims on the same page, none footnoted to any published study. Draft One "reduces report writing time by 6-12 hours per week." Auto-Transcribe "saves officers an average of 6 hours per week on evidence processing." ALPR "saves officers about 10 hours per week." Add them: an officer running all three recovers between 22 and 28 hours a week — more than half of a forty-hour week, from three features, at an agency that presumably also answers calls. The figures may each be defensible in isolation against different baselines; stacked on one page without methodology, sample, or baseline, they describe a workweek that does not exist. The quality claim is thinner still: "Draft One matched the quality of an officer-only report in three categories, and surpassed the quality of an officer-only report in the other two categories," attributed to internal testing before launch, with no category definitions, no sample size, no rater methodology, and no publication. Flock scored 15 in this area for printing one statistic at three different magnitudes; Motorola scored 70 for publishing no aggregate claim at all. Axon sits between them — it published numbers, and the numbers are not checkable. For a product whose selling proposition is time, the absence of a released study is the whole problem.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">70</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">4</span><h3 class="scorecard__title">Human review requirements</h3><span class="scorecard__band">Stated consistently across five products, verifiable in none</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:70%"></span></div>
<p class="scorecard__judgment">This is the commitment Axon repeats most, and it repeats it consistently, which counts. Across five named products the same rule appears in the same terms: Draft One narratives "cannot be submitted without officer review and approval"; Auto-Transcribe transcripts are "labeled 'unverified' until an officer reviews, edits and approves"; for ALPR, "an officer is the final decision maker, verifying the ALPR output before taking action"; redaction users "must review the output before deciding what to blur"; Fusus users "must verify the accuracy of automated detections." The Responsible AI Statement generalises it — "AI-powered tools are designed to assist, not replace, human decision-making" — and adds role-based access controls and "explicit approval processes" under a heading about preventing model overreach. Consistency across five products and a governing statement is more than any competitor in this series offers on any comparable question. The deduction is the one the previous areas already established: a human-review requirement is only as good as the record proving review occurred, and Axon publishes no mechanism by which an outside party could confirm that an officer meaningfully reviewed an AI draft rather than clicking through it. "Cannot be submitted without approval" describes a button. It does not describe an audit.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">74</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">5</span><h3 class="scorecard__title">Facial recognition disclosure</h3><span class="scorecard__band">A denial drawn at the right line, on the right product</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:74%"></span></div>
<p class="scorecard__judgment">Axon's claim is narrow, specific, and stated where it matters. Describing Smart Detection, the company writes that it "identifies <em>when</em> a person appears—not <em>who</em> they are," adding that the feature is "fully automated and privacy-conscious." That is the correct distinction — person detection is not person identification — and Axon draws it explicitly rather than letting a reader assume the stronger claim. It is worth noting what this costs the company: a firm holding the largest body-camera fleet in the country and an evidence cloud full of faces is describing a capability it has deliberately not built into that product. The score sits below Flock's 72-equivalent territory rather than far above it for two reasons. First, the claim is made on a marketing resource page, not in the Cloud Services Privacy Notice or the trust center, so it does not carry the weight of a governing document — the privacy notice does not address biometrics at all. Second, the disclosure covers Smart Detection specifically and does not speak to the wider platform, including the real-time crime center products acquired with Fusus, leaving a reader to infer scope. Accurate and well-drawn where it appears; not placed where a policy reader would find it.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">75</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">6</span><h3 class="scorecard__title">Data retention disclosure</h3><span class="scorecard__band">Customer-defined, with the termination path actually specified</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:75%"></span></div>
<p class="scorecard__judgment">Clean, bounded, and specific in the one place these disclosures usually go vague. Retention itself is the customer's: "Customer defines Evidence retention periods pursuant to Customer's internal retention policies and procedures." So far that matches Genetec, which scored 58 for the same answer. What lifts Axon above it is the end of the relationship, the moment every other vendor in this series leaves unaddressed: "Axon will not delete any Customer Content during the 90 days following termination... Axon has no obligation to maintain or provide any Customer Content after the 90-day period and thereafter, unless legally prohibited, will delete Customer Content upon termination." That is a named window, a stated obligation inside it, and a deletion commitment after it — an agency switching vendors knows exactly how long it has to get its evidence out. Two deductions. Like Genetec, Axon names no default retention period for the evidence itself, leaving the single most consequential number to an agency that may never consciously choose it. And "Non-Content Data" — the metadata about who did what in the system — runs on a separate and much looser clause, retained "for as long as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements," which is the open-ended standard the rest of the notice avoids.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">88</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">7</span><h3 class="scorecard__title">Security certification claims</h3><span class="scorecard__band">The most substantiated compliance posture in the series, by a distance</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:88%"></span></div>
<p class="scorecard__judgment">The highest certification score this audit has awarded, and the gap is not close. Axon's trust center lists, by name and in public: FedRAMP High, DoD IL4, CJIS, SOC 2, CSA STAR, FIPS 140-2, HIPAA, GDPR, EU-US DPF, IRAP, Cyber Essentials Plus, NIS 2, TX-RAMP, and eight ISO standards — 9001, 20000-1, 22301, 27001:2022, 27017, 27018, 27701, and, most relevant here, <strong>ISO/IEC 42001:2023</strong>, the management-system standard for artificial intelligence. Three comparisons make the point. Flock displayed a FedRAMP badge as an image with no written claim anywhere on its site and lost points for it; Axon actually holds FedRAMP High, which is verifiable in the federal marketplace by anyone. Motorola's strongest assurance was a SOC 2 "available under a Non-Disclosure Agreement"; Axon's trust center splits its document library into Public and Private and features CJIS and SOC 2 documents rather than hiding the existence of the report. Genetec named one cloud standard scoped to one product; Axon names a stack covering platform, privacy, continuity, and AI governance. Deductions are minor and real: the certifications live in a portal reached only by following a link out of the privacy notice, several documents remain gated behind access requests, and the trust center does not map each certification to the specific products it covers — a reader learns Axon holds ISO/IEC 42001 without learning whether Draft One is inside its scope.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">90</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">8</span><h3 class="scorecard__title">Data ownership and third-party access</h3><span class="scorecard__band">The strongest commitment any vendor in this series has written down</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:90%"></span></div>
<p class="scorecard__judgment">The highest score in the Vendor Audit to date. Ownership is stated without hedging: "The Customer is a Data Controller and controls and owns all right, title, and interest in and to Customer Content." Commercial use is foreclosed: "Axon will not use Customer Content for any advertising or other commercial purposes." Government access is limited to compulsion: "Axon will not disclose Customer Content or Non-Content Data to Government Authorities except as required by any law or regulation." Then the trust center's privacy FAQ goes considerably further than any competitor, and it is worth quoting at length because no other vendor in this series says anything like it. If a government "demands Customer Data residing within Axon Evidence.com, it must follow the applicable legal process, serving Axon with a court order for content or a subpoena for information. Axon would redirect such requests to the customer that owns the data. If compelled to disclose data, Axon would notify the customer and provide a copy of the demand, unless legally prohibited from doing so. Axon is also willing to work with the customer if the customer desires to apply for a protective order or motion to quash." Redirect, notify, hand over the demand, and help fight it. Set that against Flock's policy permitting disclosure on the company's own "good faith belief" with no notification requirement at all. The deduction is small: the strongest of these commitments sits in an FAQ rather than the governing notice, and "willing to work with the customer" is a posture rather than an obligation. Even discounted for that, it is the best answer to this question in the series.</p>
</div>
</div>

<div class="scorecard__final">
<div class="scorecard__final-grade">62<span class="scorecard__final-out"> / 100</span></div>
<div class="scorecard__final-label">Axon's public-safety disclosures &middot; averaged across all eight areas</div>
<div class="scorecard__final-rule"></div>
</div>

</div>

Sixty-two — the same number Genetec got, arrived at from the opposite direction. Genetec's card was the best terms in the series sitting under a privacy policy six years stale. Axon's is the best infrastructure in the series sitting over an AI product whose accountability is undocumented. Two identical averages describing two completely different companies is a useful reminder that the average is the least informative number on any of these cards.

## The last word

Three findings carry more weight than the average.

First: **Axon is proof that the compliance work is possible.** Every objection a vendor in this sector might raise — that FedRAMP High is unreachable, that publishing a certification stack invites attack, that promising to notify a customer of a government demand is legally impractical — is answered by a competitor already doing it, at greater scale than any of them. When Flock displays a FedRAMP badge it cannot support in writing, the relevant fact is not that badges are hard. It is that Axon holds the actual authorization. This series has spent three entries measuring what companies decline to commit to. This card measures what is available to commit to, and the answer is: considerably more than the others have.

Second: **the failure has moved.** The first three cards found the same fault line — vendors reserving discretion for themselves in retention, ownership, and disclosure. Axon largely does not. It gives ownership away, limits its own disclosure discretion, and publishes its certifications. The failure here is newer and, for anyone who ends up in a courtroom, sharper: a machine now writes the first draft of the official narrative of an arrest, and nothing Axon publishes says whether that draft survives, whether the report discloses its origin, or whether the footage feeding the model also trains it. Axon's own documents show it knows how to make a record tamper-proof — it promises exactly that for body-camera evidence. The promise stops where the AI begins.

Third, and this one is for procurement officers: **the two questions on this card are answerable, and no agency has to accept silence.** Does the original AI draft persist in the record? Is a Draft One report identifiable as AI-assisted to a defence attorney or a records requester? Does our footage train your models, and if so under what agreement? Those are contract terms, not mysteries, and a vendor that has already published a FedRAMP High authorization and an ISO/IEC 42001 certification is plainly capable of answering them in writing. The reason to ask is not suspicion. It is that Axon has demonstrated, across every other area on this card, that when it commits to something it commits in public and in detail — which makes the absence conspicuous.

*Quod non est in actis, non est in mundo* — what is not in the record does not exist in the world. It is a maxim about paperwork, written for a world where the record was made by people. The first draft of the report is now made by a machine, and whether that fact stays in the record is, so far, undocumented.

---

**Sources & methodology:**

- All disclosures graded on this card were read from documents published by Axon Enterprise, Inc.; no internal documents, contracts, or non-public sources were used. This card grades data handling and AI disclosure across the Axon platform, not hardware.
- Customer ownership and Data Controller status, the government-disclosure limit, no advertising or commercial use, customer-defined Evidence retention, the 90-day post-termination window and deletion commitment, Non-Content Data retention, and "tamper-proof audit trails... upon ingestion of any Evidence"; Last Updated July 6th, 2026: [Axon Cloud Services Privacy Notice](https://www.axon.com/legal/cloud-services-privacy-policy)
- The full compliance list including FedRAMP High, DoD IL4, CJIS, SOC 2, FIPS 140-2, CSA STAR, IRAP, NIS 2, TX-RAMP and ISO 9001 / 20000-1 / 22301 / 27001:2022 / 27017 / 27018 / 27701 / 42001:2023; the Public-and-Private document library; the Responsible AI Statement quoted on human-in-the-loop oversight, model overreach, bias testing and "explainable formats for customers"; and the privacy FAQ on government requests — redirect, notify, provide a copy of the demand, and assist with a protective order or motion to quash: [Axon Trust Center](https://trust.axon.com)
- "Smart Detection identifies when a person appears—not who they are"; the human-review requirements for Draft One, Auto-Transcribe, ALPR, Redaction Assistant and Fusus; and the 6–12, 6, and 10 hours-per-week time-savings claims: [How Axon is using AI responsibly](https://www.axon.com/resources/how-axon-is-using-ai-responsibly)
- The warning that consumer AI data "may be used to influence future iterations of generative AI," the voluntary customer-data testing program, and the internal quality-comparison claim: [Draft One vs other generative AI solutions](https://www.axon.com/resources/draft-one-vs-other-generative-ai-solutions)
- The comparison cards and their grades: [Flock Safety, 43](/articles/vendor-audit-flock-safety.html) · [Motorola Solutions, 46](/articles/vendor-audit-motorola-solutions.html) · [Genetec, 62](/articles/vendor-audit-genetec.html)
- Why functional definitions survive vendor changes: [Flock Is a Brand Name. The Cameras Are the Problem.](/articles/alpr-brand-name-language-explainer.html)
- The grades are the journal's editorial judgment; every underlying factual claim above is quoted from an Axon-published document as cited.
