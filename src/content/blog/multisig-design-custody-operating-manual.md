---
title: "Multisig is a design. Custody needs an operating manual."
description: "A firmware bug made me treat one of my keys as compromised. My multisig held, and I knew what to do. What I did not have was a written procedure. How to think about risk, documentation and drills in your own custody setup."
pubDate: 2026-09-02
heroImage: ../../assets/blog-custody-operating-manual.png
author: Miro Remias
draft: false
unlisted: true
tags:
  - bitcoin
  - self-custody
  - multisig
  - risk
  - security
---

In July 2026 a firmware bug in Coldcard turned into one of the largest losses in the history of self custody. A code change from years earlier had quietly routed seed generation to a predictable software random number generator, so some devices produced seeds an attacker could recompute at home.

My multisig held. That is what multisig is for. One weak key cannot move anything on its own.

But I had to start treating that key as compromised, and that changes the arithmetic. Once you no longer fully trust one key in a multisig, you have lost your safety margin, even though the wallet still technically works. There is nothing left to absorb the ordinary things that go wrong. So I decided to rotate the keys.

This isn't a case against Coldcard. Vendors ship bugs, hardware and software alike, and while that shouldn't happen, it does. I still run Coldcard today, on updated firmware. The lesson wasn't to stop trusting a vendor. It was trust, but verify wherever you can.

I am a cautious person. I measure twice before I cut. When the question came up my brain started working through it straight away: what order, what to protect at each step, where the exposure sits.

What I had never done was rotate keys in a setup deliberately spread across places that take more than a day to reach. That difficulty is not an accident, it is the point of the design. It also means the procedure is not something you improvise on a Tuesday evening.

Once I started writing the sequence down, the gap showed up. Not a gap in care. A gap between having thought about something and having a procedure.

---

## Design is the easy part

I used to assume the distance between institutional custody and a careful individual was mostly technical. Better hardware, better ceremonies, something you cannot replicate at home.

It is not, or not mainly. The cryptography is mostly the same and the principles are very similar. What differs is volume, and procedure. Institutions write their procedures down, someone independent checks they were actually followed, and failures get recorded instead of quietly forgotten.

My design was solid. My procedures lived in my head, which is a single point of failure I had not counted.

So this is my attempt to borrow that mindset. Not the paperwork. The habit of thinking in risks, procedures and evidence rather than in gear.

---

## Focus on the risks that actually matter

People discover risk management, write a list of forty threats, then defend against the scenarios that make good stories, feel very secure, and lose their bitcoin to a typo.

Risk management is not a ritual. You do it to reduce the chance of losing money, so you rank and spend most of your effort near the top.

Two questions per risk. How likely is this, really, for someone like me? And if it happens, how long until I have access again?

The second one matters more than people expect. A problem you fix in an afternoon is an annoyance. A problem needing weeks of travel is an emergency. And if you cannot answer it, the honest score is not "low risk." It is "untested," which is the worst answer available.

| Scenario | Likelihood | Priority |
|---|---|---|
| Mistake while moving funds | High | Critical |
| Backups decay, or maintenance keeps getting postponed | High | High |
| Device or vendor turns out to be defective | Medium | High |
| A location becomes unreachable, or someone else gets into it | Low | Medium |

Notice what sits at the top. Not attackers. The first two rows are self inflicted: your own mistake, your own neglect, your own procrastination.

I include myself. My plan is written, shared with family and tested, and there are updates I have been meaning to make for weeks and keep pushing off because the current state is good enough. That is how setups decay. Not through catastrophe. Through reasonable prioritisation, repeated.

One thing surprised me. A low score is not a reason to skip the procedure. "I have to leave the country within a day" scored low and I wrote the procedure anyway, because writing it is how you find out whether the design supports it. That took ten minutes. Finding out the other way takes a very bad week.

---

## The most expensive risk is your own hand

The moment you are most likely to lose bitcoin is not when someone attacks you. It is when you move it yourself.

Migration, rotation, cleaning things up. Large amounts, unfamiliar software, a procedure you have never run before, often in a hurry because something scared you into it. Send to the wrong address and it is gone.

No custody design protects you from this. Not multisig, not passphrases, not steel, not two countries. Your setup is irrelevant if you type the wrong destination. You can hand the problem to professionals, of course, but then you are simply trading it for a different set of risks.

