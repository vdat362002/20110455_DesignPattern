class Car {
    constructor(name) {
      this.name = name + '-' + this.generateRandomString();
    }
  
    generateRandomString() {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const characters = '0123456789';
      let randomString = '';
  
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
  
      randomString += this.getRandomAlphabet().toUpperCase();
      randomString += this.getRandomNumber();
      randomString += '-';
  
      for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
  
      return randomString;
    }
  
    getRandomNumber() {
      return Math.floor(Math.random() * 10);
    }
  
    getRandomAlphabet() {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      return alphabet.charAt(randomIndex);
    }
  
    showInfo() {
      console.log(`${this.name}` );
    }
  }
  
  module.exports = Car;