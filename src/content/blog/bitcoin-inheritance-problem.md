---
title: The Bitcoin Inheritance Problem - Legal, Technical, and Human
description: Custody protects your wealth while you're alive. Inheritance planning protects it after. A practical guide to thinking through the legal, technical, and human side of making sure the right people can access everything you've built.
pubDate: 2026-03-16
updatedDate: 2026-03-16
heroImage: ../../assets/blog-inheritance.png
author: Miro Remias
draft: false
tags:
  - bitcoin
  - inheritance
  - security
  - privacy
  - self-custody
---

There is a specific kind of uncomfortable realization that hits sometime after you finish building a serious custody setup.

You have distributed seeds across multiple locations. You have passphrases that live separately from the seeds. You have a wallet descriptor on an encrypted drive. You have thought carefully about correlated failures and jurisdictional risk.

Then a quieter thought arrives: *if I disappeared today, could my family actually access any of this?*

For most people who have done serious custody work, the honest answer is: probably not. The setup you built to resist attackers is also — accidentally — pretty good at resisting heirs.

This post is about fixing that.

---

## What counts as wealth — and why most plans miss half of it

Most people who think about inheritance think about one or two things: a house, maybe a savings account. But wealth is a broader category, and if you are reading this blog you probably have a more complicated picture.

A complete inheritance plan needs to cover financial accounts, property and real estate, business equity, life insurance, digital assets, digital accounts and passwords, and physical valuables. Most people have a plan for some of this. Almost nobody has a plan for all of it.

