
import { Router } from "express";
import * as tutorController from "../controllers/tutorController.js";

const router = Router();

router.get("/", tutorController.listar);
router.get("/:id", tutorController.buscar);
router.post("/", tutorController.criar);
router.put("/:id", tutorController.atualizar);
router.delete("/:id", tutorController.remover);

export default router;
