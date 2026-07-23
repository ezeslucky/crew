# @crew/crew-ui

Shared UI primitives, design tokens, CSS-first Tailwind styles, and the `cn()` utility used by Crew's `web/` application.

The package provides thin, opinionated wrappers around Base UI primitives. Components are styled using `cva`, `cn`, and Crew design tokens.

> **Private package**
>
> `@crew/crew-ui` is consumed internally through the pnpm workspace (`workspace:*`) and is not published to npm.

---

## Getting Started

### Installation

Already configured as a workspace dependency.

For a new workspace package:

```json
{
  "dependencies": {
    "@crew/crew-ui": "workspace:*"
  }
}