import 'reflect-metadata';
import { Container } from 'inversify';
import { IWeapon } from './types';
import { Sword, Bow, Axe } from './weapons';

const container = new Container();
container.bind<IWeapon>('IWeapon').to(Axe);

export { container };