import { Enemy } from './Enemy.js';

function EnemyFactory() {
	this.create = function (movementSpeed) {
		return new Enemy(movementSpeed);
	};
}

export { EnemyFactory };
