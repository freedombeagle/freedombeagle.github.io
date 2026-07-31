---
title: "The Vendor Audit: We Graded Motorola Solutions' ALPR Disclosures Against Its Own Documents. It Got a 46."
date: 2026-07-31 09:00:00
section: On the Scent
series: vendor-audit
grade: 46
dek: "The second-largest name in automated license plate readers runs a fundamentally different architecture than the first — commercially collected data, a repossession-industry affiliate, and facial recognition in the same app. Same eight questions, same method. It landed three points from Flock."
cover: article-cover-vendor-audit-motorola-solutions.png
---

*The first entry in this series graded [Flock Safety at 43](/articles/vendor-audit-flock-safety.html). This one puts the same eight questions to Motorola Solutions, whose Vigilant line is the other major supplier of automated license plate readers to American police departments. The point of running the identical method on a second vendor is not to declare a winner. It is to test a claim this journal has [made in print](/articles/alpr-brand-name-language-explainer.html): that the problem is the capability, not the trademark. If that claim is right, a company with a completely different architecture should still produce a recognizably similar card. Eight disclosure areas, scored 0–100, every measurement sourced to a document Motorola Solutions published itself. Reporting on documents, not legal advice.*

## The method, and its limits

Every figure below comes from Motorola Solutions' own published material: the product pages at [motorolasolutions.com](https://www.motorolasolutions.com/), the **License Plate Recognition Usage & Privacy Policy** (©2025, marked 10-2025), the **Managing your LPR data** FAQ (©2024), the **Vigilant LEARN CJIS Security Compliance Guide**, and the App Store listing published by Vigilant Solutions, Inc. as developer. No leaks, no internal sources, no contracts.

The same warning that opened the Flock card applies here and matters more, not less: **a contradiction between two company documents is a disclosure failure, not proof of a privacy violation.** Nothing below establishes that Motorola Solutions mishandled anyone's data. Litigation touching this company's ALPR operations is pending as of publication; it is unadjudicated, this audit does not rely on it, and no allegation in it is scored on this card. What is scored is narrower and reproducible from a browser: can a resident, a council member, or a procurement officer arrive at an accurate understanding of the product from the documents the company points them toward?

One limitation specific to this audit should be stated plainly. Several Motorola product pages are served through a system that returns the same generic License Plate Recognition marketing text at multiple distinct URLs, including URLs for specific products. Where that happened, this card relies on documents that render reliably — the PDFs and the developer-published app listing — rather than on pages whose content could not be confirmed. Two claims that circulate widely in reseller material, including a figure for the size of the facial-recognition gallery, were left off this card entirely because they could not be verified against a Motorola-published source.

## The pattern

Motorola's card splits along a different seam than Flock's, and the difference is architectural rather than cosmetic.

Where Motorola documents a mechanism for its law-enforcement platform, the disclosures are not merely adequate — they are the most detailed in this sector so far. The CJIS compliance guide walks the FBI's security policy section by section and answers each one specifically. The audit-log field list is longer than Flock's. The company volunteers a real encryption gap against its own interest. That work is substantive and this card credits it.

The failures cluster somewhere Flock has no equivalent: a **second dataset the customer does not own, did not collect, and cannot delete.** Motorola's marketing tells a police department it stays "in control of your LPR data throughout" and sets "your own retention rules." Both statements are true of the department's own data. Neither is true of the commercially collected database — gathered by repossession vehicles, owned outright by the company, retained "as long as it has commercial value," and made queryable by the same officers. The customer-control promise is accurate about the half of the system the customer collected, and silent about the half the company sells access to.

Underneath that sits a clause with no counterpart on the Flock card at all: Motorola reserves the right to change its privacy policy **retroactively**, applying the new terms to data already collected.

## The scored card

The usual warning: **every factual figure below is a measurement**, quoted from a named Motorola-published document. **The final grade is not.** It is the journal's editorial judgment of how well each disclosure area holds up against the company's own paperwork. We publish the reasoning so you can argue with the math.

Scale: **85+** disclosures accurate and consistent throughout · **65–84** solid, with real but limited gaps · **45–64** mixed — meaningful divergence alongside genuine substantiation · **25–44** the public-facing claim is materially broader than the documents support · **under 25** the claim and the documents describe different products.

