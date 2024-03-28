export default class Item<T> {
  constructor(public product: T, public qtd: number) {
    this.qtd = qtd;
    this.product = product;
  }
}
