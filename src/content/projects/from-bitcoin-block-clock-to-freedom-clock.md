---
title: From Block Clock to Freedom Clock - The Metric That Finally Clicked
description: "I built a Bitcoin block clock because protocol time fascinated me. Then I rebuilt it into something that made more sense to my actual life: a Freedom Clock that measures runway, saved time, and what Bitcoin is really buying me."
pubDate: 2026-02-12
updatedDate: 2026-04-02
heroImage: ../../assets/blog-block-clock.png
author: Miro Remias
draft: false
tags:
  - bitcoin
  - hardware
---

## The moment the block clock stopped clicking for me

I loved the idea of a block clock long before I built one.

It has a certain Bitcoiner elegance to it. No apps. No exchange tabs. No endless refreshing. Just protocol time, quietly moving forward in the background.

So I did what builders usually do. I looked at what was already out there, compared options, and tried to picture which one I would actually want on my desk every day.

And honestly, I bounced off most of them.

Some looked beautiful but felt more like expensive decor than something I wanted to live with. Some were closed. Some were too large. And a few were priced high enough that I caught myself thinking: *hang on, am I really about to pay this much for a tiny screen and a vibe?*

So I did the predictable thing: **I built my own.**

How hard can it be, right?

I already had a Bitcoin node, and I was already generating Bitcoin-related signals on my local network. Publishing a few network stats and consuming them on a little display shouldn’t be a big deal.

Then I found exactly what I needed: a small e-ink board with Wi-Fi and the option to run on a battery.

The goal was simple: a calm, always-on Bitcoin clock I could put anywhere without constantly thinking about the battery.

That’s how the first version started.

I built it because I genuinely love the idea of **protocol time**.

Bitcoin clicks forward like a charm: block by block, roughly every ~10 minutes, indifferent to narratives.

A block clock makes that tangible.

You glance at it. No apps. No exchanges. No drama. Just: *the network is alive, and it keeps moving.*

![Block Clock](/images/posts/blog8_block_clock-sq.jpeg)
> Custom-built Block Clock.

And then, after the novelty wore off, I ran into an annoying truth:

**My brain doesn’t live in blocks. It lives in time on this earth.**

When the screen said:

- “114,419 blocks to halving”

My brain didn’t feel grounded. It didn’t feel motivated. It felt… nothing.

It immediately translated it into:

> “Cool. So… a few years.”

That number is correct. It just does not feel *human*.

---

## Bitcoin time vs human time

Bitcoin time is objective.

- block height
- issuance schedule
- difficulty adjustment
- halving cycles

Human time is more emotional.

- mornings and evenings
- birthdays and school years
- projects and seasons
- the feeling of wasting your best hours in a job you don’t enjoy

So I flipped the question.

Instead of asking:

**“What can Bitcoin tell me about the network?”**

I started asking:

**“What is Bitcoin buying me in human terms?”**

And the answer wasn’t “blocks.”

The answer was **time**.

Time I don’t need to sell.  
Time I can spend with my kids.  
Time I can spend building things I actually care about.  
Time I can stop trading my life for a schedule I didn’t choose.

That was the moment the block clock transformed into something else.

---

## The Freedom Clock (v2)

So I started building a second version.

Not a block clock.

A **Freedom Clock**.

Same physical idea (calm, always-on, no distractions).  
Same builder spirit (open, hackable, yours).  
But a different purpose:

> **Not “Bitcoin ticks.”**  
> **“How much freedom have I bought?”**

![Freedom Clock - Short Time](/images/posts/blog8_freedom_clock_short_time-sq.jpeg)
> Portfolio value in units of freedom - quite some stacking needs to be done.

![Freedom Clock - Long Time](/images/posts/blog8_freedom_clock_long_time-sq.jpeg)
> Much more freedom ahead.


### What it shows (conceptually)

I am keeping the exact implementation private on purpose for OPSEC reasons, but I can share a screenshot with **sample values** (for example, "free time" plus BTC price) to show the idea without exposing anything sensitive.

The Freedom Clock is built around **one core metric**:

