---
title: "The Vendor Audit: Leonardo/ELSAG Wrote a Real Privacy Commitment. It Never Mentions the Product That Tracks Your Phone."
date: 2026-08-03 12:00:00
section: On the Scent
series: vendor-audit
grade: 51
dek: "Leonardo's ELSAG division published the most detailed license plate privacy commitment this series has read outside Flock's Trust pages — customer-owned data, opt-in sharing, named retention windows, CJIS-grade access controls. It never once mentions SignalTrace, the company's own product for fingerprinting the phones and smartwatches that travel with a car."
cover: article-cover-vendor-audit-elsag.png
---

*This series has graded six suppliers of public-safety surveillance against one question: does what the company tells the public match what it writes in its own binding documents? [Flock Safety 43](/articles/vendor-audit-flock-safety.html), [Motorola Solutions 46](/articles/vendor-audit-motorola-solutions.html), [Genetec 62](/articles/vendor-audit-genetec.html), [Axon 62](/articles/vendor-audit-axon.html), [Rekor 41](/articles/vendor-audit-rekor.html), [Neology 28](/articles/vendor-audit-neology.html). The seventh is Leonardo US Cyber and Security Solutions, the American subsidiary of the Italian aerospace-and-defense firm Leonardo S.p.A., which sells license plate readers under the ELSAG brand to more than 4,000 agencies in all fifty states. Eight disclosure areas, scored 0–100, every measurement read from a page ELSAG published itself. Reporting on documents, not legal advice.*

## The method, and what makes this one different

Everything below was read from leonardocompany-us.com on August 2, 2026: the dedicated **LPR Data Privacy Commitment** page, the general corporate **Data Privacy Policy** (last updated September 25, 2021), the **About Us**, **Law Enforcement**, **SignalTrace**, **Covert and Custom Solutions**, and **Ganimede** product pages, the ALPR FAQ, and the company blog. No leaks, no contracts, no internal sources.

The standing warning of this series applies without qualification: **a gap between two company documents is a disclosure failure, not proof of a privacy violation.** Nothing below establishes that Leonardo or ELSAG mishandled anyone's data.

What makes this card different from the six before it is that ELSAG does not fit either pattern this series has found so far. It is not Flock or Axon, publishing a Trust center built for scrutiny. It is not Neology, publishing almost nothing. ELSAG published a genuinely detailed, ALPR-specific privacy commitment — one of the two or three best-written documents of its kind this series has read — and then left its newest and most privacy-sensitive product out of it entirely. The finding here is not silence. It is a document written carefully enough to earn trust, about a company whose product line has outgrown it.

## The pattern

Start with what ELSAG gets right, because it is substantial. The company's **LPR Data Privacy Commitment** page states plainly: "the ALPR data collected by our systems belongs solely to the customer agency," that data is "never pooled into a nationwide database," and that "any sharing of data is entirely opt-in." It names real technical controls — multi-factor authentication "aligned with FBI CJIS Security Policy requirements" and "NIST Authenticator Assurance Level 2 (AAL2) best practices," role-based permissions "consistent with CJIS best practices and the principle of least privilege," and audit logs detailed enough that "administrators can review detailed audit logs to see who accessed data and for what purpose." It discloses a concrete retention mechanism: agencies configure "automatic deletion intervals (e.g. 30 days, 6 months, 1 year, etc.)," and a customer who leaves gets "a 90-day grace period... to retrieve or transfer their data before it is securely wiped." And on legal process, it makes a commitment matched in this series only by Axon: "if a court order or subpoena demands data, we will notify the customer (unless legally barred) and never simply hand over information without valid legal due process."

That is a real, substantive document, and this card credits it as such throughout.

Now set it beside ELSAG's newest product. **SignalTrace**, formerly marketed as "EOC Plus," is described on its own product page as "a groundbreaking software system for law enforcement, designed to identify groups of consumer electronic devices that routinely travel together, even when a license plate number is not known." The mechanism: "electronic devices such as fitness trackers, smartwatches, RFID tags and mobile phones emit signals into the air," and SignalTrace "creates an electronic fingerprint for groups of the signals that the system determines are frequently emitted together." The product page's own example is precise about what this means: "while 70 cars in 100 may contain iPhones, only one will have an iPhone 13rev2, an Audi radio, a pair of Bose headphones, a Garmin sports watch, a key finder, and the license plate ABC-1234." That composite — a specific phone, specific headphones, a specific watch, tied to a specific plate — is not a description of a vehicle. It is a description of a person, assembled from the personal electronics they carry.

