let num = 5;
num = '123'; // Type '"123"' is not assignable to type 'number'.

function scream(s: string) {
  return s.toUpperCase();
}

function identity<T>(x: T) {
  return x;
}

interface Food {
  calories?: number;
  type: 'Fruit' | 'Vegetable' | 'Meat';
}
const apple: Food = {
  calories: 123,
  type: 'Fruit',
};

let x: any = { foo: 'bar' };
x = 123;
