import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { realizarCompra } from "./compra.service";

const adicionarProdutoCarrinho = (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Adiciona um produto no carrinho.'
 #swagger.parameters['id'] = { description: "ID do produto" }
 #swagger.parameters['quantidade'] = { description: "Quantidade do produto" }
 #swagger.responses[200] = { }
 */

  const id = req.params.id;
  const quantidade = Number(req.params.quantidade);

  if (!req.session.carrinho) req.session.carrinho = [];

  req.session.carrinho.push({ id, quantidade });
  res.status(StatusCodes.OK).json(ReasonPhrases.OK);
};

const finalizarCompra = async (req: Request, res: Response) => {
  /*
 #swagger.summary = 'Finaliza compra.'
 #swagger.responses[200] = { }
 */

  if (!req.session.carrinho) {
    return res.status(StatusCodes.BAD_REQUEST).json(ReasonPhrases.BAD_REQUEST);
  }

  if (!req.session.uid) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json(ReasonPhrases.UNAUTHORIZED);
  }

  try {
    await realizarCompra(req.session.uid, req.session.carrinho);
    res.status(StatusCodes.OK).json(ReasonPhrases.OK);
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};

export default { adicionarProdutoCarrinho, finalizarCompra };
