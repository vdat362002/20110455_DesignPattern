function Tower(firingSpeed) {
	this.firingSpeed = firingSpeed;
	this.info = function () {
		console.log('I am a Tower and I shoot ' + firingSpeed + ' bullets/s.');
	};
}

export { Tower };
