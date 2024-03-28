class Produto {
    constructor(modelo, fabricante, valor) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.id = ++Produto.count;
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
    }
}
Produto.count = 0;
class TV extends Produto {
    constructor(modelo, resolucao, polegadas, fabricante, valor) {
        super(modelo, fabricante, valor);
        this.resolucao = resolucao;
        this.polegadas = polegadas;
        this.resolucao = resolucao;
        this.polegadas = polegadas;
    }
}
class Celular extends Produto {
    constructor(modelo, memoria, fabricante, valor) {
        super(modelo, fabricante, valor);
        this.memoria = memoria;
        this.memoria = memoria;
    }
}
class Bicicleta extends Produto {
    constructor(modelo, aro, fabricante, valor) {
        super(modelo, fabricante, valor);
        this.aro = aro;
        this.aro = aro;
    }
}
class Item {
    constructor(product, qtd) {
        this.product = product;
        this.qtd = qtd;
        this.qtd = qtd;
        this.product = product;
    }
}
class Cart {
    constructor(items) {
        this.items = items;
        this.id = ++Cart.count;
        this.items = items;
    }
}
Cart.count = 0;
export { TV, Celular, Bicicleta, Item, Cart };
