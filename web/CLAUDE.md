## Frontend Workflow

- Follow `./docs/lint.md` and `./docs/test.md` for frontend development and testing guidelines.
- When working on React components, state management, routing, styling, or Tailwind, also follow the repo-local **how-to-write-component** guide.
- When reviewing frontend code, use the repo-local **frontend-code-review** guide as the canonical review checklist.

## Internationalization (i18n)

- Never hardcode user-facing strings. Use translation keys from `web/i18n/en-US/`.
- When adding or renaming a translation key, update every supported locale with the appropriate localized value.
- Do not leave English fallbacks in non-English locales unless the repository intentionally does so for that specific key.

## Backend API

- Use `consoleQuery` and `consoleClient` from `@/service/client` for all new backend integrations and any surfaces already migrated to generated contracts.
- Do not introduce handwritten REST helpers, handwritten API types, mock-backed application state, or manual edits to generated contract files.

## UI Components

- Prefer primitives from `@crew/crew-ui/*`.
- Reuse built-in data attributes, CSS variables, and design tokens before adding custom styles.
- Add call-site Tailwind classes only for genuine design differences.
- Prefer token-based utilities over arbitrary values whenever possible.
- Keep focus indicators visible without making non-interactive layout elements focusable.

## Overlay Components

- `../packages/crew-ui/README.md` is the source of truth for overlay primitives, portals, `isolation: isolate`, and the shared `z-50` / `z-60` layering model.
- Follow `./docs/overlay.md` for web-specific overlay guidance.
- Use overlay primitives exclusively from `@crew/crew-ui/*`.
- Do not introduce new imports from `@/app/components/base/*`; migrate existing usages whenever those files are modified.

## Custom SVG Icons

- Add new SVG assets under `../packages/iconify-collections/assets/...`.
- Regenerate the Iconify collections:

  ```bash
  pnpm --filter @crew/iconify-collections generate
  ```

- Consume generated icons using Tailwind `i-custom-*` classes.
- Restart the development server after regeneration, as Tailwind loads the icon collections at startup.
- Do not add generated React icon components or JSON files under `app/components/base/icons/src/...`.
- See `../packages/iconify-collections/README.md` for the complete workflow.

## Design Tokens

- Follow the Figma `--radius/*` → Tailwind `rounded-*` mapping documented in `../packages/crew-ui/AGENTS.md`.
- The Figma radius scale is offset by one step from the Tailwind scale.

## Client State Management

- Use local React state for component-owned state.
- Use feature-level Jotai atoms for simple shared state within a feature.
- Use existing feature stores for complex or high-frequency interaction state (for example, workflow canvas, dragging, resizing, and panel runtime state).
- Persist shared client preferences through feature-owned storage modules built with `createLocalStorageState`.
- During high-frequency interactions, update feature state immediately and persist storage only after the interaction is committed.
- Keep storage keys and serialization logic within the owning module. Consumers should use the exported hooks instead of accessing storage directly.
- Avoid ad hoc global event listeners. Prefer Jotai atoms, existing stores, or shared subscription hooks so listeners remain centralized and deduplicated.

## Frontend Testing

- `./docs/test.md` is the canonical frontend testing guide.
- Follow the repo-local **frontend-testing** guide when writing or reviewing Vitest and React Testing Library tests.
- Write tests based on observable behavior and regression risk rather than file count, hook usage, or coverage metrics.