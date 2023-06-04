function Enemy(movementSpeed) {
	this.movementSpeed = movementSpeed;
	this.info = function () {
		console.log('I am an Enemy and I move ' + movementSpeed + ' tiles/s.');
	};
}

export { Enemy };
