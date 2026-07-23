# @crew/iconify-collections

Pre-generated Iconify collections for Crew's custom SVG icons.

The `web/` app imports these collections directly, avoiding the need for Tailwind to scan the legacy `web/app/components/base/icons/src` directory and generate custom icon data during development.

> **Private package**
>
> This package is consumed internally through the pnpm workspace and is not published to npm.

---

## Adding Custom Icons

Place new SVG files into one of the following directories:

- `assets/public/` — Multi-color icons or public/brand assets.
- `assets/vendor/` — Monochrome UI/vendor icons that should inherit `currentColor`.

After adding or modifying SVGs, regenerate the Iconify collections:

```bash
pnpm --filter @crew/iconify-collections generate
```

Then verify icon dimensions:

```bash
pnpm --filter @crew/iconify-collections check:dimensions
```

The dimension check protects layout-sensitive icon groups (such as `main-nav-*`) from accidentally changing their intrinsic size during collection generation.

---

## Using Icons

Reference generated icons through Tailwind icon classes.

For example:

```text
assets/vendor/integrations/mcp.svg
```

becomes:

```tsx
<span
  aria-hidden
  className="i-custom-vendor-integrations-mcp size-4"
/>
```

Do **not** generate React icon components or JSON files under:

```text
web/app/components/base/icons/src/
```

That directory is legacy. All new custom SVG icons should be added to this package and consumed through `i-custom-*` Tailwind classes.

---

## Regeneration Checklist

Whenever SVG assets change:

1. Add or update the source SVG.
2. Run:

   ```bash
   pnpm --filter @crew/iconify-collections generate
   ```

3. Verify dimensions:

   ```bash
   pnpm --filter @crew/iconify-collections check:dimensions
   ```

4. Commit:
   - Updated SVG source files
   - Generated collections under:
     - `custom-public/`
     - `custom-vendor/`
5. Restart the development server.

Tailwind loads the generated Iconify collections during startup, so newly added `i-custom-*` classes may not be available until the dev server restarts.

---

## Reviewing Generated Changes

When reviewing generated `icons.json` diffs:

- Ensure unrelated icon groups have not changed unexpectedly.
- Verify that layout-sensitive icons retain their intrinsic `width` and `height`.
- If a new icon group depends on fixed dimensions, add it to:

```text
scripts/check-icon-dimensions.ts
```

to prevent future regressions.