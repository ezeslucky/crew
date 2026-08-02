# AGENTS.md

## Project Overview

Crew is an open-source platform for building LLM applications through an intuitive interface that combines agentic AI workflows, RAG pipelines, agent capabilities, and model management.

The codebase is organized into the following components:

- **Backend API** (`/api`): Python Flask application following Domain-Driven Design (DDD).
- **Frontend Web** (`/web`): Next.js application built with TypeScript and React.
- **Docker Deployment** (`/docker`): Containerized deployment configurations.
- **Crew Agent Backend** (`/crew-agent`): Services for managing and executing AI agents.

## Backend Workflow

- Read `api/AGENTS.md` for backend-specific guidelines.
- Run backend commands using:

```bash
uv run --project api <command>
```

- Integration tests are intended for CI and are not expected to run in a local development environment.

## Frontend Workflow

- Read `web/AGENTS.md` for frontend-specific guidelines.

## Testing & Quality Practices

- Follow Test-Driven Development (TDD): **Red → Green → Refactor**.
- Write backend tests with `pytest` using the Arrange–Act–Assert pattern.
- Prefer strong typing with explicit type annotations; avoid `Any`.
- Write self-documenting code and use comments only to explain intent or non-obvious decisions.

## Language Guidelines

### Python

- Add type hints to functions, methods, and attributes.
- Implement appropriate special methods (e.g., `__repr__`, `__str__`) when beneficial.
- Prefer `TypedDict` over generic `dict` or `Mapping` for stronger type safety and clearer documentation.

### TypeScript

- Follow the project's strict TypeScript configuration.
- Run `pnpm check` to validate formatting, Oxlint, ESLint, and type checking.
- Avoid using `any`; prefer precise, explicit types.

## General Practices

- Prefer modifying existing files instead of creating new ones unless explicitly requested.
- Inject dependencies through constructors and maintain clean architecture boundaries.
- Handle errors using domain-specific exceptions at the appropriate layer.

## Project Conventions

- The backend follows Domain-Driven Design (DDD) and Clean Architecture principles.
- Asynchronous tasks are executed through Celery with Redis as the message broker.
- All user-facing frontend text must be added to `web/i18n/en-US/`; do not hardcode strings.