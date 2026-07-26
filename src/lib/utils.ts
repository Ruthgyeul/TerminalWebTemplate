/**
 * Join conditional class names into a single string.
 *
 * A tiny, dependency-free `clsx`: accepts strings, and skips anything falsy
 * (`false`, `null`, `undefined`, `""`) so you can write
 * `cn("base", active && "is-active")` without leaking "false" into the DOM.
 */
export type ClassValue = string | false | null | undefined;

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}
