"use client";
import React from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { mockProdutos } from "./mocks/produtos";

export default function Produtos() {
  const produtos = mockProdutos;

  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho quantidadeItensTotal={3} precoTotal={1000} />
        <ListagemProdutos produtos={produtos} />
      </div>
    </main>
  );
}
