# Glassmorphism Portfolio Template

A premium glassmorphism portfolio template built with **React, Vite, Tailwind CSS, Framer Motion, and lucide-react**.

Designed for high-end digital marketplaces with futuristic UI, layered glass panels, and polished motion systems.

## Project Overview

This template includes:

- Glassmorphism UI system with blur, glow, and layered gradients
- Animated hero dashboard + bento-style overview section
- Scroll reveal animations and hover-lift micro interactions
- Modular sections for skills, projects, experience, and testimonials
- SEO-ready meta tags and full favicon support
- Fully responsive layout for mobile, tablet, desktop, and large screens
- Data-first customization via dedicated config files in `src/data`

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react icons

## Installation

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Customization Guide

All user-editable portfolio content is stored in:

- `src/data/profile.js`
- `src/data/overview.js`
- `src/data/projects.js`
- `src/data/skills.js`
- `src/data/experience.js`
- `src/data/testimonials.js`

### What to edit in each file

- `profile.js`
  - Name, role, intro, headline, location, availability
  - Contact details and social links
  - Navigation labels
- `overview.js`
  - Bento-style dashboard cards and KPI values
- `projects.js`
  - Project title, description, tech stack, demo/GitHub links
- `skills.js`
  - Skill groups, descriptions, and icons
- `experience.js`
  - Timeline roles, companies, durations, and summaries
- `testimonials.js`
  - Client quotes, names, and titles

## Icons & SEO

- Meta tags and social previews live in `index.html`
- Favicons and social share image are in `public/`

## Folder Structure

```text
src/
  components/
    Reveal.jsx
    SectionHeading.jsx
    iconMap.js
    motion.js
  data/
    experience.js
    overview.js
    profile.js
    projects.js
    skills.js
    testimonials.js
  sections/
    About.jsx
    Contact.jsx
    Experience.jsx
    Footer.jsx
    Hero.jsx
    Navbar.jsx
    Overview.jsx
    Projects.jsx
    Skills.jsx
    Testimonials.jsx
  styles/
    animations.css
  App.jsx
  index.css
  main.jsx
```

## Responsive Targets

Template is designed and tested for:

- 320px
- 375px
- 768px
- 1024px
- 1440px

## Marketplace Readiness Notes

- Clean, reusable component architecture
- Fully data-driven content management
- Glassmorphism UI system with consistent motion language
- Reduced-motion support baked in

