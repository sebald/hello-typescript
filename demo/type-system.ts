const num: number = 5;

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

// Escape hatch
let x: any = { foo: 'bar' };
x = 123;
