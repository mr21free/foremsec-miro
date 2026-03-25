---
title: I Got Hacked — Here Is What I Changed and Why I Sleep Better Now
description: "I got hacked and it changed how I think about personal security. This is the framework I built — layered defenses, separated identities, and practical paranoia that works without making daily life unbearable."
pubDate: 2026-03-25
updatedDate: 2026-03-25
heroImage: ../../assets/blog-privacy.png
author: Miro Remias
draft: false
tags:
  - security
  - privacy
  - bitcoin
  - self-custody
  - opsec
---

There is a specific kind of silence that follows the moment you realize you have been compromised.

No alarm goes off. No red screen. No Hollywood dramatic music. Just a quiet, creeping awareness that something is wrong — a session you did not start, a notification you did not trigger, a file that moved when you were not looking.

That silence is the most dangerous part. Because by the time you notice, the damage is already done.

I got hacked. And it changed everything about how I think about personal security.

This is not an article about fear. It is about what I built afterward — a framework of layered defenses, separated identities, and practical paranoia that lets me sleep at night without making daily life unbearable.

---

## The Threat Is Not What You Think

Most people imagine hackers in dark rooms writing code. The reality is far less cinematic and far more effective.

The majority of successful attacks do not start with malicious code. They start with a conversation. A message. A phone call that feels just real enough.

Social engineering — manipulating people into giving up access, information, or control — now drives the bulk of security incidents. In 2025, social engineering was responsible for over 60% of crypto-related security incidents, according to multiple industry reports. That number is growing. And it is not limited to crypto. Bank accounts, email, cloud storage, investment platforms — everything is a target.

Here is what the attacks actually look like today:

**Fake job interviews.** State-sponsored groups and organized criminals create entire fake companies — complete with websites, LinkedIn profiles, and GitHub repositories. They reach out with attractive job offers, conduct what feels like a real interview process, and then ask you to download a coding test, run a project file, or install a tool. The moment you execute that code, your device is compromised. Your browser sessions, passwords, crypto wallets, and files are silently exfiltrated. This is not hypothetical — Microsoft, Google, and multiple security firms have documented active campaigns running exactly this playbook throughout 2025 and into 2026.

**Phishing that no longer looks like phishing.** The days of obvious misspelled emails are fading. AI-generated phishing messages now match the tone, formatting, and context of real communications. They arrive as SMS, email, WhatsApp messages, and even calendar invites. Some impersonate your bank. Others impersonate government agencies. The best ones impersonate people you know.

**Phone calls from people who are not who they say they are.** Someone calls claiming to be from your bank's fraud department. They know your name, your account details, and the last transaction you made. They create urgency — "your account is being accessed right now, we need to verify" — and walk you through steps that hand them control. With AI voice cloning, these calls can now sound like anyone. Your colleague. Your partner. Your parent.

**Impersonation of family and friends.** A message arrives from someone you trust. The profile picture is right. The writing style is close enough. They need help urgently — a transfer, a password, access to something. It is not them.

These are not edge cases. They are the mainstream attack vectors right now. And they are getting better every month.

---

## What Actually Happens When They Get In

In most cases, the goal is not to break into a vault. It is to get you to open the door yourself.

The typical chain looks like this: you are tricked into downloading software, running a script, clicking a link, or granting access. That action compromises your device. From there, the attacker harvests everything they can reach — browser sessions (which means every service you are logged into), saved passwords, authentication tokens, files on your desktop and cloud, crypto wallet data, and keystroke logs.

**If you have a hot wallet on your phone or computer, it is gone.** There is no recovery. Crypto transactions are irreversible. If the attacker finds wallet files, seed phrases, or active sessions to exchanges, the funds move in seconds.

But it is not only about crypto. They can drain bank accounts through compromised sessions. They can steal your identity through passport scans and tax documents sitting in your downloads folder. They can lock you out of your own email, which is the master key to resetting every other account you own.

The damage scales with how much of your life lives on the device they compromised.

---

## Why I Changed Everything

I got hacked. The details do not matter for this article — what matters is what it taught me.

Before it happened, I thought I was careful. I was technical. I knew the risks in theory. But theory and practice are different countries, and I was living in theory.

The hack was not sophisticated. It was social engineering. Someone exploited a moment when I was not fully paying attention, and that was enough.

After that, I sat down and asked myself a hard question: *if someone compromised any single device I own right now, what could they reach?*

The answer was uncomfortable. Too much. Way too much.

So I rebuilt everything. It took about a month. It was painful, tedious, and at times felt absurd. But when it was done, I had something I did not have before: a setup where no single point of failure could unravel my entire digital life.

---

## The Attacker's Playbook — What to Watch For

Before I describe what I built, it helps to understand how these attacks work psychologically. Because the technical part is almost irrelevant — the attack happens in your head before it happens on your device.

**Urgency.** The single most effective tool in social engineering. "Your account is being accessed right now." "This offer expires in 10 minutes." "We need to verify your identity immediately or your account will be locked." Urgency bypasses your critical thinking. It makes you act before you evaluate. Every time you feel rushed, that is the moment to stop.

