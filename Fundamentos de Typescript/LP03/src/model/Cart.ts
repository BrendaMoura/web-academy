import Item from "./Item";

export default class Cart<T> {
  static count = 0;
  public readonly id: number;

  constructor(public items: Item<T>[]) {
    this.id = ++Cart.count;
    this.items = items;
  }
}
