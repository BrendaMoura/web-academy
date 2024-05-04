import { PrismaClient } from "@prisma/client";
import { ProdutoCarrinho } from "./compra.types";

const prisma = new PrismaClient();

export const realizarCompra = async (
  usuarioId: string,
  carrinho: ProdutoCarrinho[]
) => {
  const compra = await prisma.compra.create({
    data: {
      usuarioId,
    },
  });

  carrinho.forEach(async (produto) => {
    await salvaProdutoCompra(compra.id, produto);
  });
};

const salvaProdutoCompra = async (
  compraId: string,
  produto: ProdutoCarrinho
) => {
  await prisma.compraProduto.create({
    data: {
      compraId,
      produtoId: produto.id,
      quantidade: produto.quantidade,
    },
  });
};
