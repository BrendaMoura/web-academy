import { Request, Response } from "express";
import {
  buscaUsuarioPorEmail,
  buscaUsuarioPorId,
  createUsuario,
  deleteUsuario,
  listUsuarios,
  readUsuario,
  updateUsuario,
} from "./usuario.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";

const index = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Recupera dados de todos os usuários da base.'
 #swagger.responses[200] = {
   schema: { $ref: '#/definitions/Usuarios' }
 }
 */

  const skip = req.query.skip ? parseInt(req.query.skip.toString()) : undefined;
  const take = req.query.take ? parseInt(req.query.take.toString()) : undefined;

  try {
    const usuarios = await listUsuarios(skip, take);
    res.status(StatusCodes.CREATED).json(usuarios);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Adiciona um novo usuário na base.'
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateUsuarioDto' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Usuario' }
 }
 */

  const usuario = req.body as CreateUsuarioDto;
  try {
    if (await buscaUsuarioPorEmail(usuario.email)) {
      const novoUsuario = await createUsuario(usuario);
      res.status(StatusCodes.CREATED).json(novoUsuario);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const read = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Recupera dados de um produto usuário específico.'
 #swagger.parameters['id'] = { description: "ID do usuário" }
 #swagger.responses[200] = {
   schema: { $ref: '#/definitions/Usuario' }
 }
 */
  const { id } = req.params;
  try {
    const usuario = await readUsuario(id);
    if (!usuario)
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    res.status(StatusCodes.OK).json(usuario);
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Atualiza informações de um usuário específico.'
  #swagger.parameters['id'] = { description: "ID do usuário" }
 #swagger.parameters['body'] = {
 in: 'body',
 schema: { $ref: '#/definitions/CreateUsuarioDto' }
 }
 #swagger.responses[200] = {
 schema: { $ref: '#/definitions/Usuario' }
 }
 */
  const { id } = req.params;
  const usuario = req.body as UpdateUsuarioDto;
  try {
    if (await buscaUsuarioPorId(id)) {
      const updatedUsuario = await updateUsuario(id, usuario);
      res.status(StatusCodes.NO_CONTENT).json();
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Deleta um usuário específico.'
 #swagger.parameters['id'] = { description: "ID do usuário" }
 #swagger.responses[200] = {}
 */
  const { id } = req.params;
  try {
    const deletedUsuario = await deleteUsuario(id);
    res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    console.log(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
