---
title: From Block Clock to Freedom Clock - The Metric That Finally Clicked
description: I built a Bitcoin block clock for protocol time. Then rebuilt it as a Freedom Clock that measures what humans actually feel - saved time and runway.
pubDate: 2026-02-12
updatedDate: 2026-02-12
heroImage: ../../assets/blog-block-clock.png
author: Miro Remias
tags:
  - bitcoin
  - hardware
---

## The moment the “block clock” stopped working for me

Every hardcore Bitcoiner should have a block clock. Period.

So I started doing what we all do: research. I looked at what’s out there, compared options, and tried to imagine which one I’d actually live with.

And I bounced off most of them.

Some were great-looking but felt like expensive furniture. Some were locked into a closed ecosystem. Some were bigger than what I wanted on a desk. And in a few cases, the price was high enough that I caught myself thinking: *wait… why am I paying this much for a glorified screen?*

So I did the predictable builder thing: **I decided to build my own.**

How hard can it be, right?

I already had a Bitcoin node, and I was already generating Bitcoin-related signals on my local network. Publishing a few network stats and consuming them on a little display shouldn’t be a big deal.

Then I found exactly what I needed: a small e-ink board with Wi-Fi and the option to run on a battery.

The goal was simple: a calm, always-on Bitcoin clock I could place wherever I wanted, without charging it all the time.

That’s how the first version started.

I built a Bitcoin block clock because I love the idea of **protocol time**.

Bitcoin clicks forward like a charm: block by block, roughly every ~10 minutes, indifferent to narratives.

A block clock makes that tangible.

You glance at it. No apps. No exchanges. No drama. Just: *the network is alive, and it keeps moving.*

![Block Clock](/images/posts/blog8_block_clock-sq.jpeg)
> Custom-built Block Clock.

And… after the novelty wore off, I ran into an annoying truth:

**My brain doesn’t live in blocks. It lives in time on this earth.**

When the screen said:

- “114,419 blocks to halving”

My brain didn’t feel grounded. It didn’t feel motivated. It felt… nothing.

It immediately translated it into:

> “Cool. So… a few years.”

That number is accurate. But it’s not *human-meaningful*.

---

## Bitcoin time vs human time

Bitcoin time is objective.

- block height
- issuance schedule
- difficulty adjustment
- halving cycles

Human time is emotional.

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

![Freedom Clock](/images/posts/blog8_freedom_clock-sq.jpeg)
> Portfolio value in units of freedom.

### What it shows (conceptually)

I’m keeping the exact implementation private on purpose (OPSEC), but I can share a screenshot with **sample values** (e.g., “free time” + BTC price) to show the idea without exposing anything sensitive.

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

That’s why this device finally clicked for me. (Bonus: I showed it to my wife and she understood it immediately — and said I finally built something useful, not just another technical gadget. 😄)

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

If the screen goes dark tomorrow, what would you actually miss?

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

And I’ll probably keep iterating the name, too. Right now, **Freedom Clock** is the best fit because it says the quiet part out loud:

Bitcoin isn’t just a network. It’s a tool for *reclaiming your time*.

---

### Freedom has more than one meaning

“Freedom” isn’t just one thing — people chase different versions of it:

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

https://github.com/mr21free/freedom_clock_heltec_vme213

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