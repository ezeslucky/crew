# Block Selector

The Block Selector is the workflow insertion surface for Crew. It provides a single, accessible entry point for browsing and inserting workflow blocks, tools, data sources, triggers, and snippets while maintaining a consistent popover experience.

---

## Public Contract

`index.tsx` is the only public entry point. It exports `BlockSelectorProps` and the default `BlockSelector` component.

There are no forwarding entry points, compatibility aliases, or alternate imports.

The component owns:

- Controlled and uncontrolled open state
- Disabled behavior
- Popover lifecycle
- Initial focus
- Escape dismissal
- Focus restoration to the trigger
- Automatic close after selection

Canvas subscriptions and available-item resolution are scoped to the mounted popup content. A closed selector must not subscribe to workflow state.

### Trigger

The `trigger` prop must render a single focusable native button as its root and forward the props and ref supplied by Crew UI `PopoverTrigger`.

The following are **not supported**:

- Wrapper components that do not forward refs
- Multiple interactive root elements
- Compound trigger components

Use:

- `triggerAriaLabel` for icon-only triggers.
- `triggerTooltip` only when the visible trigger benefits from additional hover or focus guidance.

### Positioning

Positioning uses the Crew UI Popover API directly.

Prefer specifying only:

- `placement`

Use these props only when required by verified layout constraints:

- `sideOffset`
- `alignOffset`

The selector does not translate or normalize custom offset objects.

### Standalone Mode

Standalone selectors must explicitly set `standalonePanel`.

Availability props such as `noBlocks` determine only which tabs are rendered. They must never change the layout mode.

---

## Internal Modules

| Module | Responsibility |
|---------|----------------|
| `index` | Public component entry, popover lifecycle, trigger contract, focus management, workflow-state adaptation |
| `tabs` | Tab ordering, per-session filter state, panel routing |
| `tool-panel` | Adapts installed-tool queries into the browser |
| `tool-browser` | Complete tool browsing experience |
| `blocks` | Workflow block panel |
| `data-sources` | Data source panel |
| `all-start-blocks` | Entry-node (Start) panel |
| `snippets` | Snippet filtering, insertion, pagination, preview content |
| `tool` | Installed tool rows |
| `trigger-plugin` | Trigger provider rows |
| `marketplace-plugin` | Marketplace integration rows |
| `featured-tools` | Recommended tools |
| `featured-triggers` | Recommended triggers |
| `rag-tool-recommendations` | AI-powered recommendations |
| `hooks`, `storage`, `tool-list-data`, `types` | Internal state and data contracts (not public APIs) |

---

## External Modules

The selector depends on the following application modules:

| Module | Responsibility |
|---------|----------------|
| `app/components/plugins/marketplace` | Marketplace queries, categories, search, URLs |
| `app/components/tools` | Installed-tool contracts, permissions, custom-tool creation |
| `app/components/workflow` | Workflow nodes, metadata, stores, insertion callbacks |
| `features/system-features` | Marketplace feature flags |
| `service/use-plugins` | Marketplace plugin queries |
| `service/use-tools` | Installed-tool queries |
| `service/use-triggers` | Installed trigger queries |

---

## Ownership

`BlockSelectorPanels` owns a single popup session.

Each tab maintains its own independent search, filter, and tag state throughout that session.

Closing the selector unmounts the popup and discards all session state, including:

- Search
- Filters
- Tags
- Pagination
- Expansion state

### Panel Ownership

Each panel owns only the state required for its own content.

| Panel | Owns |
|-------|------|
| `ToolPanel` | Installed-tool query adaptation |
| `ToolBrowser` | Categories, browsing mode, Marketplace search, tool presentation |
| `DataSources` | Local filtering and Marketplace search |
| `AllStartBlocks` | Trigger providers and expansion state |
| `Snippets` | Tags, pagination, insertion, preview-card handle |

Remote Marketplace searches are debounced where requests are issued.

Local filtering always uses the current input value.

Data fetching, caching, and store synchronization belong in container components, never in row components.

---

## Interaction Contract

### Tab Order

Tabs always appear in the following order:

1. Blocks
2. Tools
3. Sources
4. Start
5. Snippets

The tab list always precedes the active panel in DOM order.

### Keyboard Behavior

When the selector opens:

- Focus moves to the active panel search field.
- `Shift + Tab` returns focus to the active tab.
- Arrow keys move focus between tabs.
- `Enter` or `Space` activates the focused tab.

### Row Types

Rows use exactly one of these structures.

#### Single Action

One native button.

#### Expandable Group

A `Collapsible` with:

- Native trigger
- Associated panel

#### Compound Row

A non-interactive container with separate primary and secondary buttons or links.

Interactive elements must never be nested.

### Focus Indicators

List controls use the shared two-pixel accent focus indicator.

Within clipped or scrollable containers, use an inset focus ring so the indicator remains visible within the row boundary.

---

## Preview Cards

Each preview-enabled list owns exactly:

- One `PreviewCard` root
- One detached preview handle

Rows provide focusable `PreviewCardTrigger` payloads with:

```tsx
delay={150}
closeDelay={150}
```

Preview content uses:

```tsx
<BlockSelectorPreviewCardContent />
```

Preview triggers are intentionally composed with native row buttons.

The row remains the single activation target for selection or insertion.

Preview availability must never depend on optional descriptive text.

Previews may include supplemental read-only information such as:

- Name
- Icon
- Author
- Supported block types

This information must never determine whether users can identify or activate the row.

Preview content is informational only.

It:

- Contains no interactive controls
- Never introduces a second action

If preview-only information becomes necessary for users to choose an item, surface that information directly in the row or replace the preview composition with an accessible disclosure pattern.

---

## Testing

Tests should verify observable behavior through the public interface.

### Verify

- Accessible roles
- Accessible names
- States
- Relationships
- Keyboard navigation
- Logical tab order
- Initial focus
- Escape dismissal
- Focus restoration
- Independent per-tab session state
- Session reset after close
- Disabled behavior
- Selection side effects

### Avoid

Do **not** assert:

- Utility classes
- Child indexes
- Internal implementation details
- Third-party primitive internals

Use `userEvent` together with semantic queries.

Verify geometry, clipped focus indicators, hover behavior, and actual browser focus order using Browser Mode or end-to-end tests instead of Happy DOM.