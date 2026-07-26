import { PromptLabel } from "@/components/PromptLabel";

/**
 * Route-level loading UI, shown by Next.js while a server component streams in.
 * A blinking prompt keeps the terminal illusion instead of a generic spinner.
 */
export default function Loading() {
  return (
    <main className="terminal-bg flex min-h-screen items-center justify-center">
      <p className="text-sm text-term-muted">
        <PromptLabel /> loading
        <span className="term-cursor ml-1 align-middle" aria-hidden />
      </p>
    </main>
  );
}
