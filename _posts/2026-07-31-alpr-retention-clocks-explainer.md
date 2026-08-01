---
title: "The Vendor Audit, Intermission: Six Vendors, Four Clocks, and Almost No Numbers"
date: 2026-07-31 21:00:00
section: Field Notes
series: vendor-audit
cover: article-cover-alpr-retention-clocks-explainer.png
dek: "Six cards into the series, this is the halfway stop: what the vendor documents actually establish when you set them side by side. A council asks how long the cameras keep the data and hears a single number back. The published record describes at least four separate clocks, three of them set by the buyer rather than the seller — and the one governing the largest pool of data has no ceiling at all."
---

*An intermission, not an entry. [The Vendor Audit](/series.html) has now graded six suppliers of public-safety surveillance against one question: does what the company tells the public match what it writes in its own binding documents? [Flock Safety 43](/articles/vendor-audit-flock-safety.html), [Motorola Solutions 46](/articles/vendor-audit-motorola-solutions.html), [Genetec 62](/articles/vendor-audit-genetec.html), [Axon 62](/articles/vendor-audit-axon.html), [Rekor 41](/articles/vendor-audit-rekor.html), [Neology 28](/articles/vendor-audit-neology.html). Before the series closes, this piece stops and collects what six cards have established about the single question councils actually ask. No grade here — just the findings so far, with every sentence quoted from a document the companies published themselves. Reporting on documents, not legal advice.*

## The question everyone asks, and the sentence that answers it

A city council votes on a camera contract. Someone asks the reasonable question — how long is the data kept? — and gets a number. Thirty days is the number most often heard, because Flock Safety is the largest deployer and thirty days is what its pages say.

Here is that answer, from Flock's own Myths vs Facts page: the system is "auto-deleting data after 30 days," and on the Data Privacy page, "Deletion is automatic."

Now here is what the same company's other pages say. The LPR camera FAQ discloses that Flock "will offer an extended retention for up to one year," conditioned on the agency first getting approval from an elected official or governing body. The What Is Flock page adds that data is deleted "unless the data is required for an ongoing investigation" — an exception with no stated end date. And the governing License Plate Reader Policy discloses a category that appears on no marketing page: "Flock uses a fraction of LPR images (less than one percent), which are stripped of all metadata and identifying information, solely for the purpose of improving Flock Services through machine learning."

None of that makes thirty days a lie. The default appears to be real. What it means is that "thirty days" is the answer to one of four questions, and the council asked all four at once without knowing it.

## Clock one: the plate reads

This is the clock everyone means. How long does a photograph of your car, with a timestamp and a location, stay searchable?

Across six vendors, exactly one names a number.

- **Flock** names thirty days, with the disclosed extension to one year and the open-ended investigative exception above.
- **Genetec** says the data "is stored according to the retention periods you define, which may vary depending on the type of Data."
- **Axon** says "Customer defines Evidence retention periods pursuant to Customer's internal retention policies and procedures."
- **Motorola** says that for data collected by an agency, "the data is retained according to the retention policy defined and managed by the agency or customer which collected the data," adding that "Customers are required to set a retention policy."
- **Rekor** puts the control in the product — customer-defined retention policies with severity-based automatic retention by capture type, which is if anything more granular than the others offer — but the binding Privacy and Terms page names no period for plate data at all. Its retention sentence governs a different category: "We will only retain Personal Information about you for as long as necessary to fulfill the purposes Personal Information was collected for."
- **Neology** publishes nothing. No default, no maximum, no configurable range, no statement that the customer sets it and none that the company does — across the whole of its thirty-two-page public website.

Four of the six hand the number to the buyer. That is not evasion — it is arguably correct, since retention limits are a policy question for the jurisdiction rather than a product decision for a vendor, and state law varies. But it has a consequence that gets missed in the room: **the vendor cannot answer the question the council is asking, because the council is the one who answers it.** An ordinance directing a company to delete in thirty days is pointed at the wrong party. The setting lives in an administrative console, and somebody at the agency either chooses it or accepts whatever it came with.

Motorola is the only one of the six that says out loud what that implies. Its policy tells customers they "should regularly review state and local requirements for LPR retention policies" — an acknowledgement that the vendor has handed over a decision with legal consequences and expects the buyer to go find the law themselves.

And there is a floor below "you define," which the sixth card found: a vendor can decline to say even that. A council reading Genetec's or Axon's documents at least learns where the number lives. A council reading Neology's learns nothing, because the subject is not addressed.

## Clock two: the log of who looked

Every one of these systems records searches. That record has its own retention period, and it is not the same as the first one.

Motorola's privacy policy enumerates five fields captured on every query — date and time, "the IP address from which the LPR data is accessed," the plate or elements searched, "the username of the person who accessed the information and, as applicable, the organization or entity with whom the person is affiliated," and "the purpose for accessing the information." Its CJIS compliance guide then states the retention: audit records "are held indefinitely unless specified for deletion by the customer owner."

