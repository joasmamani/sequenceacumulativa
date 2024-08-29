import Sequence from "./Sequence"
import SequenceFactory from "./utils/SequenceFactory"

export default class GameRound {
  private _score: -1 | 0 | 1 = 0
  private _sequence: Sequence | undefined

  constructor() {}

  async init() {
    this._sequence = await SequenceFactory.create()
  }

  get score() {
    return this._score
  }

  async play(candidate: number) {
    if (!this._sequence || this.score !== 0) {
      throw new Error("Round is not initialized or already played");
    }
    const win = this._sequence.isSolution(candidate)
    this._score = win ? 1 : -1
    return win
  }

  get sequence() {
    if (!this._sequence) {
      throw new Error("Round is not initialized");
    }
    return [this._sequence.value0, this._sequence.value1, this._sequence.value3]
  }
}