**Isolation.** Attackers want you alone in the decision. "Do not tell anyone about this call — it is a security protocol." "Keep this confidential until the investigation is complete." The moment someone asks you to keep a security interaction secret from the people you trust, you are being manipulated.

**Authority.** They impersonate people and institutions you respect — your bank, the police, a government agency, your employer, a well-known company. Authority creates compliance. You follow instructions because the source seems legitimate.

**Familiarity.** Impersonating someone you know exploits the deepest shortcut in human psychology — trust. A message from a friend asking for help does not trigger the same scrutiny as a message from a stranger.

**Too good to be true.** The job offer that pays twice market rate. The airdrop that requires "just one click." The investment opportunity with guaranteed returns. If it feels too generous, it is not generosity — it is bait.

If you learn to recognize these patterns, you can stop most attacks before they start. Not because you are smarter than the attacker, but because you refuse to play the game on their terms.

---

## The Framework I Built

What follows is not a step-by-step tutorial. It is the set of principles and decisions I made, described at a level that lets you adapt them to your own situation. My OPSEC rules prevent me from detailing exact tools and configurations — and that is intentional. A security setup that is publicly documented in detail is not a security setup. It is a target.

### Start With Cold Storage

The first and most important rule: **never store meaningful amounts of crypto in a hot wallet on a device you use daily.** Not on your phone. Not on your laptop. Not on a desktop that connects to the internet.

If your long-term Bitcoin holdings are in cold storage — hardware wallets, offline signing devices, air-gapped setups — then even a full device compromise cannot touch them. The attacker gets your browser sessions, your files, maybe your email. They do not get your Bitcoin.

Cold storage is not a convenience. It is a firewall between everything that can be hacked and everything that matters most.

I covered custody in detail in a previous post:

https://miro.foremsec.com/blog/buying-bitcoin-is-easy-custody-is-the-problem-exchange-to-multisig/

### Categorize Everything

One of the most useful things I did was sort every tool, service, and account I use into four categories:

**ADMIN** — infrastructure-level tools that, if compromised, would cascade into everything else. Think: password manager, VPN, custom domain, authenticator app, primary encrypted email. These get the highest level of protection. Different credentials, hardware key authentication, isolated access.

**ID** — important personal and professional accounts. Professional networks, primary cloud services, communication platforms. These are valuable but contained — losing one does not cascade into losing others.

**COMMS** — day-to-day services. Newsletters, e-commerce, food delivery, streaming. Useful but replaceable. Protected with unique passwords but not with the same intensity as the first two tiers.

**JUNK** — anything that requires an account but does not deserve real credentials. Throwaway email, minimal information, no connection to anything important.

Each tier gets a different email address, a different level of authentication, and a different level of attention. The higher the tier, the more layers of protection. This separation means that even if a COMMS-level account is breached, the attacker finds nothing that leads them upward.

### Two Phone Numbers

I have two phones. One is a regular smartphone for daily use — browsing, messaging, apps, the usual. The other is a simple device with limited functionality. No camera. No apps. No smartphone operating system.

The second number is connected to critical services — banking, financial platforms, essential cloud accounts. It is never shared publicly. It never appears in any online profile, any form, any message to a stranger.

If an attacker compromises your phone number through a SIM swap or social engineering attack on your carrier, they get access to every account that uses that number for two-factor authentication. By separating the numbers, the most valuable accounts are behind a number that the attacker does not even know exists.

### One Password Manager, One Authenticator

Every password is unique, randomly generated, and stored in a single password manager. No reused passwords. No "I will remember this one." No passwords stored in browsers.

Every service that supports it gets two-factor authentication through a single authenticator app. The authenticator is backed up regularly and encrypted.

For the most critical services — ADMIN tier — authentication also requires a hardware security key. Multiple copies of the key exist, stored in separate geographic locations. One for daily use, the others as backups in case the primary is lost or damaged.

This means that even if someone gets my password (from a breach, a phishing attempt, or a compromised database), they still cannot access the account without the second factor. And even if they somehow intercept the second factor, the hardware key adds a third layer that requires physical possession.

### Email Architecture

I use multiple email addresses from different providers. But none of them are the addresses I give to services.

Instead, I use a personal domain and create aliases. Every service gets a unique alias that forwards to the actual mailbox. The service knows me as `something@mydomain.com`. It does not know which provider actually receives that email.

This has three benefits. First, if a service is breached and my email address leaks, the attacker gets an alias — not the actual mailbox address. They do not know what to hack. Second, if a provider is compromised or goes offline, I redirect the alias to a different provider. I own the domain, so I control where the email goes. Third, I can instantly see which service leaked my address by checking which alias is receiving spam.

Using single sign-on (SSO) through a major provider is convenient. But it is a single point of failure. If that provider account is compromised, every service connected to it is compromised. I avoid it for anything above the COMMS tier.

### Browser Isolation

I use multiple browser profiles. The profile I use for banking and financial services is configured to delete all data — history, cookies, sessions, cached credentials — every time the browser closes.

This means that even if malware captures a snapshot of my running browser, it finds nothing from previous sessions. Every login is fresh. Every session is temporary. There is nothing to steal from a profile that does not remember anything.

