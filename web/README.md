# Crew Frontend

The Crew frontend is built with [Next.js] and also supports development with [vinext] for a faster development experience.

## Prerequisites

Before starting the frontend, ensure you have:

- [Node.js]
- [pnpm]

Alternatively, you can use [Vite+] commands (`vp`) instead of `pnpm`. For example:

- `vp install` instead of `pnpm install`
- `vp test` instead of `pnpm test`

> [!TIP]
> Install and enable Corepack to automatically manage the correct package manager version:
>
> ```bash
> npm install -g corepack
> corepack enable
> ```
>
> Learn more: [Corepack]

## Getting Started

Run all setup commands from the repository root unless otherwise noted.

### 1. Install Dependencies

```bash
pnpm install
```

> [!NOTE]
> JavaScript dependencies are managed at the repository root (`package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and `.nvmrc`). Install dependencies from the root, then run frontend commands from `web/`.

### 2. Configure Environment Variables

Create `web/.env.local` from the example file:

```bash
cp web/.env.example web/.env.local
```

Update the environment variables as needed.

> [!IMPORTANT]
>
> - If the frontend and backend run on different subdomains, set `NEXT_PUBLIC_COOKIE_DOMAIN=1`. Both services must share the same top-level domain to share authentication cookies.
> - Set `NEXT_PUBLIC_API_PREFIX` and `NEXT_PUBLIC_PUBLIC_API_PREFIX` to the correct backend API endpoints.

### 3. Start the Development Server

```bash
# Next.js
pnpm -C web dev

# Vinext (recommended)
pnpm -C web dev:vinext
```

### Optional: Development Proxy

To use a remote backend during local development:

```bash
pnpm -C web dev:proxy
```

Configure:

- `web/dev-proxy.config.ts` for proxied routes
- `web/.env.local` for:
  - `DEV_PROXY_TARGET`
  - `DEV_PROXY_ENTERPRISE_TARGET`
  - `DEV_PROXY_HOST`
  - `DEV_PROXY_PORT`

Open <http://localhost:3000> in your browser.

Application source code lives under `web/app`, and changes are reflected automatically during development.

---

## Production

### Build

```bash
pnpm -C web build
```

### Start

```bash
pnpm -C web start
```

To customize the host or port:

```bash
pnpm -C web start --host=0.0.0.0 --port=3001
```

### Docker

Build the image from the repository root:

```bash
docker build -f web/Dockerfile -t crew-web .
```

---

## Storybook

Crew uses [Storybook] for UI component development.

Start Storybook:

```bash
pnpm -C web storybook
```

Then open <http://localhost:6006>.

---

## Linting

If you use VS Code, copy:

```text
.vscode/settings.example.json
```

to:

```text
.vscode/settings.json
```

Then follow the [Lint Documentation].

---

## Testing

Crew uses [Vitest] together with [React Testing Library].

See **[web/docs/test.md]** for the complete testing policy and workflow.

> [!IMPORTANT]
> Since the project uses Vite+, the standalone `vitest` command is not supported. Always run tests through `vp`.

Run the test suite:

```bash
cd web
vp test run
```

If a test fails only in CI:

- Inspect the failing CI job.
- Reproduce the failure locally whenever possible.
- A rerun may identify flaky tests but is not a substitute for investigating or reporting the underlying issue.

### Example Tests

If you're unfamiliar with the project's testing patterns, refer to:

- `index.spec.tsx` — Component testing example