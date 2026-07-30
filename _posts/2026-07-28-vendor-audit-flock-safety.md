---
title: "The Vendor Audit: We Graded Flock Safety's Public Disclosures Against Its Own Documents. It Got a 43."
date: 2026-07-28 16:23:00
section: On the Scent
series: vendor-audit
grade: 43
dek: "Every ALPR company publishes privacy assurances. Almost nobody checks them against the same company's product pages and legal policies. This is the first entry in a new series that does — starting with the largest vendor, using nothing but documents the company published itself."
cover: article-cover-vendor-audit-flock-safety.png
---

*This journal has graded chambers, offices, and officeholders against the Constitution. This entry opens a new series applying the same method to the private vendors that now supply public-safety infrastructure — because a camera network governed by a contract rather than a statute is still governing, and the terms are still checkable. The subject is Flock Safety, the largest deployer of automated license plate readers in the United States. The yardstick is not whether the technology should exist; that question belongs to voters and courts. The yardstick is narrower and entirely verifiable: **does what the company tells the public match what the company tells its customers and writes into its own legal policies?** Eight disclosure areas, scored 0–100, every measurement sourced to a Flock-published page. Reporting on documents, not legal advice.*

## The method, and its limits

Every figure below is drawn from [flocksafety.com](https://www.flocksafety.com/) and its legal policies as published — the Trust center, the product catalog, the industry pages, and the License Plate Reader Policy last updated June 30, 2026. Nothing here comes from a leak, an internal source, or a customer contract. That is a deliberate constraint: the point of a disclosure audit is that any resident, council member, or reporter can reproduce it from a browser.

It is also the audit's principal limitation, and it should be stated before the card rather than after it. **A contradiction between two marketing pages is a disclosure failure, not proof of a privacy violation.** Nothing in this audit establishes that Flock mishandled any customer's data, and several of the gaps below have plausible innocent explanations — stale pages, marketing copy written by a different team than the legal policy, or genuine technical distinctions poorly summarized for a lay audience. Where Flock has a real answer, this card credits it and says so in the judgment.

What the score measures is whether a reader can arrive at an accurate understanding of the product from the pages the company points that reader toward. On that question the documents speak for themselves.

## The pattern

The card splits cleanly. Where Flock has built an actual mechanism — role-based access, per-search logging tied to a named user, audit trails a supervisor can pull — the disclosures are specific, consistent across pages, and corroborated in the governing legal policy. Those areas score well, and the specificity is genuinely unusual for the sector.

Where the claim is a summary of what the system *is*, the disclosures diverge from the product catalog and from the legal policy underneath them. "It captures vehicles. Not people" coexists with a product whose advertised search query is "man in blue shirt and cowboy hat." "Is there a national database? No" coexists with a product named National LPR Network. "Auto-deleting data after 30 days" coexists with a one-year extension option, an open-ended investigative exception, and a machine-learning retention carve-out disclosed only in the legal policy. And the headline impact statistic appears in three different sizes on three different pages.

The strong scores and the weak ones are not in tension. They describe a company that has engineered real controls and then described its own product to the public in terms those controls do not support.

## The scored card

The usual warning: **every factual figure below is a measurement**, quoted from a named and linked Flock page. **The final grade is not.** It is the journal's editorial judgment of how well each disclosure area holds up against the company's own documents. We publish the reasoning so you can argue with the math.

Scale: **85+** disclosures accurate and consistent throughout · **65–84** solid, with real but limited gaps · **45–64** mixed — meaningful divergence alongside genuine substantiation · **25–44** the public-facing claim is materially broader than the documents support · **under 25** the claim and the documents describe different products.

<div class="scorecard" markdown="0">

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">15</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">1</span><h3 class="scorecard__title">Impact statistics</h3><span class="scorecard__band">Homepage vs. federal page vs. the cited census</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:15%"></span></div>
<p class="scorecard__judgment">The lowest score on the card, because the same claim appears at three different magnitudes. The homepage headline reads "20% of U.S. crime is solved with Flock." The federal facilities page closes with "15% US crime solved with Flock." The footnoted source, Flock's own 2025 Impact Census, says something narrower than both: "In jurisdictions where Flock is deployed, an estimated 20% of solved cases were assisted with Flock technology." Those are not the same statement — "20% of U.S. crime" and "20% of cleared cases in Flock-covered jurisdictions" differ by every unsolved crime and every jurisdiction without a Flock camera. The outcome figures diverge the same way: the federal page claims "2,800 Crimes solved daily," the law enforcement page claims "2,200+ Crimes solved per week," a spread of roughly nine to one, neither footnoted. The census itself deserves credit — it discloses its survey design, sample size (roughly 700 agencies across 43 states), NIBRS anchoring, and a bootstrap range of 8,000–19,600 for the missing-persons estimate. That is more methodological transparency than this sector typically offers. The failure is not the research; it is that the headline numbers on the marketing pages do not match the research they cite, or each other.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">20</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">2</span><h3 class="scorecard__title">"Captures vehicles, not people"</h3><span class="scorecard__band">Trust center vs. video cameras and FreeForm product pages</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:20%"></span></div>
<p class="scorecard__judgment">The Trust center states the limit absolutely and repeatedly: the Data Privacy page's summary line is "It captures vehicles. Not people," listing biometric data, driver information, and facial recognition data as not collected; Myths vs Facts says "Flock LPR only captures vehicles, not biometric data or faces"; What Is Flock describes cameras "deliberately avoiding the capture of unnecessary personal details about people." The video camera product page's feature list includes "People Detection Alerts" and promises "instant alerts for people and vehicles." The FreeForm page advertises the query "man in blue shirt and cowboy hat," describes "person-related video search results," and titles its own FAQ entry "Does FreeForm people search use facial recognition?" Flock's reconciliation is technically real and stated on that page: FreeForm uses "observable, non-biometric visual characteristics... such as clothing and visible accessories," not facial recognition or biometric matching. That distinction matters — a clothing description is not a persistent identifier tied to a body, and the company draws the line explicitly where a less careful vendor would blur it. But the distinction FreeForm draws is biometric versus non-biometric person search. The distinction the Trust center draws is vehicles versus people, and the Trust center never discloses that person search exists at all. A resident who reads the privacy page and stops there has been told the system does not do something it is sold as doing.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">30</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">3</span><h3 class="scorecard__title">"No national database"</h3><span class="scorecard__band">Trust FAQ vs. the National LPR Network product</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:30%"></span></div>
<p class="scorecard__judgment">The Trust center poses the question to itself and answers in one word: "Is there a national database of my data? No. Each agency controls its own data independently." The product catalog sells, by name, the "National LPR Network — Tap into the nation's largest crime-solving LPR network. Agencies get real-time alerts and footage from partners across the country." The LPR page advertises "billions of monthly plate reads" in "a shared network." Flock's defense rests on the word automatically, and it is a legitimate architectural distinction consistently maintained across every Trust page: sharing is opt-in, governed by written agreements, and "nothing is shared unless the agency turns it on." A federated network of consenting agencies is genuinely not the same thing as a centrally-owned federal repository, and the company never claims otherwise in its detailed pages. The score reflects the mismatch between that careful architecture and the flat one-word "No" given to a resident asking whether a national database exists — a question about existence answered as though it were a question about defaults, on the page specifically built to answer hard questions plainly.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">35</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">4</span><h3 class="scorecard__title">Data retention disclosure</h3><span class="scorecard__band">Four pages, four retention regimes</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:35%"></span></div>
<p class="scorecard__judgment">Myths vs Facts says Flock is "auto-deleting data after 30 days"; the Data Privacy page says "Deletion is automatic." The LPR camera FAQ says Flock "will offer an extended retention for up to one year," conditioned on the agency first obtaining approval from an elected official or governing body — a real accountability requirement, and to the company's credit it is disclosed rather than buried. The What Is Flock page adds that data is deleted "unless the data is required for an ongoing investigation," an exception with no stated time limit. And the governing LPR Policy discloses a category absent from every marketing page: "Flock uses a fraction of LPR images (less than one percent), which are stripped of all metadata and identifying information, solely for the purpose of improving Flock Services through machine learning." Metadata stripping is a substantive mitigation and the policy says so plainly. But images retained to train models are not deleted on a rolling 30-day basis by definition, and the four public-facing pages that tell readers deletion is automatic do not mention the carve-out. The 30-day default appears to be real; it is the word "automatic," repeated without qualification, that the documents do not support.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">42</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">5</span><h3 class="scorecard__title">Data ownership and third-party access</h3><span class="scorecard__band">"Solely by our customers" vs. the LPR Policy disclosure clause</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:42%"></span></div>
<p class="scorecard__judgment">The public claim is unqualified: ownership "belong[s] to and [is] retained solely by our customers," with Flock holding "a limited license to access the customer data for the sole purpose of providing our services," and Myths vs Facts adding that "no secret federal agency access or 'backdoors' exist." The LPR Policy describes two internal access tiers — CJIS-certified engineers and "priveledged administrators" (the misspelling is the policy's) — and sets the disclosure standard in a single sentence: Flock may disclose LPR data to law enforcement, government officials, or third parties "if legally required to do so or if Flock has a good faith belief that such access... is reasonably necessary to comply with a legal process, enforce the agreement between Flock and the customer, or detect, prevent or otherwise address security, privacy, fraud or technical issues." Two standards joined by "or": one adjudicated by a court, one exercised unilaterally by the vendor, with no customer-notification requirement stated. This is ordinary commercial contract language found across the software industry, which is exactly why it belongs on the card — the boilerplate is the finding. The policy also carries real countervailing commitments that a weaker vendor would omit: Flock will not "sell, publish, exchange, or disclose customer's LPR data for commercial purposes," and names a specific accountable official as custodian. The gap is between "solely" on the marketing page and "or good faith belief" in the policy that governs.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">55</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">6</span><h3 class="scorecard__title">Security certification claims</h3><span class="scorecard__band">Written attestations vs. the federal-page badge row</span></div>
<div class="scorecard__meter"><span style="width:55%"></span></div>
<p class="scorecard__judgment">In text, Flock's compliance posture is stated consistently in two places and is unremarkable in the good sense: the Data Privacy page cites SOC 2 Type II and ISO 27001 with privacy principles "aligned to ISO27701," and the LPR Policy independently corroborates "third party attestations to requirements for SOC 2 Type II and ISO 27001." Those are specific, named, and verifiable. The federal facilities page instead displays a badge row under "Aligned to Federal Standards" containing NIST, NDAA Compliant, AICPA SOC, AICPA SOC 3, and FedRAMP. SOC 3 alongside SOC 2 is not a contradiction — SOC 3 is the public summary report of the same AICPA framework — and NIST alignment is separately claimed in the LPR Policy's security section. FedRAMP is different: a distinct federal cloud authorization with a public marketplace of authorized providers, claimed in no written statement anywhere on the site. The badges are rendered as images without alternative text, so none of these claims appear in the page's machine-readable text — meaning the site's strongest compliance assertions are invisible to screen readers and to anyone reviewing vendor claims by text search. The mid-range score reflects a real, specific, documented certification program undercut by an unsubstantiated badge displayed in the one format that resists verification.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">72</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">7</span><h3 class="scorecard__title">The facial recognition denial</h3><span class="scorecard__band">Consistency of the biometric claim across every page</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:72%"></span></div>
<p class="scorecard__judgment">Graded separately from feature #2 on purpose, because the narrow claim and the broad claim perform very differently. The narrow claim — that Flock does not run facial recognition or biometric identification — holds up everywhere it appears, including in the places where a company inclined to shade the truth would have gone quiet. The Trust FAQ, the Data Privacy page, the LPR camera FAQ, and What Is Flock all state it consistently. Most notably, the FreeForm page states it against interest: on the very product that searches for people by description, Flock affirmatively volunteers that the feature "does not use facial recognition or biometric person recognition" and that searches "are not designed to identify a specific person." The LPR Policy's enumerated data fields corroborate the architecture — plate image, vehicle image, vehicle characteristics, plate number, state, date, time, camera location, with no biometric field listed. Points come off for the marketing framing rather than the substance: "not facial recognition" is repeatedly deployed on the Trust pages as though it answered the broader question of whether the system watches people, which the product catalog shows it does not. On the specific question of biometrics, the disclosure is accurate and unusually well corroborated.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">75</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">8</span><h3 class="scorecard__title">Access controls and audit logging</h3><span class="scorecard__band">Trust pages corroborated by the LPR Policy</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:75%"></span></div>
<p class="scorecard__judgment">The strongest area on the card, and the one where the public claims are backed by specifics rather than adjectives. The Law Enforcement Access page describes individual authentication with no shared logins, role-based permissions set by the local agency, a required investigative purpose attached to each query, and automatic logging reviewable by supervisors. The LPR Policy corroborates with the actual field list captured on every query — username, date, time, purpose of query, and the plate or elements used to search — plus hardware-based multi-factor authentication for privileged administrators, TOTP for customer accounts, role-based access controls, and a named official custodian. That is a checkable mechanism, not a promise, and the field list in particular is the kind of detail that makes an agency's audit either possible or impossible. Two honest deductions. First, the system logs a stated purpose but the disclosures describe no mechanism validating that the stated purpose is truthful — the Trust page's claim that accountability "doesn't depend on people reporting their own actions" is true of the logging and not of the purpose field. Second, every oversight mechanism described is internal to the customer agency; Flock's own pages say supervisors review activity and the agency applies discipline, and the company discloses no independent or public audit of whether that review happens. The controls are real. Whether anyone outside the agency ever looks at them is not addressed.</p>
</div>
</div>

<div class="scorecard__final">
<div class="scorecard__final-grade">43<span class="scorecard__final-out"> / 100</span></div>
<div class="scorecard__final-label">Flock Safety's public disclosures &middot; averaged across all eight areas</div>
<div class="scorecard__final-rule"></div>
</div>

</div>

A 43 is not a verdict on the technology, and it should not be read as one. It is a measurement of the distance between two sets of documents the same company published. The mechanical disclosures — who can log in, what gets recorded, what fields are captured — are specific, consistent, and corroborated in the legal policy; they carry the top two scores and they are the reason this card is not lower. The summary disclosures — what the system is, what it collects, how long it keeps it, who else can see it — are written in absolutes on the pages built to reassure, and qualified on the pages built to sell and in the policy that governs. Six of eight areas sit below the midpoint for the same structural reason: the reassurance is stated without the carve-out, and the carve-out is real.

## The last word

Two findings carry more weight than the average.

First: the pattern is not concealment so much as segregation. Every carve-out documented above is disclosed *somewhere* on Flock's own website — the one-year retention extension on a product FAQ, the machine-learning image retention and the good-faith disclosure clause in the LPR Policy, the person-search capability on two product pages. Flock is, by the standards of this sector, a comparatively forthcoming company; a vendor determined to hide these terms would not have published them at all. What the audit finds is that the assurances and the qualifications live on different pages, aimed at different readers, and never cross-reference. The Trust center is where residents are sent. The product catalog is where the capability is described. A person who reads only the first has been misled by omission without encountering a single false sentence.

Second: nothing on this card is specific to Flock. Every one of the eight areas is a question that can be put to any automated license plate reader vendor — Motorola Solutions' Vigilant Solutions, Genetec, Rekor, Neology, or whoever replaces them — because every one of them publishes retention defaults, sharing architecture, access controls, and impact claims. Flock is graded first because it is the largest and because it publishes the most. Being auditable is not the same as scoring well, and a competitor that published less would not thereby be safer; it would be harder to check. That is the argument for writing rules, records requests, and public comment around the capability rather than the trademark, as [California's ALPR Privacy Act](/articles/flock-cameras-followup-appeal-and-laws.html) does and as [this journal has documented](/articles/alpr-brand-name-language-explainer.html) — a rule that names a vendor expires when the vendor is replaced, and Denver proved in March 2026 how fast that happens.

*Verba volant, scripta manent* — spoken words fly away, written words remain. Everything above was written down by the company itself, on its own website, and left there. The audit is only the act of reading the pages next to each other.

---

**Sources & methodology:**

- All disclosures graded on this card were read from Flock Safety's public website and legal policies as published; no internal documents, contracts, or non-public sources were used. Each is linked below to the specific page relied on.
- Impact statistics, homepage footnote: [flocksafety.com](https://www.flocksafety.com/)
- 15% crime-solved figure; NIST/NDAA/AICPA SOC/SOC 3/FedRAMP badge row: [Federal](https://www.flocksafety.com/industries/federal)
- 2,200+ crimes solved per week: [Law Enforcement](https://www.flocksafety.com/industries/law-enforcement)
- Survey design, sample size, NIBRS anchoring, bootstrap range: [How Effective Is Flock? 2025 Impact Census Results](https://www.flocksafety.com/blog/how-effective-is-flock)
- "National database" FAQ, facial recognition FAQ, access FAQ: [Privacy & Trust](https://www.flocksafety.com/trust)
- Collection limits, "captures vehicles, not people," 30-day deletion, SOC 2 Type II / ISO 27001 / ISO 27701 in text: [Data Security & Privacy](https://www.flocksafety.com/trust/data-privacy)
- "Single point in time," auto-deletion, 2,000+ missing persons: [Myths vs Facts](https://www.flocksafety.com/trust/myths-facts)
- Individual authentication, purpose-based search, automatic logging, opt-in sharing, agency discipline: [Law Enforcement Access](https://www.flocksafety.com/trust/law-enforcement-access)
- "People Detection Alerts," AI analytics: [Flock Video Cameras](https://www.flocksafety.com/products/video-cameras)
- Person-search examples, non-biometric disclaimer, shared-network search, safeguards: [Flock FreeForm](https://www.flocksafety.com/products/freeform-search)
- One-year extended retention with elected-official approval, data ownership language, network scale: [License Plate Readers (LPR)](https://www.flocksafety.com/products/lpr-cameras)
- "National LPR Network" product listing: [Flock Product Hub](https://www.flocksafety.com/products)
- "Ongoing investigation" retention exception, camera data fields: [What Is Flock](https://www.flocksafety.com/what-is-flock)
- Query audit fields, privileged administrators, "good faith belief" disclosure clause, machine-learning image retention, no-commercial-sale commitment, named custodian, NIST/CISA alignment, MFA and encryption controls: [License Plate Reader Policy, last updated June 30, 2026](https://www.flocksafety.com/legal/lpr-policy)
- Page-by-page contradiction reporting underlying features 1–6: [Flock's Trust Page Says the Cameras Don't Watch People](/articles/flock-website-contradictions.html)
- Denver vendor swap, California ALPR Privacy Act, state legislation, Fourth Circuit appeal: [The Cameras, Update](/articles/flock-cameras-followup-appeal-and-laws.html)
- Why functional definitions survive vendor changes and brand-name rules do not: [Flock Is a Brand Name. The Cameras Are the Problem.](/articles/alpr-brand-name-language-explainer.html)
- The grades are the journal's editorial judgment; every underlying factual claim above is quoted from a Flock-published page as cited.
