import { Router } from "express";
import { create, list, read, remove, update } from "../controller/book";

const router = Router()

router.post("/book", create)

router.get("/book/:id", read)

router.get("/book",list)

router.delete("/book/:id", remove)

router.put("/book/:id", update)
export default router