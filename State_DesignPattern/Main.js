const LightSwitch = require('./LightSwitch');
const OffState = require('./OffState');

const lightSwitch = new LightSwitch(new OffState());

lightSwitch.press(); // prints: The light is off
lightSwitch.press(); // prints: The light is on
lightSwitch.press(); // prints: The light is off