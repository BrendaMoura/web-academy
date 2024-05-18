import { Action, produtoCarrinho } from "@/app/types/carrinho";
import React from "react";

interface ItensCarrinhoProps {
  itemCarrinho: produtoCarrinho;
  dispatch: React.Dispatch<Action>;
}

const ItemCarrinho = ({ itemCarrinho, dispatch }: ItensCarrinhoProps) => {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <tr key={itemCarrinho.id}>
      <td>{itemCarrinho.nome}</td>
      <td>R$ {itemCarrinho.preco.toFixed(2)}</td>
      <td>
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={() =>
            dispatch({ type: "diminuir_qtd", id: itemCarrinho.id })
          }
        >
          -
        </button>
        {itemCarrinho.quantidade}
        <button
          className="btn btn-secondary btn-sm ms-2"
          onClick={() =>
            dispatch({ type: "aumentar_qtd", id: itemCarrinho.id })
          }
        >
          +
        </button>
      </td>
      <td>
        R${" "}
        {valorTotalProduto(itemCarrinho.preco, itemCarrinho.quantidade).toFixed(
          2
        )}
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => dispatch({ type: "remover", id: itemCarrinho.id })}
        >
          Remover
        </button>
      </td>
    </tr>
  );
};

export default ItemCarrinho;
