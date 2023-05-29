const Expression = require('./expression');

class BrandExpression extends Expression {
  interpretContext(context) {
    if (context.getIsAircraft()) {
      if (context.getFirstChar() === "A")
        console.log("Brand is Airbus");
      else if (context.getFirstChar() === "B")
        console.log("Brand is Boeing");
    } else {
      console.log("Brand could not be interpreted");
    }
  }
}

module.exports = BrandExpression;