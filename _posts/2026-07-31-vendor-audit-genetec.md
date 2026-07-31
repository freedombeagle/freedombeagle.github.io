---
title: "The Vendor Audit: We Graded Genetec's ALPR Disclosures Against Its Own Documents. It Got a 62."
date: 2026-07-31 14:00:00
section: On the Scent
series: vendor-audit
grade: 62
dek: "Two vendors landed three points apart and we called it a pattern. The third broke it. Genetec scores sixteen points above Motorola on the same eight questions — and the reason is not better marketing. It is a policy that expires forward instead of backward, and no second dataset."
cover: article-cover-vendor-audit-genetec.png
---

*Two entries into this series, the result looked like a law: [Flock Safety 43](/articles/vendor-audit-flock-safety.html), [Motorola Solutions 46](/articles/vendor-audit-motorola-solutions.html), three points apart on completely different architectures. That was the evidence for a claim this journal has [made in print](/articles/alpr-brand-name-language-explainer.html) — that the capability is the problem, not the trademark. This entry puts the same eight questions to Genetec, the third major supplier, and gets a materially different answer. Publishing it is the whole point of having a method: a card that can only confirm what you already believe is not an audit. Eight disclosure areas, scored 0–100, every measurement sourced to a document Genetec published itself. Reporting on documents, not legal advice.*

## The method, and its limits

Everything below is read from Genetec-published material: the **Product Privacy Sheet — Genetec Security Center** (EN | 2019.12.04), the **Global Privacy Policy** (EN | 2020.07.24), the January 26, 2023 certifications press release, and the AutoVu product pages. No leaks, no contracts, no internal sources.

Two limits specific to this card, stated before the grades rather than after.

First, the same warning that opened both previous entries: **a gap between two company documents is a disclosure failure, not proof of a privacy violation.** Nothing here establishes that Genetec mishandled anyone's data.

Second, and more important for a fair reading: Genetec's ALPR line is one component of a much larger security platform, and this audit covers what the company publishes **about AutoVu and the platform's handling of that data**. Where the previous two cards could examine a vendor whose entire business is license plate readers, this one is grading a chapter rather than a book. In particular, this audit did not verify whether facial recognition is sold elsewhere in the Genetec catalogue, and **no area below credits or penalises the company on that question**, because it could not be settled from the documents read. That is a real gap in comparability with the Flock and Motorola cards, and the score should be read with it in mind.

## The pattern

Genetec's card inverts the shape of the other two.

At Flock and Motorola, the mechanical disclosures scored well and the summary claims scored badly — specific logging alongside sweeping reassurance. Genetec's split runs the other way. Its **terms** are the best in the series by a wide margin, and its **paperwork** is the worst.

The terms first, because they are unusual. Genetec does not reserve a second dataset it owns and the customer cannot delete; Motorola does. It does not answer a plain question about a national database with a one-word "No" while selling one; Flock does. It states flatly that it does not sell personal data. Its law-enforcement disclosure clause is limited to legal compulsion, with no unilateral "good faith belief" escape hatch of the kind Flock's policy carries. And its amendment clause — the single sharpest contrast in this series — applies revisions **going forward, to new customers**, where Motorola's applies them backward to data already collected.

Then the paperwork. The governing Global Privacy Policy is headed **2020.07.24** and states in its own closing section that it "has been last updated on December 4, 2019." The document disagrees with itself about its own date, and both dates are more than six years old. The Product Privacy Sheet carries the same December 2019 vintage. A company that competes on privacy engineering is describing a 2026 product with 2019 paperwork.

## The scored card

The usual warning: **every factual figure below is a measurement**, quoted from a named Genetec-published document. **The final grade is not.** It is the journal's editorial judgment of how well each disclosure area holds up against the company's own paperwork. We publish the reasoning so you can argue with the math.

