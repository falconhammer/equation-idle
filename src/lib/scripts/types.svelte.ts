import Decimal from "break_eternity.js";

// export class Value {
//     type: valueTypes
//     value: Decimal

//     constructor(type: valueTypes, value: Decimal) {
//         this.type = type
//         this.value = value
//     }
// }

export class Constant {
    value: () => Decimal

    constructor(value: number | Decimal | string) {
        this.value = () => {return new Decimal(value)}
    }
}

export class Special {
    value: () => Decimal

    constructor(value: () => Decimal) {
        this.value = value
    }
}

export type Value = Special | Constant; 

export class Operator {
    name: string;
    effect: (a: Decimal, b: Decimal, ...args: Decimal[]) => Decimal = (a, b) => {return a};
    symbol: any;
    unlocked: boolean;

    constructor(name: string, effect: (a: Decimal, b: Decimal, ...args: Decimal[]) => Decimal, symbol: any, startUnlocked: boolean) {
        this.name = name
        this.effect = effect
        this.symbol = symbol
        this.unlocked = startUnlocked
    }
}