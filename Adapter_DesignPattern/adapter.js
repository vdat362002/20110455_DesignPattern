const LegacyDataFetcher = require('./legacyDataFetcher');
const TargetDataConverter = require('./targetDataConverter');

class LegacyToTargetAdapter {
  constructor() {
    this.legacyDataFetcher = new LegacyDataFetcher();
    this.targetDataConverter = new TargetDataConverter();
  }

  getData() {
    const legacyData = this.legacyDataFetcher.fetchData();
    const convertedData = this.targetDataConverter.convertData(legacyData);

    return convertedData;
  }
}

module.exports = LegacyToTargetAdapter;