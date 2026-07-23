# @crew/crew-ui

A shared UI library that provides design tokens, the `cn()` utility, CSS-first Tailwind styles, and headless UI primitives consumed by `web/`.

## Component Authoring Guidelines

### General

- Build components with `@base-ui/react` primitives, `cva`, and `cn`.
- Within `crew-ui`, use relative imports for internal components (for example, `../button`). External consumers must import through package subpaths (for example, `@crew/crew-ui/button`).
- Never import from `web/` or depend on framework-specific libraries such as Next.js, i18next, ky, jotai, or zustand.
- Organize each component in its own directory:

  ```
  src/<component>/
    ├── index.tsx
    ├── index.stories.tsx (optional)
    └── __tests__/index.spec.tsx (optional)
  ```

- Every public component must expose a matching subpath in `package.json#exports`.

### Naming

- Name the primary public component and its public types after the primitive itself (for example, `Select` and `SelectProps`).
- Reserve the `Root` suffix only when the same subpath exports both:
  - the low-level Base UI root (`CheckboxRoot`)
  - a higher-level convenience component (`Checkbox`)
- Preserve upstream Base UI anatomy in implementation types (for example, `BaseSelect.Root.Props`).

### Props

Use the following pattern whenever possible:

```ts
type SelectProps =
  Omit<BaseSelect.Root.Props, "className" | ...> &
  VariantProps<typeof selectVariants> & {
    // custom props
  };
```

Guidelines:

- Use plain `Omit<>` only when the wrapped Base UI props are **not** unions.
- When one prop changes the valid shape of other props (such as `multiple`, `value`, `defaultValue`, `clearable`, or `onChange`), model the API with:
  - a discriminated union, or
  - a distributive helper type.
- Preserve Base UI generic value contracts. If the primitive is generic, expose the same generic parameters and pass them through unchanged:

  - `Select.Root<Value, Multiple>`
  - `RadioGroup<Value>`
  - `Radio.Root<Value>`

- Do not hard-code wrappers to `string` unless the upstream primitive only supports strings.
- If a component exposes a type originating from an internal shared module, re-export it from the component's public subpath.

### Styling

- Prefer Base UI data attributes and CSS variables for styling state.
- Do not mirror component state into React solely to apply CSS classes.
- When Base UI behavior or selector contracts are unclear, consult:
  - the documentation linked from `README.md`
  - the local `@base-ui/react` `.d.ts` files

---

# Overlay Primitive Selection

Choose the primitive based on the **purpose of the trigger**, not the visual appearance of the popup.

| Primitive | Opens on | Trigger purpose | Content | Touch / Screen Reader |
| ---------- | -------- | --------------- | ------- | --------------------- |
| `Tooltip` | Hover / Focus | Trigger performs another action | Short text label | ❌ |
| `PreviewCard` | Hover / Focus | Navigate via a link | Link preview | ❌ |
| `Popover` | Click / Tap (+ optional hover) | Trigger exists to open the popup | Any content | ✅ |

Base UI guideline:

> If the trigger's purpose is to open the popup itself, use a **Popover**.
> If opening the popup is secondary to another action, use a **Tooltip**.

### Tooltip

Use when:

- displaying a short label
- reinforcing an existing label or `aria-label`
- showing non-interactive content

Do **not** use for:

- multi-line explanations
- interactive controls
- essential information

---

### PreviewCard

Use when:

- previewing the destination of a link
- enhancing navigation visually

Requirements:

- Trigger should remain a normal anchor.
- Popup should remain non-interactive.
- Do not place unique information inside the preview that cannot also be reached by following the link.

If the popup itself is the interaction, use a **Popover** instead.

---

### Popover

Use when:

- displaying interactive content
- showing rich help text
- creating accessible "info" (`?` / `(i)`) popups

For infotips, enable:

```tsx
<PopoverTrigger openOnHover />
```

Unlike Tooltip and PreviewCard, Popover remains accessible via keyboard, touch, and screen readers.

Product-specific trigger compositions belong within feature code. Do not weaken shared primitive contracts to accommodate individual workflows.

---

# Border Radius Mapping

Crew UI follows Tailwind CSS v4 defaults.

Never use `radius-*` utility classes or extend the Tailwind `borderRadius` theme.

| Figma Token | Value | Tailwind Class |
| ------------ | ----- | -------------- |
| `--radius/2xs` | 2px | `rounded-xs` |
| `--radius/xs` | 4px | `rounded-sm` |
| `--radius/sm` | 6px | `rounded-md` |
| `--radius/md` | 8px | `rounded-lg` |
| `--radius/lg` | 10px | `rounded-[10px]` |
| `--radius/xl` | 12px | `rounded-xl` |
| `--radius/2xl` | 16px | `rounded-2xl` |
| `--radius/3xl` | 20px | `rounded-[20px]` |
| `--radius/6xl` | 28px | `rounded-[28px]` |
| `--radius/full` | 999px | `rounded-full` |

### Rules

- Do not extend `theme.borderRadius`.
- Do not use legacy `radius-*` utilities.
- Convert Figma values such as:

  ```
  rounded-[var(--radius/sm, 6px)]
  ```

  to the standard Tailwind equivalent:

  ```
  rounded-md
  ```

- For values without Tailwind equivalents (10px, 20px, 28px), use arbitrary values:

  ```
  rounded-[10px]
  rounded-[20px]
  rounded-[28px]
  ```

---

# Search & Picker Primitive Selection

Choose the primitive based on whether users are entering text, selecting remembered values, or choosing from a fixed list.

| Primitive | Use Case |
| ---------- | -------- |
| `Autocomplete` | Free-form text with optional suggestions |
| `Combobox` | Searchable picker with remembered selections |
| `Select` | Closed list without search |

### Autocomplete

Use for:

- search boxes
- command palettes
- suggestion inputs
- async completions
- tag suggestions

The entered text is the value.

---

### Combobox

Use for:

- user pickers
- model pickers
- dataset pickers
- document pickers
- multi-select pickers

The selected option(s) become the value.

For multiple selection, follow the official Base UI chips pattern:

```
ComboboxInputGroup
 ├── ComboboxChips
 │     └── ComboboxValue
 │            └── ComboboxChip
 └── ComboboxInput
```

Allow chips to wrap naturally and let the input group grow vertically.

---

### Select

Use for:

- small option lists
- fixed choices
- cases where search is unnecessary

---

## Composition Rules

- Preserve Base UI compound component anatomy in the public API.
- Export individual parts such as:

  - `ComboboxInputGroup`
  - `ComboboxInput`
  - `ComboboxContent`
  - `ComboboxList`
  - `ComboboxItem`
  - `ComboboxItemIndicator`

- Each popup component should own its own `Portal`.
- Apply `z-50` to every `Positioner`.
- Toasts use `z-60`.
- Use:

  ```
  w-(--anchor-width)
  ```

  together with viewport-aware `max-width`.

- Do **not** use:

  ```
  min-w-(--anchor-width)
  ```

  when it prevents viewport width clamping.

---

## References

- Autocomplete: https://base-ui.com/react/components/autocomplete.md#usage-guidelines
- Combobox: https://base-ui.com/react/components/combobox.md#usage-guidelines
- Tooltip / Popover: https://base-ui.com/react/components/tooltip#infotips