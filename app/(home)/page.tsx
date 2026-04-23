'use client';

import { Button } from '@/shared/components/ui/button';

export default function TemplatePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-10 px-6 py-12 text-slate-900 dark:text-slate-100">
      {/* Header Section */}
      <section className="space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight">Next.js template</h1>
        <p className="text-xl text-muted-foreground">This is a Next.js template with shadcn/ui.</p>
        <Button size="lg" variant="subtle" className="">
          Get Started
        </Button>
      </section>

      {/* Adding Components */}
      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-bold">Adding components</h2>
        <p className="text-sm text-muted-foreground">
          To add components to your app, run the following command:
        </p>
        <div className="rounded-md bg-slate-950 p-4 font-mono text-sm text-slate-50">
          bunx --bun shadcn@latest add &lt;component&gt;
        </div>
      </section>

      {/* User Guide */}
      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-bold">User guide</h2>
        <ol className="ml-2 list-inside list-decimal space-y-2">
          <li>
            Copy <code className="rounded bg-muted px-1 text-pink-600">nextcn-starter</code> folder.
          </li>
          <li>
            Install all the packages{' '}
            <code className="rounded bg-muted px-1 text-pink-600">bun install</code> or{' '}
            <code className="rounded bg-muted px-1 text-pink-600">bun i</code>
          </li>
        </ol>
      </section>

      {/* Folder Structure */}
      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-bold">Folder structure</h2>
        <pre className="overflow-x-auto rounded-md bg-muted p-5 font-mono text-xs leading-relaxed">
          {`
          ## **Folder structure** 

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


> Note: 
> fetcher.ts : : All external requests MUST go through shared/lib/fetcher.ts
> 1. When "react-query" is used, create 'queries' folder inside 'features/[feature-name]', where place 'keys' & 'mutations' folders | Place query-provider in 'shared/lib/providers'
          `}
        </pre>
        <div className="border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-950/30">
          <p className="text-sm font-medium">Note:</p>
          <p className="text-sm italic">
            1. When "react-query" is used, create{' '}
            <code className="text-blue-600 dark:text-blue-400">queries</code> folder inside{' '}
            <code className="text-blue-600 dark:text-blue-400">features/[feature-name]</code>, where
            place <code className="text-blue-600 dark:text-blue-400">keys</code> &{' '}
            <code className="text-blue-600 dark:text-blue-400">mutations</code> folders | Place
            query-provider in{' '}
            <code className="text-blue-600 dark:text-blue-400">shared/lib/providers</code>
          </p>
        </div>
      </section>

      {/* Tools and Techs */}
      <section className="space-y-6">
        <h2 className="border-b pb-2 text-2xl font-bold">Tools and Techs</h2>

        <div className="space-y-2">
          <h3 className="font-bold italic">Dependencies as required</h3>
          <ul className="space-y-1 text-sm">
            <li>
              + Use <code className="font-semibold text-blue-500">@preact/signals-react</code> for
              state management |{' '}
              <code className="rounded bg-muted px-1">bun add @preact/signals-react</code>
            </li>
            <li>
              + Use <code className="font-semibold text-blue-500">@tanstack/react-query</code> for
              data-mutations, optimistic update and caching
            </li>
            <li>
              + Use <code className="font-semibold text-blue-500">zod</code> for validation
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-bold italic">Dev Tools</h3>
          <ul className="space-y-1 text-sm">
            <li>
              + <code className="font-semibold">onchange</code> - to run any command on file change
              (prettier)
            </li>
            <li>
              + <code className="font-semibold">prettier-plugin-sort-imports</code> for sorting
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold italic">Tech Stacks</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-bold">Front-end:</span> Next.js (Approuter), prioritize
              server-component.
              <span className="ml-1 text-muted-foreground">
                When "exportable or static" then don't use server component.
              </span>
            </li>
            <li>
              <span className="font-bold">UI Design:</span> Shadcn UI
            </li>
            <li>
              <span className="font-bold">Back-end:</span> Appwrite / Firebase / Supabase
              <span className="ml-1 text-muted-foreground">
                (Ask user what to use) & next-js-server actions as secondary priority.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Commands */}
      <section className="space-y-4">
        <h2 className="border-b pb-2 text-2xl font-bold">Commands</h2>
        <div className="grid grid-cols-1 gap-3">
          {[
            { label: 'Remove git repo', cmd: 'rm -rf .git' },
            { label: 'Add shadcn components', cmd: 'bunx --bun shadcn@latest add <component>' },
            { label: 'Start dev server', cmd: 'bun dev' },
            { label: 'Build project', cmd: 'bun run build' },
            { label: 'Make project Live', cmd: 'bun run start' },
            { label: 'Run linting', cmd: 'bun lint' },
            { label: 'Run formatter', cmd: 'bun format' },
            { label: 'Formatter on change', cmd: 'bun format-w' },
            { label: 'Typechecking', cmd: 'bun typecheck' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded border border-border bg-muted/50 p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-bold">{item.label} :</span>
              <code className="mt-2 rounded bg-slate-200 px-2 py-1 text-xs italic sm:mt-0 dark:bg-slate-800">
                {item.cmd}
              </code>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
