"use client";
import React, { useState } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState(mockItensCarrinho);
  const quantidadeItensTotal = itensCarrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );

  const precoTotal = itensCarrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const removerItemDoCarrinho = (id: string) => {
    setItensCarrinho(itensCarrinho.filter((item) => item.id !== id));
  };

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho
          itensCarrinho={itensCarrinho}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
        <ResumoCarrinho
          quantidadeItensTotal={quantidadeItensTotal}
          precoTotal={precoTotal}
        />
      </div>
    </main>
  );
}
