import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { CreateUsuarioDto } from "./usuario.types";

const prisma = new PrismaClient();

const index = async (req: Request, res: Response) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  const usuario = req.body as CreateUsuarioDto;
  try {
    const novoUsuario = await prisma.usuario.create({
      data: {
        ...usuario,
        data_nasc: new Date(usuario.data_nasc),
      },
    });
    res.status(200).json(novoUsuario);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { nome, email, celular, data_nasc } = req.body as CreateUsuarioDto;
  const { cpf } = req.params;
  try {
    const atualizacaoUsuario = await prisma.usuario.update({
      where: { cpf },
      data: { nome, email, celular, data_nasc: new Date(data_nasc) },
    });
    res.status(200).json(atualizacaoUsuario);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  const { cpf } = req.params;
  try {
    const deletarUsuario = await prisma.usuario.delete({
      where: { cpf },
    });
    res.status(200).json(deletarUsuario);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

export default { index, create, update, remove };
