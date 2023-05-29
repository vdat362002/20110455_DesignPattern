class Context {
  constructor(ac_model) {
    this.ac_model = ac_model;
    this.isAircraft = false;
  }

  getModel() {
    return this.ac_model;
  }

  getLength() {
    return this.ac_model.length;
  }

  getLastChar() {
    return this.ac_model[this.ac_model.length - 1];
  }

  getFirstChar() {
    return this.ac_model[0];
  }

  setIsAircraft(isAircraft) {
    this.isAircraft = isAircraft;
  }

  getIsAircraft() {
    return this.isAircraft;
  }
}

module.exports = Context;