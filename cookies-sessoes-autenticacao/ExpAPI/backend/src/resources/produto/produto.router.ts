import { Router } from "express";
import produtoController from "./produto.controller";
import { validateBody } from "../../middleware/validateBody";
import { produtoSchema } from "./produto.schemes";
import isAdmin from "../../middleware/isAdmin";

const router = Router();

router.get("/", produtoController.index);
router.post(
  "/",
  isAdmin,
  validateBody(produtoSchema),
  produtoController.create
);
router.get("/:id", produtoController.read);
router.put(
  "/:id",
  isAdmin,
  validateBody(produtoSchema),
  produtoController.update
);
router.delete("/:id", isAdmin, produtoController.remove);

export default router;
