import { describe, expect, it } from "vitest";
import { workspaceUrlHost } from "./workspace-url";

describe("workspaceUrlHost", () => {
  it("returns the host of a full app URL", () => {
    expect(workspaceUrlHost("https://crew.example.com")).toBe(
      "crew.example.com",
    );
  });

  it("ignores scheme, path, and trailing slash", () => {
    expect(workspaceUrlHost("https://crew.example.com/")).toBe(
      "crew.example.com",
    );
    expect(workspaceUrlHost("http://crew.example.com/app/onboarding")).toBe(
      "crew.example.com",
    );
  });

  it("preserves a non-default port", () => {
    expect(workspaceUrlHost("https://my.host:3000")).toBe("my.host:3000");
  });

  it("accepts a bare host without a scheme", () => {
    expect(workspaceUrlHost("crew.example.com")).toBe("crew.example.com");
    expect(workspaceUrlHost("crew.example.com/path")).toBe(
      "crew.example.com",
    );
  });

  it("falls back to the brand host when no app URL is configured", () => {
    expect(workspaceUrlHost("")).toBe("crew.ai");
    expect(workspaceUrlHost("   ")).toBe("crew.ai");
    expect(workspaceUrlHost(null)).toBe("crew.ai");
    expect(workspaceUrlHost(undefined)).toBe("crew.ai");
  });
});
