# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
bunx --bun shadcn@latest add <component>
```

## User guide

1. Copy 'nextcn-starter` folder.
2. Insall all the packages `bun install` or `bun i`


## **Folder structure** 
```text
├── app/                               # Next.js App Router
│   ├── (home)/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api/                           # Route handlers (if needed)
│   ├── layout.tsx                     # Root layout
│   

├── features/                          # Domain-driven modules
│   └── [feature]/
│       ├── components/                # UI specific to this feature
│       ├── actions/                   # Server Actions (validated)
│       ├── services/                  # API / BaaS interaction layer
│       ├── queries/                   # React Query (ONLY if used)
│       │   ├── keys.ts                # Centralized query keys
│       │   ├── queries.ts             # useQuery hooks
│       │   └── mutations.ts           # useMutation hooks
│       ├── store/                     # Signals / client state
│       ├── schemas/                   # Zod schemas (source of truth)
│       ├── types/                     # TS types (only if not inferred)
│       ├── utils/                     # Feature-scoped helpers
│       ├── constants.ts
│       └── index.ts                   # Public API of feature

├── shared/                            # Truly global (used in 2+ features)
│   ├── components/
│   │   ├── ui/                        # shadcn primitives
│   │   └── layouts/                   # App shell (Navbar, Footer)
│   
│   ├── lib/
│   │   ├── [baas]/                    # Any BaaS / DB setup will be placed here
│   │   ├── fetcher.ts                 # Typed fetch wrapper 
│   │   ├── env.ts                     # Env validation (zod)
│   │   └── utils/                     # Generic reusable utilities
│   │       ├── cn.ts                  # Tailwind merge helper
│   │       └── index.ts               # Barrel export (MANDATORY)
│   ├── providers/                     # React Query, Theme, etc.
│   ├── hooks/                         # Global hooks (rare, e.g. useUser)
│   ├── store/                         # Global signals (minimal)
│   ├── constants.ts
│   └── types.ts

├── config/                            # Static configs
│   └── site.config.ts

├── styles/
│   ├── globals.css
│   └── theme.css                      # Design tokens / theme variables

├── public/

├── middleware.ts                      # Auth / edge guards

├── .env.local
├── .env.example                       # REQUIRED for teams

├── tailwind.config.ts
├── tsconfig.json

```
> Note: 
> fetcher.ts : : All external requests MUST go through shared/lib/fetcher.ts
> 1. When "react-query" is used, create `queries` folder inside `features/[feature-name], where place `keys` & `mutations` folders | Place query-provider in 'shared/lib/providers'
## Tools and Techs

***Dependancies as required***
 + Use `@preact/signals-react` for state management | `bun add  @preact/signals-react`
 + Use `@tanstack/react-query` for data-mutations, optimistic update and caching
 + Use `zod` for vallidation.

 ***Dependancies as required***
  + `onchange` - to run any command on file change (prettier)
  + `prettier-plugin-sort-imports` for sorting.

**Tech Stacks**

 + Front-end : Next js (Approuter), prioritize server-component. When we say `exportable or static` then don't use server component so that user can export as static site.
 + Front-end : Shadcn for UI desgin.

 + Backend-end : Appwrite/Firebase/Supabase (Ask user,what to use) & next-js-server(When needed, least priority, for specific cases like we need admin privilages or need to use appwrite server-sdk, use next-js-server actions)


## Commands

+ **Remove git repo :**
  ```bash
    rm -rf .git
  ```
+ **Add shadcn components :**
  ```bash
    bunx --bun shadcn@latest add <component>
  ```
+ **Start dev server :**
  ```bash
    bun dev
  ```
+ **Build project for production :**
  ```bash
    bun run build
  ```
+ **Make project Live :**
  ```bash
    bun run start
  ``` 
+ **Run linting :**
  ```bash
    bun lint
  ``` 
+ **Run fromatter :**
 ```bash
  bun format
```
+ **Run fromatter on file change :**
  ```bash
    bun format-w
  ``` 
+ **Run typechecking :**
  ```bash
    bun typecheck
  ```

