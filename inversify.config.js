"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
require("reflect-metadata");
const inversify_1 = require("inversify");
const weapons_1 = require("./weapons");
const container = new inversify_1.Container();
exports.container = container;
container.bind('IWeapon').to(weapons_1.Axe);
