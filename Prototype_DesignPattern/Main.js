const Car = require('./Car');
const CarPrototype = require('./CarPrototype');

const proto = new Car("Toyota", "Camry", 2018);
const carPrototype = new CarPrototype(proto);

const car = carPrototype.clone();
car.start();
car.stop();
car.getAge();




