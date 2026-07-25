---
title: Why I Built OpenFirst - An Inheritance Plan My Family Can Actually Open
description: "I wrote a private, offline inheritance plan in plain text files. It was secure, it was durable, and nobody enjoyed using it — including me. This is the story of how that folder of files became OpenFirst, and what building a product for exactly one user taught me about building for everyone."
pubDate: 2026-07-19
updatedDate: 2026-07-25
heroImage: ../../assets/project-openfirst.png
author: Miro Remias
draft: false
tags:
  - inheritance
  - privacy
  - product-management
  - open-source
  - security
---

A friend of mine from university died in his early thirties. Unexpected, from one day to the next. He left a wife and a small kid.

He was into crypto, so we tried to help her make sense of what he left behind. We found a notebook. Handwritten passwords, something that looked like a seed phrase. It did not help. We could not tell what it opened, what he held, or whether there was anything at all. Losing money has an end. Wondering does not.

He did write things down. But writing something down and leaving a path your family can follow are two different jobs. I have a wife and kids too. This story is about the second job.

A while ago I wrote about the inheritance problem: I had spent months protecting my assets from attackers, and accidentally protected them from my family too.

That article was the thinking. The full story is here:

https://miroremias.com/blog/bitcoin-inheritance-problem/

This one is about what happened when I sat down to actually fix it.

Spoiler: it took three versions, one burned piece of paper, and my wife telling me that my beautiful system was unusable. Somewhere along the way it turned into a product called OpenFirst.

https://openfirst.io/

I hope I do not need this plan for a very long time. I am not writing this because I think my time is coming soon — I am writing it because none of us gets to know the day in advance, and that is exactly why the plan has to already exist, not get built after it is too late.

---

## Three things I was not willing to negotiate on

The task sounded simple. Write down everything my family would need if I am suddenly not around. Accounts, documents, devices, photos, the will, who to call, what to do first.

How hard can it be, right?

But I had three requirements, and they shaped everything that came after.

**Privacy.** This document is a map of everything you own and how to access it. There is nothing more sensitive you will ever write. I got hacked in the past, and I learned something attackers know well: with read access to your notes, they do not need to break anything else. They just read what you have and where. So: no cloud. Not even a Google Doc "just for drafting." Everything local, on my own machine, full stop.

**Durability.** Whatever I wrote had to still open in ten or fifteen years. No subscription, no account, no company that needs to still exist. Which pointed straight at the most boring technology I know: plain text files on a disk.

**Readable by my family.** Not by me. By them. Under stress. Without me on the phone explaining what I meant by "the usual place."

So I opened a text editor and started typing.

---

## Version one: a folder of files

The first version was exactly what you would expect. A folder. Text files. Some scanned documents, some photos and videos.

Private? Yes. Durable? Yes.

And then real life started poking holes in it.

The same names, places, and devices showed up in file after file. When one detail changed, I went hunting through five documents, hoping I found every copy. There was no single source of truth, and I felt it on every update.

Then the language problem. Part of my family does not read English, and English is what I was writing in. So now I needed translated versions. And different documents for different people, because not everyone should see everything. The copies multiplied again.

Then my wife looked at the folder and said she needed a map. Not more text — a picture of where things are. Fair enough. I drew one. It was genuinely useful for about two weeks, until something changed, the map was wrong, and I had one more thing to redraw by hand.

That was version one. Private, durable, and I dreaded opening it.

A plan you avoid updating quietly becomes a wrong plan.

---

## Wait. This is a content problem.

I spent more than a decade in content, brand, and product management. It still took me way too long to notice I was staring at my own day job.

Names that repeat everywhere and should be written once. Different views for different readers. Structured content on one side, a pleasant reading experience on the other.

I did not need more discipline. I needed a CMS. A tiny, private one, just for me.

So I built it.

Writing happens in a local app: people, places, assets, instructions, all connected instead of copy-pasted. Change a name once and it changes everywhere. On the other end, one output — a single file that opens in any browser, on any device, fully offline. Searchable. Navigable. The map my wife asked for is generated from the content, so it can never go stale again. And the file is encrypted, so it can sit on a drive without being readable by whoever finds it first.

Same privacy as the text files. Same durability. But updating now takes minutes instead of an evening I kept postponing.

When I showed this version to my wife, she clicked around, searched, found what she needed — and then asked why the first version even existed.

That was the moment I decided to publish it. If I have this problem, other people do too.

---

## Why the name: OpenFirst

Once I decided to publish, the thing needed a name.

There is an old, analog tradition in estate planning: an envelope in a drawer labeled "open first." Not the will, not the deeds — the one paper that tells your family where everything else is and what to do next. At some point I realized that was what I had been building all along, just for a life that is now mostly digital.

There is a second meaning, and this one is the actual product promise. Most inheritance plans fail at step one: the family cannot open them. Dead file format, discontinued app, locked account, missing password. So the whole product is designed around a single test — can your family open this, on any device, with no account, ten years from now?

