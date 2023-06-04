// Định nghĩa lớp đại diện cho động cơ
class Engine {
    constructor() {
      this.speed = 0;
      this.isStarted = false;
      this.observers = [];
    }
  
    setSpeed(speed) {
      this.speed = speed;
      this.notifyObservers();
    }
  
    start() {
      this.isStarted = true;
      this.notifyObservers();
    }
  
    stop() {
      this.isStarted = false;
      this.notifyObservers();
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers() {
      this.observers.forEach((observer) => observer.update(this));
    }
  }
  
  // Định nghĩa lớp đại diện cho ô tô
  class Car {
    constructor(name, engine) {
      this.name = name;
      this.engine = engine;
    }
  
    start() {
      this.engine.start();
    }
  
    stop() {
      this.engine.stop();
    }
  }
  
  // Định nghĩa lớp đạidiện cho đối tượng quan sát
  class Observer {
    update(engine) {
      console.log(`Engine of car ${engine.name} is ${engine.isStarted ? 'started' : 'stopped'}`);
    }
  }
  
  // Sử dụng Observer Pattern để cho phép các đối tượng quan sát thông báo về trạng thái của động cơ
  const engine = new Engine();
  const car1 = new Car('Sports car', engine);
  const car2 = new Car('SUV', engine);
  
  const observer1 = new Observer();
  const observer2 = new Observer();
  
  engine.addObserver(observer1);
  engine.addObserver(observer2);
  
  car1.start();
  car2.start();
  
  engine.setSpeed(60);
  
  car1.stop();
  
  engine.setSpeed(80);
  
  engine.removeObserver(observer1);
  
  car2.stop();