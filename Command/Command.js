class Car {
    constructor() {
      this.name = '';
      this.description = '';
      this.engineOn = false;
    }
  
    setName(name) {
      this.name = name;
    }
  
    setDescription(description) {
      this.description = description;
    }
  
    turnEngineOn() {
      this.engineOn = true;
      console.log('Engine turned on.');
    }
  
    turnEngineOff() {
      this.engineOn = false;
      console.log('Engine turned off.');
    }
  
    describe() {
      console.log(`This is a ${this.name} car. ${this.description}. The engine is currently ${this.engineOn ? 'on' : 'off'}.`);
    }
  }
  
  class CarCommand {
    execute() {
      throw new Error('You have to implement the method execute!');
    }
  }
  
  class TurnEngineOnCommand extends CarCommand {
    constructor(car) {
      super();
      this.car = car;
    }
  
    execute() {
      this.car.turnEngineOn();
    }
  }
  
  class TurnEngineOffCommand extends CarCommand {
    constructor(car) {
      super();
      this.car = car;
    }
  
    execute() {
      this.car.turnEngineOff();
    }
  }
  
  class ChangeDescriptionCommand extends CarCommand {
    constructor(car, description) {
      super();
      this.car = car;
      this.description = description;
      this.previousDescription = '';
    }
  
    execute() {
      this.previousDescription = this.car.description;
      this.car.setDescription(this.description);
    }
  
    undo() {
      this.car.setDescription(this.previousDescription);
    }
  }
  
  // Sử dụng Command Pattern để thực hiện các hành động trên đối tượng ô tô
  const car = new Car();
  
  const turnEngineOnCommand = new TurnEngineOnCommand(car);
  const turnEngineOffCommand = new TurnEngineOffCommand(car);
  const changeDescriptionCommand = new ChangeDescriptionCommand(car, 'This is a red sports car.');
  
  turnEngineOnCommand.execute();
  car.describe(); // This is a car. This is a red sports car. The engine is currently on.
  
  turnEngineOffCommand.execute();
  car.describe(); // This is a car. This is a red sports car. The engine is currently off.
  
  changeDescriptionCommand.execute();
  car.describe(); // This is a car. This is a red sports car. The engine iscurrently off.
  
  changeDescriptionCommand.undo();
  car.describe(); // This is a car. The engine is currently off.