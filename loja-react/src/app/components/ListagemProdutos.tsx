import React from "react";
import CardProduto from "./CardProduto";

interface Produto {
  nome: string;
  preco: number;
}

const ListagemProdutos = () => {
  const produtos: Produto[] = [
    {
      nome: "Notebook 1",
      preco: 1500,
    },
    {
      nome: "Notebook 2",
      preco: 1500,
    },
    {
      nome: "Notebook 3",
      preco: 1500,
    },
    {
      nome: "Notebook 4",
      preco: 1500,
    },
  ];

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto, index) => (
          <CardProduto produto={produto} key={index} />
        ))}
      </div>
    </>
  );
};

export default ListagemProdutos;
