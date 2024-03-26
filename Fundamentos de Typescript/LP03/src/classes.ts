class Product {
  constructor(
    public modelo: string,
    public fabricante: string,
    public valor: number
  ) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.valor = valor;
  }
}

class TV extends Product {
  static count = 0;
  public readonly id;
  constructor(
    modelo: string,
    public resolucao: string,
    public polegadas: number,
    fabricante: string,
    valor: number
  ) {
    super(modelo, fabricante, valor);
    this.id = ++TV.count;
    this.resolucao = resolucao;
    this.polegadas = polegadas;
  }
}

class Celular extends Product {
  static count = 0;
  public readonly id;
  constructor(
    modelo: string,
    public memoria: number,
    fabricante: string,
    valor: number
  ) {
    super(modelo, fabricante, valor);
    this.id = ++Celular.count;
    this.memoria = memoria;
  }
}

class Bicicleta extends Product {
  static count = 0;
  public readonly id;
  constructor(
    modelo: string,
    public aro: number,
    fabricante: string,
    valor: number
  ) {
    super(modelo, fabricante, valor);
    this.id = ++Bicicleta.count;
    this.aro = aro;
  }
}
