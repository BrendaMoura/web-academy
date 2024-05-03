import React from "react";

interface Item {
  nome: string;
  preco: number;
  quantidade: number;
}

interface Props {
  item: Item;
}

const ItemCarrinho = ({ item }: Props) => {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <tr key="1">
      <td>{item.nome}</td>
      <td>R$ {item.preco.toFixed(2)}</td>
      <td>{item.quantidade}</td>

      <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
      <td>
        <button className="btn btn-danger btn-sm">Remover</button>
      </td>
    </tr>
  );
};

export default ItemCarrinho;