<div class="scorecard" markdown="0">

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">18</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">1</span><h3 class="scorecard__title">Facial recognition disclosure</h3><span class="scorecard__band">LPR product pages and privacy policy vs. the company's own app listing</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:18%"></span></div>
<p class="scorecard__judgment">The lowest score on the card, and the mirror image of the highest-scoring area on Flock's. Flock earned a 72 there for denying facial recognition consistently, including on the product where denying it was inconvenient. Motorola sells facial recognition — which is a product decision, not a disclosure failure, and is not what is being graded. What is graded is that a reader cannot learn this from the ALPR material. The License Plate Recognition Usage &amp; Privacy Policy governs "the license plate recognition System" and states that LPR data "is not considered personally identifying information (PII)," adding that linking a plate to a person requires separate DMV access under the Driver's Privacy Protection Act. The LPR product pages describe vehicle attributes — "make, model, color, accessories and even unique vehicle features like damage or bumper stickers" — and nothing else. The App Store listing for Vigilant Mobile Companion, published by Vigilant Solutions, Inc. as developer and integrated with "Vigilant LEARN Server," carries a "Scan Face" capability, FaceSearch, "Person ID," gallery and booking-image searches. The same listing's privacy label reads: "The developer does not collect any data from this app" — for an application whose stated function is to "Scan and upload detections." That is the company's only machine-readable privacy disclosure for the field app, and it describes a product that does not exist. The facial recognition is real, disclosed in the store, and absent from every document a resident researching the cameras would be sent to.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">25</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">2</span><h3 class="scorecard__title">Data retention disclosure</h3><span class="scorecard__band">"Set your own retention rules" vs. "as long as it has commercial value"</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:25%"></span></div>
<p class="scorecard__judgment">Ten points below Flock's retention score, for a structural reason rather than a rhetorical one. Flock's carve-outs were bounded and quantified — a one-year extension requiring elected-official approval, under one percent of images retained for machine learning. Motorola's marketing makes the stronger promise: "Stay in control of your LPR data throughout. Set your own retention rules according to policy." The data-management FAQ repeats it — "As the data is your property, it is held according to the retention policy set forth by you" — and adds a disclosed exception, that Motorola "keeps no record of data after deletion unless metadata archival and classification is requested by the agency." Both statements are accurate about customer-collected data. The governing privacy policy then describes a second category in a single sentence: "The company retains company collected LPR data as long as it has commercial value. The company periodically evaluates the use of historical LPR data to determine if the cost to maintain the data exceeds its value." No period, no ceiling, no customer input, no deletion trigger except a business judgment about cost. The compliance guide separately notes that audit records "are held indefinitely unless specified for deletion by the customer owner." A police department reading the product page is told retention is entirely its own decision. For the dataset the company sells it access to, retention is a line item.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">28</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">3</span><h3 class="scorecard__title">Data ownership and third-party access</h3><span class="scorecard__band">"No rights or ownership to any of this data" vs. "We own the commercial data"</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:28%"></span></div>
<p class="scorecard__judgment">Three company documents give three answers, and only a careful reader holding all three at once can reconcile them. The data-management FAQ is unqualified: all customer-collected data "is the property of the respective customer, and Motorola has no rights or ownership to any of this data." The CJIS compliance guide states the opposite about the other dataset in the same breath as the first — "Corporately, we do not share Vigilant LEARN customer data with anyone as we do not own the data," immediately after "We own the commercial data and what the customers can access." The privacy policy then authorizes company use of "company owned aggregated LPR data" to provide analytics, and names the company "the custodian and owner of the LPR system." These are reconcilable: two datasets, two ownership regimes, consistently maintained. The word doing the damage is <em>any</em> — "no rights or ownership to any of this data" is printed in the FAQ a customer reads, and it is not true of the system as a whole. The heavier finding is a clause with no equivalent anywhere on the Flock card: "The company reserves the right to revise this policy at any point in the future and such changes will be retroactively applicable to data collected prior to any revision of this policy." Every assurance above it is revocable, by the party that wrote it, backwards in time. To the company's credit, it wrote that down rather than leaving it implied.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">30</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">4</span><h3 class="scorecard__title">"Vehicles, not people"</h3><span class="scorecard__band">The PII claim vs. what the platform is sold as doing</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:30%"></span></div>
<p class="scorecard__judgment">Motorola never makes Flock's absolute claim — there is no trust page here announcing "It captures vehicles. Not people," and the company gets real credit for not writing a sentence it would have to defend. What it does instead is assert a legal characterization: LPR data "is not considered personally identifying information (PII), or information which directly relates the license plate image to the driver or registered owner," with the policy adding that "law enforcement and other users may have access to vehicle registration information, and other sources of PII, which they may correlate with LPR data." That is candid about correlation, which is more than most vendors concede. Two things pull the score down. First, the same platform's field app matches faces, which makes the not-PII framing a statement about one data type rather than about the system. Second, the policy's own drafting undercuts it: the sentence establishing the PII limit runs into the next one mid-clause — "the driver or registered owner of PII contained in vehicle registration information is protected by federal law" — leaving the central privacy assertion in the governing document grammatically incomplete. Flock's policy had a misspelling; this one has a dropped clause in the load-bearing sentence. The narrower claim also has a defensible core, and this card counts it: a plate photograph genuinely is not a name, and the policy says so without pretending the gap cannot be closed.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">58</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">5</span><h3 class="scorecard__title">The shared network and commercial data</h3><span class="scorecard__band">"Billions of detections beyond your own" vs. where they come from</span></div>
<div class="scorecard__meter"><span style="width:58%"></span></div>
<p class="scorecard__judgment">The best-documented architecture on the card, and the least well explained to the public. Where Flock answered "Is there a national database of my data? No" while selling a National LPR Network, Motorola never denies the shared pool exists — VehicleManager advertises "access to billions of detections beyond your own." The compliance guide then describes the plumbing with unusual precision: law-enforcement data is "physically (geographically) and also logically separated from our sister subsidiary commercial LPR data partner, DRN," customers "can acquire access to the commercial data, but it is a one-way share," and "Law Enforcement data is not shared with commercial customers." The data FAQ says plainly what the commercial database is: "This data is collected by repossession vehicles." That is a real safeguard, honestly documented, and it runs the protective direction — police data cannot leak to commercial users. The deduction is for what the marketing omits. "Billions of detections beyond your own" does not tell a city council that the detections were gathered by private repossession contractors driving public streets for commercial purposes, that the company owns them outright, or that the one-way valve points toward law enforcement. The FAQ frames the arrangement as privacy architecture — "This is part of meeting CJIS compliance requirements" — which is true of the separation and not of the access. A council approving this system is approving a subscription to a private surveillance archive, and would have to read the compliance guide to know it.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">62</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">6</span><h3 class="scorecard__title">Security certification claims</h3><span class="scorecard__band">A detailed CJIS mapping, resting partly on the cloud provider's certificates</span></div>
<div class="scorecard__meter"><span style="width:62%"></span></div>
<p class="scorecard__judgment">Seven points above Flock's, and earned. Motorola publishes a section-by-section walk through the FBI-CJIS Security Policy with specific answers rather than adjectives, identifies itself precisely as "a private contractor as defined in 5.1.1.5," names FIPS 140-2 certification with a 128-bit minimum, and draws a distinction most vendors elide — that its systems are "completely CJIS compliant, not only compliant because they are 'Hosted in a CJIS Compliant Cloud.'" It also discloses a weakness against its own interest, which is the single most trust-building sentence in any document read for this series: "From the initial detection prior to the data being sent via https, the data is not encrypted." Vendors do not usually volunteer that. Two deductions. The SOC 2 and ISO 9001 credentials cited in the compliance guide belong to Microsoft, the Azure host — "Microsoft is certified ISO 9001:2015... and has been independently audited and verified for compliance under the Statement of Auditing Standards Number 70 [SOC 2 Report]" — not to Motorola's own application layer, and the distinction is not drawn for the reader. And the SOC 2 report itself is "available under a Non-Disclosure Agreement," which means the strongest third-party assurance offered is one a resident or reporter cannot read. Flock lost points for a FedRAMP badge with no written backing; Motorola loses them for borrowing its landlord's certificates.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">70</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">7</span><h3 class="scorecard__title">Impact statistics</h3><span class="scorecard__band">What the company claims its cameras accomplish</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:70%"></span></div>
<p class="scorecard__judgment">The largest gap between the two cards, and it runs in Motorola's favor by fifty-five points. Flock's lowest score was a headline statistic appearing at three different magnitudes on three of its own pages. Motorola publishes no comparable aggregate claim at all — no "percent of U.S. crime solved," no crimes-per-week counter, no national effectiveness figure to contradict. What appears instead is agency-attributed and specific enough to check: a Baytown department quoted saying that "within 24 hours of our first training session, we got almost 29,000 license plate reads and had our first lead" — a reads-and-a-lead claim, not a crimes-solved claim, and sourced to the customer rather than asserted by the vendor. A disclosure audit has to score that well; you cannot contradict yourself with a number you never published. The deduction is for the other side of the same coin. Flock at least published its 2025 Impact Census with a disclosed survey design, sample size, and confidence range, which is why the contradiction was findable in the first place. Motorola offers no published effectiveness research whatsoever. Nothing here overstates the product. Nothing here substantiates it either, and a jurisdiction weighing renewal has no vendor-published evidence to weigh.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">75</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">8</span><h3 class="scorecard__title">Access controls and audit logging</h3><span class="scorecard__band">A longer field list than Flock's, against a broader internal-access clause</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:75%"></span></div>
<p class="scorecard__judgment">The strongest area on this card, as it was on Flock's, and by a similar margin for similar reasons. The privacy policy enumerates five fields captured on every query: date and time, "the IP address from which the LPR data is accessed," the plate number or other elements used, "the username of the person who accessed the information and, as applicable, the organization or entity with whom the person is affiliated," and "the purpose for accessing the information." The data FAQ adds that "Required reasoning notation to query the LPR database is mandatory," promises "Full auditing capability, including ANY users from a shared agency querying the data," and lists multi-factor authentication, mandatory logout after inactivity, role-based accounts, and printable audit reports. The compliance guide requires audit review "at a minimum of once a week," retains audit records "indefinitely unless specified for deletion by the customer owner," logs secondary dissemination, and captures "on behalf of" searches — a field Flock does not document, and the one that catches a query run by an officer for someone else. Two deductions, both real. The privacy policy states that "All employees of the company are authorized to use the LPR system" for demonstrations to customers or potential customers, support, and quality assurance, which sits badly against the FAQ's assurance that "Data access is restricted, including to the vendor, and is totally managed by the agency." And the policy is unusually frank about why the logging exists: "because the company considers LPR data a valuable asset of the company, we maintain system and data usage logs." The mechanism is genuine and better documented than the competitor's. Its stated purpose is protecting the asset.</p>
</div>
</div>

