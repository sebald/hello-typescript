export type Predicate<T> = (a: T) => boolean;

export const either: <T>(f: Predicate<T>, g: Predicate<T>) => Predicate<T> = (
  f,
  g
) => a => f(a) || g(a);

export const both: <T>(f: Predicate<T>, g: Predicate<T>) => Predicate<T> = (
  f,
  g
) => a => f(a) && g(a);

let id = 0;

export const getId = () => {
  id = id + 1;
  return id;
};
