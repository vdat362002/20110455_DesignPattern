const Expression = require('./expression');

class TypeExpression extends Expression {
  interpretContext(context) {
    if (context.getIsAircraft()) {
      let ac_model = context.getModel();
      if (context.getLength() === 5 && context.getLastChar() === "F") {
        console.log("Aircraft type is Cargo/Freighter");
      } else {
        console.log("Aircraft type is Passenger Transportation");
      }
    } else {
      console.log("Type could not be interpreted");
    }
  }
}

module.exports = TypeExpression;