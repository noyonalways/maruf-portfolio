# Content Guide

How to update the website text — no coding needed. You only ever change the
words **between the quote marks**. Everything else stays exactly as it is.

> **Golden rules**
>
> 1. Only change text between `"quotes"`.
> 2. Never delete the quotes `"` or the comma `,` at the end of a line.
> 3. Save the file, then refresh the site to see your change.

---

## 1. Business details, contact info & social links

**File:** `src/content/site.ts` — section **1. BUSINESS DETAILS**

Change your name, job title, email, phone number, address and social profile
links here. These appear across the whole site.

| What you see on the site | Field to edit |
| --- | --- |
| Your name everywhere | `name` |
| Short name (browser tab, app icon) | `shortName` |
| Job title | `role` |
| Email | `email` |
| Phone number (as displayed) | `phone` |
| Phone number (for the click-to-call button) | `phoneHref` |
| WhatsApp link | `whatsapp` |
| Office address | `address` |
| Social links | `social` |
| Year you started | `experienceSince` |

---

## 2. Your photo

**File:** `public/maruf-mondol.png`

Replace that file with your real photo (a portrait crop, ideally around
800 × 1000 pixels), keeping the **same file name**. That's it.

Prefer a different file name? Drop the new image into the `public/` folder and
change the `photo` line in `src/content/site.ts`:

```ts
photo: "/your-new-file.jpg",
```

---

## 3. Homepage hero (the first thing visitors see)

**File:** `src/content/site.ts` — section **3. HOMEPAGE HERO**

- `headline` — the big sentence. The last few words get the colour gradient.
- `headlineHighlight` — the coloured part of the headline.
- `intro` — the paragraph underneath.
- `primaryCta` / `secondaryCta` — the two buttons (`label` = button text,
  `href` = where it links, e.g. `/contact`).
- `rating` — the small trust line under the buttons.

---

## 4. About page, mission, values, process, FAQs

**File:** `src/content/site.ts`

| Section | What it changes |
| --- | --- |
| **4. ABOUT PAGE** | The About heading, your story paragraphs, the pull-quote and the skill bars |
| **5. MISSION & VISION** | The two cards on the About page |
| **6. VALUES** | The "what I stand for" cards |
| **7. WHY CHOOSE ME** | The differentiator cards |
| **8. MY PROCESS** | The numbered steps |
| **9. TESTIMONIALS** | Client quotes |
| **10. HEADLINE STATS** | The four big numbers |
| **11. CLIENT NAMES** | The scrolling logo strip |
| **12. MY JOURNEY** | The timeline on the About page |
| **13. FREQUENTLY ASKED QUESTIONS** | The FAQ list |
| **14. CALL-TO-ACTION BAND** | The coloured box near the bottom of pages |
| **15. CONTACT PAGE** | The Contact page heading and intro |

To **add** a card, testimonial or FAQ, copy an existing `{ ... }` block
(including the comma after it), paste it, and edit the words. To **remove** one,
delete its whole `{ ... }` block.

> Icons: in Values, `icon` must be one of `shield`, `sparkles`, `users`,
> `trending`. In "Why choose me", it must be one of `target`, `gauge`, `layers`,
> `heart`.

---

## 5. Services

**File:** `src/content/services.ts`

Each service is one block. Edit the text between the quotes. The important
fields are explained at the top of the file.

**To add a new service**, copy an entire `{ ... }` block (from the `{` after
`services: Service[] = [` down to the matching `},`), paste it after the last
service, then change the values. Give it a unique `slug` — short, lowercase,
with dashes instead of spaces (for example `email-marketing`).

---

## 6. Blog posts

**Folder:** `src/content/blogs/` — one file per article.

To add an article, create a new file ending in `.md` (for example
`my-new-article.md`). To edit an article, open its file. To remove one, delete
the file.

### The top of the file (between the two `---` lines)

```
---
title: How to Grow With Email Marketing
description: A one-sentence summary used in search results.
excerpt: The short teaser shown on the blog cards.
date: 2026-09-21
category: digital-marketing
tags: email, automation, retention
readingMinutes: 6
featured: true
cover: ocean
icon: megaphone
---
```

| Field | Notes |
| --- | --- |
| `title` | The article headline |
| `description` | One sentence for search engines |
| `excerpt` | The teaser on the blog list (you can reuse the description) |
| `date` | Format: `YYYY-MM-DD` |
| `category` | One of: `seo`, `digital-marketing`, `web-development`, `automation`, `branding` |
| `tags` | Separate with commas |
| `readingMinutes` | A whole number |
| `featured` | `true` to show it on the homepage (optional) |
| `cover` | One of: `ocean`, `ember`, `royal`, `forest`, `sunset`, `lime` |
| `icon` | One of: `megaphone`, `palette`, `code`, `workflow` |

### The body (everything after the second `---`)

Plain, readable Markdown:

```
## A section heading

A normal paragraph of text.

### A smaller heading

- A bullet point
- Another bullet point

1. A numbered step
2. Another step

> A highlighted tip box.
> [!NOTE] Optional title
> The text inside the tip box.

> A quote line
> — Attribution name

```json
{ "a": "code sample" }
```

---
```

### FAQ block (optional)

Add questions at the very bottom of the file. They also help your Google
listing.

```
:::faq
Q: How long does it take?
A: Usually two to four weeks.

Q: Do you offer support?
A: Yes, for 30 days after launch.
:::
```

---

## 7. Previewing your changes

Ask your developer to run the site locally (`pnpm dev`) or deploy it. Once the
site rebuilds, your changes appear.

## 8. If something looks broken

- A missing quote `"` or comma `,` is the most common cause.
- Undo your last change (`Ctrl + Z`) and save again.
- If you are stuck, share the file with your developer — the mistake is almost
  always on the line you just edited.
