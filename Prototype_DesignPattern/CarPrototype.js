const Car = require('./Car');

class CarPrototype {
    constructor(proto) {
      this.proto = proto;
    }
  
    clone() {
      const car = new Car();
  
      car.make = this.proto.make;
      car.model = this.proto.model;
      car.year = this.proto.year;
  
      return car;
    }
  }
  module.exports = CarPrototype;

  


  