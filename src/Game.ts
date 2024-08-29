import GameRound from "./GameRound";
import readline from 'readline/promises'

export default class Game {
  private gameRounds: GameRound[] = []

  constructor() {
    this.startNewRound()
  }

  startNewRound() {
    this.gameRounds.push(new GameRound())
  }

  get score() {
    return this.gameRounds.reduce((acc, round) => acc + round.score, 0)
  }

  private get currentRound() {
    return this.gameRounds[this.gameRounds.length - 1]
  }

  printPuzzle() {
    const [v0, v1, v3] = this.currentRound.sequence
    console.log(`Find the solution to: ${v0} ${v1} _ ${v3}`)
  }

  async playRound() {
    await this.currentRound.init()
    this.printPuzzle()
    const consoleInterface = readline.createInterface(process.stdin, process.stdout)
    const candidate = parseInt(await consoleInterface.question('Enter your solution: '), 10)
    consoleInterface.close()
    const win = await this.currentRound.play(candidate)
    console.log(win ? 'Correct!' : 'Incorrect!', `Current score: ${this.score}`)
    this.startNewRound()
  }

  async play() {
    while (true) {
      await this.playRound()
    }
  }
}