import type { ReactNode } from "react";
import { TERMINAL_HOST, TERMINAL_USER } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

/**
 * A single shell prompt line: `user@host:~$ <command>`.
 *
 * The user/host come from siteConfig (env-driven), so the prompt reflects the
 * configured site without hardcoding anyone's identity. Pass `cursor` to append
 * a blinking block (useful for the "currently typing" last line).
 */
export function Prompt({
  command,
  path = "~",
  cursor = false,
  className,
}: {
  command?: ReactNode;
  path?: string;
  cursor?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("font-mono text-sm text-term-dim", className)}>
      <span className="text-term-green">
        {TERMINAL_USER}@{TERMINAL_HOST}
      </span>
      <span className="text-term-faint">:{path}$</span>{" "}
      {command}
      {cursor && <span className="term-cursor ml-1 align-middle" aria-hidden />}
    </div>
  );
}
