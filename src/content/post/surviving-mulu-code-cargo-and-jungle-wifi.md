---
publishDate: 2026-11-23T15:00:00Z
updatedDate: 2026-11-23T15:00:00Z
author: Admin
title: 'Surviving Mulu: Code, Cargo, and Jungle Wi-Fi (Part 1)'
excerpt: 'What happens when a software engineer gets sent deep into the Borneo rainforest to run emergency network backup for an international executive delegation? Code, cargo, lightning strikes, and Starlink.'
image: ~/assets/images/blog/mulu_airborneo.jpg
category: Engineering
tags:
  - Mulu Sarawak tech setup
  - Starlink rainforest deployment
  - software company in Kuching
  - Multi-WAN mobile edge
  - event technical support Borneo
  - IT infrastructure Sarawak
metadata:
  canonical: https://www.microweb.my/clients/surviving-mulu-code-cargo-and-jungle-wifi/
  description: 'A behind-the-scenes look at how a Sarawak software engineer tackled mission-critical networking, cargo lifting, and Starlink setups in the Mulu rainforest for global executive leaders.'
---

*What happens when a software engineer is dispatched deep into the heart of the Borneo rainforest to run zero-downtime, mission-critical satellite and network infrastructure.*

---

## The "Muscle Provider" Setup

I run a software development firm in Sarawak. Most of my days are spent building web apps, fine-tuning databases, and designing backend logic. But when an international executive delegation gathered in the remote Mulu rainforest, our team was asked to back up the mission-critical internet infrastructure.

These guests were high-level global founders and business leaders. For people whose time is worth millions, a total connectivity blackout was out of the question. Even though I am a software guy, our team has a reputation for fast, on-the-spot problem-solving. We had spent months testing all four major Malaysian telcos—Maxis, CelcomDigi, U Mobile, and Starlink. We packed enterprise modems, TP-Link outdoor APs, and Omada multi-WAN load balancers alongside the Marriott hotel’s network. We thought we were fully prepared.

Then I landed at Mulu airport.

I brought two personal cargo boxes of networking hardware. Waiting on the tarmac were **22 massive air-freight crates** loaded with event gear, banners, walkie-talkies, stationery, and LAN cables etc. Heavy sound systems had already been brought upriver by longboats weeks before because remote rainforest logistics are brutal. With no transport crew around, my role changed in five minutes from *"software architect"* to *"airport muscle."*

![tons of cargo at Mulu Airport](~/assets/images/blog/cargo_mulu.jpg)

Thankfully, the Marriott concierge team rushed to the airport to haul crates alongside us. Everyone understood how much this gathering meant to Mulu and Sarawak.

---

## The Command Center & Roommate Surprise

We hauled everything into the Mulu Marriott ballroom, which became our primary command center.

When I finally reached my room, I met my roommate. He told me he played in a band called **At Adau**. Because I had spent the last several years buried in code updates and system design, I had zero clue who they were at the time. (Ezra from the band turned out to be an absolute legend—he even gave up his bed for me later that night when we ran out of space for the support crew).

Before resting, I dove straight into the tech setup:

* **Server diagnostics & network backbone checks:** Auditing local server responsiveness, verifying IP subnets, VLAN segregation, and bandwidth rate-limits so background cloud syncing wouldn't choke vital communications.
![Marriott Mulu networking setup](~/assets/images/blog/marriott_mulu_networking.jpeg)
* **Unified seamless Wi-Fi roaming:** Harmonizing all our auxiliary Access Points (APs) to broadcast under a unified, identical Wi-Fi SSID with 802.11k/v fast-roaming protocols. Whether an executive stepped from the boardroom onto the outdoor terrace, their devices handed off invisibly without dropping a single active Zoom call or session token.
* **Radio frequency (RF) & band tuning:** Meticulously calibrating balanced dual-band steering (pushing capable devices onto 5 GHz to keep the congested 2.4 GHz spectrum clean) alongside strict transmission power thresholds (`Tx power`). In dense setups, cranking Wi-Fi power to maximum is a rookie trap—it creates sticky clients and co-channel interference. We tuned radio power cell-by-cell so signals stopped neatly at timber partitions without screaming over one another.
* **Mobile Go-Box assembly:** Assembling and testing our two ruggedized **Mobile Go-Boxes** (each packed with three multi-carrier 4G modems, an Omada multi-WAN load balancer, and an enterprise outdoor AP).