This is the category procedures exist for, and they are boring:

I do a small test transaction first. Send a tiny amount, confirm it arrives, recover it from the new wallet, then move the rest. Every time, even when I am sure.

I verify the receiving address on the signing device screen, not on my computer screen. Clipboard swapping malware still works, because people check the wrong screen.

I never fund a wallet I have not already recovered from scratch.

I do it rested and unhurried. Panic is the real attacker in most of these stories. During the incident above, some people lost funds not to the bug but to rushed transfers into wallets they had never verified.

An honest admission: even after all the checks, I still hesitate before pressing send. I know something can go wrong and the amounts make my hands slow. What gets me past it is not confidence, it is the procedure. I did the verifications, I did the test, I reduced the risk to something small and known. That is what the checks are for. Not to make you feel certain, but to make pressing send a decision you can defend rather than a hope.

---

## Where does your randomness actually come from

This was my main technical lesson, and it is uncomfortable.

If your seed came from a hardware wallet, it came from a process you probably did not inspect. Some devices are fully open source, so the entropy path can be read and checked, though that takes both the skill and the time and most people have neither. Others are closed, so even with the skill you cannot look. Either way, you pressed a button and twenty four words appeared. That is not a hypothetical concern any more. The failure above sat in shipped firmware, quietly, for years.

Generating a seed yourself is not automatically better. I have done it, picking words from the BIP39 list by hand. At the time it felt more sovereign. Looking back I cannot tell you how random that selection was, because humans are bad at being random and I had no way to measure it. That is the problem. Not that it was weak. That I could not show it was strong.

Everything in a wallet sits on top of that one number. If the randomness is bad, the multisig, the steel and the tamper evident bags are decoration.

So I redid it in a way I could defend. Casino grade dice, rolled offline, converted to words against a BIP39 list printed on paper. No computer in the loop at any point, so a compromised machine could not have learned anything. Then I burned the paper, because a page of dice numbers is the seed just as much as the words are.

That last part is worth sitting with. During generation the sensitive material keeps changing shape: rolls, numbers, a worksheet, words, a screen. Each one is the key. It is easy to protect the final form and leave an earlier one on the desk.

---

## Then add entropy that does not depend on the seed

The second lesson followed from the first. If I cannot fully verify where a seed came from, I want a layer that stays strong even if the seed is fully known.

That is what a passphrase can be. It sits outside the seed and produces a completely different wallet. But it only helps to the extent it has real entropy. A passphrase like LOVE or your dog's name is guessed in seconds, and plenty of people use exactly that. In the incident above, the users genuinely protected were the ones with strong random passphrases, not the ones who had merely filled the field in.

So the passphrase deserves the same treatment as the seed. Generate it, do not think of it.

