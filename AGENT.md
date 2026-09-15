## 1. Techstack

> **Rule:** Ask first. If any techstack component is unspecified, ask **step by step with options** and suggest the best fit for the project.

| # | Question | Options | Default / Suggestion |
|---|----------|---------|----------------------|
| Q1 | Front-End | Next.js · React · TanStack Start | **Next.js** (TS, App Router) — *Q1.1: static-exportable + SSR?* |
| Q2 | Backend | Appwrite · Next.js + MongoDB · Firebase · other | *Let user write in* |
| Q3 | UI | Shadcn? If yes, which form lib? | **Shadcn** + **Formisch** |
| Q4 | Client State | Signals · Zustand · other | **@preact/signals** |
| Q5 | Server State | Yes/No → which manager? | **TanStack Query** |
| Q6 | Schema Validation | Valibot · Zod · other | **Valibot** |
| Q7 | Package Manager | Bun · npm · pnpm · yarn | **Bun** |
| Q8 | Dark Mode | Yes / No | **No (light only)** |

### Confirmed Stack
- **Front-End** — Next.js (TypeScript, App Router), Tailwind CSS
- **Backend** — Appwrite + Next.js
- **UI** — shadcn/ui + Tailwind CSS · Form: **Formisch**
- **Client State** — `@preact/signals`
- **Server State** — TanStack Query
- **Validation** — Valibot
- **Package Manager** — Bun
- **Dark Mode** — No (light only)

---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## 2. Front-End First

For every new feature that *might* need a backend, **ask the user first**:

> "Should I code frontend + backend together, or frontend-only for now?"

- **Frontend-only / frontend-first** → build UI with **minimal dummy data**. No real backend calls yet.
- **Backend request later** → implement backend, then wire it into the existing frontend.

### Shadcn Install Workflow
When using shadcn:
1. List every shadcn component the feature needs.
2. Provide the exact `bun` install command.
3. Ask the user: **install manually, or include it as part of the build?**

---

## 3. Schema-First (Backend Builds Only)

When the user asks to build backend, **ask first**:

> "Do you already have a schema, or should we brainstorm one together?"

**If not ready:**
1. Propose the best-optimized schema for the feature.
2. Guide step-by-step.
3. Provide a **bulk-import script** to create all tables/documents in one CLI run.

---

## 4. Directory Structure (Strictly Follow)

Use full-path notation. Create folders **only when a file needs them** — no empty scaffolding.

```
app/
shared/
shared/components/
shared/components/layouts/
shared/components/ui/
shared/config/
shared/lib/
shared/lib/hooks/
shared/lib/utils/
shared/providers/
shared/store/
shared/styles/
features/
public/
```

### Layer Rules

**`app/`** — Page composition & routing only. No business logic.

**`shared/`** — App-level config and shared code (feature-agnostic).
- `shared/components/layouts/` — Navbar, sidebar, shell, etc.
- `shared/components/ui/` — shadcn components + shared custom primitives.
- `shared/config/` — Site metadata, fonts, app constants.
- `shared/lib/<service>/` — One directory per service (e.g. `shared/lib/appwrite/`, `shared/lib/mongodb/`).
- `shared/lib/hooks/` — Shared non-feature hooks.
- `shared/lib/utils/` — Shared non-feature utilities.
- `shared/providers/` — React context providers.
- `shared/store/` — Global client signal state.
- `shared/styles/` — `globals.css` + `theming.css`.

**`features/`** — Self-contained feature modules (can have sub-modules). Each feature owns its own `components/`, `hooks/`, `lib/utils/`, `lib/schema/`, `queries/`, etc. — **create only what's needed**.

### Single-File Rule
If a category needs only **one file**, skip the folder and use the suffix pattern:

```
features/users/users.hook.ts     ✅
features/users/users.schema.ts   ✅
features/users/users.query.ts    ✅
features/users/users.util.ts     ✅
```

Only create `hooks/`, `utils/`, `schema/`, `queries/`, `components/` subfolders when there are **two or more** files in that category.

**`public/`** — Static assets.

---

## Non-Negotiables
1. Ask before assuming any techstack piece.
2. Frontend-first by default for new features — confirm before touching backend.
3. Shadcn: always list components + `bun` command + confirm manual vs. automated.
4. Backend: always confirm schema readiness before coding.
5. No empty folders — create on demand.
6. Single-file categories → `name.category.ext`, not a folder.
7. Every service lives in its own `core/lib/<service>/` directory.