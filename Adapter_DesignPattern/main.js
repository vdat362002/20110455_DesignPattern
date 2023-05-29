const LegacyToTargetAdapter = require('./adapter');

// Sử dụng adapter
const adapter = new LegacyToTargetAdapter();
const data = adapter.getData();
console.log(data);