# CONTRIBUTING

Thanks for your interest in contributing to **Crew**! 🚀

Crew is an open-source platform for building and managing LLM applications. Whether you're fixing bugs, improving documentation, adding features, or creating new plugins, every contribution helps make the project better.

This guide explains how to contribute effectively and ensures a smooth experience for both contributors and maintainers.

Before contributing, please read our [LICENSE](./LICENSE). By participating in this project, you also agree to follow our [Code of Conduct](https://github.com/langgenius/.github/blob/main/CODE_OF_CONDUCT.md).

---

# Before You Start

Looking for your first contribution?

- Browse our **Good First Issues**:
  https://github.com/ezeslucky/crew/issues?q=is%3Aissue+state%3Aopen+label%3A%22good+first+issue%22

Interested in extending Crew?

- Create new plugins in the **crew-plugins** repository:
  https://github.com/ezeslucky/crew-plugins

Want to improve an existing runtime, tool, or integration?

- Contribute to the **crew-official-plugins** repository:
  https://github.com/ezeslucky/crew-official-plugins

Before opening a Pull Request, please create (or reference) an issue describing the change.

---

# Reporting Bugs

When opening a bug report, include the following:

- Clear and descriptive title
- Detailed explanation of the problem
- Steps to reproduce
- Expected behavior
- Error messages (if any)
- Backend logs (`docker compose logs`) when applicable
- Screenshots or videos if helpful

## Bug Priority

| Type | Priority |
|------|----------|
| Security issues, login failures, core functionality broken | Critical |
| Performance issues or non-critical bugs | Medium |
| UI polish, typos, documentation fixes | Low |

---

# Requesting Features

When submitting a feature request, please include:

- Clear title
- Description of the feature
- Real-world use case
- Mockups or screenshots (optional)

## Feature Priority

| Type | Priority |
|------|----------|
| Approved by maintainers | High |
| Popular community requests | Medium |
| Nice-to-have improvements | Low |
| Long-term ideas | Future |

Community feedback:
https://github.com/ezeslucky/crew/discussions/categories/feedbacks

---

# Pull Request Process

1. Fork the repository.
2. Create or discuss an issue before implementing major changes.
3. Create a feature branch.
4. Implement your changes.
5. Add or update tests when behavior changes or regression risk exists.
6. Ensure all tests pass.
7. Link the issue in your PR description:

```text
Fixes #123
```

8. Submit your Pull Request.

---

# Project Setup

## Frontend

Follow the setup instructions in:

```
web/README.md
```

Frontend testing guidelines:

```
web/docs/test.md
```

---

## Backend

Follow the setup instructions in:

```
api/README.md
```

---

# Development Notes

Before starting development, ensure you have:

- Required dependencies installed
- Project configured correctly
- Environment variables set
- Docker (if required)
- Read the backend and frontend setup guides

If you encounter issues, check the troubleshooting sections in the respective README files.

---

# Getting Help

Need help?

You can:

- Ask questions in the related GitHub Issue.
- Join our Discord community:

https://discord.gg/8Tpq4AcN9c

We're happy to help and look forward to your contributions. Happy coding! 🎉