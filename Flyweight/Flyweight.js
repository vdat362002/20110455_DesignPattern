class Wheel {
    constructor(size, type) {
      this.size = size;
      this.type = type;
    }
  
    getDescription() {
      return `Wheel size: ${this.size}, Wheel type: ${this.type}`;
    }
  }
  
  class Car {
    constructor(name, wheelSize, wheelType) {
      this.name = name;
      this.wheelSize = wheelSize;
      this.wheelType = wheelType;
      this.wheels = [];
    }
  
    addWheel(wheel) {
      this.wheels.push(wheel);
    }
  
    print() {
      console.log(`Car: ${this.name}`);
      console.log(`Wheel size: ${this.wheelSize}, Wheel type: ${this.wheelType}`);
      this.wheels.forEach((wheel) => console.log(wheel.getDescription()));
    }
  }
  
  // Sử dụng Flyweight Pattern để chia sẻ các đối tượng bánh xe giữa các đối tượng ô tô khác nhau
  const wheelFactory = {
    wheels: {},
  
    getWheel(size, type) {
      const key = `${size}_${type}_wheel`;
      if (this.wheels[key]) {
        return this.wheels[key];
      }
      const wheel = new Wheel(size, type);
      this.wheels[key] = wheel;
      return wheel;
    },
  };
  
  const car1 = new Car('Sports car', 18, 'racing');
  car1.addWheel(wheelFactory.getWheel(18, 'racing'));
  
  const car2 = new Car('SUV', 20, 'off-road');
  car2.addWheel(wheelFactory.getWheel(20, 'off-road'));
  
  car1.print();
  car2.print();