The strategy was simple: **leapfrog**. Box A would run at the current venue, while Box B was already set up and tested at the next stop before guests arrived.

Then came our first real emergency.

---

## Lightning Strikes and the "IT Guy" Curse

The Mulu National Park ranger called with bad news: a lightning strike had fried their primary Starlink V4 power adapter the day before.

![Lightning strike on Starlink power adapter](~/assets/images/blog/lightning_strike_starlink.jpeg)

The Bat Observatory has zero cellular reception from any local telco. Without that dish, our high-density setup at the cave was dead in the water. We had to improvise fast. The ranger managed to track down an older backup Starlink V2 dish running at the park office and promised to hike it up to the observatory first thing in the morning.

That evening, the Marriott staff invited our crew to eat with them in the staff dining hall. That was when I realized many of them had traveled in from Marriott Miri just to reinforce the local team. The hospitality and teamwork were world-class.

Of course, working in tech comes with an inescapable curse: *if it has a chip inside, people expect the software guy to fix it.*

My night didn't end with networking:
* Clearing dried ink from a jammed printer head.
* Reprogramming event walkie-talkies.
* Troubleshooting executive laptops that refused to connect.
* Bridging photos between conflicting iPhone and Android formats.

![Marriott ballroom as command center](~/assets/images/blog/marriott_ballroom.jpg)

I crawled into bed exhausted, grateful to Ezra for the mattress.

---

## The 3km Hike That Felt Like 10km

At 6:00 AM, I was back in the ballroom running diagnostics. By 9:00 AM, I met the park’s head technician—who also serves as a Bomba Search-and-Rescue officer—at the Mulu National Park headquarters.

We ran firmware updates on the backup Starlink V2 dish right in the yard, packed our gear, and began the 3-kilometer trek into the rainforest toward the Bat Observatory. I run weekly in the city, but walking 3km on jungle planks with gear feels entirely different.

![trekking in the rainforest](~/assets/images/blog/mulu_trekking.jpg)

The installation went smoothly, and the satellite locked onto signal over the canopy. But hiking back took longer than planned. By the time I stepped back into the Marriott lobby, the guest convoy was arriving in 30 minutes.

To make things worse, our Mobile Go-Box suddenly refused to pass traffic.

Usually, it is plug-and-play. I opened the Omada management app, rebooted modules, checked routes, and saw the clock ticking down. You know that surreal feeling where the room goes silent and everything moves in slow motion? That was me.

I took a breath, traced the physical cables, unplugged the uplink patch lead between the load balancer and the AP, and clicked it back in.

Link lights flashed green. The speed test hit normal. The network was alive.

---

## Low Profiles and Rainforest Realities

The guests stepped out of their transport. There was no VIP fanfare or butlers with silver platters—just polite, low-profile founders traveling light.

I helped carry luggage up the walkways. Between the morning hike, the configuration panic, and the gear handling, I suddenly realized I hadn't eaten a single bite since waking up.

By 3:00 PM, duty called back at the Bat Observatory. This time, I wasn't just walking; I was pushing a heavy cargo trolley stacked with wireless audio transmitters and headsets so the delegation could hear the nature guide clearly without disturbing the wildlife. The 3km trek felt twice as long with wheels rattling over wooden boardwalks.

At 4:00 PM, the guests arrived and walked into the massive mouth of Deer Cave.

Ten minutes later, the sky darkened, and the classic Borneo rainforest downpour began. The park ranger looked at the rain, smiled, and broke the news:

> *"Bats don't fly in the rain."*
  
![Deer Cave Bat Observatory](~/assets/images/blog/bat_observatory.jpg)


---

**To be continued in Part 2...**
