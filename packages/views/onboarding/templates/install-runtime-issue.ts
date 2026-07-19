
export const INSTALL_RUNTIME_ISSUE_TITLE = {
  en: "Step 1 — Connect a runtime to start using agents"
} as const;

const en = `Welcome to Crew.

Agents need a runtime before they can execute work. You can still use Crew as a lightweight project-management workspace while you install one.

## Try Crew first

Before the runtime is ready, you can:

1. Create a project for your current work.
2. Create a few issues and move them across backlog, todo, in_progress, and done.
3. Add priorities, labels, comments, and subscriptions.
4. Use Inbox to track assignments and mentions.

That gives you the project-management layer first. Once a runtime is connected, agents can start working from the same issues.

## Install your first agent runtime

Full guide: https://crew.ai/docs/install-agent-runtime

For English users, the fastest first path is Codex:

1. Make sure Node.js is installed.
2. Install Codex:
   npm i -g @openai/codex
3. Sign in:
   codex
4. Confirm your terminal can find it:
   which codex
   codex --version
5. Restart the Crew daemon:
   crew daemon restart
   If you use the desktop app, restarting the app is enough.
6. Return to Runtimes and refresh. You should see a Codex runtime online.
7. Create your first agent from that runtime, then assign an issue to the agent and set status to todo.

Codex reference: https://developers.openai.com/codex/cli

When the runtime is connected, you can create Crew Helper for a guided first run.`;



export const INSTALL_RUNTIME_ISSUE_BODY = { en } as const;


export const FOLLOWUP_COMMENT_PREFIX = {
  en: "Your next step:"
} as const;
