const Player = require('./player');
const CareTaker = require('./caretaker');

const { setTimeout } = require('timers/promises');

// Player has completed level 1
const player = new Player();
player.Level = 1;
player.Score = 100;
player.Health = "100%";
console.log("----------- Player info after completing level 1 ---------------------");
player.displayPlayerInfo();

// When the player completes any level, create a checkpoint for that level
const careTaker = new CareTaker();
careTaker.LevelMarker = player.createMarker();

async function sleep(ms) {
  await setTimeout(ms);
}

async function main() {
  await sleep(2000);

  player.Level = 2;
  player.Score = 130;
  player.Health = "80%";
  console.log("--------------- Player info in level 2 --------------------------------");
  player.displayPlayerInfo();

  // If the player loses all lifelines, restore the game from level 1
  player.restoreLevel(careTaker.LevelMarker);
  console.log("------------- Player info after restoring level 1 data ----------------");
  player.displayPlayerInfo();
}

main();