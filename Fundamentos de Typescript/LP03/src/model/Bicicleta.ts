import Produto from "./Produto";

export default class Bicicleta extends Produto {
  constructor(
    modelo: string,
    public aro: number,
    fabricante: string,
    valor: number
  ) {
    super(modelo, fabricante, valor);
    this.aro = aro;
  }
}
