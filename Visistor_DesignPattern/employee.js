class Employee {
    constructor(name, salary) {
      this.name = name;
      this.salary = salary;
    }
  
    getSalary() {
      console.log(`Employee name: ${this.name}\nSalary: ${this.salary}`);
      return this.salary;
    }
  
    setSalary(salary) {
      this.salary = salary;
    }
  
    accept(visitorFunction) {
      visitorFunction.visit(this);
    }
  }
  
  module.exports = Employee;