class CarPart {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getDescription() {
      throw new Error('You have to implement the method getDescription!');
    }
  
    getPrice() {
      throw new Error('You have to implement the method getPrice!');
    }
  
    add(carPart) {
      throw new Error('You have to implement the method add!');
    }
  
    remove(carPart) {
      throw new Error('You have to implement the method remove!');
    }
  
    getChild(index) {
      throw new Error('You have to implement the method getChild!');
    }
  
    print() {
      throw new Error('You have to implement the method print!');
    }
  }
  
  class Engine extends CarPart {
    constructor(name, description, price) {
      super(name);
      this.description = description;
      this.price = price;
    }
  
    getDescription() {
      return this.description;
    }
  
    getPrice() {
      return this.price;
    }
  
    print() {
      console.log(`Engine: ${this.name}, Price: ${this.getPrice()} USD, Description: ${this.getDescription()}`);
   }
}

  class Wheel extends CarPart {
    constructor(name, description, price) {
      super(name);
      this.description = description;
      this.price = price;
    }
  
    getDescription() {
      return this.description;
    }
  
    getPrice() {
      return this.price;
    }
  
    print() {
      console.log(`Wheel: ${this.name}, Price: ${this.getPrice()} USD, Description: ${this.getDescription()}`);
    }
  }
  
  class Car extends CarPart {
    constructor(name) {
      super(name);
      this.parts = [];
    }
  
    add(carPart) {
      this.parts.push(carPart);
    }
  
    remove(carPart) {
      const index = this.parts.indexOf(carPart);
      if (index !== -1) {
        this.parts.splice(index, 1);
      }
    }
  
    getChild(index) {
      return this.parts[index];
    }
  
    getPrice() {
      return this.parts.reduce((total, part) => total + part.getPrice(), 0);
    }
  
    print() {
      console.log(`Car: ${this.name}, Price: ${this.getPrice()} USD`);
      this.parts.forEach((part) => part.print());
    }
  }
  
  // Sử dụng Composite Pattern để tổ chức các đối tượng ô tô
  const engine = new Engine('V8', 'A powerful V8 engine', 10000);
  const wheel1 = new Wheel('Front left', 'A high-performance racing wheel', 500);
  const wheel2 = new Wheel('Front right', 'A high-performance racing wheel', 500);
  const wheel3 = new Wheel('Rear left', 'A high-performance racing wheel', 500);
  const wheel4 = new Wheel('Rear right', 'A high-performance racing wheel', 500);
  
  const car = new Car('Sports car');
  car.add(engine);
  car.add(wheel1);
  car.add(wheel2);
  car.add(wheel3);
  car.add(wheel4);
  
  car.print();