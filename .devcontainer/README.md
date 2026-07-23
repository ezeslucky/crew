# Development with devcontainer

This project includes a devcontainer configuration that allows you to open the project in a container with a fully configured development environment.
Both frontend and backend environments are initialized when the container is started.


## Pros of Devcontainer

Unified Development Environment: By using devcontainers, you can ensure that all developers are developing in the same environment, reducing the occurrence of "it works on my machine" type of issues.

Quick Start: New developers can set up their development environment in a few simple steps, without spending a lot of time on environment configuration.

Isolation: Devcontainers isolate your project from your host operating system, reducing the chance of OS updates or other application installations impacting the development environment.

## Cons of Devcontainer

Learning Curve: For developers unfamiliar with Docker and VS Code, using devcontainers may be somewhat complex.

Performance Impact: While usually minimal, programs running inside a devcontainer may be slightly slower than those running directly on the host.

## Troubleshooting

if you see such error message when you open this project in codespaces:
![Alt text](troubleshooting.png)

a simple workaround is change `/signin` endpoint into another one, then login with GitHub account and close the tab, then change it back to `/signin` endpoint. Then all things will be fine.
The reason is `signin` endpoint is not allowed in codespaces, details can be found [here](https://github.com/orgs/community/discussions/5204)
