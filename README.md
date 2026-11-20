# Pixlet monorepo starter

A Vue 3 + TypeScript component library monorepo with:

- `apps/docs`: VitePress documentation site (deploy this app)
- `packages/button`: publishable `@pixlet/button` component package
- `packages/button/demos`: documentation-only Vue demos
- `packages/button/tests`: Vitest tests
- `packages/tokens`: CSS design tokens

## Prerequisites

Node.js 20.19+ or 22.12+ (compatible with Vite 7) and pnpm 10.

## Run locally

```bash
corepack enable
pnpm install
pnpm dev
```

Open the local URL printed by VitePress. Development resolves the button's public imports to workspace source, so edits to components, styles, and demos hot-reload without a library build.

## Build & test

```bash
pnpm lint
pnpm test
pnpm build:docs
pnpm exec playwright install chromium --only-shell
pnpm test:browser
```

Unit tests run in jsdom with Vitest and Vue Test Utils. Browser tests run in Chromium with Playwright and axe against the built docs. The docs build compiles the workspace libraries first, then resolves their public package exports.

Output for docs deployment: `apps/docs/.vitepress/dist`

To deploy with Cloudflare Pages, build from the repository root with `pnpm build:docs` and deploy `apps/docs/.vitepress/dist`.

## Verify npm package contents

```bash
pnpm build:libs
cd packages/button
npm pack --dry-run
```

Only `dist` is included in the library's npm tarball (besides npm-required package metadata). The demos, tests, and docs source are excluded. Note that npm's `files` field controls publishing, while Vite's `src/index.ts` entry determines the compiled dependency graph; don't import demos from production `src` exports.

## Add another component

1. Copy `packages/button` to a new package (e.g. `packages/input`).
2. Rename the package and component exports. Keep `src/index.ts` as the public entry and reuse the shared Vite and TypeScript configuration under `tooling/`. If the package exposes its own test command, update its path filter.
3. Put demos under that package's `demos/` directory, outside `src/`.
4. Add the package to `apps/docs/package.json` via `workspace:*`.
5. Add a Markdown page under `apps/docs/components/`, importing those demos with relative paths.
6. Add navigation and development source aliases to `apps/docs/.vitepress/config.ts`.

## Notes

- This is a scaffold, not a published npm package.
- npm scope `@pixlet` is illustrative until you register/verify it.
