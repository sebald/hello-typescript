import { both, either } from './lib';

interface Person {
  birthCountry: string;
  naturalizationDate: Date | null;
  age: number;
}

const wasBornInCountry = (person: Person) => person.birthCountry === 'Germany';
const wasNaturalized = (person: Person) => Boolean(person.naturalizationDate);

const isCitizen = either(wasBornInCountry, wasNaturalized);
const isOver18 = (person: Person) => person.age >= 18;

export const isEligibleToVote = both(isOver18, isCitizen);
