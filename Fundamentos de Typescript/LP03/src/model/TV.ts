import Produto from "./Produto";

export default class TV extends Produto {
  constructor(
    modelo: string,
    public resolucao: string,
    public polegadas: number,
    fabricante: string,
    valor: number
  ) {
    super(modelo, fabricante, valor);
    this.resolucao = resolucao;
    this.polegadas = polegadas;
  }
}
