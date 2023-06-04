class Item {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

class Store {
	constructor() {
		this.items = [];
	}

	addItem(item) {
		this.items.push(item);
	}

	[Symbol.iterator]() {
		let index = 0;
		const items = this.items;
		return {
			next: function () {
				if (index < items.length) {
					const currentItem = items[index];
					index++;
					return { done: false, value: currentItem };
				} else {
					return { done: true };
				}
			},
		};
	}

	get backwards() {
		let index = this.items.length - 1;
		const items = this.items;
		return {
			next: function () {
				if (index >= 0) {
					const currentItem = items[index];
					index--;
					return { done: false, value: currentItem };
				} else {
					return { done: true };
				}
			},
			// make iterator iterable
			[Symbol.iterator]: function () {
				return this;
			},
		};
	}
}

const store = new Store();

store.addItem(new Item('Product 1', 10));
store.addItem(new Item('Product 2', 200));
store.addItem(new Item('Product 3', 30));

// Sử dụng iterator mặc định
console.log('Iterator mặc định:');
for (let item of store) {
	console.log(`Tên sản phẩm: ${item.name}, Giá: ${item.price}`);
}

// Sử dụng iterator ngược
console.log('Iterator ngược:');
for (let item of store.backwards) {
	console.log(`Tên sản phẩm: ${item.name}, Giá: ${item.price}`);
}
