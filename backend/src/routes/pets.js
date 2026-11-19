
import { Router } from "express";
import * as petController from "../controllers/petController.js";

const router = Router();

router.get("/", petController.listar);
router.get("/:id", petController.buscar);
router.post("/", petController.criar);
router.put("/:id", petController.atualizar);
router.delete("/:id", petController.remover);

export default router;
