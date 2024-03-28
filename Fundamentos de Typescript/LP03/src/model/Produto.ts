export default class Produto {
  static count = 0;
  public readonly id: number;
  constructor(
    public modelo: string,
    public fabricante: string,
    public valor: number
  ) {
    this.id = ++Produto.count;
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.valor = valor;
  }
}
