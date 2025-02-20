import Decimal from "break_eternity.js"
import { game } from "./game.svelte"
import { Constant, type Value } from "./types.svelte"

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
        "Gives you a 10 value",
        new Decimal(30),
        () => {return true},
        () => { game.valueDrawer.push(new Constant(10)) }
    ),
    new Upgrade(
        "What remains...",
        "Unlocks the modulo operator (it's not very useful)",
        new Decimal(100),
        () => {return game.score.greaterThanOrEqualTo(50)},
        () => { game.OPERATOR_LIST["modulo"].unlocked = true },
    ),
    new Upgrade(
        "Stacks on Stacks",
        "Unlocks the multiplication operator",
        new Decimal(1000),
        () => {return game.score.greaterThanOrEqualTo(400)},
        () => { game.OPERATOR_LIST["multiply"].unlocked = true },
    ),
    new Upgrade(
        "Number 3 m'lord",
        "Unlocks a third value slot (if you don't know what that means, just buy it)",
        new Decimal('1e5'),
        () => {return game.score.greaterThanOrEqualTo('1e4')},
        () => { game.newValue() },
    ),
]