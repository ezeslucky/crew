import type { StorageAdapter } from "../types/storage";

/**
 * Keys that are namespaced per workspace (stored as `${key}:${slug}`).
 *
 * IMPORTANT: When adding a new workspace-scoped persist store or storage key,
 * add its key here so that workspace deletion and logout properly clean it up.
 * Also ensure the store uses `createWorkspaceAwareStorage` for its persist config.
 */
const WORKSPACE_SCOPED_KEYS = [
  "crew_issue_draft",
  "crew_issue_surface_views",
  "crew_issues_view",
  "crew_issues_scope",
  "crew_my_issues_view",
  "crew:chat:selectedAgentId",
  "crew:chat:activeSessionId",
  "crew:chat:drafts",
  "crew:chat:expanded",
  "crew_navigation",
];

/** Remove all workspace-scoped storage entries for the given workspace slug. */
export function clearWorkspaceStorage(
  adapter: StorageAdapter,
  slug: string,
) {
  for (const key of WORKSPACE_SCOPED_KEYS) {
    adapter.removeItem(`${key}:${slug}`);
  }
}