**Runway** — expressed as time.

Not in blocks. Not in fiat. In human units:

- years
- months
- weeks

This is basically the question behind FIRE, just stripped down to the core:

> “If I stopped earning tomorrow, how long could I keep living the life I want?”

That number is not about flexing. It’s about clarity — and I calculate it *conservatively*: a “typical” monthly spend for my local context, ~2% inflation, worst case (selling all BTC at once), and using only the current BTC price (no assumed upside). Those assumptions are easy to tweak, but the principle matters more than the exact number.

It turns Bitcoin from an abstract asset into a **compass**.

### Why this is more motivational than network stats

Network stats are true. They’re important. They’re also… emotionally neutral for most people.

Runway is different.

Runway makes you ask:

- “Do I want to trade my next year for this job?”
- “Is this project worth my time?”
- “What would I do if I had 6 months more freedom?”
- “Am I building the life I want *or just surviving until Friday*?”

That is why this device finally clicked for me. As a bonus, I showed it to my wife and she understood it immediately, then told me I had finally built something useful instead of just another technical gadget.

---

## What stayed the same (builder principles)

A Freedom Clock is still a Bitcoin-native project in the ways that matter:

- **calm by design** (no constant refresh, no alerts)
- **local-first mindset** (avoid leaking personal data to third parties where possible)
- **simple beats flashy** (function first, polish later)
- **you control the signal** (you decide what matters)

In other words: it’s still not a consumer gadget. It’s a **habit**.

A reminder on your desk that your attention is valuable. That your time is finite. That you’re building toward something.

---

## What I learned along the way

### 1) The hardest part isn’t the hardware

It’s choosing a metric that changes your behavior.

A dashboard can be technically perfect and still be useless.

If the screen went dark tomorrow, what would you actually miss?

That question is brutal. And helpful.

### 2) “Real-time” is usually a trap

Frequent updates drain battery and steal attention.

For a calm desk device, slow cadence wins.

### 3) Price still has a role (but it’s not the point)

I still include price sometimes, not as a signal to act, but as a translator people naturally use today.

The Freedom Clock shifts the focus: price becomes secondary to runway and choice.

---

## Next steps: where this goes from here

I’m thinking about evolving the device into a rotation of views:

- Bitcoin-native grounding (block height, halving progress in human time)
- Freedom-native motivation (runway as time, abstracted safely)
- Builder-native sanity (last update, battery, health)

And I will probably keep iterating on the name too. Right now, **Freedom Clock** is the best fit because it says the quiet part out loud:

Bitcoin isn’t just a network. It’s a tool for *reclaiming your time*.

---

### Freedom has more than one meaning

"Freedom" is not just one thing. People chase different versions of it:

- **Time freedom:** you control your schedule and how you spend your days.
- **Location freedom:** you can live/work from where you prefer (digital nomads are the classic example).
- **Financial freedom:** you can cover your life and spend on what matters without constant money stress.
- **Any combination:** most people want a mix of these, not just one.

### A deeper kind of freedom: the courage to be disliked

In *The Courage to Be Disliked*, freedom is framed differently: it starts when you allow yourself to be disliked. Not because you want conflict, but because living honestly means you won’t satisfy everyone’s expectations.

The moment you stop optimizing for approval and start listening to what you truly want from life, you become harder to control — and you begin to feel genuinely free.

---

## Get the code

The full build (Arduino sketch, wiring/pins, MQTT topics, and setup instructions) is open-source on GitHub:

- Freedom clock: https://github.com/mr21free/freedom_clock_heltec_vme213
- Block clock: https://github.com/mr21free/bitcoin_blockclock_heltec_vme213

---

## What you can do

### Beginner

- Don’t start with “all the metrics.”
- Start with **one question you want to answer every day**.
- Build a calm display for that question (hardware or software).
- Keep it visible for 30 days.

### Advanced

- Treat privacy as a feature.
- Avoid turning personal data into something visible to strangers, guests, or cameras.
- Prefer ranges or progress indicators over exact numbers.
