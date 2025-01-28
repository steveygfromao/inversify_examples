import { inject, injectable } from 'inversify';
import { IWeapon } from './types';

@injectable()
export class Warrior {
    private weapon: IWeapon;

    constructor(@inject('IWeapon') weapon: IWeapon) {
        this.weapon = weapon;
    }

    fight() {
        console.log(this.weapon.use());
    }
}