const Employee = require('./employee');
const ExtraSalary = require('./extraSalary');

let parvesh = new Employee("Parvesh", 180000);
parvesh.accept(new ExtraSalary());
parvesh.getSalary();