The most commonly missed pieces are business equity (governance doesn't pause because a shareholder dies), life insurance beneficiary designations (these bypass the will entirely — whoever is named on the policy gets paid, full stop), and digital assets.

---

## The legal layer: your jurisdiction decides more than you think

A will is important. But it is not a complete inheritance plan.

A few things worth understanding — check with a lawyer in your jurisdiction, this is not legal advice:

**Forced heirship rules** exist in most of continental Europe and many other jurisdictions. These reserve a portion of the estate for certain heirs — typically children — regardless of what your will says. You cannot simply will everything to a partner and override the claims of your children. The will is valid for the discretionary portion; the protected share flows to protected heirs regardless.

**Unmarried partners have very different rights from married spouses.** Without a will, your estate in most jurisdictions goes to children, parents, or siblings before an unmarried partner sees anything. With a will, an unmarried partner who inherits may face significant gift tax. In Switzerland, this can be in the range of 20–25% or more depending on the canton. A married spouse typically pays nothing in the same scenario. This is worth planning for explicitly before it becomes someone else's problem.

**A will needs to be findable and executable.** A perfectly drafted will stored somewhere nobody knows about is not a functioning plan. And a will that does not mention digital assets — because the lawyer never asked — leaves your family guessing about the most technically demanding part of the estate.

---

## A note on tax optimization

If your holdings are substantial, it is worth exploring how legal structures affect what your heirs actually receive after tax.

One approach larger families sometimes use is a family trust or similar structure, where assets are held by a trust entity rather than directly by you. Depending on jurisdiction, this can let family members access assets under defined conditions without triggering the same gift or inheritance tax a direct transfer would.

This deserves its own article — the setup, governance, and compliance requirements are significant. I mention it here because the unmarried partner scenario above is common and the tax consequences genuinely surprise people. If it applies to you, ask a specialist whether a trust structure changes the picture before you finalize anything.

---

## The Bitcoin-specific problem

Bitcoin custody is deliberately hard. That is the point. You hold a bearer asset where possession of the secret is possession of the asset. No customer service, no password reset, no bank to call.

This means everything designed to protect you from attackers is also protecting you from your heirs, unless you do something intentional about it. The problems break into three:

**They do not know what you have.** There is no registry, no statement, no annual report. If your family does not know the wallet exists, the Bitcoin effectively does not exist for them.

**They do not know how to access it.** Even if they know it exists, they need the wallet type, the software, the hardware device, the seed backup location, the passphrase, the wallet descriptor for multisig, and the correct sequence of steps. Any missing piece can make recovery impossible.

**They may not be technically equipped.** The person executing your inheritance plan may have never seen a hardware wallet. The recovery process needs to be documented in language they can follow under stress, not language that makes sense to someone who finds seed phrases intuitive.

There are tools that help partially — collaborative custody services like Casa (https://casa.io/) and Nunchuk (https://nunchuk.io/) offer built-in inheritance workflows and guided recovery for the Bitcoin layer. Timelocked wallet setups can make a recovery path available to an heir after a period of inactivity, without requiring the owner to manually hand anything over.

These solve the Bitcoin custody layer. They do not solve the instruction set, the other asset categories, or the human problem of whether anyone actually knows what to do.

---

## My approach — how I think about it

The core principle I settled on: my family needs to be able to execute a recovery without me, and without contacting any company or service that might not exist in ten years.

That means everything they need is in their hands, physically, in advance.

**The instruction set.** I maintain recovery instructions covering what assets exist and where, how to access each category, who to contact for help, and the sequence of steps for each scenario. Written in plain language for a non-technical reader. Instructions are not one document — different family members have different roles and different pieces of information. Think of it as a key-sharing scheme applied to knowledge.

**Encryption and distribution.** Sensitive pieces are encrypted. Decryption keys are held by family members directly, offline, on durable physical media. Multiple trusted people in multiple geographic locations. No cloud, no email thread, no account that might be locked at the worst possible moment.

**What the package contains.** How to access the Bitcoin setup, a backup of the password manager covering other accounts and digital assets, documentation on other financial holdings, and contacts for a lawyer and a technical person who understands the setup.

The goal is that a family member in one location can work through their piece independently, without coordinating with anyone else on a tight timeline.

---

## The stress test

Here is the part most people skip.

Once you have your instructions, your encrypted materials, your distributed pieces — run a scenario. Tell a trusted family member: *pretend I died yesterday. What do you do?*

Then watch. Not to judge. To find the gaps.

Instructions that are clear to you will be confusing to someone who does not share your mental model. A step that seems obvious will turn out to require context that is not written down. Something you assumed was understood will be missing entirely.

Things worth checking: can they physically locate everything today, without your help? Do they have the decryption credentials they need? Can they follow the steps under real stress — grieving, in a hurry, dealing with other parts of the estate simultaneously? If one location is inaccessible, is there a fallback?

Run it, find the gaps, fix them, run it again with a different person or scenario. Different family members may need instructions tailored to their specific role — the person responsible for Bitcoin access is probably not the same person handling property administration.

---

## Lessons learned

**Legal and technical planning are separate problems that need to work together.** A technically perfect Bitcoin recovery process does not help if the legal structure routes assets somewhere unexpected. A solid will does not help if assets cannot be located and accessed.

**Instructions matter more than secrets alone.** The seed phrase is necessary but not sufficient. Write the recovery process for someone who has never done this before.

**Availability and confidentiality are different.** Encryption handles confidentiality. It does nothing for availability. A perfectly encrypted backup stored somewhere that no longer exists in ten years is not an inheritance plan.

**Test before you need it.** The gap between "this should work" and "this actually works" is only visible under real conditions.

**Do it once well, then maintain it.** Once a year is usually enough to review for changes in assets, relationships, and locations.

---

## What you can do

### If you are just starting

- Make a list of everything you own and where it is. All of it.
- Tell at least one trusted person that list exists and where to find it.
- Check your jurisdiction's rules on forced heirship and unmarried partner rights. A one-hour conversation with a local lawyer is worth it.

### If you have a serious custody setup already

- Write inheritance instructions for your Bitcoin specifically. For a non-technical reader.
- Run the "I died" scenario with a trusted family member. Find the gaps. Fix them. Repeat.
- Revisit once a year or whenever something significant changes.

---

## Disclosure

*This article reflects personal thinking and experience. It is not legal, financial, or tax advice. The setup described is intentionally generalized for privacy. Consult qualified professionals in your jurisdiction for advice specific to your situation. No sponsored products or paid mentions.*