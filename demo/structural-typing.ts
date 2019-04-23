interface Named {
  name: string;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

let p: Named;
p = new Person('Alice');

function fn(person: Person) { /*... */ }

fn(p);

const o = { name: 'Bob', surname: 'Smith' };
fn(o);
