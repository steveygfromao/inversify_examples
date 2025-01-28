import { injectable } from 'inversify';
import { IWeapon } from './types';

@injectable()
export class Sword implements IWeapon {
    name = 'Sword';
    use() {
        return 'Swinging the sword!';
    }
    damage() {
        return 10;
    }

}

@injectable()
export class Bow implements IWeapon {
    name = 'Bow';

    use() {
        return 'Shooting an arrow!';
    }
}

@injectable()
export class Axe implements IWeapon {
    name = 'Axe';

    use() {
        return 'Swinging the axe!';
    }

}