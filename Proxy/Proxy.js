// Định nghĩa// Lớp đại diện cho đối tượng ô tô
class Car {
    constructor(name) {
      this.name = name;
      this.speed = 0;
      this.isStarted = false;
    }
  
    setSpeed(speed) {
      this.speed = speed;
    }
  
    getSpeed() {
      return this.speed;
    }
  
    start() {
      this.isStarted = true;
    }
  
    stop() {
      this.isStarted = false;
    }
  
    getIsStarted() {
      return this.isStarted;
    }
  }
  
  // Định nghĩa lớp đại diện cho đối tượng trung gian CarProxy
  class CarProxy {
    constructor(car) {
      this.car = car;
    }
  
    setSpeed(speed) {
      if (this.car.getIsStarted()) {
        this.car.setSpeed(speed);
      } else {
        throw new Error('Car is not started');
      }
    }
  
    getSpeed() {
      return this.car.getSpeed();
    }
  
    start() {
      this.car.start();
    }
  
    stop() {
      this.car.stop();
    }
  
    getIsStarted() {
      return this.car.getIsStarted();
    }
  }
  
  // Sử dụng đối tượng trung gian CarProxy để kiểm soát truy cập đến đối tượng thực sự của ô tô
  const car = new Car('Sports car');
  const proxyCar = new CarProxy(car);
  
  proxyCar.start();
  console.log(`Car is started: ${proxyCar.getIsStarted()}`);
  
  proxyCar.setSpeed(60);
  console.log(`Current speed: ${proxyCar.getSpeed()}`);
  
  proxyCar.stop();
  console.log(`Car is started: ${proxyCar.getIsStarted()}`);