<div class="scorecard__final">
<div class="scorecard__final-grade">46<span class="scorecard__final-out"> / 100</span></div>
<div class="scorecard__final-label">Motorola Solutions' ALPR disclosures &middot; averaged across all eight areas</div>
<div class="scorecard__final-rule"></div>
</div>

</div>

Forty-six. Flock scored 43. Two companies with genuinely different architectures, graded on the same eight questions by the same method, landed three points apart.

That result is the most important thing on this page, and it is worth being careful about what it does and does not mean. It does not mean the two products are equivalent. Flock does not sell facial recognition; Motorola does. Motorola does not run a first-party national network of its own cameras the way Flock does; it licenses a repossession industry's archive instead. Their strengths differ too — Flock publishes effectiveness research and Motorola does not, Motorola publishes a security compliance walkthrough and Flock does not. On the specific question of whether a reader can understand the product from the company's own documents, the two converge almost exactly.

## The last word

Three findings carry more weight than the average.

First: the same structural failure appears at both companies, in different clothing. Flock's pattern was segregation — every carve-out disclosed somewhere, none of them on the page residents are sent to. Motorola's pattern is scope. Its promises are precisely true about one dataset and silent about a second, and the reader is never told there are two. "Set your own retention rules" is accurate. "Motorola has no rights or ownership to any of this data" is accurate. Both describe the half of the system the customer collected, and the half the customer merely queries is where the unlimited retention and the corporate ownership live. Neither company appears to have written a false sentence. Both have built a document set in which the true sentences do not add up to the true picture.

