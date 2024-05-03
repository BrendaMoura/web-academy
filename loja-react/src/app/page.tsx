"use client";
import React from "react";
import ListagemProdutos from "./components/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";

export default function Produtos() {
  return (
    <>
      <ResumoCarrinho />
      <ListagemProdutos />
    </>
  );
}
