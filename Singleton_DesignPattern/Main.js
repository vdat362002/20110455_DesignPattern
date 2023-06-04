const Singleton = require('./Singleton');

const instance1 = Singleton.getInstance();

const instance2 = Singleton.getInstance();

// Kiểm tra tính duy nhất của instance
console.log(instance1 === instance2);