Genetec's Product Privacy Sheet describes the equivalent audit trail and gives it a default — ninety days — followed by seven words that change the character of the whole mechanism: "but you may disable its capture."

Axon promises something stronger for the underlying evidence: "tamper-proof audit trails are created automatically by Axon Cloud Services upon ingestion of any Evidence."

Rekor's own July 2026 privacy framework says systems *should* "maintain auditable access logs showing who accessed data, when, and for what purpose" — and its binding terms contain no such commitment. What the Security and Trust page offers instead is "continuous monitoring through AWS tools," which describes infrastructure monitoring rather than a per-query record.

Neology's position is the most striking, because the company clearly knows how to specify this. Its Information Security Policy for Third Parties requires suppliers to run role-based access control, mandatory multi-factor authentication and least privilege. Every clause is aimed outward. Nothing published describes the controls or the logging inside Neology's own products; the customer-facing site offers the phrase "Data Sharing, Audit and Inter-operability capability" and stops.

So on the second clock the six vendors span the entire range: indefinite by default at one, ninety days and switchable off at another, tamper-proof and automatic at a third, aspirational at a fourth, and unaddressed at a fifth and sixth. This is the clock that determines whether misuse can be reconstructed after the fact — whether anyone can later establish who ran a plate, when, and why. A jurisdiction can set a strict thirty-day limit on the plate reads and still be unable to answer that question, if the log holding the answer was switched off or expired first.

## Clock three: the data the customer never collected

This one exists at only one of the six, and it is the reason the Motorola card scored where it did.

Motorola's License Plate Recognition Usage & Privacy Policy contains two retention regimes. The customer's data runs on the customer's clock, as quoted above. Then there is the other category: "The company retains company collected LPR data as long as it has commercial value. The company periodically evaluates the use of historical LPR data to determine if the cost to maintain the data exceeds its value."

The company's own Managing your LPR data FAQ says plainly what that data is: "We maintain a separate database of commercial LPR data. This data is collected by repossession vehicles." And the CJIS compliance guide confirms who owns it — "We own the commercial data and what the customers can access" — and that law enforcement can reach it: customers "can acquire access to the commercial data, but it is a one-way share."

Read those three sentences together. There is a pool of location data gathered from public streets by private contractors, owned outright by a vendor, retained on a schedule governed by a business judgment about storage cost, and queryable by police departments as an add-on. No retention ordinance aimed at an agency touches it, because the agency does not own it, did not collect it, and cannot delete it.

Genetec, Axon and Neology have no equivalent category in their published documents. Flock's nearest analogue is the machine-learning image retention quoted at the top — far smaller in scope, disclosed, and explicitly stripped of metadata. Rekor's is different in kind and appears in clock four.

## Clock four: what happens when the contract ends

This is the clock nobody asks about, and four of six vendors do not address it at all.

Axon does: "Axon will not delete any Customer Content during the 90 days following termination... Axon has no obligation to maintain or provide any Customer Content after the 90-day period and thereafter, unless legally prohibited, will delete Customer Content upon termination."

That is a named window, an obligation inside it, and a deletion commitment after it. An agency switching vendors knows exactly how long it has to get its evidence out, and what happens to the copy left behind.

Rekor addresses it too, in the opposite direction, and this is the sharpest single finding the series has produced on this clock. Its terms state: "You hereby grant to Rekor and its affiliates a non-exclusive, perpetual, sublicensable, transferable right and license to use the Operational Data for all commercial purposes." *Perpetual* is a clock-four word. It means the licence does not end when the contract does. *Transferable* means the party holding it at the end may not be the party the agency signed with. Nothing published says who inherits it in a sale or a wind-down.

Denver's March 2026 vendor switch, which [this journal covered](/articles/flock-cameras-followup-appeal-and-laws.html), is the case that makes this concrete: a department that changes suppliers has years of accumulated reads sitting in a system it is walking away from. Whether that archive is exported, deleted, or simply left is governed by this fourth clock — and in four of the six document sets read for the Vendor Audit, it is not governed by anything published.

## What six cards have established so far

Set the six side by side and three things are now established well enough to build a rule on.

**The number almost never belongs to the vendor.** Only Flock publishes a default for the plate reads. Everyone else either hands the decision to the buyer or declines to discuss it. Any rule written to bind "the company" to a retention period is aimed at a party that does not hold the setting.

**The disclosure quality does not track the company's size or its privacy marketing.** The two highest scores in the series went to Genetec and Axon, neither of which campaigns on privacy. The lowest went to Neology, which says almost nothing, and to Rekor, which published a privacy framework three weeks before it was graded. Reading the documents is the only method that separates these; the marketing does not.

