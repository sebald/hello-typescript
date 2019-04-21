interface Immutable<T> {
  get<K extends keyof T>(name: K): T[K];
  set<S>(o: S): Immutable<T & S>;
}
declare function createStore<T>(o: T): Immutable<T>;

const alice = createStore({ name: 'Alice', age: 29 });
alice.get('name'); // Ok, returns a `string`
alice.get('age'); // Ok, returns a `number`
alice.get('lastName'); // Error

const aliceSmith = alice.set({ lastName: 'Smith' });
aliceSmith.get('name'); // Ok, returns a `string`
aliceSmith.get('age'); // Ok, returns a `number`
aliceSmith.get('lastName'); // Ok, returns `string`
