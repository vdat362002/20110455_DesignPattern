class CheeseDecorator {
    constructor(pizza) {
      this.pizza = pizza;
    }
  
    getDescription() {
      return this.pizza.getDescription() + ", phô mai";
    }
  
    getCost() {
      return this.pizza.getCost() + 2;
    }
  }
  
  module.exports = CheeseDecorator;


  