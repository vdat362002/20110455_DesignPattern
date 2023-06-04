class Singleton {
  constructor() {
    this.message = 'Hello, I am a Singleton instance!';
  }

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  getMessage() {
    return this.message;
  }
}

module.exports = Singleton;