Second: the retroactive amendment clause deserves to outlive this article. "The company reserves the right to revise this policy at any point in the future and such changes will be retroactively applicable to data collected prior to any revision of this policy." Every protection catalogued above — the one-way commercial share, the customer-set retention, the five logged fields — sits on a policy the vendor may rewrite unilaterally and apply backward to data already in the system. A city that negotiates good terms today has negotiated terms the counterparty may amend, retroactively, without the city's signature. That clause is not hidden. It is the last section of the policy, and it is the reason a contract term is not a substitute for a statute.

Third, and this is why the second entry existed: the thesis held. This journal argued in [an earlier explainer](/articles/alpr-brand-name-language-explainer.html) that writing rules around a brand name is how privacy law keeps losing — that *Kyllo* protected a thermal imager, *Jones* protected against a physical trespass, *Carpenter* protected cell-site records, and each left the next technology to fight from zero. Denver proved the municipal version in March 2026 by cancelling Flock and buying the same capability from someone else. This card is the vendor-side proof: swap the company, keep the capability, and the disclosure problems reappear at nearly the same magnitude, in a different arrangement, under a different logo. An ordinance that says "Flock" governs 43. An ordinance that says "automated license plate reader" governs both, and the one after that.

*Idem per diversa* — the same thing, by different means. Two vendors, two architectures, one capability, and two cards that a reader would struggle to tell apart from the grades alone.