**Silence is the cheapest defence against being checked, and it should not work.** Flock lost points partly because it published an impact census that could be measured against its own headline. Rekor lost points partly because it files with the SEC under penalty of law. Neology scored lowest of all having published nearly nothing at all. A jurisdiction that treats an absence of disclosure as a clean record has the incentive exactly backwards — the correct response to a vendor with no published retention policy is a contract clause, not reassurance.

## Two phrases that carry more weight than they look

**"Automatic."** Flock's pages say deletion is automatic, and the thirty-day default does appear to run on its own. But the word is doing work across the whole sector, and what it usually means is *the timer runs without human intervention* — not *nothing survives it*. Investigative holds, extended-retention settings, metadata archives, and audit logs all sit outside the timer at one vendor or another, each disclosed somewhere, none of them disclosed on the page where "automatic" appears.

**"You define."** Four vendors put the number in the customer's hands. In practice a setting that must be chosen is a setting that has a factory value, and the vendor documents read for this series do not say what those factory values are for the plate reads themselves. Genetec names ninety-day defaults for its audit trail and access history and no default for the reads. Axon names a termination window and no default for the reads. Rekor describes granular per-capture-type retention and names no period in the document that binds. The single most privacy-relevant number in the system is, in most of these documents, the one number left unwritten.

## The plain version

"How long do you keep it" is four questions wearing one coat.

How long the plate reads stay searchable — usually the buyer's decision, not the vendor's, and at one vendor not discussed at all. How long the record of who searched them survives — indefinite at one, disableable at another, unstated at three more. Whether there is a second pool of data the buyer never collected and cannot erase — yes at one of the six, gathered by repossession contractors and sold as an upgrade. And what happens to all of it when the contract ends — answered in writing by exactly one vendor in the agency's favour, and by one more in the vendor's.

The reason this matters beyond procurement is the one [this journal has argued before](/articles/alpr-brand-name-language-explainer.html): rules written around the wrong unit of measurement expire. A rule that names a company expires when the company is replaced. A rule that says "thirty days" without saying *which* thirty days, set by *whom*, and *with what exceptions*, governs one clock out of four and leaves the other three running.

Every sentence quoted in this piece was published by the vendor itself, on a public page or in a downloadable policy. None of it required a records request. It required reading six document sets next to each other, which is the entire method of this series and, it turns out, most of the finding.

---

**Sources:**

- 30-day auto-deletion, "Deletion is automatic," the one-year extension with elected-official approval, the "ongoing investigation" exception, and the machine-learning image retention: [The Vendor Audit: Flock Safety](/articles/vendor-audit-flock-safety.html), quoting Flock's Myths vs Facts, Data Privacy, LPR camera FAQ, What Is Flock, and License Plate Reader Policy pages
- "As long as it has commercial value," the agency-set retention clause, "should regularly review state and local requirements," the five logged query fields, audit records "held indefinitely," "collected by repossession vehicles," "We own the commercial data," and the one-way share: [The Vendor Audit: Motorola Solutions](/articles/vendor-audit-motorola-solutions.html), quoting the LPR Usage & Privacy Policy (10-2025), the Managing your LPR data FAQ, and the Vigilant LEARN CJIS Security Compliance Guide
- "Stored according to the retention periods you define," the 90-day audit-trail default, and "but you may disable its capture": [The Vendor Audit: Genetec](/articles/vendor-audit-genetec.html), quoting the Product Privacy Sheet (2019.12.04)
- "Customer defines Evidence retention periods," the 90-day post-termination window and deletion commitment, and "tamper-proof audit trails... upon ingestion of any Evidence": [The Vendor Audit: Axon](/articles/vendor-audit-axon.html), quoting the Axon Cloud Services Privacy Notice (Last Updated July 6th, 2026)
- The perpetual, sublicensable, transferable licence, the Personal Information retention sentence, the configurable per-capture-type retention, the "auditable access logs" language from the July 2026 framework, and "continuous monitoring through AWS tools": [The Vendor Audit: Rekor](/articles/vendor-audit-rekor.html), quoting the Privacy and Terms page (Updated 02/10/2025) and the Security and Trust page
- The absence of any published retention period, the thirty-two-page public site inventory, the outward-facing Information Security Policy for Third Parties, and "Data Sharing, Audit and Inter-operability capability": [The Vendor Audit: Neology](/articles/vendor-audit-neology.html), quoting neology.com as read on July 31, 2026
- Denver's March 2026 vendor switch: [The Cameras, Update](/articles/flock-cameras-followup-appeal-and-laws.html)
- Why rules written around a brand name expire: [Flock Is a Brand Name. The Cameras Are the Problem.](/articles/alpr-brand-name-language-explainer.html)
- This piece reports what six companies published about their own retention practices. It does not establish that any vendor mishandled data, and it is not legal advice. An absence of published disclosure is not evidence of an improper practice.
