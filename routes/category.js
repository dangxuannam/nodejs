import { Router } from "express";
import { create, list, read } from "../controller/category";

const router = Router();

router.post("/category", create)
router.get("/category", read)
router.get("/categories", list)

export default router;