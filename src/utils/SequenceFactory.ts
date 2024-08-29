import Sequence from "../Sequence";
import fs from 'fs'

export default class SequenceFactory {
  static async create() {
    const sequences = fs.readdirSync('./src/sequences')
    const index = Math.floor(Math.random() * sequences.length)
    const Constructor = (await import(`../sequences/${sequences[index]}`)).default
    return new Constructor() as Sequence
  }
}