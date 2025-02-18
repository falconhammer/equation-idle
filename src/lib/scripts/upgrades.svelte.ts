import Decimal from "break_eternity.js"
import { game } from "./game.svelte"
import { Value, valueTypes } from "./types.svelte"

export class Upgrade {
    static count = 0;

    name: string;
    description: string;
    price: Decimal;
    fn = (() => {})
    visibility: any;
    effect: () => void;

    constructor(name: string, description: string, price: Decimal, visibility: () => boolean, effect: () => void) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.visibility = visibility;
        this.effect = () => {
             effect()
        }
        
    }
}

export const upgrades = [
    new Upgrade(
        "First Upgrade",
        "Gives you a 19 value",
        new Decimal(10),
        () => {return true},
        () => { game.valueDrawer.push(new Value(valueTypes.CONSTANT, new Decimal(19))) }
    ),
    new Upgrade(
        "Second Upgrade",
        "Buy this one second",
        new Decimal(100),
        () => {return game.score.greaterThanOrEqualTo(50)},
        () => { game.operatorUnlocks[1] = true },
    ),
]