Scale: **85+** disclosures accurate and consistent throughout · **65–84** solid, with real but limited gaps · **45–64** mixed — meaningful divergence alongside genuine substantiation · **25–44** the public-facing claim is materially broader than the documents support · **under 25** the claim and the documents describe different products.

<div class="scorecard" markdown="0">

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">25</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">1</span><h3 class="scorecard__title">Policy currency and versioning</h3><span class="scorecard__band">A governing document that contradicts itself about its own date</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:25%"></span></div>
<p class="scorecard__judgment">The lowest score on the card, and the one that pulls an otherwise strong result down into the middle. The Global Privacy Policy is headed "EN | 2020.07.24" on every page. Its closing section reads: "This privacy policy has been last updated on December 4, 2019." Those are two different dates in one document about that document, and the later of them is more than six years before this audit. The Product Privacy Sheet governing AutoVu carries the same December 2019 vintage. Nothing in either has been revised to describe cloud ALPR as it is sold in 2026 — the policy predates the AutoVu CloudRunner service named in the company's own 2023 certifications release, meaning the product is certified in one document and absent from the document that governs its data. The content is not wrong; it is old, and a privacy policy is a promise whose value depends on describing the thing you actually bought. Credit where due: the policy explicitly states it "takes into account the provisions of Regulation 2016/679" — the GDPR — and the substantive terms it does contain are, as the rest of this card shows, better than either competitor's. That is exactly why the staleness costs so much. This is the one area where the strongest set of commitments in the series is undermined by the company's own filing discipline.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">45</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">2</span><h3 class="scorecard__title">Audit logging and access controls</h3><span class="scorecard__band">A real audit trail the customer is told they may switch off</span></div>
<div class="scorecard__meter"><span style="width:45%"></span></div>
<p class="scorecard__judgment">The one area where Genetec scores meaningfully <em>below</em> both competitors, and the reason is a single clause. The Product Privacy Sheet describes a genuine mechanism: the Directory "is responsible for the authentication of all user connections and, as such, will capture user identifiers to uniquely identify authorized users," and "the Product keeps a record of all user activities as part of its audit trail, which may also include changes to the system configuration made by each user." Then: "By default, this Data is stored for a period of 90 days, but you may disable its capture." That last clause is the finding. Flock's logging is described as automatic and supervisor-reviewable; Motorola's enumerates five mandatory fields including a required purpose and states that "Required reasoning notation to query the LPR database is mandatory." Genetec's is a default the administrator can turn off entirely. An audit trail that the audited party may disable is a different kind of object from one they may not — it protects an agency that wants oversight and offers nothing against one that does not. The 90-day default is reasonable and clearly stated, and the access-history logging for Synergis carries the same default. But neither competitor gives the customer a documented switch to stop recording who searched what, and that is a real deduction rather than a stylistic one.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">58</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">3</span><h3 class="scorecard__title">Data retention disclosure</h3><span class="scorecard__band">Customer-defined throughout, with no default named for plate reads</span></div>
<div class="scorecard__meter"><span style="width:58%"></span></div>
<p class="scorecard__judgment">Structurally the cleanest retention story in the series, and incomplete in one specific way. For AutoVu, the Product Privacy Sheet says the data "is stored according to the retention periods you define, which may vary depending on the type of Data," and for other components that data "will be stored in the Product until you decide to delete it." Crucially — and this is what separates it from Motorola — there is no second category. No dataset retained by the vendor "as long as it has commercial value," no commercially collected archive the customer neither owns nor can delete. The company-side commitment in the Global Privacy Policy is ordinary but consistent: personal data is kept "only for as long as it is necessary for us to fulfill our obligations," after which "we will put necessary efforts to permanently dispose of" it. Where Genetec's disclosure falls short of Flock's is specificity. Flock names a number — 30 days, extendable to one year with elected-official approval — which is checkable and arguable. Genetec names 90-day defaults for the audit trail and access history but names no default at all for the license plate reads themselves, leaving the single most privacy-relevant retention period entirely to the deploying agency with no vendor-suggested baseline. "You decide" is honest. It is also the answer that puts the whole question back on a city council that may not know it was asked.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">65</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">4</span><h3 class="scorecard__title">Security certification claims</h3><span class="scorecard__band">Named, scoped, and — unusually — publicly readable</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:65%"></span></div>
<p class="scorecard__judgment">The best-handled certification claim of the three, mostly for one reason a reader can act on. Genetec's January 26, 2023 release names ISO/IEC 27017 — the cloud-specific information security standard — and scopes it explicitly to Security Center SaaS Edition rather than implying it covers everything. It also cites <strong>SOC 3</strong>, and that matters: SOC 3 is the publicly distributable report. Motorola's compliance guide offers SOC 2 "available under a Non-Disclosure Agreement," which means its strongest third-party assurance is one no resident, reporter, or council member can read; Genetec points at a report that anyone can. The Global Privacy Policy separately describes "server authentication and data encryption, to protect personal data during transit over the internet and at rest." Two deductions. First, these claims live in a press release and a resource page, not in the governing privacy documents — a reader following the policy chain never encounters them. Second, the ISO/IEC 27017 scope cuts both ways: naming one product honestly also means the certification does not cover the on-premises deployments many police agencies actually run, and the release does not say what does. Specific and verifiable beats broad and unbacked, which is why this outscores Flock's unsubstantiated FedRAMP badge and Motorola's borrowed Azure certificates.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">68</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">5</span><h3 class="scorecard__title">Sharing and federation</h3><span class="scorecard__band">Opt-in across boundaries, with no third-party archive attached</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:68%"></span></div>
<p class="scorecard__judgment">Genetec sells cross-agency sharing the way its competitors do, and describes it without the framing problems that cost them points. The AutoVu material says the system "lets you manage all of your hotlists from one system and decide whether to share plate reads or hits beyond your organizational boundaries," with Federation and covert hotlists offered as the mechanism. That is opt-in, per-organization, and stated plainly — there is no equivalent here of Flock's Trust page answering "Is there a national database of my data? No" while the catalogue sells a National LPR Network. More significantly, there is no equivalent of Motorola's DRN arrangement: no separate commercial dataset gathered by repossession contractors, owned by the vendor, and made queryable by police as a paid upgrade. What a Genetec customer shares is what a Genetec customer collected. The deduction is for thinness rather than contradiction. Federation is described in marketing terms — capability, not governance — and neither privacy document explains what a federated share means for retention when two agencies set different periods, who audits a cross-boundary query, or how a share is revoked. Flock's opt-in architecture is documented in more detail across its Trust pages than Genetec's is anywhere. Good default, light paperwork.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">74</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">6</span><h3 class="scorecard__title">What the product captures</h3><span class="scorecard__band">The bystander sentence neither competitor writes</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:74%"></span></div>
<p class="scorecard__judgment">Genetec never makes the claim that sank Flock's equivalent area. There is no trust page here announcing "It captures vehicles. Not people." What the Product Privacy Sheet does instead is enumerate the capture in flat, unflattering detail: license plate number and state of issuance; images of the vehicle; metadata including make, model, speed and relative motion; unique device identifiers; geolocation and timestamps; and cameras that "capture, and store internally, license plate identification, images and metadata... until such Data is offloaded." Then the sentence that earns the score: the images "may include images of the license plate of the vehicle, the vehicle itself and images of the surrounding areas, <strong>which may include images of individuals passing by at the time the images were captured</strong>." No competitor in this series writes that sentence. Flock spent an entire Trust page implying the opposite while selling person search; Motorola asserted its data "is not considered personally identifying information." Genetec simply says a camera pointed at a road photographs the people on it. Points come off because the disclosure is descriptive rather than governed — having conceded that bystanders are in the frame, neither document says what happens to those images, whether they are subject to the same retention the customer sets for plate reads, or whether any masking is applied by default. The honesty is real and unusual. The follow-through is missing.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">76</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">7</span><h3 class="scorecard__title">Data ownership and third-party access</h3><span class="scorecard__band">No sale, no unilateral disclosure clause, and an option where the vendor holds nothing</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:76%"></span></div>
<p class="scorecard__judgment">The strongest substantive area on the card, and the clearest separation from both competitors. Three things do the work. First, the Global Privacy Policy states without qualification: "We do not sell or rent any personal data to any third party." Second, the law-enforcement disclosure clause is limited to compulsion — Genetec "may be required to disclose information... to governing and law enforcement authorities, including where required by law, a court order, or by other legal obligations." Set that against Flock's policy, which permits disclosure on a "good faith belief that such access... is reasonably necessary," a standard the vendor applies to itself with no customer notification required. Genetec's clause has no such escape hatch. Third, and structurally most important, the Product Privacy Sheet documents a deployment in which the vendor holds nothing at all: in a Local Environment "all Data is stored in the data hosting systems and servers provided by you and is not made available to Genetec except as outlined in this document." Neither Flock nor Motorola offers an architecture in which the company has no copy. The Cloud Environment is described with the ordinary multi-tenant assurance that each customer's data "is logically segregated." Deductions: sharing with "affiliated companies, parent entities and subsidiaries, for internal business purposes" is permitted in terms broad enough to cover a lot, and the connected services GUS and SAM are "configured to allow Genetec to receive Data described above <em>by default</em>" — opt-out, not opt-in, though both are disclosed and both can be disabled or anonymised.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">82</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">8</span><h3 class="scorecard__title">Amendment terms</h3><span class="scorecard__band">Revisions run forward — the exact inverse of Motorola's clause</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:82%"></span></div>
<p class="scorecard__judgment">The highest score in the Vendor Audit so far, awarded for a single paragraph that most readers will never open. Genetec reserves the ordinary right to revise its policy "from time to time, without prior notice" — and then constrains it in the way that matters: "The revised version of this document terms will take effect as soon as it is made available on our website <strong>with regards to all new customers</strong>," with a commitment that material changes to how personal data is processed get "a more prominent notice." Read that against the last section of Motorola's LPR Usage &amp; Privacy Policy, quoted on the previous card: revisions there "will be retroactively applicable to data collected prior to any revision of this policy." Same clause, opposite direction. One vendor's promises are a floor that holds for the data you already handed over; the other's are a snapshot the vendor may re-photograph at will. This is the least glamorous item on any of these three cards and arguably the most consequential, because it determines whether every other commitment is durable or provisional. Points come off only for the drafting — "The revised version of this document terms" is garbled, "without prior notice" sits awkwardly beside the notice commitments that follow it, and the paragraph never says what happens to <em>existing</em> customers, leaving the protective reading to inference rather than statement. Best-in-series terms, expressed in a sentence that needed one more edit.</p>
</div>
</div>

