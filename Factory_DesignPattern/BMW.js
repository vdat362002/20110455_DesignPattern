const Car = require('./default_car');

class BMW extends Car {
  constructor() {
    super('BMW')
  }
}

module.exports = BMW;