---

**Sources & methodology:**

- All disclosures graded on this card were read from documents published by Motorola Solutions, Inc. or by Vigilant Solutions, Inc. as developer; no internal documents, contracts, or non-public sources were used. Pending litigation touching this company's ALPR operations is unadjudicated and is not scored on this card.
- Retention "as long as it has commercial value," the five logged query fields, "all employees of the company are authorized," company ownership of the LPR system, "company owned aggregated LPR data," the "legitimate commercial interest" authorized use, the First Amendment framing, the ACLU photographers' training requirement, and the retroactive revision clause: [License Plate Recognition Usage &amp; Privacy Policy (©2025, 10-2025)](https://www.motorolasolutions.com/content/dam/msi/docs/products/license-plate-recognition-systems/reaperhd-mobile-lpr-system/lpr_usage_and_privacy_policy.pdf)
- "Motorola has no rights or ownership to any of this data," customer-set retention, the metadata-archival exception, "collected by repossession vehicles," the three platforms and one-way enterprise-to-law-enforcement share, "Data access is restricted, including to the vendor," mandatory reasoning notation, MFA, mandatory logout, and printable audit reports: [Managing your LPR data — FAQ (©2024)](https://www.motorolasolutions.com/content/dam/msi/docs/products/license-plate-recognition-systems/vigilant-vehiclemanager/lpr_data_management_faq_en_us.pdf)
- "We own the commercial data," the DRN physical and logical separation, the one-way share, "we do not own the data," Microsoft's ISO 9001 and SOC 2 attestations, SOC 2 under NDA, FIPS 140-2, the unencrypted pre-transmission disclosure, weekly audit review, indefinite audit-record retention, "on behalf of" search logging, and personnel screening: [Vigilant LEARN CJIS Security Compliance Guide](https://www.motorolasolutions.com/content/dam/msi/docs/products/license-plate-recognition-systems/reaperhd-mobile-lpr-system/vigilant_learn_cjis_security_compliance_guide.pdf)
- "Stay in control of your LPR data throughout," "Set your own retention rules according to policy," customer-managed access and sharing, and vehicle-attribute search: [License Plate Readers | License Plate Recognition System](https://www.motorolasolutions.com/en_us/video-security-access-control/license-plate-recognition-camera-systems.html)
- "Access to billions of detections beyond your own" and natural-language vehicle search: [Vigilant VehicleManager LPR Analytics Software](https://www.motorolasolutions.com/en_us/video-security-access-control/license-plate-recognition-camera-systems/vigilant-vehiclemanager-lpr-analytics-software.html)
- "Scan Face," FaceSearch, "Person ID," booking-image search, Vigilant LEARN Server integration, "Scan and upload detections," and the "The developer does not collect any data from this app" privacy label: [Vigilant Mobile Companion, App Store listing published by Vigilant Solutions, Inc.](https://apps.apple.com/us/app/vigilant-mobile-companion/id953236853)
- The comparison card, its eight areas, and the 43: [The Vendor Audit: Flock Safety](/articles/vendor-audit-flock-safety.html)
- Why functional definitions survive vendor changes and brand-name rules do not, and the Denver vendor swap: [Flock Is a Brand Name. The Cameras Are the Problem.](/articles/alpr-brand-name-language-explainer.html)
- The page-by-page method this series applies: [Flock's Trust Page Says the Cameras Don't Watch People](/articles/flock-website-contradictions.html)
- The grades are the journal's editorial judgment; every underlying factual claim above is quoted from a company-published document as cited.
