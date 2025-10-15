# Tempwallets.com

A full-stack application built with a Turborepo monorepo structure, featuring a NestJS backend and Next.js frontend.

## Prerequisites

- Node.js >= 18
- pnpm 9.0.0 (recommended package manager)

## Quick Start

### Installation

```sh
# Install dependencies
pnpm install
```

### Development

Start all applications in development mode:

```sh
pnpm dev
```

Or run specific applications:

```sh
# Run only the web app (Next.js frontend)
pnpm dev --filter=web

# Run only the backend (NestJS API)
pnpm dev --filter=backend
```

**Development URLs:**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001 (default NestJS port)

### Production Build

Build all packages and applications:

```sh
pnpm build
```

Build specific applications:

```sh
# Build only the web app
pnpm build --filter=web

# Build only the backend
pnpm build --filter=backend
```

### Other Commands

```sh
# Lint all packages
pnpm lint

# Type checking
pnpm check-types

# Run tests
pnpm test

# Format code
pnpm format
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `backend`: a [NestJS](https://nestjs.com/) API server with TypeScript
- `web`: a [Next.js](https://nextjs.org/) 15 app with React 19 and Turbopack
- `@repo/types`: shared TypeScript types and DTOs used across the monorepo
- `@repo/eslint-config`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: shared `tsconfig.json` configurations used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Technology Stack

**Backend:**
- NestJS 11
- TypeScript 5.7
- class-validator & class-transformer for DTO validation
- Jest for testing

**Frontend:**
- Next.js 15.5
- React 19.1
- Turbopack for fast development builds
- TypeScript 5.9

**Monorepo Tools:**
- Turborepo 2.5.8 for build orchestration
- pnpm workspaces for dependency management

## Project Structure

```
Tempwallets.com/
├── apps/
│   ├── backend/          # NestJS API server
│   │   ├── src/
│   │   │   ├── products/ # Products module
│   │   │   └── main.ts   # Application entry point
│   │   └── test/         # E2E tests
│   └── web/              # Next.js frontend
│       ├── app/          # App router pages
│       └── public/       # Static assets
├── packages/
│   ├── types/            # Shared TypeScript types & DTOs
│   ├── eslint-config/    # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
├── turbo.json            # Turborepo configuration
└── pnpm-workspace.yaml   # pnpm workspace configuration
```

## Build Information

The build process uses Turborepo to orchestrate builds across all packages and applications with intelligent caching.

**Build Pipeline:**
1. `@repo/types` - Compiles shared TypeScript types first (dependency for backend)
2. `backend` - Builds NestJS application (depends on types)
3. `web` - Builds Next.js application independently

**Recent Build Output:**
```
✓ @repo/types#build - TypeScript compilation
✓ backend#build     - NestJS production build  
✓ web#build         - Next.js optimized production build
  • Route bundling
  • Static page generation
  • Build optimization
```

**Build Caching:**
Turborepo caches build outputs to speed up subsequent builds. Only changed packages are rebuilt.

## Troubleshooting

### TypeScript Decorator Errors

If you encounter decorator-related errors with `class-validator`, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": false
  }
}
```

### Git Submodule Issues

If you see errors like `'apps/backend/' does not have a commit checked out`:

```sh
rm -rf apps/backend/.git
git add .
```

### Install Turbo Locally

If you see warnings about using global turbo, install it locally:

```sh
pnpm add turbo -D -w
```

## Remote Caching (Optional)

> [!TIP]
> Vercel Remote Cache is free for all plans and can significantly speed up CI/CD pipelines.

Turborepo supports [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share build cache artifacts across machines and team members.

**Enable Remote Caching:**

```sh
# Login to Vercel
pnpm exec turbo login

# Link your monorepo to remote cache
pnpm exec turbo link
```

This enables:
- Shared build caches across your team
- Faster CI/CD builds
- Consistent build artifacts

## Environment Variables

Create `.env` files in each app directory as needed:

```sh
# apps/backend/.env
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://...

# apps/web/.env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

> [!NOTE]
> Never commit `.env` files. They are already in `.gitignore`.

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
