import Decimal from "break_eternity.js";

export const valueTypes = {
    CONSTANT: "CONSTANT",
    DOWN: "DOWN"
} as const;

export type valueTypes = typeof valueTypes[keyof typeof valueTypes];

export class Value {
    type: valueTypes
    value: Decimal

    constructor(type: valueTypes, value: Decimal) {
        this.type = type
        this.value = value
    }
}