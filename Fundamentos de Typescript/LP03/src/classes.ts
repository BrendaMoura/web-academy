class Produto {
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

class TV extends Produto {
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

class Celular extends Produto {
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

class Bicicleta extends Produto {
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

class Item<T> {
  constructor(public product: T, public qtd: number) {
    this.qtd = qtd;
    this.product = product;
  }
}

class Cart<T> {
  static count = 0;
  public readonly id: number;

  constructor(public items: Item<T>[]) {
    this.id = ++Cart.count;
    this.items = items;
  }
}

export { TV, Celular, Bicicleta, Item, Cart };
