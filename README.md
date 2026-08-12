<div align="center">

![Body & Mind Hamburg](https://pub.hyperagent.com/api/published/pbf01KZTAYY52_W523YC99K5MT32JZ/80e44882-0222-401a-900e-dbb8b4ffb66c.png)

# Body & Mind Hamburg

**Premium physiotherapy and mental performance institute — web platform with booking, rehabilitation tracking, and patient management.**

[![Live](https://img.shields.io/badge/Live-bodyandmindhamburg.com-3B82F6?style=flat-square&logoColor=white)](https://www.bodyandmindhamburg.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Built by Naga Codex](https://img.shields.io/badge/Built%20by-Naga%20Codex-00FF88?style=flat-square)](https://nagacodex.cloud)

</div>

---

## Overview

Full-stack web platform for Body & Mind Hamburg — a premium physiotherapy and mental performance clinic. Built to handle the complete patient journey from first visit to ongoing rehabilitation tracking.

### Key features

- **Symptom pinpoint selector** — interactive body map for patients to identify and describe pain locations before appointments
- **Calendar scheduling** — real-time availability and appointment booking with confirmation flows
- **Encrypted progress records** — secure patient rehabilitation tracking and session history
- **Multilingual support** — German and English via `next-intl`
- **Performance optimised** — WebP image pipeline, GSAP animations, AOS scroll reveals

---

## Built for

**body & mind — Natalie Zimmermann, Hamburg.** A premium private training and recovery studio offering one-to-one boxing and kickboxing coaching, physiotherapy, and mental performance work. The studio's clients book privately and train in closed sessions, so the site had to read as a serious clinical practice rather than a gym — calm, precise, and trustworthy at first glance.

### The brief

Replace an inquiry process that ran on phone calls and loose messages with a platform that carries a client from first contact through to ongoing rehabilitation:

- A first-visit flow where a client can pinpoint where it hurts before they ever walk in, so the first session starts with information rather than intake questions
- Real-time booking for privattraining and Erstgespräch slots, with confirmation handled end to end
- Session-by-session progress records, held securely, so recovery is visible over weeks rather than remembered session to session
- German and English throughout, for an international client base in Hamburg
- Performance and polish as a brand statement — the site is the studio's shopfront

### Delivered by Naga Codex

Full scope: product architecture, interface design, front-end build, booking and scheduling flows, the rehabilitation tracking layer, the bilingual content system, image pipeline and performance work, and production deployment. Roughly two and a half months from brief to live.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3 + Framer Motion + AOS |
| i18n | next-intl |
| UI components | Headless UI + Iconify |
| Date handling | date-fns |
| Notifications | react-hot-toast |
| Image optimisation | sharp + custom WebP pipeline |
| Deployment | Vercel |

---

## Project structure

```
src/
  app/              Next.js App Router pages & layouts
  components/       Reusable UI components
public/             Static assets
messages/           i18n translation files (de, en)
scripts/            Image conversion utilities
```

---

## Built by

**[Naga Codex](https://nagacodex.cloud)** — Maurice Holda. Lead architect, design & front-end development. 2.5-month build from brief to production.

Interested in something similar? → [nagacodex.cloud](https://nagacodex.cloud)

---

<div align="center">

**[bodyandmindhamburg.com](https://www.bodyandmindhamburg.com) · [nagacodex.cloud](https://nagacodex.cloud) · Hamburg**

</div>
