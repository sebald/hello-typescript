export class Person {
  constructor(
    private readonly age: number,
    private readonly birthCountry: string,
    private readonly naturalizationDate: Date | null = null
  ) {}

  isEligibleToVote() {
    return this.isOver18() && this.isCitizen();
  }

  private isOver18() {
    return this.age >= 18;
  }

  private isCitizen() {
    return this.wasBornInGermany() || this.wasNaturalized();
  }

  private wasBornInGermany() {
    return this.birthCountry === 'Germany';
  }

  private wasNaturalized() {
    return Boolean(this.naturalizationDate);
  }
}
