# AGENTS.md

## Project Overview

Crew is an open-source platform for developing LLM applications with an intuitive interface combining agentic AI workflows, RAG pipelines, agent capabilities, and model management.

The codebase is split into:

- **Backend API** (`/api`): Python Flask application organized with Domain-Driven Design
- **Frontend Web** (`/web`): Next.js application using TypeScript and React
- **Docker Deployment** (`/docker`): Containerized deployment configurations
- **Crew Agent Backend** (`/crew-agent`): Backend services for managing and executing agents

## Backend Workflow

- Read `api/AGENTS.md` for details.
- Run backend CLI commands through:

```bash
uv run --project api <command>
```

- Integration tests are CI-only and are not expected to run in the local environment.

## Frontend Workflow

- Read `web/AGENTS.md` for details.

## Testing & Quality Practices

- Follow TDD: **Red → Green → Refactor**.
- Use `pytest` for backend tests with the Arrange–Act–Assert structure.
- Enforce strong typing; avoid `Any` and prefer explicit type annotations.
- Write self-documenting code; only add comments that explain intent.

## Language Style

### Python

- Keep type hints on functions and attributes.
- Implement relevant special methods (e.g., `__repr__`, `__str__`) where appropriate.
- Prefer `TypedDict` over `dict` or `Mapping` for better type safety and documentation.

### TypeScript

- Use the project's strict TypeScript configuration.
- Run `pnpm check` for formatting, Oxlint, ESLint (non-code checks), and type checking.
- Avoid using `any`; prefer explicit types.

## General Practices

- Prefer editing existing files; add new documentation only when requested.
- Inject dependencies through constructors and preserve clean architecture boundaries.
- Handle errors with domain-specific exceptions at the correct layer.

## Project Conventions

- Backend architecture adheres to Domain-Driven Design (DDD) and Clean Architecture principles.
- Asynchronous work runs through Celery with Redis as the message broker.
- Frontend user-facing strings must be stored in `web/i18n/en-US/`; avoid hardcoded text.