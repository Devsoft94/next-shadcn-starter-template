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
3. **Quick Setup Guide**
   + Copy bellow code and save as `new-project-init.js`
   
    ```js
       /** ./new-project-init.js **/
       
       import { execSync } from "child_process";
       import fs from "fs";
       import path from "path";
       import readline from "readline";
       import { fileURLToPath } from "url";
       
       const repoURL = "https://github.com/Devsoft94/next-shadcn-starter-template.git";
       
       const rl = readline.createInterface({
         input: process.stdin,
         output: process.stdout,
       });
       
       const question = (query) => new Promise((resolve) => rl.question(query, resolve));
       
       async function setup() {
         console.log("\n🚀 Starting Project Setup...\n");
       
         const inputName = await question("📁 Enter your project name: ");
         const projectName = inputName.trim().toLowerCase().replace(/\s+/g, "-");
       
         if (!projectName) {
           console.error("❌ Project name cannot be empty.");
           process.exit(1);
         }
       
         try {
           // FIX: Added ${projectName} to the end of the git clone command
           console.log(`\n🚚 Cloning template into '${projectName}'...`);
           execSync(`git clone ${repoURL} ${projectName}`, { stdio: "inherit" });
       
           console.log("📝 Updating package.json...");
           const pkgPath = path.join(process.cwd(), projectName, "package.json");
           
           if (fs.existsSync(pkgPath)) {
               const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
               pkg.name = projectName;
               fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
           }
       
           console.log("🧹 Cleaning up setup files...");
           const currentScriptPath = fileURLToPath(import.meta.url);
           // Note: This deletes the setup script you just ran
           fs.unlinkSync(currentScriptPath);
       
           console.log("\n✅ Set up completed!");
           console.log("\n------------------------------------------------");
           console.log(`📂 Next steps: cd ${projectName}`);
           console.log("🛠️  Initialize project : 'bun install'");
           console.log("🚀 Start dev-server    : 'bun run dev'");
           console.log("✨ Format on save      : 'bun run format-w'");
           console.log("------------------------------------------------\n");
       
         } catch (error) {
           console.error("\n❌ An error occurred:", error.message);
         } finally {
           rl.close();
         }
       }
       
       setup();

    ```
+ Run this file `bun new-project-init.js` or `node  new-project-init.js`
+ 
  ```txt
   bun new-project-init.js
  ```

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
 + Use `@preact/signals-react` for state management
   
   ```bash
     bun add  @preact/signals-react
   ```
 + Use `@tanstack/react-query` for data-mutations, optimistic update and caching

   ```bash
     bun add  @tanstack/react-query
   ```
 + Use `zod` for vallidation.
 
   ```bash
     bun add  zod
   ```
 ***Dependancies as required***
  + `onchange` - to run any command on file change (prettier)
 
   ```bash
     bun add -d onchange
   ```
  + `prettier-plugin-sort-imports` for sorting.

   ```bash
     bun add -d prettier-plugin-sort-imports
   ```
**Tech Stacks**

 + Front-end : Next js (Approuter), prioritize server-component. When we say `exportable or static` then don't use server component so that user can export as static site.
 + Front-end : Shadcn for UI desgin.

 + Backend-end : Appwrite/Firebase/Supabase (Ask user,what to use) & next-js-server(When needed, least priority, for specific cases like we need admin privilages or need to use appwrite server-sdk, use next-js-server actions)


## Commands
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
---
### Here are the essential Git commands for managing your project and pushing it to the remote repository:

+ **Remove git repo :**
  ```bash
    rm -rf .git
  ```
+ **Command for initializing a new Git repository:**
```bash
  git init
```

+ **Command for checking the current status of files:**
```bash
 git status
```

+ **Command for staging all changes for a commit:**
```bash
 git add .
```

+ **Command for creating a commit with a descriptive message:**
```bash
 git commit -m "commit message here..."
```

+ **Command for adding the remote origin URL:**
```bash
  git remote add origin <YOUR_NEW_REPO_URL>
```

+ **Command for verifying the remote URL:**
```bash
  git remote -v
```

+ **Command for pulling remote changes and rebasing to avoid merge commits:**
```bash
  git pull origin main --rebase
```

+ **Command for pushing your code to the remote repository for the first time:**
```bash
  git push -u origin main
```

+ **Command for cloaning a repository:**
```bash
  git clone <TARGET_REPO_URL>
```


