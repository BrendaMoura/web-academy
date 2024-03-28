import Produto from "./Produto";

export default class Celular extends Produto {
  constructor(
    modelo: string,
    public memoria: number,
    fabricante: string,
    valor: number
  ) {
    super(modelo, fabricante, valor);
    this.memoria = memoria;
  }
}
