## Frontend Workflow

- Follow `./docs/test.md` and `./docs/lint.md` for the frontend development workflow.
- When working on React components, state management, routing, styling, or Tailwind, also follow the repo-local **how-to-write-component** guide.
- When reviewing frontend code, use the repo-local **frontend-code-review** guide as the canonical review checklist.

---

## Internationalization (i18n)

- All user-facing text must use translation keys from `web/i18n/en-US/`; do not hardcode strings.
- When adding or renaming translation keys, update every supported locale with appropriate localized values.
- Do not leave English fallbacks in non-English locale files unless that key intentionally follows an existing project convention.

---

## Backend API

- Use `consoleQuery` and `consoleClient` from `@/service/client` for all new backend integrations and any surfaces already migrated to generated contracts.
- Do not introduce handwritten REST helpers, handwritten API types, mock-backed application state, or manual edits to generated contract files.

---

## Overlay Components

- `../packages/crew-ui/README.md` is the source of truth for overlay primitives, portals, `isolation: isolate`, and the shared `z-50` / `z-60` layering model.
- Refer to `./docs/overlay.md` for web-specific overlay guidance.
- Use overlay primitives exclusively from `@crew/crew-ui/*`.
- Do not introduce new imports from `@/app/components/base/*`; migrate existing usages whenever those files are modified.

---

## UI Components

- Prefer primitives from `@crew/crew-ui/*`.
- Leverage built-in data attributes, CSS variables, and Tailwind utilities before adding custom styles.
- Add call-site Tailwind classes only for genuine design differences.
- Prefer design token utilities over arbitrary values whenever possible.
- Keep focus indicators visible without making non-interactive layout elements focusable.

---

## Custom SVG Icons

- Add new custom SVG assets under `../packages/iconify-collections/assets/...`.
- Regenerate the Iconify collections:

  ```bash
  pnpm --filter @crew/iconify-collections generate
  ```

- Consume generated icons using Tailwind `i-custom-*` classes.
- Restart the development server after regeneration, as Tailwind loads the icon collections at startup.
- Do not add generated React icon components or JSON files under `app/components/base/icons/src/...`.
- See `../packages/iconify-collections/README.md` for the complete workflow.

---

## Design Tokens

- When implementing Figma designs, follow the border-radius mapping documented in `../packages/crew-ui/AGENTS.md`.
- Figma `--radius/*` tokens map to Tailwind `rounded-*` utilities using an offset scale.

---

## Client State Management

- Use local React state for component-owned state.
- Use feature-level Jotai atoms for simple shared state within a feature.
- Use existing feature stores for complex or high-frequency interaction state (for example, workflow canvas, dragging, resizing, or panel runtime state).
- Persist shared client preferences through feature-owned storage modules built with `createLocalStorageState`.
- During high-frequency interactions, update feature state immediately and persist storage only after the interaction is committed.
- Keep storage keys and serialization logic inside the owning module; consumers should use the exported hooks instead of accessing storage directly.
- Avoid ad hoc global event listeners. Prefer Jotai atoms, existing stores, or shared subscription hooks so listeners remain centralized.

---

## Frontend Testing

- `./docs/test.md` is the canonical frontend testing guide.
- Follow the repo-local **frontend-testing** guide when writing or reviewing Vitest and React Testing Library tests.
- Write tests based on observable behavior and regression risk rather than file count, hook usage, or coverage metrics.