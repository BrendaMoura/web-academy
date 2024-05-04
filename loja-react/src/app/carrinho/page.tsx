"use client";
import React from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

export default function Carrinho() {
  const itensCarrinho = mockItensCarrinho;

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho itensCarrinho={itensCarrinho} />
        <ResumoCarrinho quantidadeItensTotal={3} precoTotal={1000} />
      </div>
    </main>
  );
}
