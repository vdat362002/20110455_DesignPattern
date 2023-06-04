class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`Started ${this.make} ${this.model}.`);
  }

  stop() {
    console.log(`Stopped ${this.make} ${this.model}.`);
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - this.year;
    console.log(`${this.make} ${this.model} age is ${age} years.`);
  }
}

module.exports = Car;

