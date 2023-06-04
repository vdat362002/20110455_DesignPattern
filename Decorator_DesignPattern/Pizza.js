class Pizza {

  constructor(description) {
    this.description = description;
  }
  getDescription() {
    return this.description;
  }

  getCost() {
    return 10;
  }
}

module.exports = Pizza;

