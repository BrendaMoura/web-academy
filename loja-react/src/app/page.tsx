"use client";
import React, { useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { mockProdutos } from "./mocks/produtos";
import { Produto } from "./types/produto";

export default function Produtos() {
  const produtos = mockProdutos;
  const [quantidadeItensTotal, setQuantidadeItensTotal] = useState(0);
  const [precoTotal, setPrecoTotal] = useState(0);

  const adicionarAoCarrinho = (produto: Produto) => {
    setQuantidadeItensTotal(quantidadeItensTotal + 1);
    setPrecoTotal(precoTotal + Number(produto.preco));
  };

  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho
          quantidadeItensTotal={quantidadeItensTotal}
          precoTotal={precoTotal}
        />
        <ListagemProdutos
          produtos={produtos}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </main>
  );
}
