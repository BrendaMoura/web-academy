import { Produto, PrismaClient } from "@prisma/client";
import { CreateProdutoDto } from "./produto.types";

const prisma = new PrismaClient();

export const createProduto = async (
  produto: CreateProdutoDto
): Promise<Produto> => {
  return await prisma.produto.create({ data: produto });
};

export const listProduct = async (): Promise<Produto[]> => {
  return await prisma.produto.findMany();
};

export const produto = async (id: string) => {
  return await prisma.produto.findUnique({ where: { id } });
};

export const checkNomeIsAvailable = async (nome: string): Promise<boolean> => {
  return !(await prisma.produto.findUnique({ where: { nome } }));
};
