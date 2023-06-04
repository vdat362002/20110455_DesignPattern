class TomatoDecorator {
  constructor(pizza) {
    this.pizza = pizza;
  }

  getDescription() {
    return this.pizza.getDescription() + ", cà chua";
  }

  getCost() {
    return this.pizza.getCost() + 1.5;
  }
}
module.exports = TomatoDecorator;

