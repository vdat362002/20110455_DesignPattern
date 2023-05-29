const Expression = require('./expression');

class ModelExpression extends Expression {
  interpretContext(context) {
    if (context.getIsAircraft()) {
      console.log("Model is: " + context.getModel().substring(1, 4));
    } else {
      console.log("Model could not be interpreted");
    }
  }
}

module.exports = ModelExpression;