# Raised Without Limits — Book Landing Page

A landing page for *Raised Without Limits* by Dr. Grace Talatu Marshall — a memoir about love, belief, and boundless possibility.

## What's here

| File | Purpose |
|------|---------|
| `index.html` | Single-page site (hero, book info, launch event, about, contact) |
| `styles.css` | All styles |
| `script.js` | Contact form handling |
| `assets/` | Book cover and author photo |

## Running locally

Open `index.html` directly in a browser — no build step required.

## Deployment

The site uses [Netlify Forms](https://docs.netlify.com/forms/setup/) for the contact/RSVP form. Deploy to Netlify by connecting this repository; the `data-netlify="true"` attribute on the form will be picked up automatically.

## Why it's built this way

This is a time-sensitive landing page with a hard deadline (a July 2026 book launch), so the priority was speed to live over engineering elegance. Plain HTML/CSS/JS means there's nothing to install, nothing to compile, and nothing to break — anyone can open a file and see exactly what the site looks like. Netlify Forms handles the RSVP/contact form without needing a server or a third-party form service with its own account and API keys. A single-page layout keeps visitors moving through the content in one scroll rather than bouncing across routes. The whole thing can be handed off, edited, or deployed by someone who has never touched a JavaScript framework.

## Launch Event

**Sunday, July 18, 2026 at 3:00 PM**  
Suya Hut — 11728 West Airport Blvd, Suite 1600, Stafford, TX 77477
