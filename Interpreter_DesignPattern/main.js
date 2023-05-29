const Context = require('./context');
const CheckExpression = require('./checkExpression');
const BrandExpression = require('./brandExpression');
const ModelExpression = require('./modelExpression');
const TypeExpression = require('./typeExpression');

class Program {
  static main() {
    const lstAircrafts = [
      new Context("A330"),
      new Context("A330F"),
      new Context("B777"),
      new Context("B777F"),
      new Context("TheCode")
    ];

    const lstExpressions = [
      new CheckExpression(),
      new BrandExpression(),
      new ModelExpression(),
      new TypeExpression()
    ];

    for (let ac_index = 0; ac_index < lstAircrafts.length; ac_index++) {
      for (let exp_index = 0; exp_index < lstExpressions.length; exp_index++) {
        lstExpressions[exp_index].interpretContext(lstAircrafts[ac_index]);
      }
      console.log("-----------------------------------");
    }
  }
}

Program.main();