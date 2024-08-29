import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class NormalSequence extends Sequence {
  constructor() {
    super();
    const seed = Random.get();
    this.values = [seed, seed + 1, seed + 2, seed + 3];
  }
}