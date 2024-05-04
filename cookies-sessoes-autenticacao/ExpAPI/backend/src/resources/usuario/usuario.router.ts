import { Router } from "express";
import usuarioController from "./usuario.controller";
import { validateBody } from "../../middleware/validateBody";
import { usuarioSchema } from "./usuario.schema";

const router = Router();

router.get("/", usuarioController.index);
router.post("/", validateBody(usuarioSchema), usuarioController.create);
router.get("/:id", usuarioController.read);
router.put("/:id", validateBody(usuarioSchema), usuarioController.update);
router.delete("/:id", usuarioController.remove);

export default router;