### VPN on Everything

Every device that connects to a network runs through a VPN. Phone, computer, even home devices where possible. This is not about hiding from governments — it is about preventing anyone on the same network from intercepting traffic, and about reducing the amount of metadata that leaks to service providers and ISPs.

### Encrypted Cloud and Physical Backups

Sensitive files never go to the cloud unencrypted. Anything that matters — documents, records, backup files — is encrypted locally with strong encryption before it is uploaded anywhere. The encryption password is separate from any account password and is not stored digitally.

Backups also exist on physical drives stored in separate locations. Cloud services can be hacked, can change their terms, can go offline. Physical drives in your control, distributed across locations, provide a layer that does not depend on anyone else staying honest or online.

### Protect the Whole Family

This is the part most people miss. You can build an impenetrable setup for yourself, and then your partner clicks a link, your child installs an app, or a family member reuses a password — and the attacker gets in through them.

I extended the core principles to everyone in my household. Not at the same paranoia level — that would be unsustainable — but the basics: unique passwords, a password manager, two-factor authentication on important accounts, awareness of phishing, and a simple rule: *if something feels wrong, stop and ask before you click.*

Family members are also potential targets for impersonation attacks. We established verbal verification — simple things that only we would know — so that if a message or call claims to be from a family member and asks for something unusual, we can verify before acting.

### Question Every Device

This one is easy to overlook. You add a smart speaker, a security camera, a home automation hub, a local AI server — each one is a potential entry point. Every device on your home network that connects to the internet is a surface an attacker can probe.

For each device, ask: what data does it have access to? What network segments can it reach? What happens if it is compromised? If you are running anything that processes sensitive data — especially a local AI setup or a Bitcoin node — isolate it. Network segmentation, access controls, and regular firmware updates are not optional.

### Ship Sensitive Products Elsewhere

If you order hardware that signals you hold crypto — hardware wallets, security keys, specialized equipment — consider having it delivered to a location that is not your home address. Delivery databases leak. Shipping records get compromised. If an attacker can correlate "this person ordered three hardware wallets" with a physical address, you have created a target.

### Home Security

This one crosses from digital into physical, but the boundary is thinner than people realize. Physical attacks on crypto holders — sometimes called "wrench attacks" — increased significantly in 2025, with recorded incidents nearly doubling compared to previous years.

A home alarm system, cameras, and physical security measures are worth the investment. But the more important principle is: do not keep anything at home that, if stolen, means you lose everything. Backups in other locations, multisig setups that require multiple keys from multiple places, and geographic distribution of critical materials mean that even a physical intrusion does not result in total loss.

---

## The Hardest Part Is Maintenance

Building the setup was one thing. Living with it is another.

Following your own rules every single day is hard. There are moments when you want to skip a step, reuse a password, log in from the wrong browser profile, or skip the VPN because the connection is slow.

Maintaining discipline is the real cost of this framework. Not the money. Not the hardware. The daily decision to do the slightly harder thing because the easier thing has consequences you cannot undo.

I review my setup periodically. I check for accounts I no longer use. I rotate what needs rotating. I make sure the family is still following the basics. It is not dramatic. It is not fun. But it is the price of sleeping well.

---

## Define Your Strategy, Then Do the Work

If there is one takeaway from this entire journey, it is this: **most people will not do this until something goes wrong.** That is human nature. The threat is abstract until it is personal.

But you do not have to do everything at once.

Start by asking one question: *what is the most valuable thing I have digitally, and how well is it protected?*

If the answer makes you uncomfortable, fix that one thing. Then move to the next most valuable. Then the next. Build outward from what matters most.

The full audit I did took about a month. I went through every account, every password, every email address, every device, every file storage location. I categorized everything. I migrated what needed migrating. I deleted what no longer served a purpose.

It was tedious. It was frustrating. There were accounts I had forgotten existed. There were passwords I had reused without realizing it. There were files in cloud storage that had no business being there.

But when it was done, I had something I had never had before: clarity. I knew exactly what I had, where it was, and how it was protected. And I knew that no single failure — no single compromised device, no single breached service — could take everything down.

---

## What You Can Do

### If you are just getting started

Pick the most valuable thing you own digitally. Bitcoin? Bank access? Email? Check how it is protected right now. If the answer is "a password I also use elsewhere," fix that today. One password manager. One unique password. One step.

Then ask yourself: if someone stole my phone right now, what could they access? The answer will tell you where to focus next.

### If you are ready for the full audit

Map everything. Every account, every device, every email, every file. Categorize into tiers based on value. Assign protection levels. Separate identities. Set up hardware keys for critical services. Encrypt your sensitive files. Extend the basics to your family.

It will take weeks, not hours. It will be uncomfortable. You will find things you wish you had fixed years ago.

Do it anyway. The clarity on the other side is worth every minute.

---

## Disclosure

*I got hacked. That part is real. Specific details about the incident are intentionally omitted for security reasons.*

*Some details in this article are intentionally generalized. The principles are real. The exact configurations are kept vague on purpose — because a detailed public blueprint of your security setup is not a security setup. It is a vulnerability.*

