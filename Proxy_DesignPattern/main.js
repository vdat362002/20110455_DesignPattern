const Person = require('./person.js');
const PersonProxy = require('./proxy.js');

const person = new Person("Van Dat", 21, "vandatdinh2@gmail.com", "VietNam");
const personProxy = new PersonProxy(person);

console.log(`
  ${personProxy.person.name}
  ${personProxy.person.age += 2}
  ${personProxy.person.email}
  ${personProxy.person.country}
`);