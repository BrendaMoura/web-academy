"use client";
import React, { useState } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState(mockItensCarrinho);
  const [precoTotal, setPrecoTotal] = useState(
    itensCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0)
  );

  const removerItemDoCarrinho = (id: string) => {
    const itemCarrinho = itensCarrinho.find((item) => item.id === id);

    setItensCarrinho(itensCarrinho.filter((item) => item.id !== id));

    setPrecoTotal(
      precoTotal - itemCarrinho?.preco! * itemCarrinho?.quantidade!
    );
  };

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho
          itensCarrinho={itensCarrinho}
          removerItemDoCarrinho={removerItemDoCarrinho}
        />
        <ResumoCarrinho
          quantidadeItensTotal={itensCarrinho.length}
          precoTotal={precoTotal}
        />
      </div>
    </main>
  );
}
