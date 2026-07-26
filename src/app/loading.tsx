import { TERMINAL_HOST, TERMINAL_USER } from "@/config/siteConfig";

/**
 * Route-level loading UI, shown by Next.js while a server component streams in.
 * A blinking prompt keeps the terminal illusion instead of a generic spinner.
 */
export default function Loading() {
  return (
    <main className="terminal-bg flex min-h-screen items-center justify-center">
      <p className="text-sm text-term-muted">
        <span className="text-term-green">
          {TERMINAL_USER}@{TERMINAL_HOST}
        </span>
        <span className="text-term-faint">:~$</span> loading
        <span className="term-cursor ml-1 align-middle" aria-hidden />
      </p>
    </main>
  );
}
