import { Tower } from './Tower.js';

function TowerFactory() {
	this.create = function (firingSpeed) {
		return new Tower(firingSpeed);
	};
}

export { TowerFactory };
