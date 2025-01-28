import { container } from './inversify.config';
import { Warrior } from './warrior';

const warrior = container.resolve(Warrior);
warrior.fight(); // Output: Swinging the sword!