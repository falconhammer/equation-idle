import Decimal from "break_eternity.js";
import { Value, valueTypes } from "./types.svelte";
import { upgrades } from "./upgrades.svelte";
import Equation from "$lib/components/windows/Equation.svelte";
import ValueDrawer from "$lib/components/windows/ValueDrawer.svelte";
import Upgrades from "$lib/components/windows/Upgrades.svelte";
import Settings from "$lib/components/windows/Settings.svelte";

const OPERATOR_LIST = ["+", "-", "*", "/"]

const ZERO = new Decimal(0)

class Game {
    OPERATOR_LIST = ["+", "-", "*", "/"]

    config = {
        roundedPlaces: 2
    }

    valueDrawer: Value[] = $state([
        new Value(valueTypes.CONSTANT, new Decimal(0)),
        new Value(valueTypes.CONSTANT, new Decimal(1)),
        new Value(valueTypes.CONSTANT, new Decimal(10)),
        new Value(valueTypes.CONSTANT, new Decimal(100)),
    ])

    upgradesPurchased = $state(Array(upgrades.length).fill(false))

    score: Decimal = $state(new Decimal(0));
    velocity: Decimal = $state(new Decimal(0));
    tickrate: number = $state(1000);
    operators: string[] = $state(["", "", ""]);
    operatorUnlocks: boolean[] = $state([true, false, false, false]);
    activeValues: Decimal[] = $state([ZERO, ZERO, ZERO, ZERO]);
    activeValueTypes: valueTypes[] = $state([valueTypes.CONSTANT, valueTypes.CONSTANT, valueTypes.CONSTANT, valueTypes.CONSTANT])
    #interval: number = 0;

    tick() {
        this.score = this.score.add(this.velocity);
        this.calculateVelocity()
    }

    changeTickrate(value: number) {
        this.tickrate = value;
        clearInterval(this.#interval);
        this.#interval = setInterval(() => {
            this.tick();
        }, this.tickrate);
    }

    intialize() {
        this.#interval = setInterval(() => {
            this.tick();
        }, this.tickrate);
    }

    calculateVelocity() {
        let newValues = [...this.activeValues];
        loop: for (let i = 0; i < 3; i++) {
            switch (this.operators[i]) {
                case "+":
                    newValues[0] = newValues[0].plus(newValues[i + 1]);
                    break;
                case "-":
                    newValues[0] = newValues[0].sub(newValues[i + 1]);
                    break;
                case "*":
                    newValues[0] = newValues[0].mul(newValues[i + 1]);
                    break;
                case "/":
                    newValues[0] = newValues[0].div(newValues[i + 1]);
                    break;
                default:
                    break loop;
            }
        }
        this.velocity = (config.allowNegativeVelocity ? newValues[0] : newValues[0].clampMin(0))
    }

    setOperator(index: number, value: string) {
        if (this.operatorUnlocks[OPERATOR_LIST.indexOf(value)] || value == "") {
            this.operators[index] = value
            this.calculateVelocity()
        }
    }

    setValue(index: number, input: Decimal) {
        this.activeValues[index] = input
        this.calculateVelocity()
    }
}

class UI {
    dragging = $state(false)
    fixedRoundingPlaces = 2

    currentZ = 0

    windows: {[key: string]: any} = $state({
        equation: {
            title: "Equation",
            component: Equation,
            visible: true,
            z: 0,
        },
        valueDrawer: {
            title: "Value Drawer",
            component: ValueDrawer,
            visible: false,
            z: 1,
            index: 0,
            tab: 0,
        },
        upgrades: {
            title: "Upgrades",
            component: Upgrades,
            visible: false,
            z: 2,
        },
    })

    settingsWindow = $state({
        title: "Settings",
        component: Settings,
        visible: false,
        z: 3,
    })

    
    nextZ() : number {
        return this.currentZ = this.currentZ + 1
    }
}

class Config {
    allowNegativeVelocity = false
}

export const game = new Game
export const ui = new UI
export const config = new Config

game.intialize()