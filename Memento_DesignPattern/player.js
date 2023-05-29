const Memento = require('./memento');

class Player {
  constructor() {
    this.Level = 0;
    this.Score = 0;
    this.Health = "";
    this.lifeline = 3;
  }

  createMarker() {
    return new Memento(this.Level, this.Score, this.Health);
  }

  restoreLevel(playerMemento) {
    this.Level = playerMemento.Level;
    this.Score = playerMemento.Score;
    this.Health = playerMemento.Health;
    this.lifeline -= 1;
  }

  displayPlayerInfo() {
    console.log("Level: " + this.Level);
    console.log("Score: " + this.Score);
    console.log("Health: " + this.Health);
    console.log("Lifeline left: " + this.lifeline);
  }
}

module.exports = Player;