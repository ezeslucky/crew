
const BRAND_WORKSPACE_HOST = "crew.ai";


export function workspaceUrlHost(
  daemonAppUrl: string | null | undefined,
): string {
  const trimmed = daemonAppUrl?.trim();
  if (!trimmed) return BRAND_WORKSPACE_HOST;
  try {
    return new URL(trimmed).host || BRAND_WORKSPACE_HOST;
  } catch {
    // `daemon_app_url` may arrive without a scheme; treat it as a bare host
    // and strip any path/query/fragment so only the authority remains.
    const bare = trimmed
      .replace(/^.*?:\/\//, "")
      .replace(/[/?#].*$/, "")
      .trim();
    return bare || BRAND_WORKSPACE_HOST;
  }
}
