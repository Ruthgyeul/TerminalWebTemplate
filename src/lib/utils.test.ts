import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("joins truthy class names with spaces", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("skips falsy values so conditionals don't leak into the DOM", () => {
    const active = false;
    const disabled = true;
    expect(cn("base", active && "is-active", disabled && "is-disabled")).toBe(
      "base is-disabled",
    );
    expect(cn("x", null, undefined, "")).toBe("x");
  });
});
