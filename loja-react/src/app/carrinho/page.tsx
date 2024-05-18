"use client";
import React, { useEffect, useReducer, useState } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import { Action, produtoCarrinho } from "../types/carrinho";

function reducer(state: produtoCarrinho[], action: Action) {
  switch (action.type) {
    case "aumentar_qtd": {
      return state.map((item) => {
        if (item.id === action.id)
          return { ...item, quantidade: item.quantidade + 1 };

        return item;
      });
    }
    case "diminuir_qtd": {
      const item = state.find((item) => item.id === action.id);
      if (item?.quantidade === 1)
        return state.filter((item) => item.id != action.id);

      return state.map((item) => {
        if (item.id === action.id)
          return { ...item, quantidade: item.quantidade - 1 };

        return item;
      });
    }
    case "remover": {
      return state.filter((item) => item.id != action.id);
    }
  }
}

export default function Carrinho() {
  const [itensCarrinho, dispatch] = useReducer(reducer, mockItensCarrinho);
  const quantidadeItensTotal = itensCarrinho.reduce(
    (acc, item) => acc + item.quantidade,
    0
  );
  const precoTotal = itensCarrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  return (
    <main>
      <div className="container p-5">
        <ListagemCarrinho itensCarrinho={itensCarrinho} dispatch={dispatch} />
        <ResumoCarrinho
          quantidadeItensTotal={quantidadeItensTotal}
          precoTotal={precoTotal}
        />
      </div>
    </main>
  );
}
