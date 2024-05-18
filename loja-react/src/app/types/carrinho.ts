export interface produtoCarrinho {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}
export interface Action {
  type: "remover" | "aumentar_qtd" | "diminuir_qtd";
  id: string;
}
