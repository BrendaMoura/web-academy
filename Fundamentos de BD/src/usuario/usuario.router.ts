import { Router } from "express";
import usuarioController from "./usuario.controller";

const router = Router();

router.get("/usuario", usuarioController.index);

router.post("/usuario", usuarioController.create);

router.put("/usuario/:cpf", usuarioController.update);

router.delete("/usuario/:cpf", usuarioController.remove);

export default router;