<div class="scorecard__final">
<div class="scorecard__final-grade">62<span class="scorecard__final-out"> / 100</span></div>
<div class="scorecard__final-label">Genetec's ALPR disclosures &middot; averaged across all eight areas</div>
<div class="scorecard__final-rule"></div>
</div>

</div>

Sixty-two. Flock scored 43, Motorola 46. The third vendor did not land near the other two, and the honest thing to do with that result is say so plainly rather than explain it away.

## The last word

Three findings carry more weight than the average.

First, and this is a correction to something this journal published nine days ago: **vendor choice matters more than the last two cards suggested.** The [ALPR explainer](/articles/alpr-brand-name-language-explainer.html) argued that writing rules around a brand name is how privacy law keeps losing, and that argument stands — Denver swapped Flock for a competitor in March 2026 and kept the same capability, and an ordinance naming a company still expires when the company does. But the stronger version of the claim, the one the 43 and the 46 seemed to license — that the vendors are interchangeable on the merits — does not survive this card. A sixteen-point spread is not noise. Genetec commits in writing to things Motorola does not, and a jurisdiction choosing between them is making a real choice with real consequences for its residents. Rules should still be written functionally. Procurement should still read the policy.

Second: the thing that separates the top and bottom of this series is not marketing quality. It is whether the vendor reserves something for itself. Flock reserved a disclosure standard it applies at its own discretion. Motorola reserved an entire commercial dataset, retained as long as it has value, plus the right to rewrite the rules backward. Genetec reserved comparatively little, and every one of its high scores traces to that restraint rather than to better writing. The audit keeps finding the same fault line: not what the company says it does, but what it quietly keeps the option to do.

