const State = require('./State');

class OffState extends State {
    handle(context) {
        console.log('The light is off');
        context.setState(new (require('./OnState'))());
    }
}

module.exports = OffState;