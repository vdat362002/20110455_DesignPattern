class Farm {
    constructor() {
      this.name = '';
      this.address = '';
      this.size = 0;
      this.crops = [];
    }
  
    setName(name) {
      this.name = name;
    }
  
    setAddress(address) {
      this.address = address;
    }
  
    setSize(size) {
      this.size = size;
    }
  
    addCrop(crop) {
      this.crops.push(crop);
    }
  
    describe() {
      console.log(`This is a farm named ${this.name}, located at ${this.address}. It has a size of ${this.size} acres and grows crops including ${this.crops.join(', ')}.`);
    }
  }
  
  class FarmBuilder {
    constructor() {
      this.farm = new Farm();
    }
  
    setName(name) {
      this.farm.setName(name);
      return this;
    }
  
    setAddress(address) {
      this.farm.setAddress(address);
      return this;
    }
  
    setSize(size) {
      this.farm.setSize(size);
      return this;
    }
  
    addCrop(crop) {
      this.farm.addCrop(crop);
      return this;
    }
  
    build() {
      return this.farm;
    }
  }
  
  // Sử dụng builder để tạo ra một đối tượng nông trại
  const farmBuilder = new FarmBuilder();
  const farm = farmBuilder.setName('Happy Farm')
                        .setAddress('123 Main St')
                        .setSize(200)
                        .addCrop('potatoes')
                        .addCrop('carrots')
                        .build();
  
  // Mô tả đối tượng nông trại
  farm.describe(); // This is a farm named Happy Farm, located at 123 Main St. It has a size of 200 acres and grows crops including potatoes, carrots.