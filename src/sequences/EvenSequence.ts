import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class NormalSequence extends Sequence {
  constructor() {
    super();
    const seed = Math.floor(Random.get() / 2) * 2;
    this.values = [seed, seed + 2, seed + 4, seed + 6];
  }
}