import Decimal from "break_eternity.js";

class Game {
    score: Decimal = $state(new Decimal(0));
    velocity: Decimal = $state(new Decimal(1));
    tickrate: number = $state(1000);
    #interval: number = 0;

    tick() {
        this.score = this.score.add(this.velocity)
    }

    changeTickrate(value: number) {
        this.tickrate = value
        clearInterval(this.#interval)
        this.#interval = setInterval(() => {
            this.tick()
        }, this.tickrate)
    }

    intialize() {
        this.#interval = setInterval(() => {
            this.tick()
        }, this.tickrate)
    }
}

export const game = new Game

game.intialize()