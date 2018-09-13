/**
 * JSON.stringify transformation
 * Source: https://www.youtube.com/watch?v=wpgKd-rwnMw
 */

type JSONified<T> = JSONifiedValue<T extends { toJSON(): infer U } ? U : T>;

// prettier-ignore
type JSONifiedValue<T> = 
  T extends string | number | boolean | null ? T :
  T extends Function ? undefined :
  T extends Array<infer U> ? JSONifiedArray<U> :
  T extends object ? JSONifiedObject<T> :
  undefined;

type UndefinedAsNull<T> = T extends undefined ? null : T;

interface JSONifiedArray<T> extends Array<UndefinedAsNull<JSONified<T>>> {}

type JSONifiedObject<T> = { [P in keyof T]: JSONified<T[P]> };

// ---------------

declare class Widget {
  name: string;
  toJSON(): { kind: 'Widget'; date: Date };
}

type Item = {
  text: string;
  count: number;
  choice: 'yes' | 'no' | null;
  fn: () => void;
  nested: {
    isSaved: boolean;
    data: [1, undefined, 2];
  };
  widget: Widget;
  children: Item[];
};

declare let item: JSONified<Item>;
