const Expression = require('./expression');

class CheckExpression extends Expression {
  interpretContext(context) {
    let ac_model = context.getModel();
    if (ac_model.startsWith("A") || ac_model.startsWith("B")) {
      if (ac_model.length === 4 || ac_model.length === 5) {
        context.setIsAircraft(true);
        console.log(ac_model + " is an aircraft...");
      } else {
        context.setIsAircraft(false);
        console.log(ac_model + " is not an aircraft...");
      }
    } else {
      context.setIsAircraft(false);
      console.log(ac_model + " is not an aircraft...");
    }
  }
}

module.exports = CheckExpression;