export default class Random {
  static get() {
    return Math.floor(Math.random() * 1000)
  }
}