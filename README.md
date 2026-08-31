# Siya Gupta — Portfolio

> Personal portfolio for **Siya Gupta**, a full-stack developer and cybersecurity student focused on building secure, production-ready digital experiences.

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-Visit%20Site-111827?style=flat-square)](https://siyaagupta.lovable.app)
[![GitHub](https://img.shields.io/badge/GitHub-siyagupta3103-111827?style=flat-square&logo=github)](https://github.com/siyagupta3103)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111827)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)

## Overview

This repository contains the source code for Siya Gupta's personal portfolio website. It presents her background, education, experience, projects, credentials, career goals, and contact information in a responsive single-page experience.

The portfolio is designed around a clean editorial aesthetic with subtle motion, interactive cards, responsive layouts, and a security-focused developer identity.

## Highlights

- Responsive portfolio experience for desktop, tablet, and mobile
- Sections for About, Education, Experience, Projects, Credentials, Impact, Goals, and Contact
- Animated reveals and interactive hover states
- Custom typography using Inter, Bebas Neue, and JetBrains Mono
- Semantic HTML and accessible interactive elements
- Client-side routing with TanStack Router
- Type-safe React + TypeScript codebase
- Vite-powered development and production builds

## Tech Stack

| Layer | Technology |
| --- | --- |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 4 |
| Routing | TanStack Router |
| Build tool | Vite |
| Icons | Lucide React |
| Package manager | Bun |
| Code quality | ESLint + Prettier |

## Project Structure

```text
siyaagupta/
├── public/                 # Static assets and portfolio imagery
├── src/
│   ├── components/         # Reusable UI components
│   ├── content/            # Portfolio page content
│   ├── hooks/              # Reusable React hooks
│   ├── lib/                # Shared utilities and helpers
│   ├── routes/             # TanStack Router routes
│   ├── router.tsx          # Router configuration
│   ├── server.ts           # Server entry point
│   ├── start.ts            # Application entry point
│   └── styles.css          # Global styles and design tokens
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ or a current LTS release
- [Bun](https://bun.sh/) recommended for the lockfile and scripts

### Installation

```bash
git clone https://github.com/siyagupta3103/siyaagupta.git
cd siyaagupta
bun install
```

### Run locally

```bash
bun run dev
```

Open the local URL shown by Vite in your terminal.

### Production build

```bash
bun run build
```

To preview the production build locally:

```bash
bun run preview
```

### Quality checks

```bash
bun run lint
bun run format
```

## Deployment

The portfolio is deployed at:

**https://siyaagupta.lovable.app**

The repository is connected to the deployment workflow, so keep the `main` branch in a working state when publishing changes.

## Design Direction

The portfolio intentionally combines:

- **Editorial typography** for strong visual hierarchy
- **Minimal borders and spacing** for a polished, modern layout
- **Monospace accents** for a technical/cybersecurity feel
- **Motion and hover states** that add depth without distracting from the content
- **Responsive behavior** so the experience remains usable across screen sizes

## Author

**Siya Gupta**  
Full-Stack Developer & Cybersecurity Student

- GitHub: https://github.com/siyagupta3103
- Portfolio: https://siyaagupta.lovable.app

## License

This repository contains a personal portfolio and its source code. Unless otherwise stated, the content, imagery, and personal branding are not licensed for redistribution.
