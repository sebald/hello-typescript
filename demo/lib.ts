export type Predicate<T> = (a: T) => boolean;

export const either: <T>(f: Predicate<T>, g: Predicate<T>) => Predicate<T> = (
  f,
  g
) => a => f(a) || g(a);

export const both: <T>(f: Predicate<T>, g: Predicate<T>) => Predicate<T> = (
  f,
  g
) => a => f(a) && g(a);
