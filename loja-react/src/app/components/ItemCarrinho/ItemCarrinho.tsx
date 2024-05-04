import { produtoCarrinho } from "@/app/types/carrinho";
import React from "react";

interface ItensCarrinhoProps {
  itemCarrinho: produtoCarrinho;
}

const ItemCarrinho = ({ itemCarrinho }: ItensCarrinhoProps) => {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <tr key={itemCarrinho.id}>
      <td>{itemCarrinho.nome}</td>
      <td>R$ {itemCarrinho.preco.toFixed(2)}</td>
      <td>{itemCarrinho.quantidade}</td>

      <td>
        R${" "}
        {valorTotalProduto(itemCarrinho.preco, itemCarrinho.quantidade).toFixed(
          2
        )}
      </td>
      <td>
        <button className="btn btn-danger btn-sm">Remover</button>
      </td>
    </tr>
  );
};

export default ItemCarrinho;
