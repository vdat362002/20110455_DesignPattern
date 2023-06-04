const State = require('./State');

class OnState extends State {
    handle(context) {
        console.log('The light is on');
        context.setState(new (require('./OffState'))());
    }
}

module.exports = OnState;