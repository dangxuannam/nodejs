import { Router } from "express";

import { listuer, signin, signup } from "../controller/auth";
const router = Router()

router.post("/signup", signup)

router.post("/signin", signin)

router.get("/login", listuer)
export default router;