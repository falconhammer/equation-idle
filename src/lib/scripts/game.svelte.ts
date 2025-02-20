import Decimal from "break_eternity.js";
import { Constant, Special, Operator, type Value } from "./types.svelte";
import { upgrades } from "./upgrades.svelte";
import Equation from "$lib/components/windows/Equation.svelte";
import ValueDrawer from "$lib/components/windows/ValueDrawer.svelte";
import Upgrades from "$lib/components/windows/Upgrades.svelte";
import Settings from "$lib/components/windows/Settings.svelte";
import { CircleDashed, Minus, Percent, Plus, Divide } from "lucide-svelte";
import X from "$lib/components/misc/icons/X.svelte";

const ZERO = new Constant(0)

class Game {
    OPERATOR_LIST: {[key: string]: Operator} = {
        plus: new Operator(
            "Plus",
            (a, b) => {
                return a.plus(b);
            },
            Plus,
            true,
        ),
        minus: new Operator(
            "Minus",
            (a, b) => {
                return a.sub(b)
            },
            Minus,
            true,
        ),
        multiply: new Operator(
            "Multiply",
            (a, b) => {
                return a.mul(b);
            },
            X,
            false,
        ),
        divide: new Operator(
            "Divide",
            (a, b) => {
                return a.div(b)
            },
            Divide,
            false,
        ),
        modulo: new Operator(
            "Modulo",
            (a, b) => {
                return a.mod(b)
            },
            Percent,
            false,
        ),
        none: new Operator(
            "None",
            (a, ) => {return a},
            CircleDashed,
            true,
        ),
    };

    config = {
        roundedPlaces: 2
    }

    valueDrawer: Value[] = $state([
        new Constant(0),
        new Constant(1),
    ])

    upgradesPurchased = $state(Array(upgrades.length).fill(false))

    score: Decimal = $state(new Decimal(0));
    velocity: Decimal = $state(new Decimal(0));
    tickrate: number = $state(1000);
    equationLength:number = $state(2)
    operators: Operator[] = $state(Array(this.equationLength - 1).fill(this.OPERATOR_LIST.none));
    activeValues: Value[] = $state(Array(this.equationLength).fill(ZERO));
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
        let result = newValues[0].value()
        for (let i = 0; i < game.operators.length; i++) {
            result = game.operators[i].effect(result, newValues[i + 1].value())
        }
        this.velocity = (config.allowNegativeVelocity ? result : result.clampMin(0));
    }

    setValue(index: number, input: Value) {
        this.activeValues[index] = input
        this.calculateVelocity()
    }

    newValue() {
        game.equationLength++;
        game.operators.push(game.OPERATOR_LIST.none);
        game.activeValues.push(ZERO);
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