I use words from the EFF long word list (<https://www.eff.org/deeplinks/2016/07/new-wordlists-random-passphrases>). The objection I hear is that a public list must be weaker because it is public. It is not. Assume the attacker has the list, knows how many words you used and knows the method. Each word from a list of a few thousand still contributes around 13 bits, and enough words puts the search space past anything anyone will brute force, even with your seed in front of them.

One detail catches people out. A seed phrase is a standard format with a defined word list and a checksum. A passphrase is not. It is a raw string that has to match character for character. So if you build it from words, fix the convention and write it down: capitalisation, and what goes between the words. I capitalise each word and separate with single spaces. Yours can differ. What matters is that it is decided, recorded and identical everywhere, because someone holding your words but not your format has nothing.

The remaining problem is typing. Entering a long passphrase on a tiny screen is miserable, and worse for a family member doing it once, badly, under pressure. So I modified my SeedSigner to take passphrase entry from a word list instead of character by character (<https://github.com/mr21free/seedsigner-eff-passphrase>). Words can be autocompleted. Random characters cannot.

To be clear about scope, this only changes how passphrase words are typed on screen. It does not touch seed generation, entropy or signing, nothing that matters for security. Small and easy to check is exactly what I want in anything I fork, especially in a piece about a firmware bug.

![SeedSigner passphrase entry menu showing free-form entry and EFF wordlist options](/images/posts/blog12_seedsigner_passphrase_menu-sq.webp)
> Modified passphrase entry menu.

![SeedSigner screen autocompleting a passphrase word from the EFF wordlist](/images/posts/blog12_seedsigner_wordlist_entry-sq.webp)
> EFF wordlist entry in action.

There is a rule in there. Every security measure has a usability cost, and you do not pay it. It is paid by whoever runs the procedure on the worst day of their life.

---

## How I sequenced the rotation

This is what I did, not a standard. It worked for me, and the ordering is the part I would defend.

1. Generate the new seeds and passphrases with randomness you can actually justify.
2. Build the new wallet and record its descriptor, the file that describes how the wallet is put together.
3. Fund it with a small test amount.
4. Wipe everything, rebuild the wallet from the backups and the descriptor alone, and send the test amount back out.
5. Only now distribute the seeds and passphrases to their locations, and confirm each one arrived.
6. Move the real funds.
7. Confirm the old wallet is empty, including change addresses.
8. Plan the destruction of the old material.

Step four decides everything. Proving you can recover before anything is distributed means a mistake is still cheap to fix. Finding a transcription error after the material is already sitting in multiple locations is a different kind of week. Test with a signing combination you would actually rely on in an emergency, which is usually not the convenient one.

Steps seven and eight deserve their own thinking. Do not rush destruction while there is any doubt about the new setup, but do not let it drift either, because every day an old backup sits readable is a day it can be found or misplaced. Once the old wallet is confirmed empty and the new one has been recovered independently, the old material is worth nothing and becomes pure liability. Tile backups are easy, you disassemble and remove the letters. Stamped or etched plates are genuinely hard, and doing it properly means grinding the face until nothing is legible rather than scratching over it. Paper burns, and check the pad underneath for impressions.

With multisig spread across locations, key material has to get there somehow. There are architectures that avoid physical delivery entirely, but that is a different article. So think about it as a preference order.

The one absolute is that nothing sensitive crosses an online medium, in any form, encrypted or not. Institutions move serious value physically for the same reason.

Best is carrying it yourself, hand to hand, ideally on a trip you were making anyway. No third party, no chain of custody to trust. Next best is a trusted person travelling that way who has been briefed in person.

Below that comes a commercial carrier, and there the split matters more than the company. Divide the material so no single package is enough to spend anything, send the parts on different days by different carriers, seal each one so tampering is visible, and confirm arrival before any funds move.

One tradeoff worth naming. Waiting for a trip you have not planned yet is also a risk. A rotation that stalls for weeks is an unfinished rotation, and unfinished is its own exposure.

---

## Put the spare keys in place before you need them

Everything above is a project. Weeks of coordination, travel, other people's calendars. Acceptable once. Terrible as an emergency procedure, because emergencies are exactly when you cannot travel.

So I do the logistics now, while nothing is wrong.

I generate a second set of seeds and passphrases, build a second wallet from them, and put that material at the locations that already hold my live keys, clearly labelled as the spare. Then I leave it alone.

The day I need it, replacement stops being a project measured in weeks and becomes an afternoon of signing. I absorbed the transport risk on a calm Tuesday instead of during a panic. That is a tested recovery path rather than a good intention.

Two costs. The obvious one is more material to protect at each location. The other is confusion: your inheritance document has to say plainly which set is live, which is the spare, and what the spare is for. Whoever opens that location should find nothing they were not told about in advance. A surprise in a safe deposit box is the moment your family starts guessing.

---

## One design decision covers most of the dramatic scenarios

Imagine you have to leave your country in a day. Passport, cards, family, one bag. No trip to the bank, and you may never get back into that building. The scenario scores low. Writing the procedure anyway is what produced the useful answer.

People immediately ask what to grab. Wrong question. Whatever you grab can be robbed or searched at a border, and carrying enough material to spend turns a distributed system back into a single point of failure walking through customs. What you need is not the keys. It is the ability to reach them from somewhere else. Which turned into one requirement for me:

**I made sure I could spend without visiting any one specific building.**

If every path to a transaction runs through your home, or one safe, or one country, you do not have a distributed setup. You have a distributed setup with a hostage. Fix that and you have covered fleeing, fire, a frozen bank, and a location you can no longer reach, all at once.

---

## If one location is compromised

I start with being able to tell that it happened. Without that I am not responding to a compromise, I am responding to a feeling. I seal what I store in tamper evident bags and record the serial somewhere separate. A cheap tamper evident bag turns "I have no idea whether anyone opened this" into a five second check on my next visit.

This needs a written plan because the obvious response is harder than it sounds. Replacing one key means generating a new seed, building a new wallet, recording a new descriptor, and gathering signatures from the keys you still trust. Those keys are, by design, not in your kitchen drawer. So "just swap the compromised key" can quietly mean weeks of travel.

Which is why the prepared spare wallet is the answer here as much as anywhere. If a location is opened and you still have enough untouched keys to sign, you move the funds to the spare, which is already built and already distributed, ideally not overlapping with the location that was breached. One signing session, done. Rebuild a fresh spare afterwards, calmly.

Two other cases call for different responses, depending on what the intruder actually took. If they took enough key material to reach your signing threshold, that is an emergency and the funds move today, to the best destination you can reach. If they took only the descriptor, they cannot move anything, but they now know your addresses and your balance. That is not a cryptography problem. It is possibly a personal safety one.

I decide these while I am calm. Under stress people either freeze for three days or do something irreversible in ten minutes.

---

## Keeping track without making a treasure map

A rotation across distant locations takes weeks. There are confirmations you are waiting on and steps that must not happen out of order. You will lose track. Everyone does.

I keep the progress tracking and the record of what is where in the same place, in my own tool, OpenFirst (<https://openfirst.io/>). One encrypted file, offline, no cloud. That is what makes combining them acceptable, and it helps during a migration, because a task like "second location updated" is only meaningful next to the entry it changed.

I built the task feature because I was running a multi week change in my head and that was not going to end well. A rotation in a distributed setup is a project, and projects need a state you can look at rather than remember. It is my own project, so treat that as a disclosure rather than a recommendation. Anything encrypted and offline with the same discipline works.

![OpenFirst Readiness board tracking rotation tasks by status](/images/posts/blog12_openfirst_readiness_tasks.webp)
> The Readiness board in OpenFirst: each rotation step as a task, moved from planned to completed.

The rule that matters is what leaves that file. Progress notes scattered across a notes app, a phone or a chat with yourself turn into a map, and a map is what a thief wants.

Then the step everyone forgets. **The rule I hold myself to: update my inheritance plan in the same session as the change, not later.** A rotation you do not pass on is a rotation that silently broke your inheritance plan, and your family will not discover it at a good time.

---

## Test it, or it is decoration

"I have a procedure" is not the same as "the procedure works." The only way to tell them apart is to run it.

I rebuild the wallet from backups on a clean machine and check the addresses match. This catches quiet decay: the backup I cannot read, the descriptor I cannot find, software that no longer runs.

I sign with a key combination I never normally use.

I hand the plan to the people who would have to use it, then say nothing and watch. Watching someone fail at step three of my beautifully written instructions is the most useful hour I spend on custody all year. I do this every few months and it has never gone the way I expected.

I write down when I last did each one. That date is the difference between a system I trust and a system I assume.

---

## Five things I took from this

1. Being careful is not the same as having a procedure. If it is not written down and dated, it lives in one person's memory.
2. A low score is not a reason to skip the exercise. Writing the procedure for an unlikely scenario is how you find out whether your design supports it.
3. Randomness is the foundation, and everything above it is decoration if the seed was not truly random. That applies to seeds you generated yourself as much as to any device.
4. A passphrase only helps to the degree it has entropy, and it needs a written convention, because it is a raw string with no format to fall back on.
5. A prepared spare wallet turns your slowest emergency procedure into your fastest one.

---

## What this looked like for me

- I ran a recovery drill. Restored from backup on a clean machine, checked the addresses matched, wrote down the date.
- I added a strong random passphrase, put it on steel like the seed, stored it apart from the seed, and recorded the exact format I used.
- I scored my own risks with the two questions, and treated every "I do not know" as a drill I owed myself.
- I checked whether I could spend without visiting one specific building. Where I could not, I fixed that first.
- Since I run multisig across locations, I built and distributed a spare wallet, and labelled it clearly in my inheritance document.
- I generated my next seed with dice, offline, and destroyed the working material as carefully as I protect the final backup.

None of this is a checklist to copy. Your setup, your risk tolerance and your constraints are not mine. Take what is useful and leave the rest.

---

## Disclosure

My own setup is generalised on purpose: locations, counts and amounts are deliberately absent, and any layout shown is an example pattern, not financial or legal advice.
