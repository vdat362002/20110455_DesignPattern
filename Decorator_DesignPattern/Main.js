const Pizza = require('./Pizza');
const CheeseDecorator = require('./CheeseDecorator');
const TomatoDecorator = require('./TomatoDecorator');

const basicPizza = new Pizza("Pizza cơ bản");
console.log(basicPizza.getDescription()); 
console.log(basicPizza.getCost());

const cheesePizza = new CheeseDecorator(basicPizza);
console.log(cheesePizza.getDescription());
console.log(cheesePizza.getCost());

const cheeseAndTomatoPizza = new TomatoDecorator(cheesePizza);
console.log(cheeseAndTomatoPizza.getDescription());
console.log(cheeseAndTomatoPizza.getCost());

