import { describe, expect, it } from "vitest";
import {
  customRuntimeDocsHref,
  daemonRuntimesDocsHref,
} from "./runtime-docs";

describe("runtime docs links", () => {
  it.each([
    ["en", "https://crew.ai/docs/daemon-runtimes"]
  ])("localizes the daemon guide for %s", (language, expected) => {
    expect(daemonRuntimesDocsHref(language)).toBe(expected);
  });

  // it("adds the localized custom runtime section", () => {
  //   expect(customRuntimeDocsHref("zh-Hans")).toBe(
  //     `https://crew.ai/docs/zh/daemon-runtimes#${encodeURIComponent("自定义运行时配置")}`,
  //   );
  // });
});
