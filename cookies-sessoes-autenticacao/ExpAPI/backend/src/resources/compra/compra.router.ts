import { Router } from "express";
import compraController from "./compra.controller";
import isAuth from "../../middleware/isAuth";

const router = Router();

router.get("/:id/:quantidade", compraController.adicionarProdutoCarrinho);
router.get("/", isAuth, compraController.finalizarCompra);

export default router;