ELSAG's own page anticipates the objection and answers it with an analogy: "In the same way, license plate readers capture plate numbers from vehicles, not driver information." The analogy does not hold on its own terms. A plate is affixed to a vehicle by law and identifies the vehicle regardless of who is driving it. A smartwatch, a pair of headphones, and a phone are carried by a person and travel with whoever is wearing or holding them — the entire premise of the product is that this combination of personal devices is distinctive enough to function as an identifier of its own, one the company calls "an electronic fingerprint" and markets as usable "without the license plate number." That is a stronger, not a weaker, form of identification than a plate. The Law Enforcement page's own praise for the broader system uses similar language: LPR investigators can already start "discovering vehicles that always travel together." SignalTrace extends that same capability from vehicles to the people inside them.

The Data Privacy Commitment page — the document that discusses retention, access controls, and legal process in detail — does not mention SignalTrace, electronic signatures, device fingerprinting, RFID, or consumer electronics anywhere in its text. Not to explain how long a fingerprint is retained. Not to say who can query it. Not to note whether the 90-day export grace period or the CJIS-aligned access controls apply to it at all. A product built to identify people by the pattern of devices they carry is entirely absent from the one document written to reassure the public about what ELSAG's systems do with data.

## The scored card

The usual warning: **every factual figure below is a measurement**, quoted from a named ELSAG-published page. **The final grade is not.** It is the journal's editorial judgment of how well each disclosure area holds up. We publish the reasoning so you can argue with the math.

Scale: **85+** disclosures accurate and consistent throughout · **65–84** solid, with real but limited gaps · **45–64** mixed — meaningful divergence alongside genuine substantiation · **25–44** the public-facing claim is materially broader than the documents support · **under 25** the claim and the documents describe different products.

<div class="scorecard" markdown="0">

