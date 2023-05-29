const Person = require('./person.js');

class PersonProxy {
  constructor(person) {
    this.person = person;
  }

  get(target, prop) {
    console.log(`The value of ${prop} is ${target[prop]}`);
    return target[prop];
  }

  set(target, prop, value) {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    target[prop] = value;
    return true;
  }
}

module.exports = PersonProxy;