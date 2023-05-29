class ExtraSalary {
    visit(employee) {
      employee.setSalary(2 * employee.getSalary());
    }
  }
  
  module.exports = ExtraSalary;