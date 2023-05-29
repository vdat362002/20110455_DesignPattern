const Audi = require('./Audi');
const BMW = require('./BMW');
const Mercedes = require('./Mercedes');

class CarFactory {
  create(type) {
    switch (type) {
      case 'Audi':
        return new Audi();

      case 'BMW':
        return new BMW();

      case 'Mercedes':
        return new Mercedes();

      default:
        {
          console.log('Unknown Car type...');
        }
    }
  }
}

module.exports = new CarFactory();