Third: Genetec's worst score is the one it could fix in an afternoon. A governing privacy document that is six years old and disagrees with itself about its own date is not a policy failure, it is a filing failure — and it sits underneath the best set of terms in this series. The certifications are dated 2023. The product line has moved. The paperwork has not. There is something almost instructive in a company earning the strongest commitments on this card and then leaving them in a document that still describes a 2019 catalogue.

*Verba volant, scripta manent* — spoken words fly away, written words remain. It is the same maxim that closed the Flock card, and it cuts differently here. Genetec's written words are the best in the series. They have simply been left where few will go looking, in a file last touched before the product they govern was built.

---

**Sources & methodology:**

- All disclosures graded on this card were read from documents published by Genetec Inc.; no internal documents, contracts, or non-public sources were used. This audit did not resolve whether facial recognition is sold elsewhere in the Genetec catalogue, and no area credits or penalises the company on that question.
- AutoVu data capture, "images of individuals passing by," camera-internal storage until offload, customer-defined retention periods, 90-day audit-trail default with "you may disable its capture," 90-day access-history default, Local vs. Cloud vs. Hybrid environments, "not made available to Genetec," logical segregation, GUS and SAM defaults: [Product Privacy Sheet — Genetec Security Center (EN | 2019.12.04)](https://www.genetec.com/binaries/content/assets/genetec/legal/product-privacy-sheet_genetec-security-center.pdf)
- "We do not sell or rent any personal data to any third party," the law-enforcement disclosure clause, retention "only for as long as it is necessary," encryption in transit and at rest, sharing with affiliated companies, the amendment clause and its "with regards to all new customers" limit, the GDPR reference, and the conflicting 2020.07.24 / December 4, 2019 dates: [Global Privacy Policy (EN | 2020.07.24)](https://www.genetec.com/binaries/content/assets/genetec/legal/genetec-privacy-policy.pdf)
- ISO/IEC 27017 scoped to Security Center SaaS Edition, SOC 3, GDPR, and the AutoVu CloudRunner product listing, dated January 26, 2023: [Genetec achieves stringent certifications through commitment to cybersecurity and privacy](https://www.genetec.com/binaries/content/assets/genetec/press-releases/genetec-achieves-stringent-certifications-through-commitment-to-cybersecurity-and-privacy.pdf)
- Hotlist management, sharing "beyond your organizational boundaries," Federation and covert hotlists: [AutoVu automatic license plate recognition](https://www.genetec.com/products/unified-security/autovu) and [AutoVu law enforcement ALPR solution](https://www.genetec.com/products/unified-security/autovu/law-enforcement)
- The comparison cards, their eight areas, and the 43 and 46: [The Vendor Audit: Flock Safety](/articles/vendor-audit-flock-safety.html) · [The Vendor Audit: Motorola Solutions](/articles/vendor-audit-motorola-solutions.html)
- The brand-name argument this card partially revises: [Flock Is a Brand Name. The Cameras Are the Problem.](/articles/alpr-brand-name-language-explainer.html)
- The grades are the journal's editorial judgment; every underlying factual claim above is quoted from a Genetec-published document as cited.
