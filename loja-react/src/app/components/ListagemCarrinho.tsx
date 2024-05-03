import React from "react";
import ItemCarrinho from "./ItemCarrinho";

interface Item {
  nome: string;
  preco: number;
  quantidade: number;
}

const ListagemCarrinho = () => {
  const produtos: Item[] = [
    {
      nome: "Notebook 1",
      preco: 1500,
      quantidade: 3,
    },
    {
      nome: "Notebook 2",
      preco: 1500,
      quantidade: 2,
    },
    {
      nome: "Notebook 3",
      preco: 1500,
      quantidade: 1,
    },
  ];
  return (
    <div className="card mb-4">
      <div className="row card-body">
        <h5 className="card-title mb-4 fw-light">Produtos selecionados</h5>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor Unitário</th>
                <th>Quantidade</th>
                <th>Valor Total</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((item, index) => (
                <ItemCarrinho item={item} key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListagemCarrinho;
