import { EnemyFactory } from './EnemyFactory.js';
import { TowerFactory } from './TowerFactory.js';

function run() {
	var entities = [];
	var enemyFactory = new EnemyFactory();
	var vendorFactory = new TowerFactory();

	entities.push(enemyFactory.create(5));
	entities.push(enemyFactory.create(7));
	entities.push(vendorFactory.create(2));
	entities.push(vendorFactory.create(5));

	for (var i = 0, len = entities.length; i < len; i++) {
		entities[i].info();
	}
}

run();
