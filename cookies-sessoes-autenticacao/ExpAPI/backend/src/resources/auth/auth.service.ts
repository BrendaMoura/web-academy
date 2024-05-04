import { PrismaClient } from "@prisma/client";
import { Usuario } from "@prisma/client";
import bcrypt from "bcryptjs";
import { LoginDto } from "./auth.types";

const prisma = new PrismaClient();

export const checkAuth = async (
  credenciais: LoginDto
): Promise<Usuario | null> => {
  const { email, senha } = credenciais;
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return null;
  const ok = await bcrypt.compare(senha, usuario.senha);
  return usuario;
};
