"use client";
import React, { useEffect, useState } from "react";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho/ResumoCarrinho";
import { Produto } from "./types/produto";

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);
  const [quantidadeItensTotal, setQuantidadeItensTotal] = useState(0);
  const [precoTotal, setPrecoTotal] = useState(0);

  const adicionarAoCarrinho = (produto: Produto) => {
    setQuantidadeItensTotal(quantidadeItensTotal + 1);
    setPrecoTotal(precoTotal + Number(produto.preco));
  };

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <main>
      <div className="container p-5">
        <ResumoCarrinho
          quantidadeItensTotal={quantidadeItensTotal}
          precoTotal={precoTotal}
        />
        {produtos ? (
          <ListagemProdutos
            produtos={produtos}
            adicionarAoCarrinho={adicionarAoCarrinho}
          />
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </main>
  );
}
