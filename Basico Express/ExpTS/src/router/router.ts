import { Router } from "express";
import mainController from "../controllers/main";
import productController from "../controllers/produto";

const router = Router();

router.get("/", mainController.hello);

router.get("/lorem/:qtdParagrafos", mainController.lorem);

router.get("/hb1", mainController.hb1);

router.get("/hb2", mainController.hb2);

router.get("/hb3", mainController.hb3);

router.get("/hb4", mainController.hb4);

router.get("/produto", productController.index);
router.get("/produto/create", productController.create);
router.post("/produto/create", productController.create);
router.get("/produto/:id", productController.read);
router.get("/produto/update/:id", productController.update);
router.post("/produto/update/:id", productController.update);
router.get("/produto/remove/:id", productController.remove);

export default router;