<div class="scorecard__row">
<div class="scorecard__grade">62</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">1</span><h3 class="scorecard__title">Data ownership and sharing</h3><span class="scorecard__band">"Never pooled into a nationwide database" — while the law enforcement page promotes multi-state pooling</span></div>
<div class="scorecard__meter"><span style="width:62%"></span></div>
<p class="scorecard__judgment">The Data Privacy Commitment page is unambiguous and, on its face, strong: "the ALPR data collected by our systems belongs solely to the customer agency," "we never accesses, shares, or sells customer data without explicit authorization," and "any sharing of data is entirely opt-in." The About Us page adds a specific commercial commitment absent from several higher-scoring vendors: "we do not gather data privately or sell access to any LPR data. We research who we're selling our systems to." Set against that, the Law Enforcement page describes, approvingly, a different trend: "states such as New York, Maryland, Vermont, Virginia, West Virginia, Ohio, and Washington, D.C. have all embraced programs that enable jurisdictions to seamlessly share their ALPR data," framed as evidence of the technology's success rather than a risk to be disclosed. Neither statement is false — a state-level sharing program can be built entirely on agencies opting in — but the two pages pull in different directions: one promises data stays local by default, the other promotes the spread of multi-state sharing infrastructure without saying whether opt-in consent survives the transition from a single department's system to a statewide one. A reader gets a strong privacy commitment on one page and a growth metric on another, with no page connecting the two.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">58</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">2</span><h3 class="scorecard__title">Data retention</h3><span class="scorecard__band">Named windows for plate data, no window at all for SignalTrace</span></div>
<div class="scorecard__meter"><span style="width:58%"></span></div>
<p class="scorecard__judgment">For plate data, this is one of the more specific retention disclosures in the series. The Data Privacy Commitment page states that agencies "can configure automatic deletion intervals (e.g. 30 days, 6 months, 1 year, etc.)," that "by default, we do not retain data longer than necessary," and — matching Axon's disclosure and exceeding most of the field — that a departing customer receives "a 90-day grace period... to retrieve or transfer their data before it is securely wiped from the hosted service." Those are real, checkable commitments. The deduction is for what is missing rather than what is wrong: no default retention period is named for a customer who configures nothing, and the SignalTrace product page states only that data is stored "on the SignalTrace server where it can be queried and analyzed" with no retention period, deletion schedule, or export commitment given anywhere. A product built on continuously collected device-signal data is the one product in the ELSAG catalogue with no disclosed retention clock at all.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">22</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">3</span><h3 class="scorecard__title">Candour about what the product does</h3><span class="scorecard__band">"Vehicles, not driver information" — and then SignalTrace</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:22%"></span></div>
<p class="scorecard__judgment">The lowest score on this card, and the reason the series' method had to bend again. Every previous low score in this area came from a company saying one thing and doing another on the same subject — Flock's "vehicles, not people" beside a person-search feature, Neology's silence beside a "who" sold as a selling point. ELSAG's version is different in kind: the privacy-facing document doesn't merely omit a capability, it offers an analogy that only works if the reader has never read the product page it's meant to cover. "License plate readers capture plate numbers from vehicles, not driver information" is accurate about plate readers. SignalTrace is marketed as identifying "a specific vehicle included in an electronic signature, without the license plate number" — by fingerprinting the personal electronics carried by whoever is in it. The product's own worked example (an iPhone 13rev2, an Audi radio, Bose headphones, a Garmin watch, a key finder) is a description of a person's belongings, not a vehicle's identity. Credit is due for one thing: the SignalTrace page states outright that the system "does not decrypt or read the contents of the devices or their communications," a real and disclosed technical limit that keeps this from being a total-surveillance product. But a limit on what SignalTrace reads inside a signal is not the same question as what conclusion the fingerprint itself supports, and the page answers only the first question while the marketing answers the second.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--low">25</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">4</span><h3 class="scorecard__title">Impact statistics</h3><span class="scorecard__band">"70% of crimes involve a vehicle" — no source given</span></div>
<div class="scorecard__meter scorecard__meter--low"><span style="width:25%"></span></div>
<p class="scorecard__judgment">The Law Enforcement page states "more than 70% of crimes in the U.S. involve a vehicle," "900 plates a minute, per plate reader," and that ELSAG systems are "widely utilized by over 4,000 agencies across all 50 states in the U.S. and numerous countries worldwide." The plates-per-minute figure is a hardware specification and independently plausible. The 70 percent and 4,000-agency figures carry no citation, no study, no year, and no methodology — the same failure that cost Flock and Neology points in this series, though at least Neology's equivalent inflation sat beside a scrupulously factual "By The Numbers" panel. ELSAG's About page states company facts (nearly two decades in the LPR business, formerly Selex ES Inc., rebranded from Leonardo S.p.A.'s U.S. subsidiary in 2024) that are checkable against public corporate records, which earns some credit for candour about the business itself even as the crime statistics remain unsourced.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">76</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">5</span><h3 class="scorecard__title">Access controls and audit logging</h3><span class="scorecard__band">MFA, least privilege, and purpose-documented searches</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:76%"></span></div>
<p class="scorecard__judgment">The strongest area on this card. The Data Privacy Commitment page states that the Enterprise Operations Center "supports multi-factor authentication (MFA)," specifically "aligned with FBI CJIS Security Policy requirements, including support for phishing-resistant authentication methods, and with NIST Authenticator Assurance Level 2 (AAL2) best practices" — a named technical standard, not an adjective. It describes "a role-based permissions model consistent with CJIS best practices and the principle of least privilege," where "agencies can define user roles and assign access rights based on operational responsibilities." On logging: "comprehensive auditing and logging features that track every access, query, and action on the data," with "authorized users must log in with credentials" and administrators able to "review detailed audit logs to see who accessed data and for what purpose." The page goes further than most competitors by disclosing that ELSAG "configure[s] our software to support agency policies requiring officers to document search reasons or case numbers." The deduction: as with the access-control disclosures across this entire series, the oversight described is internal to the customer agency — ELSAG discloses the tooling for accountability but no independent audit of whether agencies actually use it, and, as above, none of it is stated to extend to SignalTrace's own logs.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">48</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">6</span><h3 class="scorecard__title">Security certification claims</h3><span class="scorecard__band">Named frameworks, no named auditor</span></div>
<div class="scorecard__meter"><span style="width:48%"></span></div>
<p class="scorecard__judgment">The Data Privacy Commitment page states the ALPR platform and cloud infrastructure are "designed to be FBI CJIS Security Policy-compliant," that data is "encrypted both in transit and at rest, leveraging proven AWS Government Cloud security measures and independent third-party validations," and that the company "adhere[s] to global privacy principles" inspired by GDPR, including "data minimization, purpose limitation, and prompt breach notification, where applicable." CJIS and AWS GovCloud are specific and checkable; "independent third-party validations" is not — no auditor is named, no report type (SOC 2, ISO 27001, or otherwise) is specified, and no date is given, the same gap that cost Neology points for its unscoped SOC claim. The disclosure that "we require background checks for any personnel who might come into contact with criminal justice data" is a specific, creditable operational commitment rarely stated this plainly elsewhere in the series. The middle score reflects real named frameworks undercut by one significant unscoped claim doing a lot of the reassurance work.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade scorecard__grade--high">70</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">7</span><h3 class="scorecard__title">Third-party disclosure and legal process</h3><span class="scorecard__band">A notification commitment matched elsewhere only by Axon</span></div>
<div class="scorecard__meter scorecard__meter--high"><span style="width:70%"></span></div>
<p class="scorecard__judgment">ELSAG's commitment on legal demands for data is specific and, in this series, unusually strong: "if a court order or subpoena demands data, we will notify the customer (unless legally barred) and never simply hand over information without valid legal due process." That is the same structural protection that earned Axon its highest marks in this series — a named process, a customer-notice default, and an exception scoped only to legal gag orders rather than left open-ended. It sits alongside the ownership language already credited above: data belongs to the agency, and ELSAG states it will not access it or grant access to others. The deduction is modest but real: unlike Axon's disclosure, this one does not specify what "legally barred" covers, does not describe an appeals process or a commitment to seek narrowing of an overbroad demand, and — again — says nothing about whether the same notification standard applies to a SignalTrace query, which is a request for a different kind of data through the same company.</p>
</div>
</div>

<div class="scorecard__row">
<div class="scorecard__grade">45</div>
<div class="scorecard__body">
<div class="scorecard__head"><span class="scorecard__num">8</span><h3 class="scorecard__title">Policy currency and consistency</h3><span class="scorecard__band">A 2021 generic policy and an undated specific one, never cross-referenced</span></div>
<div class="scorecard__meter"><span style="width:45%"></span></div>
<p class="scorecard__judgment">ELSAG's documentation is split into two tiers that never reference each other. The general corporate Data Privacy Policy is dated "Last updated: September 25, 2021" — nearly five years old at the time of this audit — and is a website-visitor notice: it enumerates "Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies, device and usage data," and contains no reference anywhere to license plates, ALPR, vehicles, or law enforcement, the same pattern found in Neology's boilerplate. The separate LPR Data Privacy Commitment page is far more substantive, as credited throughout this card, but carries no visible publication or last-updated date at all, so a reader cannot tell whether it predates or postdates SignalTrace's launch, or how current its retention and access-control claims are. Two documents, two different subjects, two different ages, and neither one points to the other. The mid-range score credits the specific page's genuine substance while marking the absence of a single, current, dated policy that covers the company's full product line.</p>
</div>
</div>

<div class="scorecard__final">
<div class="scorecard__final-grade">51<span class="scorecard__final-out"> / 100</span></div>
<div class="scorecard__final-label">Leonardo/ELSAG's disclosures &middot; averaged across all eight areas</div>
<div class="scorecard__final-rule"></div>
</div>

</div>

Fifty-one — squarely between the series' two clusters: below Genetec and Axon at 62, above Rekor at 41 and Neology at 28. It is the score of a company that wrote a genuinely good privacy document and then grew past it.

## The last word

Three findings carry more weight than the average.

First: **ELSAG disproves the theory that silence is simply cheaper than disclosure.** Neology scored 28 by publishing almost nothing. ELSAG wrote one of the most specific ALPR privacy commitments this series has read — named retention windows, named authentication standards, a real legal-process commitment — and still landed in the middle of the pack, because the standard this series applies is not "did you write something reassuring" but "does everything you sell match what you wrote." A good document about half a product line is not the same as a good document.

Second: **the SignalTrace gap is not a wording problem, it is a scope problem.** Every other contradiction in this series has been a sentence that oversells or undersells a product the company already discloses somewhere. ELSAG's privacy commitment doesn't oversell SignalTrace — it simply never opens the door to it. That is a harder failure to fix with better copywriting, because the fix isn't a better sentence. It's a decision to write a new section, name a retention period for fingerprint data, and say plainly whether a phone traveling through a SignalTrace sensor gets the same notice-before-disclosure commitment as a plate photographed by a camera ten feet away.

Third, and this is the finding that will outlast this specific product: **the pattern that produced SignalTrace is structural, not accidental.** A vendor that built its reputation on cameras reading plates has expanded into a second business — reading the radio signals people's own devices emit — using the same sales language ("vehicles that always travel together") that made the first business sound narrow and safe. Nothing published says SignalTrace is disclosed to the public the way a plate-reader deployment typically is, and nothing published says a community that consented to license plate cameras also consented to this. As ALPR vendors compete on capability, the license plate is likely to keep being the least revealing thing these systems capture — which means the right question for a council to ask a vendor is no longer "what do you do with the plate," but "what else can this system see, and does your privacy policy know about it yet."

*Quod non est in actis, non est in mundo* — what is not in the record does not exist, for purposes of the record. ELSAG's record is more complete than most in this series. It is not yet complete enough to cover everything the company now sells.

---

**Sources & methodology:**

- All disclosures graded on this card were read from pages published by Leonardo US Cyber and Security Solutions, LLC (ELSAG) on August 2, 2026; no internal documents, contracts, or non-public sources were used.
- "The ALPR data collected by our systems belongs solely to the customer agency," "never pooled into a nationwide database," "any sharing of data is entirely opt-in," the MFA/CJIS/NIST AAL2 language, the RBAC least-privilege description, the audit-logging description, "document search reasons or case numbers," the 30-day/6-month/1-year retention examples, the 90-day post-termination export grace period, "designed to be FBI CJIS Security Policy-compliant," "AWS Government Cloud security measures and independent third-party validations," the GDPR-inspired principles, the background-check commitment, and the subpoena/court-order notification commitment: [LPR Data Privacy Commitment](https://www.leonardocompany-us.com/lpr/data-privacy)
- "Email address, First name and last name, Phone number, Address, State, Province, ZIP/Postal code, City, Cookies, device and usage data," and "Last updated: September 25, 2021": [Leonardo Data Privacy Policy](https://www.leonardocompany-us.com/data-privacy-policy)
- "A groundbreaking software system... designed to identify groups of consumer electronic devices that routinely travel together," the fitness-tracker/smartwatch/RFID/mobile-phone description, "electronic fingerprint," the iPhone 13rev2/Audi radio/Bose headphones/Garmin watch/key finder/ABC-1234 example, "recognize a specific vehicle included in an electronic signature, without the license plate number," "does not decrypt or read the contents of the devices or their communications," and "in the same way, license plate readers capture plate numbers from vehicles, not driver information": [ELSAG SignalTrace](https://www.leonardocompany-us.com/lpr/elsag-signaltrace)
- "More than 70% of crimes in the U.S. involve a vehicle," "900 plates a minute, per plate reader," "over 4,000 agencies across all 50 states," "discovering vehicles that always travel together," the multi-state sharing programs in New York, Maryland, Vermont, Virginia, West Virginia, Ohio and Washington D.C., and the license plate number/date-time/GPS/photo field list: [ALPR for Law Enforcement](https://www.leonardocompany-us.com/lpr/who-we-serve/alpr-law-enforcement)
- "We do not gather data privately or sell access to any LPR data. We research who we're selling our systems to," the company history (Leonardo S.p.A., Rome; formerly Selex ES Inc.; rebranded 2024), and "nearly two decades" in the ALPR business: [About Us](https://www.leonardocompany-us.com/lpr/about-us)
- "Who has access to the LPR data?" and the hotlist-sourcing answers: [ALPR FAQ](https://www.leonardocompany-us.com/lpr/faqs)
- The comparison cards: [Flock Safety, 43](/articles/vendor-audit-flock-safety.html) · [Motorola Solutions, 46](/articles/vendor-audit-motorola-solutions.html) · [Genetec, 62](/articles/vendor-audit-genetec.html) · [Axon, 62](/articles/vendor-audit-axon.html) · [Rekor, 41](/articles/vendor-audit-rekor.html) · [Neology, 28](/articles/vendor-audit-neology.html)
- The retention clocks this card refers to: [The Vendor Audit, Intermission](/articles/alpr-retention-clocks-explainer.html)
- The grades are the journal's editorial judgment; every underlying factual claim above is quoted from an ELSAG- or Leonardo-published page as cited. Nothing in this card establishes that ELSAG, Leonardo, or SignalTrace has been misused, and it is not legal advice.
