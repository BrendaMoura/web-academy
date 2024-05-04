import { PrismaClient } from "@prisma/client";
import { Usuario } from "@prisma/client";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";
import bcrypt from "bcryptjs";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.contants";

const prisma = new PrismaClient();

export const buscaUsuarioPorEmail = async (email: string): Promise<boolean> => {
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return true;

  return false;
};

export const buscaUsuarioPorId = async (id: string): Promise<boolean> => {
  const usuario = await prisma.usuario.findUnique({ where: { id } });
  if (!usuario) return true;

  return false;
};

export const checkIsAdmin = async (id: string): Promise<boolean> => {
  const usuario = await prisma.usuario.findUnique({ where: { id } });
  if (usuario && usuario.tipoUsuarioId === TiposUsuarios.ADMIN) return true;
  return false;
};

export const listUsuarios = async (
  skip?: number,
  take?: number
): Promise<Usuario[]> => {
  return await prisma.usuario.findMany({ skip, take });
};

export const createUsuario = async (
  usuario: CreateUsuarioDto
): Promise<Usuario> => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS!));
  const hash = await bcrypt.hash(usuario.senha, salt);

  usuario.senha = hash;

  return await prisma.usuario.create({
    data: {
      ...usuario,
      senha: hash,
    },
  });
};

export const readUsuario = async (id: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: { id } });
};

export const updateUsuario = async (
  id: string,
  usuario: UpdateUsuarioDto
): Promise<Usuario> => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS!));
  const hash = await bcrypt.hash(usuario.senha, salt);

  return await prisma.usuario.update({
    where: { id },
    data: {
      ...usuario,
      senha: hash,
    },
  });
};

export const deleteUsuario = async (id: string): Promise<Usuario> => {
  return await prisma.usuario.delete({ where: { id } });
};