And yes, there is a third meaning, the engineering one. Open source, open documented formats, code you can read. Nothing this sensitive should be a black box.

When the moment comes, this is the thing your family opens first. And it opens.

---

## What building it taught me

**You write for the heir, not for yourself.** Obvious, right? It took me months to actually internalize. My structure made perfect sense to me and confused her. Even the format mattered more than I expected — some things she wanted as flowing text, like a letter; other things as bullet points she could execute like a checklist. I stopped guessing and asked. Ask your reader, then write it their way.

**Keep everything in one place.** My instinct was to split the information into pieces — a note here, a hint there, so that no single document reveals everything. It feels safer. But it only works while I am alive and can point at the pieces. My family would have to find every piece and figure out how they fit together, alone, in the worst week of their lives. They would not. One complete document, protected by encryption instead of by hiding, is something they can actually work with.

**The keys and the map are different things.** Anything that can move money should be scarce. The map should be the opposite: loud. Once the file is encrypted, every extra copy costs nothing and can save your family everything. I hid my map like a key for years and I am still unwinding that habit. Hiding protects keys. Copies protect maps. Encryption lets you do both.

**Trust, but verify.** I told my wife the access password. Several times, over several years. When I finally tested her cold, she did not have it. Not carelessness — humans forget what they never use. So now I verify everything. Run the drill, watch what happens, fix what broke, run it again.

**Being the PM and the user at the same time is tricky.** The user in me kept proposing features. The PM in me had to keep dragging the conversation back to problems. The best feature came from neither — it came from watching. I printed a getting-started questionnaire and handed it to my wife on paper. She ignored the paper and typed her answers straight into the shared family file, private answers and all. I ended up burning the paper version. But that little accident became a feature I would never have designed at a whiteboard: readiness tracking, where her answers live in their own layer and I can include or remove them cleanly. Nobody would have asked for that. It only exists because I watched a real person use the thing.

**Building for people is harder than building for machines.** This one kept surprising me. An AI assistant needs none of my UI work — hand it the data structure and it is perfectly happy. My wife is not an AI assistant. The same content needs shape, hierarchy, and presentation before a person can use it, and every screen is a pile of decisions about what to show, to whom, and when. Even bullet points versus free text changed how fast she found things. Simplicity is not less work. It is where most of the work went.

---

## How I use it today

The plan is now something I actually maintain, which still feels slightly strange to say.

Something changes — a new device, a moved document, a new account — I update one entry and export a fresh file. Minutes, not evenings.

The dry runs continue too. Every few months my wife gets the file and a scenario, and I sit on my hands and watch. Every run still finds something small. That is exactly why we run them.

---

## Where this is going

Somewhere between version one and today, the problem got bigger than a document. The question I keep coming back to sounds like an engineering spec, because it is one: how do I build a system where finding any single piece is harmless, losing any single piece is survivable, stolen pieces go stale, authority transfers without me, every dangerous action takes time, and a grieving beginner can still follow the path?

Shorter: no single find helps a thief. No single loss stops an heir. No step requires the dead.

A secret is fragile. A renewable, distributed, time-aware policy survives generations.

OpenFirst answers the last part first, the part that failed my friend's family. The rest is the road ahead.

---

## Open source, and the promises that do not change

I would not put a map of everything I own into someone else's black box. So I am not going to ask you to.

OpenFirst is open source and works entirely offline. No account, no cloud, nothing leaves your machine. The exported file uses documented plain formats with AES-256 encryption, so it stays readable long after any particular app — including mine — is gone. Every line of code is there to read before you trust it with anything.

Today the whole thing is free. If the project grows, some things around it may become paid one day — advanced features, support, help with setting everything up. Building software takes real time, and I want this project to be alive and maintained in ten years, not abandoned. But the deal that matters does not change: the core stays open source, your plan lives in your hands, nothing ever leaves your machine, and the file you exported keeps opening without an account or a payment to anyone.

---

## What you can do

### If you are just starting

- Open the demo and click around as if you were the heir: https://openfirst.io/demo/
- Make a first rough list of what your family would need to find. Do not try to be complete. Just start.
- Ask the person who would actually use your plan how they prefer to read: story or checklist? The answer may surprise you.

### If you already have a plan somewhere

- Run the drill: hand your plan to a trusted person, give them a scenario, and watch without helping. Count the gaps.
- Move toward one location and one map. If your plan is scattered notes, consolidate before you polish.
- Use the guides and the AI prompt to restructure what you already have instead of starting from zero: https://openfirst.io/guides/

---

## Disclosure

*OpenFirst is my own project. It is open source, currently free to use, and no data ever leaves your device. This article reflects personal experience and is not legal, financial, or tax advice. Details of my own setup are intentionally generalized for privacy.*
