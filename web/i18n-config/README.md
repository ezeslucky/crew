# Internationalization (i18n)

## Overview

Crew uses **i18next** for internationalization. Translation files are stored under `web/i18n`, while the i18n configuration lives in `web/i18n-config`.

```
web/i18n
├── en-US
│   ├── app.json
│   ├── app-debug.json
│   ├── common.json
│   └── ...

web/i18n-config
├── language.ts
├── i18next-config.ts
└── ...
```

English (`en-US`) is the source locale. Every supported language should contain the same set of translation files and keys.

---

## Translation Files

Translation files:

- Are organized by **language**, then **namespace** (file).
- Use **flat keys** (for example, `dialog.title`).
- Do **not** use nested JSON objects.

Crew configures i18next with:

```ts
keySeparator: false
```

This means dots are treated as part of the key rather than nested object separators.

Each filename becomes a namespace using camelCase.

| File | Namespace |
|------|-----------|
| `app.json` | `app` |
| `app-debug.json` | `appDebug` |
| `common.json` | `common` |

Example:

```tsx
const { t } = useTranslation("appDebug");

t("dialog.title");

// or

t("dialog.title", { ns: "appDebug" });
```

---

## Adding a New Language

### 1. Copy the default locale

```bash
cd web/i18n
cp -r en-US fr-FR
```

### 2. Translate the JSON files

Keep the same filenames and flat translation keys.

### 3. Register the language

Add the locale to:

```text
web/i18n-config/language.ts
```

Example:

```ts
{
  value: "fr-FR",
  name: "Français (France)",
  example: "Bonjour, Crew!",
  supported: false,
}
```

Set `supported: true` once translations are production-ready.

### 4. Update the backend (if required)

Some backend services maintain their own list of supported languages.

Update:

```
api/constants/languages.py
```

if necessary.

> `I18nText` is generated automatically from `LanguagesSupported`; no manual type updates are required.

---

## Removing a Language

To remove a language:

1. Delete its directory under `web/i18n`.
2. Remove the locale from `web/i18n-config/language.ts`.
3. Update any backend language lists if applicable.

---

## Translation Validation

Check for missing or extra translation keys:

```bash
pnpm i18n:check --file app billing --lang zh-Hans
```

Remove unused keys automatically:

```bash
pnpm i18n:check --auto-remove
```

Options:

- `--file` accepts one or more namespaces.
- `--lang` accepts one or more locales.
- The command exits with a non-zero status if missing or extra keys are found.

---

## Automatic Translation

Translations are automatically managed by the **Claude Code** GitHub workflow.

Whenever changes are merged to:

```
web/i18n/en-US/*.json
```

the workflow:

1. Detects added, updated, and removed keys.
2. Runs `i18n:check`.
3. Translates new and modified keys while preserving placeholders such as:
   - `{{variable}}`
   - `${variable}`
   - HTML/XML tags
4. Removes deleted keys from other locales.
5. Formats updated files with `vp fmt`.
6. Runs `i18n:check` again.
7. Opens a pull request containing the updated translations.

Workflow:

```
.github/workflows/translate-i18n-claude.yml
```

---

## Manual Translation

To run the translation workflow manually:

1. Open **GitHub Actions**.
2. Select **Translate i18n Files with Claude Code**.
3. Click **Run workflow**.

Optional inputs:

| Input | Description |
|--------|-------------|
| `files` | Space-separated namespaces (for example, `app common`) |
| `languages` | Space-separated locales (for example, `zh-Hans ja-JP`) |
| `mode` | `incremental` (default) or `full` |